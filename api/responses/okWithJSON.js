module.exports = function okWithJSON(data) {
  return this.res.status(200).json(data).end()
}
