export function isPrime(p: number): boolean {
    if (p <= 1) return false;
    if (p < 4) return true; // 2, 3
    if (p % 2 === 0) return false;
    if (p % 3 === 0) return false;
    if (p > Number.MAX_SAFE_INTEGER)
        throw Error('input value exced Number.MAX_SAFE_INTEGER');
    let qx = Math.ceil(Math.sqrt(p));
    for (let i = 5; i <= qx; i += 6) {
        if (p % i === 0)
            return false;
        if ((p + 2) % i === 0)
            return false;
    }
    return true;
}

export function nextPrime(n: number): number {
    var k = n + 1;
    if (k + 1 & 1)++k; // parity drop
    while (true) {
        if (isPrime(k))
            return k;
        k += 2;
    }
}

export function prevPrime(n: number): number {
    var k = n - 1;
    if (k + 1 & 1)--k; // parity drop
    while (k > 1) {
        if (isPrime(k))
            return k;
        k -= 2;
    }
    throw Error('no prevPrim found');
}

export default isPrime;