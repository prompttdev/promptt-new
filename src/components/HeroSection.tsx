"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { Button } from "./ui/button";
import FadeIn from "./FadeIn";
import TextReveal from "./TextReveal";
import Eyebrow from "./Eyebrow";

const FRAME_COUNT = 90;
const FRAME_STEP = 2;

const FRAME_PATH = (i: number) =>
    `/hero/frame_${String(i).padStart(6, "0")}.jpeg`;

function useHeroFrames() {
    const images = useRef<HTMLImageElement[]>([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        let cancelled = false;

        const imgs: HTMLImageElement[] = [];
        let completed = 0;

        // 1, 3, 5, 7, 9...
        const frameNumbers = [];

        for (let i = 1; i <= FRAME_COUNT; i += FRAME_STEP) {
            frameNumbers.push(i);
        }

        for (const frameNumber of frameNumbers) {
            const img = new Image();

            img.decoding = "async";
            img.src = FRAME_PATH(frameNumber);

            const finish = () => {
                completed++;

                if (
                    completed === frameNumbers.length &&
                    !cancelled
                ) {
                    setLoaded(true);
                }
            };

            img.onload = finish;

            img.onerror = () => {
                console.error(
                    `[hero frames] failed to load: ${img.src}`
                );

                finish();
            };

            imgs.push(img);
        }

        images.current = imgs;

        return () => {
            cancelled = true;
        };
    }, []);

    return {
        images,
        loaded,
    };
}

function ScrollFrameCanvas({
    containerRef,
}: {
    containerRef: React.RefObject<HTMLDivElement | null>;
}) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const { images, loaded } = useHeroFrames();

    const currentFrame = useRef(0);
    const rafRef = useRef<number | null>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const frameProgress = useTransform(
        scrollYProgress,
        [0, 1],
        [0, FRAME_COUNT - 1]
    );

    const drawFrame = (index: number) => {
        const canvas = canvasRef.current;
        const img = images.current[index];

        if (!canvas || !img) return;

        if (!img.complete || img.naturalWidth === 0) {
            return;
        }

        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        const rect = canvas.getBoundingClientRect();

        const cssWidth = rect.width;
        const cssHeight = rect.height;

        if (!cssWidth || !cssHeight) return;

        const dpr = window.devicePixelRatio || 1;

        const width = Math.round(cssWidth * dpr);
        const height = Math.round(cssHeight * dpr);

        if (
            canvas.width !== width ||
            canvas.height !== height
        ) {
            canvas.width = width;
            canvas.height = height;
        }

        ctx.setTransform(
            dpr,
            0,
            0,
            dpr,
            0,
            0
        );

        const canvasRatio = cssWidth / cssHeight;
        const imageRatio =
            img.naturalWidth / img.naturalHeight;

        let drawWidth = cssWidth;
        let drawHeight = cssHeight;
        let offsetX = 0;
        let offsetY = 0;

        // object-fit: cover
        if (imageRatio > canvasRatio) {
            drawHeight = cssHeight;
            drawWidth = cssHeight * imageRatio;
            offsetX = (cssWidth - drawWidth) / 2;
        } else {
            drawWidth = cssWidth;
            drawHeight = cssWidth / imageRatio;
            offsetY = (cssHeight - drawHeight) / 2;
        }

        ctx.clearRect(
            0,
            0,
            cssWidth,
            cssHeight
        );

        ctx.drawImage(
            img,
            offsetX,
            offsetY,
            drawWidth,
            drawHeight
        );
    };

    useEffect(() => {
        if (!loaded) return;

        // Draw first frame immediately after layout.
        const initialRaf = requestAnimationFrame(() => {
            drawFrame(0);
        });

        const unsubscribe = frameProgress.on(
            "change",
            (value) => {
                const index = Math.round(
                    Math.max(
                        0,
                        Math.min(
                            images.current.length - 1,
                            value
                        )
                    )
                );

                if (index === currentFrame.current) {
                    return;
                }

                currentFrame.current = index;

                if (rafRef.current !== null) {
                    cancelAnimationFrame(
                        rafRef.current
                    );
                }

                rafRef.current =
                    requestAnimationFrame(() => {
                        drawFrame(index);
                    });
            }
        );

        const resizeObserver =
            new ResizeObserver(() => {
                drawFrame(currentFrame.current);
            });

        if (canvasRef.current) {
            resizeObserver.observe(
                canvasRef.current
            );
        }

        return () => {
            cancelAnimationFrame(initialRaf);

            if (rafRef.current !== null) {
                cancelAnimationFrame(
                    rafRef.current
                );
            }

            unsubscribe();

            resizeObserver.disconnect();
        };
    }, [loaded, frameProgress]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 block h-full w-full"
            style={{
                opacity: loaded ? 0.3 : 0,
                transition:
                    "opacity 1000ms ease",
            }}
        />
    );
}

export function Hero() {
    const wrapperRef =
        useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: wrapperRef,
        offset: ["start start", "end start"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 50,   // higher = snappier/faster catch-up
        damping: 20,       // higher = less overshoot/bounce
        mass: 0.5,          // higher = more "weight"/lag
    });

    const contentOpacity = useTransform(
        smoothProgress,
        [0, 0.15],
        [1, 0]
    );

    const contentY = useTransform(
        smoothProgress,
        [0, 0.12],
        [0, -120]
    );

    return (
        <div
            ref={wrapperRef}
            className="relative h-[150vh] w-full"
        >
            {/* =====================================================
                STICKY HERO VIEWPORT
            ====================================================== */}
            <section
                className="
                    sticky
                    top-0
                    h-[100dvh]
                    min-h-[600px]
                    w-full
                    overflow-hidden
                "
            >
                {/* =================================================
                    BACKGROUND / CANVAS
                ================================================== */}
                <div className="absolute inset-0 z-0">
                    <ScrollFrameCanvas
                        containerRef={wrapperRef}
                    />

                    {/* Dark overlay */}
                    <div
                        className="
                            pointer-events-none
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-ink
                            via-ink/70
                            to-ink/20
                        "
                    />
                </div>

                {/* =================================================
                    HERO CONTENT

                    IMPORTANT:
                    This is explicitly bottom anchored.
                    No justify-end / flexbox is used for
                    vertical positioning.
                ================================================== */}
                <motion.div
                    style={{
                        opacity: contentOpacity,
                        y: contentY,
                    }}
                    className="
                        absolute
                        inset-x-0
                        bottom-16
                        sm:bottom-0
                        z-10
                        w-full
                        px-6
                        sm:px-10
                        pb-5
                    "
                >
                    {/* Eyebrow */}
                    <Eyebrow className="mb-6 sm:mb-8">
                        Digital Marketing Studio
                    </Eyebrow>

                    {/* =================================================
                        MAIN HEADING
                    ================================================== */}
                    <h1
                        className="
                            max-w-5xl
                            font-display
                            text-[13vw]
                            leading-[0.9]
                            text-paper
                            sm:text-[8.5vw]
                            lg:text-[7.2rem]
                        "
                    >
                        <TextReveal
                            text="We build brands"
                            split="word"
                        />

                        <TextReveal
                            text="people can't scroll past."
                            split="word"
                            delay={0.15}
                        />
                    </h1>

                    {/* =================================================
                        DESCRIPTION + CTA
                    ================================================== */}
                    <FadeIn
                        delay={0.5}
                        className="
                            mt-8
                            flex
                            flex-col
                            gap-6
                            sm:mt-10
                            sm:flex-row
                            sm:items-end
                            sm:justify-between
                        "
                    >
                        <p
                            className="
                                max-w-lg
                                font-body
                                text-base
                                leading-relaxed
                                text-paper-dim
                                sm:text-lg
                            "
                        >
                            promptt.dev is an
                            independent studio
                            running influencer,
                            social, web, content,
                            and AI-driven marketing
                            for brands that refuse
                            to look ordinary.
                        </p>

                        <Link
                            href="/contact"
                            data-cursor="view"
                            data-cursor-label="Go"
                            className="shrink-0"
                        >
                            <Button
                                size="lg"
                                className="gap-3"
                            >
                                Start a Project

                                <ArrowUpRight
                                    size={16}
                                />
                            </Button>
                        </Link>
                    </FadeIn>

                    {/* =================================================
                        SCROLL INDICATOR
                    ================================================== */}
                    <div
                        className="
                            mt-10
                            flex
                            items-center
                            gap-3
                            text-paper-dim
                            sm:mt-8
                        "
                    >
                        <ArrowDown
                            size={14}
                            className="animate-bounce"
                        />

                        <span
                            className="
                                font-body
                                text-xs
                                uppercase
                                tracking-[0.2em]
                            "
                        >
                            Scroll
                        </span>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}