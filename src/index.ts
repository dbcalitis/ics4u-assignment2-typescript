/**
 * This is the main code that runs
 * with the MrCoxallStack.
 * By:      Daria Bernice Calitis
 * Version: 1.0
 * Since:   2022-10-10
 */

import promptSync from 'prompt-sync'

// use MrCoxallStack and promptSync classes
const prompt = promptSync()

// Input & Process
const inputString = prompt('Enter a string of characters and numbers: ')

const text = inputString.split('')
const newText = []

// Loops through each character.
for (let count = 0; count < text.length; count++) {
  const item = text[count]
  let newString = ''

  // Checks if the item is not a number or the last item of the array.
  if (isNaN(Number(item))) {
    if (count - 1 !== -1) {
      // Checks if the previous character is not a number.
      if (!isNaN(Number(text[count - 1]))) {
        // Pushes the original character into the array.
        newString = item
        newText.push(newString)
      }
    } else {
      newString = item
      newText.push(newString)
    }
  } else {
    // This replaces the digit with a number of characters or numbers.
    if (text[count + 1] !== undefined) {
      for (let count2 = 0; count2 < Number(item); count2++) {
        newString = newString.concat(text[count + 1])
      }
    }

    // Skips to the item after the next one.
    if (isNaN(Number(text[count + 1]))) {
      count = count + 1
    }

    newText.push(newString)
  }
}

// Output - joins the array and prints it out.
const newTextString = newText.join('')
console.log(newTextString)

console.log('\nDone.')
