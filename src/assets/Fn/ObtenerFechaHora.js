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
