export const obtenerFechaFormato = () => {
    const fecha = new Date();
    const año = fecha.getFullYear();
    const mes = String(fecha.getMonth() + 1).padStart(2, "0");
    const dia = String(fecha.getDate()).padStart(2, "0");
    const horas = String(fecha.getHours()).padStart(2, "0");
    const minutos = String(fecha.getMinutes()).padStart(2, "0");

    return `${año}/${mes}/${dia} - ${horas}:${minutos}`;
};

export const obtenerFecha = (fecha) => {
    const dia = String(fecha.getDate()).padStart(2, '0'); // Asegura 2 dígitos
    const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11
    const año = fecha.getFullYear();
    return `${dia}/${mes}/${año}`;
}

export const  obtenerHora = (fecha) => {
    const horas = String(fecha.getHours()).padStart(2, '0'); // Asegura 2 dígitos
    const minutos = String(fecha.getMinutes()).padStart(2, '0'); // Asegura 2 dígitos
    return `${horas}:${minutos}`;
}


export const convertirTimestampAMazatlan = (timestamp) => {
    const date = timestamp.toDate(); //Fecha de base de datos timestamp a texto
  
    const opciones = {
      timeZone: 'America/Mazatlan',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
  
    const formateador = new Intl.DateTimeFormat('es-MX', opciones);
    const partes = formateador.formatToParts(date);
  
 
    const obtenerParte = (tipo) => partes.find(p => p.type === tipo)?.value;
  
    const año = obtenerParte('year');
    const mes = obtenerParte('month');
    const dia = obtenerParte('day');
    const hora = obtenerParte('hour');
    const minuto = obtenerParte('minute');
    const segundo = obtenerParte('second');
  

    return {
      fecha: `${dia}/${mes}/${año}`,
      hora: `${hora}:${minuto}:${segundo}`,
      objetoDate: new Date(`${año}-${mes}-${dia}T${hora}:${minuto}:${segundo}`),
    };
  };
  