import { useRef } from "react";

type DebounceFn = (...args: any[]) => any;

// NOTE: we use an additional self-write hook due to poor compatibility (so far) between next.js and lodash
export function useDebounce(callback: DebounceFn, delay: number) {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  return function debouncedFn(...args: any[]) {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}