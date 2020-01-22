import { isPrime, nextPrime, prevPrime } from './index';
import test from 'tape'

test('primeNumber', function (t) {
    t.ok(!isPrime(1))
    t.ok(isPrime(2))
    t.ok(isPrime(3))
    t.ok(!isPrime(4))
    t.isEqual(nextPrime(5), 7)
    t.isEqual(nextPrime(6), 7)
    t.end()
})

test('prevPrime', function (t) {
    t.isEqual(prevPrime(7), 5)
    t.isEqual(prevPrime(6), 5)
    t.end()
})
test('nextPrime', function (t) {
    t.isEqual(nextPrime(5), 7)
    t.isEqual(nextPrime(6), 7)
    t.end()
})

