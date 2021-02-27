import { writable } from 'svelte/store';
import { parseFen, fromFen } from './utils/fen';

function createChessStore() {
  console.log('chessStore -> store()');

  const chessGame = {
    inProgress: false,
    selected: undefined,
    board: undefined,
    turn: undefined,
    castling: undefined,
    enPassant: undefined,
    halfmove: undefined,
    fullmove: undefined
  };
  const { subscribe, set, update } = writable(chessGame);

  const methods = {
    init(fen) {
      console.log('chessStore -> init()');
      const tokens = parseFen(fen);

      update((chessGame) => {
        (chessGame.inProgress = true), (chessGame.board = fromFen(fen));
        chessGame.selected = {
          row: undefined,
          col: undefined
        };
        chessGame.turn = tokens.active;
        chessGame.castling = tokens.castling;
        chessGame.enPassant = tokens.enPassant;
        chessGame.halfmove = tokens.halfmove;
        chessGame.fullmove = tokens.fullmove;
        return chessGame;
      });
    },

    reset(fen) {
      console.log('chessStore -> reset()');
      const tokens = parseFen(fen);

      update((chessGame) => {
        (chessGame.inProgress = true), (chessGame.board = fromFen(fen));
        chessGame.selected = {
          row: undefined,
          col: undefined
        };
        chessGame.turn = tokens.active;
        chessGame.castling = tokens.castling;
        chessGame.enPassant = tokens.enPassant;
        chessGame.halfmove = tokens.halfmove;
        chessGame.fullmove = tokens.fullmove;
        return chessGame;
      });
    },

    setSelected(row, col) {
      console.log('chessStore -> setSelected()');
      update((chessGame) => {
        chessGame.selected = {
          row,
          col
        };
        return chessGame;
      });
    },

    setBoard(board) {
      console.log('chessStore -> setBoard()');
      update((chessGame) => {
        chessGame.board = board;
        return chessGame;
      });
    },

    setTurn(turn) {
      console.log('chessStore -> setTurn()');
      update((chessGame) => {
        chessGame.turn = turn;
        return chessGame;
      });
    },

    toggleTurn() {
      console.log('chessStore -> switchTurn()');
      update((chessGame) => {
        const turn = chessGame.turn === 'w' ? 'b' : 'w';
        chessGame.turn = turn;
        return chessGame;
      });
    },

    setCastling(castling) {
      console.log('chessStore -> setCastling()');
      update((chessGame) => {
        chessGame.castling = castling;
        return chessGame;
      });
    },

    setEnPassant(enPassant) {
      console.log('chessStore -> setEnPassant()');
      update((chessGame) => {
        chessGame.enPassant = enPassant;
        return chessGame;
      });
    },

    setHalfmove(halfmove) {
      console.log('chessStore -> setHalfmove()');
      update((chessGame) => {
        chessGame.halfmove = halfmove;
        return chessGame;
      });
    },

    setFullmove(fullmove) {
      console.log('chessStore -> setFullmove()');
      update((chessGame) => {
        chessGame.fullmove = fullmove;
        return chessGame;
      });
    }
  };

  return {
    subscribe,
    set,
    update,
    ...methods
  };
}

export const chessStore = createChessStore();
