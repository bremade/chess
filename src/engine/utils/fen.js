/* eslint-disable */
function parseFen(fen) {
  if (typeof fen !== "string") {
    alert("Can only parse string");
  }
  const fields = fen.split(" ");
  return {
    placement: fields[0].split("/"),
    active: fields[1],
    castling: fields[2],
    enPassant: fields[3],
    halfmove: fields[4],
    fullmove: fields[5],
  };
}

function setWhitespaces(fenRow) {
  for (var i = 0; i < fenRow.length; i++) {
    var numbers = string.match(/\d+/g).map(Number);
    for (number in numbers) {
      fenRow[i].replace(number);
    }
  }
}
