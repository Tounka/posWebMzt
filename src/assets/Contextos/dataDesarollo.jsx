import { GiBeerStein, GiCoffeeCup, GiSodaCan, GiCupcake, GiIceCreamCone, GiDonut, GiHotDog, GiFrenchFries, GiPizzaSlice, GiHamburger, GiCakeSlice, GiWaterBottle, GiMilkCarton, GiFruitBowl, GiChocolateBar } from "react-icons/gi";
import { FaMugHot, FaGlassWhiskey, FaCookie, FaAppleAlt, FaCheese, FaBreadSlice } from "react-icons/fa";
import { MdLocalDrink, MdIcecream } from "react-icons/md";
import { NumerosALetras } from "numero-a-letras";

export const inventariosDb = [
    {
        fecha: new Date("2023-10-01T08:00:00"), // Fecha con hora (8:00 AM)
        categorias: [
            {
                categoria: "Bebidas",
                items: [
                    { id: 1, nombre: "Cerveza", icon: <GiBeerStein />, costo: 15, precio: 35, stock: 10 },
                    { id: 2, nombre: "Café", icon: <GiCoffeeCup />, costo: 8, precio: 20, stock: 20 },
                    { id: 3, nombre: "Refresco", icon: <GiSodaCan />, costo: 10, precio: 25, stock: 15 },
                    { id: 4, nombre: "Whiskey", icon: <FaGlassWhiskey />, costo: 50, precio: 120, stock: 5 },
                    { id: 5, nombre: "Agua", icon: <GiWaterBottle />, costo: 5, precio: 15, stock: 30 },
                    { id: 6, nombre: "Leche", icon: <GiMilkCarton />, costo: 7, precio: 18, stock: 25 },
                    { id: 7, nombre: "Té", icon: <FaMugHot />, costo: 6, precio: 18, stock: 12 },
                    { id: 8, nombre: "Jugo", icon: <MdLocalDrink />, costo: 12, precio: 30, stock: 18 }
                ]
            },
            {
                categoria: "Comida Rápida",
                items: [
                    { id: 9, nombre: "Hamburguesa", icon: <GiHamburger />, costo: 25, precio: 60, stock: 8 },
                    { id: 10, nombre: "Pizza", icon: <GiPizzaSlice />, costo: 30, precio: 75, stock: 6 },
                    { id: 11, nombre: "Hot Dog", icon: <GiHotDog />, costo: 12, precio: 30, stock: 10 },
                    { id: 12, nombre: "Papas Fritas", icon: <GiFrenchFries />, costo: 10, precio: 25, stock: 20 },
                    { id: 13, nombre: "Sándwich", icon: <FaBreadSlice />, costo: 15, precio: 40, stock: 15 },
                    { id: 14, nombre: "Queso", icon: <FaCheese />, costo: 20, precio: 50, stock: 12 },
                    { id: 15, nombre: "Frutas", icon: <GiFruitBowl />, costo: 18, precio: 45, stock: 10 }
                ]
            },
            {
                categoria: "Postres",
                items: [
                    { id: 16, nombre: "Pastel", icon: <GiCakeSlice />, costo: 35, precio: 90, stock: 5 },
                    { id: 17, nombre: "Galletas", icon: <FaCookie />, costo: 10, precio: 25, stock: 30 },
                    { id: 18, nombre: "Helado", icon: <MdIcecream />, costo: 15, precio: 40, stock: 8 },
                    { id: 19, nombre: "Cupcake", icon: <GiCupcake />, costo: 12, precio: 30, stock: 12 },
                    { id: 20, nombre: "Dona", icon: <GiDonut />, costo: 10, precio: 25, stock: 15 },
                    { id: 21, nombre: "Chocolate", icon: <GiChocolateBar />, costo: 20, precio: 55, stock: 10 },
                    { id: 22, nombre: "Manzana Caramelizada", icon: <FaAppleAlt />, costo: 18, precio: 45, stock: 7 },
                    { id: 23, nombre: "Cono de Helado", icon: <GiIceCreamCone />, costo: 12, precio: 35, stock: 10 }
                ]
            }
        ]
    },
    {
        fecha: new Date("2023-10-05T14:30:00"), // Fecha con hora (2:30 PM)
        categorias: [
            {
                categoria: "Bebidas",
                items: [
                    { id: 1, nombre: "Cerveza", icon: <GiBeerStein />, costo: 15, precio: 35, stock: 8 },
                    { id: 2, nombre: "Café", icon: <GiCoffeeCup />, costo: 8, precio: 20, stock: 18 },
                    { id: 3, nombre: "Refresco", icon: <GiSodaCan />, costo: 10, precio: 25, stock: 12 },
                    { id: 4, nombre: "Whiskey", icon: <FaGlassWhiskey />, costo: 50, precio: 120, stock: 3 },
                    { id: 5, nombre: "Agua", icon: <GiWaterBottle />, costo: 5, precio: 15, stock: 25 },
                    { id: 6, nombre: "Leche", icon: <GiMilkCarton />, costo: 7, precio: 18, stock: 20 },
                    { id: 7, nombre: "Té", icon: <FaMugHot />, costo: 6, precio: 18, stock: 10 },
                    { id: 8, nombre: "Jugo", icon: <MdLocalDrink />, costo: 12, precio: 30, stock: 15 }
                ]
            },
            {
                categoria: "Comida Rápida",
                items: [
                    { id: 9, nombre: "Hamburguesa", icon: <GiHamburger />, costo: 25, precio: 60, stock: 6 },
                    { id: 10, nombre: "Pizza", icon: <GiPizzaSlice />, costo: 30, precio: 75, stock: 4 },
                    { id: 11, nombre: "Hot Dog", icon: <GiHotDog />, costo: 12, precio: 30, stock: 8 },
                    { id: 12, nombre: "Papas Fritas", icon: <GiFrenchFries />, costo: 10, precio: 25, stock: 18 },
                    { id: 13, nombre: "Sándwich", icon: <FaBreadSlice />, costo: 15, precio: 40, stock: 12 },
                    { id: 14, nombre: "Queso", icon: <FaCheese />, costo: 20, precio: 50, stock: 10 },
                    { id: 15, nombre: "Frutas", icon: <GiFruitBowl />, costo: 18, precio: 45, stock: 8 }
                ]
            },
            {
                categoria: "Postres",
                items: [
                    { id: 16, nombre: "Pastel", icon: <GiCakeSlice />, costo: 35, precio: 90, stock: 3 },
                    { id: 17, nombre: "Galletas", icon: <FaCookie />, costo: 10, precio: 25, stock: 25 },
                    { id: 18, nombre: "Helado", icon: <MdIcecream />, costo: 15, precio: 40, stock: 6 },
                    { id: 19, nombre: "Cupcake", icon: <GiCupcake />, costo: 12, precio: 30, stock: 10 },
                    { id: 20, nombre: "Dona", icon: <GiDonut />, costo: 10, precio: 25, stock: 12 },
                    { id: 21, nombre: "Chocolate", icon: <GiChocolateBar />, costo: 20, precio: 55, stock: 8 },
                    { id: 22, nombre: "Manzana Caramelizada", icon: <FaAppleAlt />, costo: 18, precio: 45, stock: 5 },
                    { id: 23, nombre: "Cono de Helado", icon: <GiIceCreamCone />, costo: 12, precio: 35, stock: 8 }
                ]
            }
        ]
    },
    {
        fecha: new Date("2023-10-10T18:45:00"), // Fecha con hora (6:45 PM)
        categorias: [
            {
                categoria: "Bebidas",
                items: [
                    { id: 1, nombre: "Cerveza", icon: <GiBeerStein />, costo: 15, precio: 35, stock: 5 },
                    { id: 2, nombre: "Café", icon: <GiCoffeeCup />, costo: 8, precio: 20, stock: 15 },
                    { id: 3, nombre: "Refresco", icon: <GiSodaCan />, costo: 10, precio: 25, stock: 10 },
                    { id: 4, nombre: "Whiskey", icon: <FaGlassWhiskey />, costo: 50, precio: 120, stock: 2 },
                    { id: 5, nombre: "Agua", icon: <GiWaterBottle />, costo: 5, precio: 15, stock: 20 },
                    { id: 6, nombre: "Leche", icon: <GiMilkCarton />, costo: 7, precio: 18, stock: 18 },
                    { id: 7, nombre: "Té", icon: <FaMugHot />, costo: 6, precio: 18, stock: 8 },
                    { id: 8, nombre: "Jugo", icon: <MdLocalDrink />, costo: 12, precio: 30, stock: 12 }
                ]
            },
            {
                categoria: "Comida Rápida",
                items: [
                    { id: 9, nombre: "Hamburguesa", icon: <GiHamburger />, costo: 25, precio: 60, stock: 4 },
                    { id: 10, nombre: "Pizza", icon: <GiPizzaSlice />, costo: 30, precio: 75, stock: 3 },
                    { id: 11, nombre: "Hot Dog", icon: <GiHotDog />, costo: 12, precio: 30, stock: 6 },
                    { id: 12, nombre: "Papas Fritas", icon: <GiFrenchFries />, costo: 10, precio: 25, stock: 15 },
                    { id: 13, nombre: "Sándwich", icon: <FaBreadSlice />, costo: 15, precio: 40, stock: 10 },
                    { id: 14, nombre: "Queso", icon: <FaCheese />, costo: 20, precio: 50, stock: 8 },
                    { id: 15, nombre: "Frutas", icon: <GiFruitBowl />, costo: 18, precio: 45, stock: 6 }
                ]
            },
            {
                categoria: "Postres",
                items: [
                    { id: 16, nombre: "Pastel", icon: <GiCakeSlice />, costo: 35, precio: 90, stock: 2 },
                    { id: 17, nombre: "Galletas", icon: <FaCookie />, costo: 10, precio: 25, stock: 20 },
                    { id: 18, nombre: "Helado", icon: <MdIcecream />, costo: 15, precio: 40, stock: 5 },
                    { id: 19, nombre: "Cupcake", icon: <GiCupcake />, costo: 12, precio: 30, stock: 8 },
                    { id: 20, nombre: "Dona", icon: <GiDonut />, costo: 10, precio: 25, stock: 10 },
                    { id: 21, nombre: "Chocolate", icon: <GiChocolateBar />, costo: 20, precio: 55, stock: 6 },
                    { id: 22, nombre: "Manzana Caramelizada", icon: <FaAppleAlt />, costo: 18, precio: 45, stock: 4 },
                    { id: 23, nombre: "Cono de Helado", icon: <GiIceCreamCone />, costo: 12, precio: 35, stock: 6 }
                ]
            }
        ]
    }
];
export const productos = [
    { categoria: "Bebidas", subcategoria: "", id: 1, nombre: "Cerveza", icon: <GiBeerStein />, costo: 15, precio: 35 },
    { categoria: "Bebidas", subcategoria: "", id: 2, nombre: "Café", icon: <GiCoffeeCup />, costo: 8, precio: 20 },
    { categoria: "Bebidas", subcategoria: "", id: 3, nombre: "Refresco", icon: <GiSodaCan />, costo: 10, precio: 25 },
    { categoria: "Bebidas", subcategoria: "", id: 4, nombre: "Whiskey", icon: <FaGlassWhiskey />, costo: 50, precio: 120 },
    { categoria: "Bebidas", subcategoria: "", id: 5, nombre: "Agua", icon: <GiWaterBottle />, costo: 5, precio: 15 },
    { categoria: "Bebidas", subcategoria: "", id: 6, nombre: "Leche", icon: <GiMilkCarton />, costo: 7, precio: 18 },
    { categoria: "Bebidas", subcategoria: "", id: 7, nombre: "Té", icon: <FaMugHot />, costo: 6, precio: 18 },
    { categoria: "Bebidas", subcategoria: "", id: 8, nombre: "Jugo", icon: <MdLocalDrink />, costo: 12, precio: 30 },

    { categoria: "Comida Rápida", subcategoria: "", id: 9, nombre: "Hamburguesa", icon: <GiHamburger />, costo: 25, precio: 60 },
    { categoria: "Comida Rápida", subcategoria: "", id: 10, nombre: "Pizza", icon: <GiPizzaSlice />, costo: 30, precio: 75 },
    { categoria: "Comida Rápida", subcategoria: "", id: 11, nombre: "Hot Dog", icon: <GiHotDog />, costo: 12, precio: 30 },
    { categoria: "Comida Rápida", subcategoria: "", id: 12, nombre: "Papas Fritas", icon: <GiFrenchFries />, costo: 10, precio: 25 },
    { categoria: "Comida Rápida", subcategoria: "", id: 13, nombre: "Sándwich", icon: <FaBreadSlice />, costo: 15, precio: 40 },
    { categoria: "Comida Rápida", subcategoria: "", id: 14, nombre: "Queso", icon: <FaCheese />, costo: 20, precio: 50 },
    { categoria: "Comida Rápida", subcategoria: "", id: 15, nombre: "Frutas", icon: <GiFruitBowl />, costo: 18, precio: 45 },

    { categoria: "Postres", subcategoria: "", id: 16, nombre: "Pastel", icon: <GiCakeSlice />, costo: 35, precio: 90 },
    { categoria: "Postres", subcategoria: "", id: 17, nombre: "Galletas", icon: <FaCookie />, costo: 10, precio: 25 },
    { categoria: "Postres", subcategoria: "", id: 18, nombre: "Helado", icon: <MdIcecream />, costo: 15, precio: 40 },
    { categoria: "Postres", subcategoria: "", id: 19, nombre: "Cupcake", icon: <GiCupcake />, costo: 12, precio: 30 },
    { categoria: "Postres", subcategoria: "", id: 20, nombre: "Dona", icon: <GiDonut />, costo: 10, precio: 25 },
    { categoria: "Postres", subcategoria: "", id: 21, nombre: "Chocolate", icon: <GiChocolateBar />, costo: 20, precio: 55 },
    { categoria: "Postres", subcategoria: "", id: 22, nombre: "Manzana Caramelizada", icon: <FaAppleAlt />, costo: 18, precio: 45 },
    { categoria: "Postres", subcategoria: "", id: 23, nombre: "Cono de Helado", icon: <GiIceCreamCone />, costo: 12, precio: 35 }
];

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
]; //  Productos 

export const userData = [
    {
        nombre: "ramon",
        apellido: "marquez",
        rol: "administrador",
        correo: "luis@gmail.com",
        contraseña: "luis1234",
    }, {
        nombre: "pablo",
        apellido: "gonzales",
        rol: "empleado",
        correo: "pablo@gmail.com",
        contraseña: "pablo1234",
    }

]
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
                    { nombre: "Cerveza", cantidad: 2, precio: 35, costo: 15, total: 70, costoTotal: 30 },
                    { nombre: "Hamburguesa", cantidad: 1, precio: 60, costo: 25, total: 60, costoTotal: 25 }
                ],
                total: 130,
                totalEnTxt: NumerosALetras(130),
                costoTotal: 55,
                descuento: 10 // Nuevo campo descuento
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
                    { nombre: "Café", cantidad: 3, precio: 20, costo: 8, total: 60, costoTotal: 24 },
                    { nombre: "Pastel", cantidad: 1, precio: 90, costo: 35, total: 90, costoTotal: 35 }
                ],
                total: 150,
                totalEnTxt: NumerosALetras(150),
                costoTotal: 59,
                descuento: 15 // Nuevo campo descuento
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
                    nombre: "Carlos",
                    apellido: "López"
                },
                caja: "3",
                productos: [
                    { nombre: "Refresco", cantidad: 2, precio: 25, costo: 10, total: 50, costoTotal: 20 },
                    { nombre: "Pizza", cantidad: 1, precio: 75, costo: 30, total: 75, costoTotal: 30 }
                ],
                total: 125,
                totalEnTxt: NumerosALetras(125),
                costoTotal: 50,
                descuento: 5 // Nuevo campo descuento
            },
            {
                fechaTransaccion: {
                    fecha: "13/02/2025",
                    hora: "11:50"
                },
                usuario: {
                    nombre: "Ana",
                    apellido: "Martínez"
                },
                caja: "4",
                productos: [
                    { nombre: "Agua", cantidad: 1, precio: 15, costo: 5, total: 15, costoTotal: 5 },
                    { nombre: "Papas Fritas", cantidad: 2, precio: 25, costo: 10, total: 50, costoTotal: 20 }
                ],
                total: 65,
                totalEnTxt: NumerosALetras(65),
                costoTotal: 25,
                descuento: 0 // Nuevo campo descuento
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
                    nombre: "Pedro",
                    apellido: "García"
                },
                caja: "5",
                productos: [
                    { nombre: "Leche", cantidad: 1, precio: 18, costo: 7, total: 18, costoTotal: 7 },
                    { nombre: "Sándwich", cantidad: 1, precio: 40, costo: 15, total: 40, costoTotal: 15 }
                ],
                total: 58,
                totalEnTxt: NumerosALetras(58),
                costoTotal: 22,
                descuento: 8 // Nuevo campo descuento
            },
            {
                fechaTransaccion: {
                    fecha: "14/02/2025",
                    hora: "12:00"
                },
                usuario: {
                    nombre: "Luis",
                    apellido: "Rodríguez"
                },
                caja: "6",
                productos: [
                    { nombre: "Té", cantidad: 2, precio: 18, costo: 6, total: 36, costoTotal: 12 },
                    { nombre: "Helado", cantidad: 1, precio: 40, costo: 15, total: 40, costoTotal: 15 }
                ],
                total: 76,
                totalEnTxt: NumerosALetras(76),
                costoTotal: 27,
                descuento: 10 // Nuevo campo descuento
            }
        ]
    },
    {
        fecha: "15/02/2025",
        tickets: [
            {
                fechaTransaccion: {
                    fecha: "15/02/2025",
                    hora: "14:20"
                },
                usuario: {
                    nombre: "Sofía",
                    apellido: "Hernández"
                },
                caja: "7",
                productos: [
                    { nombre: "Jugo", cantidad: 1, precio: 30, costo: 12, total: 30, costoTotal: 12 },
                    { nombre: "Queso", cantidad: 1, precio: 50, costo: 20, total: 50, costoTotal: 20 }
                ],
                total: 80,
                totalEnTxt: NumerosALetras(80),
                costoTotal: 32,
                descuento: 12 // Nuevo campo descuento
            }
        ]
    },
    {
        fecha: "16/02/2025",
        tickets: [
            {
                fechaTransaccion: {
                    fecha: "16/02/2025",
                    hora: "16:45"
                },
                usuario: {
                    nombre: "Ricardo",
                    apellido: "Ortega"
                },
                caja: "8",
                productos: [
                    { nombre: "Whiskey", cantidad: 1, precio: 120, costo: 50, total: 120, costoTotal: 50 },
                    { nombre: "Frutas", cantidad: 1, precio: 45, costo: 18, total: 45, costoTotal: 18 }
                ],
                total: 165,
                totalEnTxt: NumerosALetras(165),
                costoTotal: 68,
                descuento: 20 // Nuevo campo descuento
            }
        ]
    },
    {
        fecha: "17/02/2025",
        tickets: [
            {
                fechaTransaccion: {
                    fecha: "17/02/2025",
                    hora: "18:00"
                },
                usuario: {
                    nombre: "Laura",
                    apellido: "Díaz"
                },
                caja: "9",
                productos: [
                    { nombre: "Galletas", cantidad: 2, precio: 25, costo: 10, total: 50, costoTotal: 20 },
                    { nombre: "Cupcake", cantidad: 1, precio: 30, costo: 12, total: 30, costoTotal: 12 }
                ],
                total: 80,
                totalEnTxt: NumerosALetras(80),
                costoTotal: 32,
                descuento: 5 // Nuevo campo descuento
            }
        ]
    },
    {
        fecha: "18/02/2025",
        tickets: [
            {
                fechaTransaccion: {
                    fecha: "18/02/2025",
                    hora: "19:30"
                },
                usuario: {
                    nombre: "Miguel",
                    apellido: "Fernández"
                },
                caja: "10",
                productos: [
                    { nombre: "Dona", cantidad: 1, precio: 25, costo: 10, total: 25, costoTotal: 10 },
                    { nombre: "Chocolate", cantidad: 1, precio: 55, costo: 20, total: 55, costoTotal: 20 }
                ],
                total: 80,
                totalEnTxt: NumerosALetras(80),
                costoTotal: 30,
                descuento: 10 // Nuevo campo descuento
            }
        ]
    }
];


export const usuariosData  = [
    { id: 1, nombre: "Juan", apellido: "Pérez", correo: "juan@example.com", contraseña: "123456", fechaIngreso: "2023-01-15", rol: "Admin", Fn: "Editar" },
    { id: 2, nombre: "María", apellido: "Gómez", correo: "maria@example.com", contraseña: "abcdef", fechaIngreso: "2023-02-10", rol: "Usuario", Fn: "Eliminar" },
    { id: 3, nombre: "Carlos", apellido: "López", correo: "carlos@example.com", contraseña: "qwerty", fechaIngreso: "2023-03-05", rol: "Usuario", Fn: "Editar" },
    { id: 4, nombre: "Ana", apellido: "Martínez", correo: "ana@example.com", contraseña: "password", fechaIngreso: "2023-04-20", rol: "Admin", Fn: "Eliminar" },
    { id: 5, nombre: "Luis", apellido: "Rodríguez", correo: "luis@example.com", contraseña: "123abc", fechaIngreso: "2023-05-12", rol: "Usuario", Fn: "Editar" },
    { id: 6, nombre: "Laura", apellido: "Sánchez", correo: "laura@example.com", contraseña: "abc123", fechaIngreso: "2023-06-18", rol: "Usuario", Fn: "Eliminar" },
    { id: 7, nombre: "Pedro", apellido: "García", correo: "pedro@example.com", contraseña: "pass123", fechaIngreso: "2023-07-22", rol: "Admin", Fn: "Editar" },
    { id: 8, nombre: "Sofía", apellido: "Fernández", correo: "sofia@example.com", contraseña: "123pass", fechaIngreso: "2023-08-30", rol: "Usuario", Fn: "Eliminar" },
    { id: 9, nombre: "Miguel", apellido: "Torres", correo: "miguel@example.com", contraseña: "qwe123", fechaIngreso: "2023-09-14", rol: "Usuario", Fn: "Editar" },
    { id: 10, nombre: "Elena", apellido: "Ruiz", correo: "elena@example.com", contraseña: "123qwe", fechaIngreso: "2023-10-05", rol: "Admin", Fn: "Eliminar" },
    { id: 11, nombre: "Jorge", apellido: "Díaz", correo: "jorge@example.com", contraseña: "pass456", fechaIngreso: "2023-11-11", rol: "Usuario", Fn: "Editar" },
    { id: 12, nombre: "Carmen", apellido: "Vargas", correo: "carmen@example.com", contraseña: "456pass", fechaIngreso: "2023-12-25", rol: "Usuario", Fn: "Eliminar" },
    { id: 13, nombre: "Daniel", apellido: "Castro", correo: "daniel@example.com", contraseña: "abc456", fechaIngreso: "2024-01-01", rol: "Admin", Fn: "Editar" },
    { id: 14, nombre: "Isabel", apellido: "Morales", correo: "isabel@example.com", contraseña: "456abc", fechaIngreso: "2024-02-14", rol: "Usuario", Fn: "Eliminar" },
    { id: 15, nombre: "Francisco", apellido: "Ortega", correo: "francisco@example.com", contraseña: "pass789", fechaIngreso: "2024-03-08", rol: "Usuario", Fn: "Editar" },
    { id: 16, nombre: "Patricia", apellido: "Reyes", correo: "patricia@example.com", contraseña: "789pass", fechaIngreso: "2024-04-22", rol: "Admin", Fn: "Eliminar" },
    { id: 17, nombre: "Antonio", apellido: "Méndez", correo: "antonio@example.com", contraseña: "qwe789", fechaIngreso: "2024-05-30", rol: "Usuario", Fn: "Editar" },
    { id: 18, nombre: "Lucía", apellido: "Herrera", correo: "lucia@example.com", contraseña: "789qwe", fechaIngreso: "2024-06-15", rol: "Usuario", Fn: "Eliminar" },
    { id: 19, nombre: "Manuel", apellido: "Jiménez", correo: "manuel@example.com", contraseña: "pass000", fechaIngreso: "2024-07-04", rol: "Admin", Fn: "Editar" },
    { id: 20, nombre: "Raquel", apellido: "Navarro", correo: "raquel@example.com", contraseña: "000pass", fechaIngreso: "2024-08-19", rol: "Usuario", Fn: "Eliminar" }
];