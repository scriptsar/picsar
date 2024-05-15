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
    const timer = useRef<number | null>(null);

    useEffect(() => {
    // Clear any existing timeout before setting a new one
    if (timer.current!== null) {
      clearTimeout(timer.current);
    }
    // Schedule a new timeout using setTimeout
    timer.current = window.setTimeout(() => {
      fn();
    }, waitTime);

  return () => {
    if (timer.current!== null) {
      clearTimeout(timer.current);}
  };

}, [waitTime, fn,...deps || []]); }



