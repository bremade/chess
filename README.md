# Chess

This is a fun project to play around with Svelte and then implement my own chess engine.

Implemented using [Svelte](https://svelte.dev/), [Rollup](https://rollupjs.org/) and plain [JavaScript](https://www.javascript.com/)

## Setup

### Development

Install all dependencies

```bash
npm install
```

Start dev server using rollup

```bash
npm run dev
```

Additional scripts:

- Build the project
  ```bash
  npm run build
  ```
- Lint the code - config see .eslintrc.json
  ```bash
  npm run lint
  ```

### Production

TODO Docker

## Roadmap

The following roadmap contains all the planned features:

- [x] Chessfield
  - [x] Field
  - [x] Ranks
  - [x] Pieces
- [x] Global store to track game state
- [ ] Movement
  - [ ] General movement
  - [ ] Field restrictions
  - [ ] Piece restrictions
    - [ ] Rook
    - [ ] Knight
    - [ ] Bishop
    - [ ] Queen
    - [ ] King
    - [ ] Pond
  - [ ] Castling
  - [ ] EnPassant
  - [ ] Check
  - [ ] Checkmate
- [ ] Visuals
  - [ ] Highlight last turn
  - [ ] Theme selection
  - [ ] Analysis tool to visualize future turns
  - [ ] Mirror board
- [ ] FEN
  - [x] Parse FEN
  - [x] Generate board from FEN
  - [x] Generate FEN from Board
  - [ ] FEN validation
  - [ ] FEN export
