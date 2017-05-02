export default function divide (num, divisor = 10) {
  try {
    divisor = Number(divisor)
    num = Number(num)
    if (divisor === 0) {
      throw new Error('Can\'t divide by zero')
    }
    return num / divisor
  } catch (err) {
    throw new Error('Error on division')
  }
}
