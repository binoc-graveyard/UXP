// |jit-test| error: ReferenceError

// Note: modified from original test, which used Uint32Array in place of Array,
// because the behavior has changed in a way that this will throw a TypeError
// before it gets to testing what used to crash. I have no idea whether this
// would actually crash the original version it was written for.
try {
    (function () {
        __proto__ = Array()
    }())
} catch (e) {}(function () {
    length, ([eval()] ? x : 7)
})()
