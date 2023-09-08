export function findMostFrequentString(arr: string[]): string {
  if (arr.length === 0) return "Sin categoría";

  const stringCounts = arr.reduce(
    (acc: { [key: string]: number }, str: string) => {
      acc[str] = (acc[str] || 0) + 1;
      return acc;
    },
    {}
  );

  const mostFrequentString = Object.entries(stringCounts).reduce(
    (acc, [str, count]) => {
      if (count > acc.count) {
        acc.str = str;
        acc.count = count;
      }
      return acc;
    },
    { str: arr[0], count: stringCounts[arr[0]] || 0 }
  );

  return mostFrequentString.str;
}
