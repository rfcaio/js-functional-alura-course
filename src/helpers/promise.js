
export const handleStatus = response => response.ok ? response.json() : Promise.reject(response.statusText)

export const log = response => {
  console.log(response)
  return response
}
