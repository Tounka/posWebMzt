import { GiBeerStein, GiCoffeeCup, GiSodaCan, GiCupcake, GiIceCreamCone, GiDonut, GiHotDog, GiFrenchFries, GiPizzaSlice, GiHamburger, GiCakeSlice, GiWaterBottle, GiMilkCarton, GiFruitBowl, GiChocolateBar } from "react-icons/gi";
import { FaMugHot, FaGlassWhiskey, FaCookie, FaAppleAlt, FaCheese, FaBreadSlice } from "react-icons/fa";
import { MdLocalDrink, MdIcecream } from "react-icons/md";
import { NumerosALetras } from "numero-a-letras";
import { iconos, iconosUtils } from "../img/uitls/iconos";

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
export const productosBrutosDb = [
    {
        id: 1,
        nombre: "Pestañas Postizas Clásicas",
        descripcion: "Pestañas postizas de estilo clásico para un look natural.",
        marca: "LashLux",
        costo: 50,
        precio: 120,
        categoria: "Pestañas",
        subCategoria: "Postizas",
        icono: "GiEyelashes",
    },
    {
        id: 2,
        nombre: "Pestañas de Seda",
        descripcion: "Pestañas de seda suave y ligera para un acabado natural.",
        marca: "SilkLash",
        costo: 60,
        precio: 140,
        categoria: "Pestañas",
        subCategoria: "Postizas",
        icono: "GiEyelashes",
    },
    {
        id: 3,
        nombre: "Pestañas de Colores",
        descripcion: "Pestañas postizas en colores vibrantes para un look divertido.",
        marca: "ColorLash",
        costo: 45,
        precio: 100,
        categoria: "Pestañas",
        subCategoria: "Postizas",
        icono: "MdOutlineColorLens",
    },
    {
        id: 4,
        nombre: "Pestañas Magnéticas",
        descripcion: "Pestañas magnéticas fáciles de aplicar sin pegamento.",
        marca: "MagneticLash",
        costo: 70,
        precio: 150,
        categoria: "Pestañas",
        subCategoria: "Magnéticas",
        icono: "FaMagnet",
    },
    {
        id: 5,
        nombre: "Pegamento para Pestañas",
        descripcion: "Pegamento de larga duración para pestañas postizas.",
        marca: "LashGrip",
        costo: 10,
        precio: 25,
        categoria: "Accesorios",
        subCategoria: "Pegamentos",
        icono: "FaSprayCan",
    },
    {
        id: 6,
        nombre: "Rimel Volumizador",
        descripcion: "Rimel para dar volumen y longitud a tus pestañas.",
        marca: "VolumLash",
        costo: 15,
        precio: 35,
        categoria: "Maquillaje",
        subCategoria: "Rimel",
        icono: "FaBrush",
    },
    {
        id: 7,
        nombre: "Rimel Impermeable",
        descripcion: "Rimel resistente al agua para un look duradero.",
        marca: "AquaLash",
        costo: 18,
        precio: 40,
        categoria: "Maquillaje",
        subCategoria: "Rimel",
        icono: "FaBrush",
    },
    {
        id: 8,
        nombre: "Cepillo para Pestañas",
        descripcion: "Cepillo para separar y definir pestañas.",
        marca: "LashTool",
        costo: 5,
        precio: 15,
        categoria: "Accesorios",
        subCategoria: "Herramientas",
        icono: "MdOutlineBrush",
    },
    {
        id: 9,
        nombre: "Curvador de Pestañas",
        descripcion: "Curvador profesional para un look impactante.",
        marca: "CurlPro",
        costo: 8,
        precio: 20,
        categoria: "Accesorios",
        subCategoria: "Herramientas",
        icono: "FaAngleDoubleUp",
    },
    {
        id: 10,
        nombre: "Kit de Extensión de Pestañas",
        descripcion: "Kit completo para extensiones de pestañas en casa.",
        marca: "LashKit",
        costo: 80,
        precio: 180,
        categoria: "Pestañas",
        subCategoria: "Extensiones",
        icono: "GiEyelashes",
    },
    {
        id: 11,
        nombre: "Serum para Crecimiento de Pestañas",
        descripcion: "Serum fortalecedor para pestañas más largas y gruesas.",
        marca: "LashGrow",
        costo: 30,
        precio: 70,
        categoria: "Cuidado",
        subCategoria: "Sérums",
        icono: "FaEyeDropper",
    },
    {
        id: 12,
        nombre: "Toallitas Desmaquillantes",
        descripcion: "Toallitas suaves para desmaquillar pestañas y ojos.",
        marca: "LashWipe",
        costo: 12,
        precio: 30,
        categoria: "Cuidado",
        subCategoria: "Limpieza",
        icono: "MdOutlineSpa",
    },
    {
        id: 13,
        nombre: "Tinte para Pestañas",
        descripcion: "Tinte duradero para pestañas y cejas.",
        marca: "LashTint",
        costo: 20,
        precio: 50,
        categoria: "Maquillaje",
        subCategoria: "Tintes",
        icono: "IoColorPaletteOutline",
    },
    {
        id: 14,
        nombre: "Pestañas de Cola de Sirena",
        descripcion: "Pestañas postizas con diseño de cola de sirena.",
        marca: "MermaidLash",
        costo: 55,
        precio: 130,
        categoria: "Pestañas",
        subCategoria: "Postizas",
        icono: "GiSparkles",
    },
    {
        id: 15,
        nombre: "Pestañas de Diamantes",
        descripcion: "Pestañas postizas con detalles de diamantes.",
        marca: "DiamondLash",
        costo: 65,
        precio: 150,
        categoria: "Pestañas",
        subCategoria: "Postizas",
        icono: "GiSparkles",
    },
    {
        id: 16,
        nombre: "Pestañas de Fantasía",
        descripcion: "Pestañas postizas para looks extravagantes.",
        marca: "FantasyLash",
        costo: 40,
        precio: 90,
        categoria: "Pestañas",
        subCategoria: "Postizas",
        icono: "GiSparkles",
    },
    {
        id: 17,
        nombre: "Pestañas Naturales",
        descripcion: "Pestañas postizas con un acabado natural.",
        marca: "NaturalLash",
        costo: 35,
        precio: 80,
        categoria: "Pestañas",
        subCategoria: "Postizas",
        icono: "GiEyelashes",
    },
    {
        id: 18,
        nombre: "Pestañas de Seda con Brillo",
        descripcion: "Pestañas de seda con un toque de brillo.",
        marca: "ShinyLash",
        costo: 50,
        precio: 110,
        categoria: "Pestañas",
        subCategoria: "Postizas",
        icono: "GiSparkles",
    },
    {
        id: 19,
        nombre: "Pestañas de Gato",
        descripcion: "Pestañas postizas con diseño de gato.",
        marca: "CatLash",
        costo: 45,
        precio: 100,
        categoria: "Pestañas",
        subCategoria: "Postizas",
        icono: "GiEyelashes",
    },
    {
        id: 20,
        nombre: "Pestañas de Mariposa",
        descripcion: "Pestañas postizas con diseño de mariposa.",
        marca: "ButterflyLash",
        costo: 50,
        precio: 120,
        categoria: "Pestañas",
        subCategoria: "Postizas",
        icono: "GiEyelashes",
    },
];

export const tratarProductos = (productosBrutos) =>{

    const ProductosTratados = productosBrutos.map((producto) => {
        return {
            ...producto, 
            icono: iconos[producto.icono], // Cambia la propiedad `icono` al valor deseado
        };
    });

    return(ProductosTratados);
}
export const productos = tratarProductos(productosBrutosDb);

 const convertirProductos = (productos) => {
    const categoriasMap = new Map();
    
    productos.forEach((producto, index) => {
        if (!categoriasMap.has(producto.categoria)) {
            categoriasMap.set(producto.categoria, []);
        }
        
        categoriasMap.get(producto.categoria).push({
            id: producto.id, // Genera un ID basado en la posición en la lista
            nombre: producto.nombre,
            icono: producto.icono, 
            costo: producto.costo,
            precio: producto.precio
        });
    });
    
    return Array.from(categoriasMap, ([categoria, items]) => ({ categoria, items }));
};

export const categoriasProductos = convertirProductos(productos) //  Se construye a apartir de productos 

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
    id: 1,
    cajaId : 1,

}

export const ticketsDb = [
    {
        id: "1742762547578-924",
        fechaTransaccion: new Date("2025-02-12T12:22:00"),
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
        descuento: 10
    },
    {
        id: "1742762547580-925",
        fechaTransaccion: new Date("2025-02-12T13:45:00"),
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
        descuento: 15
    },
    {
        id: "1742762547582-926",
        fechaTransaccion: new Date("2025-02-13T10:15:00"),
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
        descuento: 5
    },
    {
        id: "1742762547584-927",
        fechaTransaccion: new Date("2025-02-13T11:50:00"),
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
        descuento: 0
    },
    {
        id: "1742762547586-928",
        fechaTransaccion: new Date("2025-02-14T09:30:00"),
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
        descuento: 8
    },
    {
        id: "1742762547588-929",
        fechaTransaccion: new Date("2025-02-14T12:00:00"),
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
        descuento: 10
    },
    {
        id: "1742762547590-930",
        fechaTransaccion: new Date("2025-02-15T14:20:00"),
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
        descuento: 12
    },
    {
        id: "1742762547592-931",
        fechaTransaccion: new Date("2025-02-16T16:45:00"),
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
        descuento: 20
    },
    {
        id: "1742762547594-932",
        fechaTransaccion: new Date("2025-02-17T18:00:00"),
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
        descuento: 5
    },
    {
        id: "1742762547596-933",
        fechaTransaccion: new Date("2025-02-18T19:30:00"),
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
        descuento: 10
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

export const CategoriasDb = [
    { id: 1, nombre: "Pestañas", parent_id: 2, icono: "icono1" },
    { id: 2, nombre: "Maquillaje", parent_id: null, icono: "icono2" },
    { id: 3, nombre: "Labiales", parent_id: 2, icono: "icono3" }
  ]

export const CajasDb =[]
  