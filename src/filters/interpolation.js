// Interpolate an object in a text, where the key name is the var name
// text = The $subject is on the table
// object = { subject: "Book" }
// interpolation(text, object)
// "The Book is on the table"

export default function interpolation (text, object) {
  try {
    Object.keys(object).forEach((value, index, arr) => {
      let pattern = `\\$${value}`
      let re = new RegExp(pattern, 'i')
      text = text.replace(re, object[value])
    })
    return text
  } catch (err) {
    throw new Error('Text must be a string')
  }
}
