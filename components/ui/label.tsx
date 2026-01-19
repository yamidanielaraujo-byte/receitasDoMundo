"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { motion, useInView, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "left" | "right" | "top" | "bottom";

interface LabelProps
  extends Omit<HTMLMotionProps<"label">, "children"> {
  direction?: Direction;
  disableAnimation?: boolean;
  children?: React.ReactNode;
}


function mergeRefs<T>(
  ...refs: Array<React.Ref<T> | undefined>
): React.RefCallback<T> {
  return (value) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === "function") ref(value);
      else (ref as React.MutableRefObject<T | null>).current = value;
    });
  };
}

const variants: Record<
  Direction,
  { initial: { x?: number; y?: number }; animate: { x?: number; y?: number } }
> = {
  left: { initial: { x: -20 }, animate: { x: 0 } },
  right: { initial: { x: 20 }, animate: { x: 0 } },
  top: { initial: { y: -20 }, animate: { y: 0 } },
  bottom: { initial: { y: 20 }, animate: { y: 0 } },
};

const MotionLabel = React.forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      direction = "left",
      disableAnimation,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const localRef = React.useRef<HTMLLabelElement>(null);
    const isInView = useInView(localRef, { once: false, margin: "-50px" });

    const baseClasses = cn(
      "flex items-center gap-2 text-sm leading-none font-medium select-none",
      "group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-70",
      "peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    );

    // 🔹 Sem animação → Radix puro
    if (disableAnimation) {
      return (
        <LabelPrimitive.Root
          ref={mergeRefs(ref, localRef)}
          className={baseClasses}
        >
          {children}
        </LabelPrimitive.Root>
      );
    }

    // 🔹 Com animação → Framer Motion
    return (
      <motion.label
        ref={mergeRefs(ref, localRef)}
        className={baseClasses}
        initial={variants[direction].initial}
        animate={
          isInView
            ? variants[direction].animate
            : variants[direction].initial
        }
        transition={{ duration: 0.4, ease: "easeOut" }}
        {...props}
      >
        {children}
      </motion.label>
    );
  }
);

MotionLabel.displayName = "MotionLabel";

export { MotionLabel as Label };
