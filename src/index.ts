/*
 * This is program
 *
 * By:  Igor
 * Version 1.0
 * Since   2022-11-15
 */

import promptSync from 'prompt-sync'
const prompt = promptSync()

// Process
function hanoi(nOfDisks: number, startPeg: number, endPeg: number) {
  const pegNum: number = 6
  // base case
  if (nOfDisks === 1) {
    console.log('Move disk 1 from peg ' + startPeg + ' to peg ' + endPeg)
  } else {
    hanoi(nOfDisks - 1, startPeg, pegNum - startPeg - endPeg)
    console.log(
      'Move disk ' + nOfDisks + ' from peg ' + startPeg + ' to peg ' + endPeg
    )
    hanoi(nOfDisks - 1, pegNum - startPeg - endPeg, endPeg)
  }
}

const startPeg = 1
const endPeg = 3

//Input
const userInput = prompt('How may disks you want?: ')
try {
  const nOfDisks = parseInt(userInput)
  if (nOfDisks > 0) {
    hanoi(nOfDisks, startPeg, endPeg)
  } else {
    console.log('\nPlease enter a positive integer')
  }
} catch (e) {
  console.log('\nThis is not an integer')
}

console.log('\nDone.')
