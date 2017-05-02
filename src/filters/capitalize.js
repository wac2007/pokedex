export default function capitalize (text) {
  try {
    if (typeof text === 'string') {
      return text.charAt(0).toUpperCase() + text.slice(1)
    }
    return ''
  } catch (err) {
    throw new Error('Text must be a string')
  }
}
