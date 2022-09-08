type Sums = [number, number, number];
type Values = number[];

function metric([a, b, c]: Sums): number {
  return (a - b) * (a - b) + (a - c) * (a - c) + (b - c) * (b - c);
}

function distributeItems(
  values: Values,
  sums: Sums = [0, 0, 0],
  memo = new Map<string, [Sums, number[]]>()
): [Sums, number[]] {
  if (values.length === 0) {
    return [[...sums], []];
  }

  const memoizedAnswer = memo.get(String([values.length, ...sums]));
  if (memoizedAnswer !== undefined) {
    return memoizedAnswer;
  }
  const [head, ...tail] = values;
  let res: Sums | undefined;
  let res_inds: Values = [];
  const curSums = sums;
  for (let i = 0; i < 3; i++) {
    curSums[i] += head;

    const [val, inds] = distributeItems(tail, sums);
    curSums[i] -= head;

    if (res && metric(res) < metric(val)) {
      continue;
    }

    res = val;
    res_inds = [i, ...inds];
  }
  if (res === undefined) {
    throw new Error();
  }
  memo.set(String([values.length, ...sums]), [res, res_inds]);
  return [res, res_inds];
}

export { distributeItems };
