function isValidPawnMove(board, fromRow, fromCol, toRow, toCol, color, isFirstMove) {
    const direction = color === 'white' ? -1 : 1;
    const startRow = color === 'white' ? 6 : 1;
    const target = board[toRow][toCol];
  
    // Movimento simples pra frente (1 casa)
    if (fromCol === toCol && toRow === fromRow + direction && target === null) {
      return true;
    }
  
    // Movimento duplo no primeiro lance
    if (
      fromCol === toCol &&
      fromRow === startRow &&
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
      target.color !== color
    ) {
      return true;
    }
  
    // Movimento inválido
    return false;
  }
  