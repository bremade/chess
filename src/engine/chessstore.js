import { writable } from "svelte/store";
import { parseFen, fromFen } from "./utils/fen";

const chessStore = () => {
  console.log("chessStore -> store()");

  const chessGame = {
    inProgress: false,
    board: undefined,
    turn: undefined,
    castling: undefined,
    enPassant: undefined,
    halfmove: undefined,
    fullmove: undefined,
  };
  const { subscribe, set, update } = writable(chessGame);

  const methods = {
    init(fen) {
      console.log("chessStore -> init()");
      var tokens = parseFen(fen);

      update((chessGame) => {
        (chessGame.inProgress = true), (chessGame.board = fromFen(fen));
        chessGame.turn = tokens.active;
        chessGame.castling = tokens.castling;
        chessGame.enPassant = tokens.enPassant;
        chessGame.halfmove = tokens.halfmove;
        chessGame.fullmove = tokens.fullmove;
        return chessGame;
      });
    },

    reset(fen) {
      console.log("chessStore -> reset()");
      var tokens = parseFen(fen);

      update((chessGame) => {
        (chessGame.inProgress = true), (chessGame.board = fromFen(fen));
        chessGame.turn = tokens.active;
        chessGame.castling = tokens.castling;
        chessGame.enPassant = tokens.enPassant;
        chessGame.halfmove = tokens.halfmove;
        chessGame.fullmove = tokens.fullmove;
        return chessGame;
      });
    },

    setBoard(board) {
      console.log("chessStore -> setBoard()");
      update((chessGame) => {
        chessGame.board = board;
        return chessGame;
      });
    },

    setTurn(turn) {
      console.log("chessStore -> setTurn()");
      update((chessGame) => {
        chessGame.turn = turn;
        return chessGame;
      });
    },

    toggleTurn() {
      console.log("chessStore -> switchTurn()");
      update((chessGame) => {
        var turn = chessGame.turn === "w" ? "s" : "w";
        chessGame.turn = turn;
        return chessGame;
      });
    },

    setCastling(castling) {
      console.log("chessStore -> setCastling()");
      update((chessGame) => {
        chessGame.castling = castling;
        return chessGame;
      });
    },

    setEnPassant(enPassant) {
      console.log("chessStore -> setEnPassant()");
      update((chessGame) => {
        chessGame.enPassant = enPassant;
        return chessGame;
      });
    },

    setHalfmove(halfmove) {
      console.log("chessStore -> setHalfmove()");
      update((chessGame) => {
        chessGame.halfmove = halfmove;
        return chessGame;
      });
    },

    setFullmove(fullmove) {
      console.log("chessStore -> setFullmove()");
      update((chessGame) => {
        chessGame.fullmove = fullmove;
        return chessGame;
      });
    },
  };

  return {
    subscribe,
    set,
    update,
    ...methods,
  };
};

export default chessStore();
