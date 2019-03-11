
export const compose = (...fns) => value => fns.reduceRight((returnedValue, fn) => fn(returnedValue), value)

export const partialize = (fn, ...args) => fn.bind(null, ...args)

export const pipe = (...fns) => value => fns.reduce((returnedValue, fn) => fn(returnedValue), value)
