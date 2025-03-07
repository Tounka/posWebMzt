import { GiBeerStein, GiCoffeeCup, GiSodaCan, GiCupcake, GiIceCreamCone, GiDonut, GiHotDog, GiFrenchFries, GiPizzaSlice, GiHamburger, GiCakeSlice, GiWaterBottle, GiMilkCarton, GiFruitBowl, GiChocolateBar } from "react-icons/gi";
import { FaMugHot, FaGlassWhiskey, FaCookie, FaAppleAlt, FaCheese, FaBreadSlice } from "react-icons/fa";
import { MdLocalDrink, MdIcecream } from "react-icons/md";
import { NumerosALetras } from "numero-a-letras";
export const categoriasProductos = [
    {
        categoria: "Bebidas",
        items: [
            { id: 1, nombre: "Cerveza", icon: <GiBeerStein />, costo: 15, precio: 35 },
            { id: 2, nombre: "Café", icon: <GiCoffeeCup />, costo: 8, precio: 20 },
            { id: 3, nombre: "Refresco", icon: <GiSodaCan />, costo: 10, precio: 25 },
            { id: 4, nombre: "Whiskey", icon: <FaGlassWhiskey />, costo: 50, precio: 120 },
            { id: 5, nombre: "Agua", icon: <GiWaterBottle />, costo: 5, precio: 15 },
            { id: 6, nombre: "Leche", icon: <GiMilkCarton />, costo: 7, precio: 18 },
            { id: 7, nombre: "Té", icon: <FaMugHot />, costo: 6, precio: 18 },
            { id: 8, nombre: "Jugo", icon: <MdLocalDrink />, costo: 12, precio: 30 }
        ]
    },
    {
        categoria: "Comida Rápida",
        items: [
            { id: 9, nombre: "Hamburguesa", icon: <GiHamburger />, costo: 25, precio: 60 },
            { id: 10, nombre: "Pizza", icon: <GiPizzaSlice />, costo: 30, precio: 75 },
            { id: 11, nombre: "Hot Dog", icon: <GiHotDog />, costo: 12, precio: 30 },
            { id: 12, nombre: "Papas Fritas", icon: <GiFrenchFries />, costo: 10, precio: 25 },
            { id: 13, nombre: "Sándwich", icon: <FaBreadSlice />, costo: 15, precio: 40 },
            { id: 14, nombre: "Queso", icon: <FaCheese />, costo: 20, precio: 50 },
            { id: 15, nombre: "Frutas", icon: <GiFruitBowl />, costo: 18, precio: 45 }
        ]
    },
    {
        categoria: "Postres",
        items: [
            { id: 16, nombre: "Pastel", icon: <GiCakeSlice />, costo: 35, precio: 90 },
            { id: 17, nombre: "Galletas", icon: <FaCookie />, costo: 10, precio: 25 },
            { id: 18, nombre: "Helado", icon: <MdIcecream />, costo: 15, precio: 40 },
            { id: 19, nombre: "Cupcake", icon: <GiCupcake />, costo: 12, precio: 30 },
            { id: 20, nombre: "Dona", icon: <GiDonut />, costo: 10, precio: 25 },
            { id: 21, nombre: "Chocolate", icon: <GiChocolateBar />, costo: 20, precio: 55 },
            { id: 22, nombre: "Manzana Caramelizada", icon: <FaAppleAlt />, costo: 18, precio: 45 },
            { id: 23, nombre: "Cono de Helado", icon: <GiIceCreamCone />, costo: 12, precio: 35 }
        ]
    }
];

export const userData = {
    nombre: "ramon",
    apellido: "marquez",
    rol: "administrador"
};

export const localDataIn = {
    ubicacion: "Ubicacion del local",
    sucursal: "Sucursal X",

}

export const ticketsDiasDb = [
    {
        fecha: "12/02/2025",
        tickets: [
            {
                fechaTransaccion: {
                    fecha: "12/02/2025",
                    hora: "12:22"
                },
                usuario: {
                    nombre: "Juan",
                    apellido: "Pérez"
                },
                caja: "1",
                productos: [
                    { nombre: "Producto A", cantidad: 2, precio: 500, total: 1000 },
                    { nombre: "Producto B", cantidad: 1, precio: 300, total: 300 }
                ],
                total: 1300,
                totalEnTxt: NumerosALetras(1300)
            },
            {
                fechaTransaccion: {
                    fecha: "12/02/2025",
                    hora: "13:45"
                },
                usuario: {
                    nombre: "María",
                    apellido: "Gómez"
                },
                caja: "2",
                productos: [
                    { nombre: "Producto C", cantidad: 3, precio: 200, total: 600 }
                ],
                total: 600,
                totalEnTxt: NumerosALetras(600)
            },
            {
                fechaTransaccion: {
                    fecha: "12/02/2025",
                    hora: "15:10"
                },
                usuario: {
                    nombre: "Carlos",
                    apellido: "López"
                },
                caja: "3",
                productos: [
                    { nombre: "Producto D", cantidad: 1, precio: 1500, total: 1500 },
                    { nombre: "Producto E", cantidad: 2, precio: 250, total: 500 }
                ],
                total: 2000,
                totalEnTxt: NumerosALetras(2000)
            },
            {
                fechaTransaccion: {
                    fecha: "12/02/2025",
                    hora: "17:30"
                },
                usuario: {
                    nombre: "Ana",
                    apellido: "Martínez"
                },
                caja: "4",
                productos: [
                    { nombre: "Producto F", cantidad: 4, precio: 100, total: 400 }
                ],
                total: 400,
                totalEnTxt: NumerosALetras(400)
            },
            {
                fechaTransaccion: {
                    fecha: "12/02/2025",
                    hora: "18:45"
                },
                usuario: {
                    nombre: "Pedro",
                    apellido: "García"
                },
                caja: "5",
                productos: [
                    { nombre: "Producto G", cantidad: 1, precio: 700, total: 700 }
                ],
                total: 700,
                totalEnTxt: NumerosALetras(700)
            }
        ]
    },
    {
        fecha: "13/02/2025",
        tickets: [
            {
                fechaTransaccion: {
                    fecha: "13/02/2025",
                    hora: "10:15"
                },
                usuario: {
                    nombre: "Luis",
                    apellido: "Rodríguez"
                },
                caja: "1",
                productos: [
                    { nombre: "Producto H", cantidad: 2, precio: 600, total: 1200 }
                ],
                total: 1200,
                totalEnTxt: NumerosALetras(1200)
            },
            {
                fechaTransaccion: {
                    fecha: "13/02/2025",
                    hora: "11:50"
                },
                usuario: {
                    nombre: "Sofía",
                    apellido: "Hernández"
                },
                caja: "2",
                productos: [
                    { nombre: "Producto I", cantidad: 1, precio: 800, total: 800 }
                ],
                total: 800,
                totalEnTxt: NumerosALetras(800)
            },
            {
                fechaTransaccion: {
                    fecha: "13/02/2025",
                    hora: "14:20"
                },
                usuario: {
                    nombre: "Ricardo",
                    apellido: "Ortega"
                },
                caja: "3",
                productos: [
                    { nombre: "Producto J", cantidad: 3, precio: 150, total: 450 }
                ],
                total: 450,
                totalEnTxt: NumerosALetras(450)
            },
            {
                fechaTransaccion: {
                    fecha: "13/02/2025",
                    hora: "16:45"
                },
                usuario: {
                    nombre: "Laura",
                    apellido: "Díaz"
                },
                caja: "4",
                productos: [
                    { nombre: "Producto K", cantidad: 2, precio: 300, total: 600 }
                ],
                total: 600,
                totalEnTxt: NumerosALetras(600)
            }
        ]
    },
    {
        fecha: "14/02/2025",
        tickets: [
            {
                fechaTransaccion: {
                    fecha: "14/02/2025",
                    hora: "09:30"
                },
                usuario: {
                    nombre: "Miguel",
                    apellido: "Fernández"
                },
                caja: "1",
                productos: [
                    { nombre: "Producto L", cantidad: 1, precio: 1000, total: 1000 }
                ],
                total: 1000,
                totalEnTxt: NumerosALetras(1000)
            },
            {
                fechaTransaccion: {
                    fecha: "14/02/2025",
                    hora: "12:00"
                },
                usuario: {
                    nombre: "Elena",
                    apellido: "García"
                },
                caja: "2",
                productos: [
                    { nombre: "Producto M", cantidad: 2, precio: 400, total: 800 }
                ],
                total: 800,
                totalEnTxt: NumerosALetras(800)
            },
            {
                fechaTransaccion: {
                    fecha: "14/02/2025",
                    hora: "14:50"
                },
                usuario: {
                    nombre: "Javier",
                    apellido: "Ruiz"
                },
                caja: "3",
                productos: [
                    { nombre: "Producto N", cantidad: 4, precio: 100, total: 400 }
                ],
                total: 400,
                totalEnTxt: NumerosALetras(400)
            },
            {
                fechaTransaccion: {
                    fecha: "14/02/2025",
                    hora: "18:00"
                },
                usuario: {
                    nombre: "Carmen",
                    apellido: "Vega"
                },
                caja: "4",
                productos: [
                    { nombre: "Producto O", cantidad: 1, precio: 1200, total: 1200 }
                ],
                total: 1200,
                totalEnTxt: NumerosALetras(1200)
            },
            {
                fechaTransaccion: {
                    fecha: "14/02/2025",
                    hora: "19:30"
                },
                usuario: {
                    nombre: "Roberto",
                    apellido: "Molina"
                },
                caja: "5",
                productos: [
                    { nombre: "Producto P", cantidad: 3, precio: 200, total: 600 }
                ],
                total: 600,
                totalEnTxt: NumerosALetras(600)
            },
            {
                fechaTransaccion: {
                    fecha: "14/02/2025",
                    hora: "20:45"
                },
                usuario: {
                    nombre: "Patricia",
                    apellido: "Castro"
                },
                caja: "6",
                productos: [
                    { nombre: "Producto Q", cantidad: 2, precio: 500, total: 1000 }
                ],
                total: 1000,
                totalEnTxt: NumerosALetras(1000)
            }
        ]
    }
];
