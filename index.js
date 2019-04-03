var katzDeliLine = []
let n = 1
function justGetANumber(katzDeliLine){
  katzDeliLine.push(n)
  return `Your number is ${n++}`
}

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine.shift()}.`
  }
  return "There is nobody waiting to be served!"
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length > 0){
    var numName = []
    for (let i = 0; i < katzDeliLine.length; i++){
      numName.push(`${i + 1}. ${katzDeliLine[i]}`)
    }
    return `The line is currently: ${numName.join(', ')}`
  }
  return "The line is currently empty."
}
