export default function divide (num, divisor = 10) {
  try {
    return num / divisor
  } catch (err) {
    throw new Error('Error on division')
  }
}
