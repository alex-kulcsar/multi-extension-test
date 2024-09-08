//% weight=100 color="#0fbc11" icon="\uf185"
namespace multi {
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
}