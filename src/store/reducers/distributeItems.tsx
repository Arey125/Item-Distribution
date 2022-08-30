type Sums = [number, number, number]
type Values = number[]

function metric(sums: Sums): number {
    const [a, b, c] = sums
    return (a - b) * (a - b) + (a - c) * (a - c) + (b - c) * (b - c);
}

function distributeItems(values: Values, sums: Sums = [0, 0, 0], memo = new Map()): [Sums, number[]] {
    if (values.length === 0) {
        return [[...sums], []];
    }

    if (memo.has(String([values.length, ...sums]))) {
        return memo.get(String([values.length, ...sums]))
    }
    const [head, ...tail] = values;
    let res: Sums | undefined;
    let res_inds: Values = [];
    for (let i = 0;i < 3;i++) {
        sums[i] += head;

        const [val, inds] = distributeItems(tail, sums);
        sums[i] -= head;

        if (res && metric(res) < metric(val)) {
            continue;
        }

        res = val;
        res_inds = [i, ...inds];
    }
    memo.set(String([values.length, ...sums]), [res, res_inds])
    return [res!, res_inds];
}

export default distributeItems;