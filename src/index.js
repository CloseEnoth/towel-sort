
// You should implement your task here.

module.exports = function towelSort(m = []) {
  return m.reduce((sum, item, index) => index % 2 === 0 ? sum.concat(item) : sum.concat(item.reverse()), []);np
}
