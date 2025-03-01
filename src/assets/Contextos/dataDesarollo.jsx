import { GiBeerStein, GiCoffeeCup, GiSodaCan, GiCupcake, GiIceCreamCone, GiDonut, GiHotDog, GiFrenchFries, GiPizzaSlice, GiHamburger, GiCakeSlice, GiWaterBottle, GiMilkCarton, GiFruitBowl, GiChocolateBar } from "react-icons/gi";
import { FaMugHot, FaGlassWhiskey, FaCookie, FaAppleAlt, FaCheese, FaBreadSlice } from "react-icons/fa";
import { MdLocalDrink, MdIcecream } from "react-icons/md";

export const categoriasProductos = [
    {
        categoria: "Bebidas",
        items: [
            { id: 1, txt: "Cerveza", icon: <GiBeerStein />, costo: 15, precio: 35 },
            { id: 2, txt: "Café", icon: <GiCoffeeCup />, costo: 8, precio: 20 },
            { id: 3, txt: "Refresco", icon: <GiSodaCan />, costo: 10, precio: 25 },
            { id: 4, txt: "Whiskey", icon: <FaGlassWhiskey />, costo: 50, precio: 120 },
            { id: 5, txt: "Agua", icon: <GiWaterBottle />, costo: 5, precio: 15 },
            { id: 6, txt: "Leche", icon: <GiMilkCarton />, costo: 7, precio: 18 },
            { id: 7, txt: "Té", icon: <FaMugHot />, costo: 6, precio: 18 },
            { id: 8, txt: "Jugo", icon: <MdLocalDrink />, costo: 12, precio: 30 }
        ]
    },
    {
        categoria: "Comida Rápida",
        items: [
            { id: 9, txt: "Hamburguesa", icon: <GiHamburger />, costo: 25, precio: 60 },
            { id: 10, txt: "Pizza", icon: <GiPizzaSlice />, costo: 30, precio: 75 },
            { id: 11, txt: "Hot Dog", icon: <GiHotDog />, costo: 12, precio: 30 },
            { id: 12, txt: "Papas Fritas", icon: <GiFrenchFries />, costo: 10, precio: 25 },
            { id: 13, txt: "Sándwich", icon: <FaBreadSlice />, costo: 15, precio: 40 },
            { id: 14, txt: "Queso", icon: <FaCheese />, costo: 20, precio: 50 },
            { id: 15, txt: "Frutas", icon: <GiFruitBowl />, costo: 18, precio: 45 }
        ]
    },
    {
        categoria: "Postres",
        items: [
            { id: 16, txt: "Pastel", icon: <GiCakeSlice />, costo: 35, precio: 90 },
            { id: 17, txt: "Galletas", icon: <FaCookie />, costo: 10, precio: 25 },
            { id: 18, txt: "Helado", icon: <MdIcecream />, costo: 15, precio: 40 },
            { id: 19, txt: "Cupcake", icon: <GiCupcake />, costo: 12, precio: 30 },
            { id: 20, txt: "Dona", icon: <GiDonut />, costo: 10, precio: 25 },
            { id: 21, txt: "Chocolate", icon: <GiChocolateBar />, costo: 20, precio: 55 },
            { id: 22, txt: "Manzana Caramelizada", icon: <FaAppleAlt />, costo: 18, precio: 45 },
            { id: 23, txt: "Cono de Helado", icon: <GiIceCreamCone />, costo: 12, precio: 35 }
        ]
    }
];
