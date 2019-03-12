
export const compose = (...fns) => value => fns.reduceRight((returnedValue, fn) => {
  return fn(returnedValue)
}, value)

export const debounceTime = (milliseconds, fn) => {
  let timer = null
  return () => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(fn, milliseconds)
  }
}

export const partialize = (fn, ...args) => fn.bind(null, ...args)

export const pipe = (...fns) => value => fns.reduce((returnedValue, fn) => fn(returnedValue), value)

export const takeUntil = (times, fn) => () => {
  if (times-- > 0) {
    fn()
  }
}
