
export const deconstruirId = numero => {
    const strNumero = String(numero).padStart(9, '0');
  
    return {
      idLocal: parseInt(strNumero[0]),
      idProducto: parseInt(strNumero.slice(1, 5)),
      idLote: parseInt(strNumero.slice(5, 9)),
    };
  };