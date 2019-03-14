
class Maybe {
  constructor (value) {
    this._value = value
  }

  getOrElse (value) {
    return this.isNothing() ? value : this._value
  }

  isNothing () {
    return this._value === null || this._value === undefined
  }

  map (fn) {
    return this.isNothing() ? Maybe.of(null) : Maybe.of(fn(this._value))
  }

  static of (value) {
    return new Maybe(value)
  }
}

export default Maybe
