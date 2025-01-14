import {
  ReactNode,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export type AnimateOnScrollRender = (
  subjectRef: React.RefObject<HTMLElement>,
  className: string,
) => ReactNode;

export interface AnimateOnScrollProps {
  animationIn?: string;
  animationOut?: string;
  initialVisibility?: boolean;
  render: AnimateOnScrollRender;
}

export interface PredefinedAnimateOnScrollProps {
  render: AnimateOnScrollRender;
}

type Visibility = "invisible" | "visible" | "transition_out" | "transition_in";

export function AnimateOnScroll({
  render,
  ...props
}: AnimateOnScrollProps): ReactNode {
  const [visibility, setVisibility] = useState<Visibility>("visible");

  const onIntersectionChange: IntersectionObserverCallback = ([entry]) => {
    setVisibility(
      entry.isIntersecting
        ? props.animationIn
          ? "transition_in"
          : "visible"
        : props.animationOut
          ? "transition_out"
          : "invisible",
    );
  };

  const onAnimationEnd = useMemo(
    () => () => {
      switch (visibility) {
        case "transition_out":
          setVisibility("visible");
          break;
        case "transition_in":
          setVisibility("invisible");
          break;
        case "invisible":
          return " invisible";
        default:
          break;
      }
    },
    [],
  );

  const ref = useRef<HTMLElement>(null);
  const intersectionObserver = useRef<IntersectionObserver>();

  useEffect(() => {
    setVisibility(props.initialVisibility ? "visible" : "invisible");
  }, []);

  useLayoutEffect(() => {
    intersectionObserver.current =
      intersectionObserver.current ??
      new IntersectionObserver(onIntersectionChange, {
        threshold: 0.1,
      });
    intersectionObserver.current!.observe(ref.current!);
    ref.current?.addEventListener("animationend", onAnimationEnd);
    return () => {
      ref.current?.removeEventListener("animationend", onAnimationEnd);
      intersectionObserver.current!.unobserve(ref.current!);
    };
  }, []);

  const getClassName = useMemo(
    () => (visibility: Visibility) => {
      switch (visibility) {
        case "transition_in":
          return props.animationIn ?? "";
        case "transition_out":
          return props.animationOut ?? "";
        case "invisible":
          return " invisible";
        default:
          return "";
      }
    },
    [props.animationIn, props.animationOut],
  );

  return render(ref, getClassName(visibility));
}

export const FadeLeft = WithPredefinedAnimation(
  "FadeLeft",
  "fadeInLeft",
  "fadeOutLeft",
);
export const FadeRight = WithPredefinedAnimation(
  "FadeInRight",
  "fadeInRight",
  "fadeOutRight",
);

function WithPredefinedAnimation(
  name: string,
  animationIn: string,
  animationOut: string,
): React.FC<PredefinedAnimateOnScrollProps> {
  const fc = function ({ render }: PredefinedAnimateOnScrollProps) {
    return (
      <AnimateOnScroll
        render={render}
        animationIn={` animate__animated animate__${animationIn}`}
        animationOut={`animate__animated animate__${animationOut}`}
      />
    );
  };
  fc.displayName = name;
  return fc;
}
