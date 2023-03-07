export const dateDiffYears = (a: Date, b: Date) => {
  const _MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365;
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_YEAR);
};
