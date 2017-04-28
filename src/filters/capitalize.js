export default function capitalize (text) {
  try {
    return text.charAt(0).toUpperCase() + text.slice(1)
  } catch (err) {
    throw new Error('Text must be a string')
  }
}
