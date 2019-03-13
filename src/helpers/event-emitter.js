
const events = new Map()

const EventEmitter = {
  on (event, listener) {
    if (!events.has(event)) {
      events.set(event, [])
    }
    let listeners = events.get(event)
    listeners.push(listener)
  },

  emit (event, data) {
    const listeners = events.get(event)
    if (listeners) {
      listeners.forEach(listener => {
        listener(data)
      })
    }
  }
}

export default EventEmitter
