"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useEffect } from "react";
import { Ampersand, Brackets, Bubble, Burst, Eye, Sparkle, ShootingStar, Wave } from "./Doodles";

type Axis = MotionValue<number>;

/* nx / ny are the cursor position normalised to -1..1; depth scales the move on x, y and z. */
function Float({
  nx,
  ny,
  depth,
  className,
  children,
}: {
  nx: Axis;
  ny: Axis;
  depth: number;
  className: string;
  children: React.ReactNode;
}) {
  const x = useTransform(nx, (v) => v * depth * 16);
  const y = useTransform(ny, (v) => v * depth * 12);
  const z = useTransform(nx, (v) => Math.abs(v) * depth * 18);
  const rotateY = useTransform(nx, (v) => v * depth * 4);
  const rotateX = useTransform(ny, (v) => v * depth * -3);
  return (
    <motion.div
      className={`pointer-events-none absolute ${className}`}
      style={{ x, y, z, rotateX, rotateY, transformPerspective: 1100 }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const spring = { stiffness: 70, damping: 20, mass: 0.8 };
  const nx = useSpring(rawX, spring);
  const ny = useSpring(rawY, spring);

  // the avatar leans a few degrees at most, and shifts a little in x, y and z
  const avX = useTransform(nx, (v) => v * 10);
  const avY = useTransform(ny, (v) => v * 8);
  const avZ = useTransform(nx, (v) => Math.abs(v) * 24);
  const avRotY = useTransform(nx, (v) => v * 5);
  const avRotX = useTransform(ny, (v) => v * -3);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
    const move = (e: PointerEvent) => {
      rawX.set((e.clientX / window.innerWidth - 0.5) * 2);
      rawY.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [rawX, rawY]);

  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="wrap relative">
        <div className="hero-grid relative md:min-h-[calc(100svh-15rem)]">
          <h1 className="hero-title" aria-label="Chitraksh Suri: think and ship">
            <motion.span
              aria-hidden
              className="display hero-word relative z-[1] justify-self-end "
              style={{ marginRight: "-1.5vw", gridColumn: 1, gridRow: 1 }}
              initial={{ x: -60 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            >
              think
            </motion.span>
            <motion.span
              aria-hidden
              className="display hero-word relative z-[1] justify-self-start "
              style={{ marginLeft: "-1.5vw", gridColumn: 3, gridRow: 1 }}
              initial={{ x: 60 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            >
              ship
            </motion.span>
          </h1>

          {/* centre stage: burst + avatar */}
          <div className="relative mx-auto flex items-end justify-center max-md:-mt-[14vw]" style={{ gridColumn: 2, gridRow: 1 }}>
            <Burst
              className="spin-slow absolute left-1/2 top-[46%] z-0 w-[100%] max-w-none md:w-[185%] -translate-x-1/2 -translate-y-1/2"
              fill="#fff"
            />
            <motion.div
              className="relative z-[2]"
              style={{ x: avX, y: avY, z: avZ, rotateX: avRotX, rotateY: avRotY, transformPerspective: 1100 }}
              initial={{ y: 40, scale: 0.96 }}
              animate={{ y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            >
              <Image
                src="/img/avatar.png"
                alt="Pixel-art portrait of Chitraksh: curly hair, sunglasses, cream kurta, cargo pants, backpack over one shoulder"
                width={475}
                height={1293}
                priority
                className="h-[min(62svh,720px)] w-auto max-w-none shrink-0 max-md:h-[58svh]"
                style={{ imageRendering: "pixelated" }}
              />
            </motion.div>
          </div>

          <Ampersand className="absolute right-[3%] top-[2%] text-[clamp(5rem,17vw,19rem)] md:right-[7%] md:top-[6%]" />
        </div>

        {/* floating stickers */}
        <Float nx={nx} ny={ny} depth={-0.8} className="left-[6%] top-[4%] hidden md:block">
          <div className="bob" style={{ ["--r" as string]: "-6deg" }}>
            <Bubble className="rotate-[-4deg] text-[clamp(14px,1.4vw,20px)]">
              hi, I&apos;m Chitraksh
            </Bubble>
          </div>
        </Float>
        <Float nx={nx} ny={ny} depth={1} className="left-[40%] top-[1%] w-[clamp(44px,5vw,84px)]">
          <Sparkle className="bob w-full" />
        </Float>
        <Float nx={nx} ny={ny} depth={1.4} className="right-[22%] top-[3%] hidden w-[clamp(120px,13vw,220px)] md:block">
          <ShootingStar className="bob w-full" />
        </Float>
        <Float nx={nx} ny={ny} depth={-1.2} className="bottom-[8%] left-[7%] w-[clamp(90px,11vw,180px)]">
          <Eye className="bob w-full" />
        </Float>
        <Float nx={nx} ny={ny} depth={1.1} className="bottom-[26%] left-[27%] hidden w-[clamp(60px,6vw,96px)] md:block">
          <Brackets className="bob w-full" />
        </Float>
        <Float nx={nx} ny={ny} depth={-1.4} className="bottom-[13%] right-[24%] hidden w-[clamp(110px,11vw,180px)] md:block">
          <Wave className="bob w-full" />
        </Float>
        <Float nx={nx} ny={ny} depth={0.8} className="bottom-[34%] right-[3%] w-[clamp(36px,4vw,64px)]">
          <Sparkle className="bob w-full" fill="#a8e0d2" />
        </Float>
      </div>

      <div className="wrap relative z-20 mt-4 flex flex-col items-center gap-6 pb-24 text-center md:-mt-4">
        <p className="max-w-[44ch] text-xl font-semibold leading-snug sm:text-2xl">
          I build AI agents that query your data, talk back by voice and hold up in production.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="#work" className="btn">
            See my work
          </a>
          <a href="#contact" className="btn btn-light">
            Say hi
          </a>
        </div>
      </div>
    </section>
  );
}
