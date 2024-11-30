import {
  CSSProperties,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

export interface ScrollAnimatedRenderProps {
  ref: React.RefObject<any>;
  className?: string;
  style?: CSSProperties;
}

export interface ScrollAnimatedProps {
  animation: string;
  className?: string;
  render: (props: ScrollAnimatedRenderProps) => ReactNode;
  style?: CSSProperties;
}

const ANIMATION_END_THRESHOLD = 0.75;
const ANIMATION_STEPS = 30;
const ANIMATED_PROGRESS_VAR = "--animated-progress";

export function ScrollAnimated({
  animation,
  className: baseClasses,
  render,
  style: baseStyle,
}: ScrollAnimatedProps) {
  const [hasJs, setHasJs] = useState(false);
  const [ratio, setRatio] = useState(0);
  const ref = useRef<Element>(null);
  const intersectionObserver = useRef<IntersectionObserver>();

  const onIntersectionChange: IntersectionObserverCallback = ([entry]) => {
    setRatio(entry.intersectionRatio);
  };

  useEffect(() => {
    setHasJs(true);
  }, []);

  useLayoutEffect(() => {
    const threshold = [
      ...[...new Array(ANIMATION_STEPS)].map(
        (_, i) => (i * ANIMATION_END_THRESHOLD) / ANIMATION_STEPS,
      ),
      ANIMATION_END_THRESHOLD,
    ];
    intersectionObserver.current =
      intersectionObserver.current ??
      new IntersectionObserver(onIntersectionChange, {
        threshold,
      });
    intersectionObserver.current!.observe(ref.current!);
    return () => {
      intersectionObserver.current!.unobserve(ref.current!);
    };
  }, []);

  useLayoutEffect(() => {
    setHasJs(true);
  }, []);

  const className = hasJs
    ? baseClasses
      ? `${baseClasses} ${animation}`
      : animation
    : baseClasses;

  const style = hasJs
    ? {
        ...baseStyle,
        [ANIMATED_PROGRESS_VAR]: Math.min(ratio / ANIMATION_END_THRESHOLD, 1.0),
      }
    : baseStyle;

  return render({ ref, className, style });
}
