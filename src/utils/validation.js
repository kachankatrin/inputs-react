export function validateInputText(inputValue) {
  return (inputValue && !/^[A-Z]+$/gi.test(inputValue)) ? 'Input invalid' : ''
}

export function validateInputNumber(inputValue) {
  return (inputValue && !/^[0-9]+$/gi.test(inputValue)) ? 'Input invalid' : ''
}