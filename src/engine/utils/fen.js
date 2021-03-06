/* eslint-disable */
import validateFEN from "fen-validator";
import { TypeException, ValidationException } from "../exceptions.js";

function isString(string) {
  return typeof string === "string";
}

function isNumeric(string) {
  return !isNaN(string);
}

function initEmptyGame() {
  return [
    [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ],
    [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ],
    [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ],
    [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ],
    [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ],
    [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ],
    [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ],
    [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ],
  ];
}

export function parseFen(fen) {
  if (!isString(fen)) {
    throw new TypeException("Provided fen is not a string: " + fen);
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

export function fromStore(chessStore) {
  var fen = "";
  var boardArr = chessStore.board;
  if (chessStore.board === undefined) {
    return undefined;
  }
  for (var row = 0; row < boardArr.length; row++) {
    var empty = 0;
    for (var col = 0; col < boardArr[row].length; col++) {
      if (boardArr[row][col] === undefined) {
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
  return [
    fen,
    chessStore.turn,
    chessStore.castling,
    chessStore.enPassant,
    chessStore.halfmove,
    chessStore.fullmove,
  ].join(" ");
}

export function fromFen(fen) {
  var tokens = parseFen(fen);
  if (!validateFEN(fen)) {
    throw new ValidationException("Provided FEN is not valid! " + fen);
  }
  var game = initEmptyGame();
  var placements = tokens.placement;
  var row = 0;
  var col = 0;
  for (var i = 0; i < placements.length; i++) {
    if (placements[i] === "/") {
      row++;
      col = 0;
    } else if (isNumeric(placements[i])) {
      for (var j = 0; j < parseInt(placements[i]); j++) {
        game[row][col] = undefined;
        col++;
      }
    } else {
      game[row][col] = placements[i];
      col++;
    }
  }
  return game;
}
