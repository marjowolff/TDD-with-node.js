

const capitalizeFirst = (param) => {
  if (param == '') {
    return ''} else {
      let array = param.split('')
      array[0] = array[0].toUpperCase()
      mot = array.join('')
      return mot
    }
}

const capitalizeFirstLetters = (param) => {
  if (param == '') {
    return ''} else if (param.length===1) {
      return capitalizeFirst(param)} else {
      let mots = param.split(' ')
      let rep = mots.map(mot => capitalizeFirst(mot))
      res = rep.join(' ')
      return res
    }
}

module.exports = capitalizeFirstLetters
