# @u4/prime

> This small package contains simple prime number utilities with no extra stuff. [![NPM Version](https://img.shields.io/npm/v/@u4/prime.svg?style=flat)](https://www.npmjs.org/package/@u4/prime) *Api @u4/prime*

## why an other simple prime number tester / generator

I'm publishing this package because no available prime's number package have the required quality or features to be used.
I only need to find some random prime numbers to loop over ℤ/nℤ ring.

> I tryed a lot's of implementations

| Name                                                       |  Size in node_modules | Observation                                                         |
|------------------------------------------------------------|-----------------------|---------------------------------------------------------------------|
| [prime-number](https://www.npmjs.com/package/prime-number) |     28kB              | store all vistited values in memory, contains only isPrime function |
| [nprime](https://www.npmjs.com/package/nprime)             |    776kB              | too large + recursive implenetation                                 |
| [prime-nummers](https://www.npmjs.com/package/prime-nummers)|   4840kB             | 4840 KB WTF !!                                    |
| [prime-q](https://www.npmjs.com/package/prime-q)           |    54280kB            | 54MB !!                                           |
| [prime-number-boolean](https://www.npmjs.com/package/prime-number-boolean) | 24kB  | using +1 loop + dirty code                        |
| [is-prime-number](https://www.npmjs.com/package/is-prime-number) |    24kB         | using +1 in test loop + have typing               |
| [prime-number-search](https://www.npmjs.com/package/prime-number-search) |    48kB | works with string but do not support big numbers so, useless |
| [prime_numbers](https://www.npmjs.com/package/prime_numbers) |          16kB       | console.log results +1 loop, do not return result !        |

## How it works

### Using default import

```typescript
import isPrime from '@u4/prime';
console.log(isPrime(7))
```

### Using named import

```typescript
import {isPrime, nextPrime, prevPrime} from '@u4/prime';
console.log(isPrime(7))
```

### Using * as import

```typescript
import * as Prime from '@u4/prime';
console.log(Prime.isPrime(7))
```
