
if (!Array.prototype._flatMap) {
  /* eslint-disable-next-line no-extend-native */
  Array.prototype._flatMap = function _flatMap (fn) {
    return this.map(fn).reduce((newArray, array) => [...newArray, ...array], [])
  }
}
