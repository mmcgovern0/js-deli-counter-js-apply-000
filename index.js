var katzDeliLine = [];
let i = 1

function takeANumber(katzDeliLine){
  katzDeliLine.push(i);
  return `Welcome, you are number ${i++}.`; 
}

console.log(takeANumber(katzDeliLine))
console.log(takeANumber(katzDeliLine))
console.log(takeANumber(katzDeliLine))


function nowServing(katzDeliLine){
  if(!katzDeliLine.length){
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${katzDeliLine.shift()}.`;
}



function currentLine(katzDeliLine){
  if(!katzDeliLine.length){
    return 'The line is currently empty.';
  }
  
  var numName = [];
  
  for(let i=0; i < katzDeliLine.length; i++){
    numName.push(`${i+1}. ${katzDeliLine[i]}`);
  }
  return `The line is currently: ${numName.join(', ')}`;
}

console.log(currentLine(["Iselin", "Alex"]))
console.log(currentLine(["Älicia", "Johann"]))
