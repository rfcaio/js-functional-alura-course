
export const delay = milliseconds => response => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(response)
  }, milliseconds)
})

export const handleStatus = response => response.ok ? response.json() : Promise.reject(response.statusText)

export const log = response => {
  console.log(response)
  return response
}

export const retry = (retries, milliseconds, fn) => fn().catch(error => {
  let delayedFn = delay(milliseconds)
  return delayedFn().then(() => retries > 1 ? retry(--retries, milliseconds, fn) : Promise.reject(error))
})

export const timeout = (milliseconds, promise) => {
  const rejectedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      /* eslint-disable-next-line prefer-promise-reject-errors */
      reject(`Could not complete operation (${milliseconds}ms limit exceeded).`)
    }, milliseconds)
  })
  return Promise.race([promise, rejectedPromise])
}
