import { get } from "svelte/store";
import { chessStore } from "./chessstore.js";
import { getColorForPiece } from "./piece.js";
import { toast } from "@zerodevx/svelte-toast";

const chessGame = get(chessStore);

export function movePiece(row, col) {
  const selected = chessGame.selected;
  const board = chessGame.board;
  const turn = chessGame.turn;
  const currentField = board[row][col];
  let pieceColor = undefined;
  try {
    pieceColor = getColorForPiece(currentField);
  } catch (e) {
    toast.push(e.message, {
      theme: {
        "--toastBackground": "#F56565",
        "--toastProgressBackground": "#C53030",
      },
    });
    throw e;
  }
  if (checkSelect(selected)) {
    const oldField = board[selected.row][selected.col];
    // Move on second click
    if (isValidMove(board, row, col, oldField, turn)) {
      board[row][col] = oldField;
      board[selected.row][selected.col] = undefined;
      chessStore.setBoard(board);
      chessStore.toggleTurn();
      chessStore.setSelected(undefined, undefined);
    }
  } else {
    // Highlight on first click but only if it contains symbol
    if (currentField !== undefined && turn === pieceColor) {
      chessStore.setSelected(row, col);
    }
    // Unhighlight on second click if not valid move
    if (
      (selected.row === row && selected.col === col) ||
      currentField === undefined
    ) {
      chessStore.setSelected(undefined, undefined);
    }
  }
}

function isValidMove(board, row, col, piece, turn) {
  if (
    turn !== getColorForPiece(piece) ||
    turn === getColorForPiece(board[row][col])
  ) {
    return false;
  }
  return true;
}

function checkSelect(selected) {
  return selected.row !== undefined && selected.col !== undefined;
}
