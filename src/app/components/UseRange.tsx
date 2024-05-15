"use client";

import { useMemo } from "react";

const useRange = (
  num: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
) => {
  const mappedValue = useMemo(() => {
    const clampedNum = Math.max(Math.min(num, inMax), inMin);
    const newValue =
      ((clampedNum - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    return newValue;
  }, [num, inMin, inMax, outMin, outMax]);

  return mappedValue;
};

export default useRange;
