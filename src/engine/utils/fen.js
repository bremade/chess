/* eslint-disable */
function isString(string) {
  return typeof string !== "string";
}

function isNumeric(string) {
  return !isNaN(string);
}

function initEmptyGame() {
  return [
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
  ];
}

function parseFen(fen) {
  if (!isString(fen)) {
    //alert("Provided fen should be of type string.");
  }
  const fields = fen.split(" ");
  return {
    placement: fields[0],
    active: fields[1],
    castling: fields[2],
    enPassant: fields[3],
    halfmove: fields[4],
    fullmove: fields[5],
  };
}

export function fromArray(boardArr) {
  var fen = "";
  for (var row = 0; row < boardArr.length; row++) {
    var empty = 0;
    for (var col = 0; col < boardArr[row].length; col++) {
      if (boardArr[row][col] === null) {
        empty++;
      } else {
        if (empty > 0) {
          fen += empty;
          empty = 0;
        }
        fen += boardArr[row][col];
      }
    }
    if (empty > 0) {
      fen += empty;
      empty = 0;
    }
    if (row !== boardArr.length - 1) {
      fen += "/";
    }
  }
  // TODO: add turn castlingFlags enPassant halfmoves, moveNumber
  return [fen].join(" ");
}

export function fromFen(fen) {
  var tokens = parseFen(fen);
  // TODO validate
  var game = initEmptyGame();
  var placements = tokens.placement;
  console.log("test");
  var row = 0;
  var col = 0;
  for (var i = 0; i < placements.length; i++) {
    if (placements[i] === "/") {
      row++;
      col = 0;
    } else if (isNumeric(placements[i])) {
      for (var j = 0; j < parseInt(placements[i]); j++) {
        game[row][col] = "";
        col++;
      }
      var tmp = parseInt(placements[i]);
    } else {
      game[row][col] = placements[i];
      col++;
    }
  }
  return game;
}
