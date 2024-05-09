// import { useEffect, DependencyList } from "react";

// export function useDebounceEffect(
//   fn: () => void,
//   waitTime: number,
//   deps?: DependencyList
// ) {
//   useEffect(() => {
//     const t = setTimeout(() => fn.apply(undefined, deps), waitTime);

//     // clean up function
//     return () => {
//       clearTimeout(t);
//     };
//   }, deps);
// }


import { useEffect, useRef } from 'react';

export function useDebounceEffect(
  fn: () => void,
  waitTime: number,
  deps?: React.DependencyList
) {
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clear any existing timeout before setting a new one
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      fn();
    }, waitTime);

    // Cleanup function (clears timeout on unmount or dependency change)
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, deps); // Dependency array
}

