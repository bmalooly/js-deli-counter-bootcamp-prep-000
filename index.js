function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
  return (`Currently serving ${katzDeliLine.shift()}.`);
  }
}
function currentLine(katzDeliLine) {
  var i = 0;
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  else {
    while (katzDeliLine.length > 0)
    return (`The line is currently: ${katzDeliLine[i]}. ${katzDeliLine.shift()}`);
    ii+
  }
}
}