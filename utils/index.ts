export const optionCreator = (single: string) => ({
  label: single.split("_").join(" ").toLowerCase(),
  value: single,
});

export const normalizeScrollValue = (
  smoothedScrollY: number,
  minValue: number,
  maxValue: number
): number => {
  // Ensure that the value is within the specified range (minValue to maxValue)
  const clampedValue = Math.min(Math.max(smoothedScrollY, minValue), maxValue);

  // Calculate the normalized value between 0 and 1
  const normalizedValue = (clampedValue - minValue) / (maxValue - minValue);

  return normalizedValue;
};
