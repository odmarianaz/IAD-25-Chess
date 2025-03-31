class Pawn {
    constructor(color) {
      this.color = color; // 'white' ou 'black'
      this.hasMoved = false;
      this.type = 'pawn';
    }
  
    isValidMove(from, to, board) {
      const [fromRow, fromCol] = from;
      const [toRow, toCol] = to;
      const direction = this.color === 'white' ? -1 : 1;
  
      const target = board[toRow][toCol];
  
      // Movimento simples pra frente
      if (fromCol === toCol && toRow === fromRow + direction && target === null) {
        return true;
      }
  
      // Primeiro movimento: 2 casas
      if (
        fromCol === toCol &&
        !this.hasMoved &&
        toRow === fromRow + 2 * direction &&
        board[fromRow + direction][fromCol] === null &&
        target === null
      ) {
        return true;
      }
  
      // Captura diagonal
      if (
        Math.abs(toCol - fromCol) === 1 &&
        toRow === fromRow + direction &&
        target !== null &&
        target.color !== this.color
      ) {
        return true;
      }
  
      return false;
    }
  }
  