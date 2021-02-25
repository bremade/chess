export function fromSymbol(symbol) {
  var source = `pieces/${symbol}.svg`;
  var symbols = "RNBQKPrnbqkp";
  if (symbol === null || !symbols.includes(symbol)) {
    return "";
  }
  return `<img id=${symbol} style="max-width: 90%; height: auto; padding-top: 5%" src=${source} alt="Piece - ${symbol}" />`;
}
