import {
  HTMLProps,
  PropsWithRef,
  ReactNode,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export interface AnimateOnScrollOptions {
  animationIn?: string;
  animationOut?: string;
  initialVisibility?: boolean;
}

export type AnimateOnScrollRender = (
  subjectRef: React.RefObject<HTMLElement>,
  className: string,
) => ReactNode;

type Visibility = "invisible" | "visible" | "transition_out" | "transition_in";

export function AnimateOnScroll(
  options: AnimateOnScrollOptions,
  render: AnimateOnScrollRender,
): ReactNode {
  const [visibility, setVisibility] = useState<Visibility>(
    options.initialVisibility ? "visible" : "invisible",
  );

  const onIntersectionChange: IntersectionObserverCallback = ([entry]) => {
    setVisibility(
      entry.isIntersecting
        ? options.animationIn
          ? "transition_in"
          : "visible"
        : options.animationOut
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
  const intersectionObserver = useRef<IntersectionObserver>(
    new IntersectionObserver(onIntersectionChange, {
      threshold: 0.1,
    }),
  );
  useLayoutEffect(() => {
    intersectionObserver.current.observe(ref.current!);
    ref.current?.addEventListener("animationend", onAnimationEnd);
    return () => {
      ref.current?.removeEventListener("animationend", onAnimationEnd);
      intersectionObserver.current.unobserve(ref.current!);
    };
  }, []);

  const getClassName = useMemo(
    () => (visibility: Visibility) => {
      switch (visibility) {
        case "transition_in":
          return options.animationIn ?? "";
        case "transition_out":
          return options.animationOut ?? "";
        case "invisible":
          return " invisible";
        default:
          return "";
      }
    },
    [options.animationIn, options.animationOut],
  );

  return render(ref, getClassName(visibility));
}

export function FadeInLeft(render: AnimateOnScrollRender) {
  return AnimateOnScroll(
    {
      animationIn: " animate__animated animate__fadeInLeft",
      animationOut: " animate__animated animate__fadeOutLeft",
    },
    render,
  );
}

export function FadeInRight(render: AnimateOnScrollRender) {
  return AnimateOnScroll(
    {
      animationIn: " animate__animated animate__fadeInRight",
      animationOut: " animate__animated animate__fadeOutRight",
    },
    render,
  );
}
