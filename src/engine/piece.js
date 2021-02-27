import { ChessPieceException } from './exceptions.js';

export function fromSymbol(symbol) {
  const source = `pieces/${symbol}.svg`;
  const symbols = 'rnbqkpRNBQKP';
  if (symbol === undefined || !symbols.includes(symbol)) {
    return '';
  }
  return `<img id=${symbol} style="max-width: 90%; height: auto; padding-top: 5%" src=${source} alt="Piece - ${symbol}" />`;
}

export function getColorForPiece(symbol) {
  const symbols = 'rnbqkpRNBQKP';
  const whitePieces = 'RNBQKP';
  if (symbol === undefined) {
    return symbol;
  }
  if (!symbols.includes(symbol)) {
    throw new ChessPieceException('Piece could not be assigned to a color.');
  }
  return whitePieces.includes(symbol) ? 'w' : 'b';
}
