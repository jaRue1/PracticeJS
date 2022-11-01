async function doTheThing(num1, num2) {
  const result = num1 + num2
  const obj = { message: "did the thing", result: result }
  return obj
}
export { doTheThing }
