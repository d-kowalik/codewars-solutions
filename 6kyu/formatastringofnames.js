// https://www.codewars.com/kata/format-a-string-of-names-like-bart-lisa-and-maggie/train/javascript

function list(names) {
  if (!names.length) return ''
  let lastName = names[names.length - 1].name
  names = names.slice(0, names.length - 1).map(o => o.name)
  names = names.join(', ')
  if (names.length > 1) names += ' & ' + lastName
  else return lastName
  return names
}
