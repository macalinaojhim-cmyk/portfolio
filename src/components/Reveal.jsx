import { useEffect, useRef } from "react";

/**
 * Wrapper that fades/slides its children in when scrolled into view.
 * variant: "" | "reveal-left" | "reveal-right"
 * delay: seconds to stagger animations (e.g. 0.08)
 */
export default function Reveal({
  as: Tag = "div",
  variant = "",
  delay = 0,
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const cls = ["reveal", variant, className].filter(Boolean).join(" ");
  const style = delay ? { "--d": `${delay}s` } : undefined;

  return (
    <Tag ref={ref} className={cls} style={style} {...rest}>
      {children}
    </Tag>
  );
}
