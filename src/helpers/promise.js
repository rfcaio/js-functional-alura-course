
export const handleStatus = response => response.ok ? response.json() : Promise.reject(response.statusText)
