export const generarIdTicket = () => {
    return Date.now() + '-' + Math.floor(Math.random() * 1000);
  };