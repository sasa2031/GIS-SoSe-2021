namespace Aufgabe_2_4 {

    //Aufgabe 2
    // export interface Größe {

    //     durchmesser: number;
    //     image: string;


    // }
    // export interface Toppings {

    //     toppings: string;
    //     image: string;



    // }
    // export interface Order {

    //     service: string;
    //     image: string;


    // }
    // export interface Pizza {     //2b) --> wird erst nächste Woche gebraucht
    //     größe: Größe;
    //     toppings: Toppings;
    //     order: Order;
    // }

    export interface Pizzapart {
        option: string;
        image: string;

    }
    export interface Pizza {
        groesse: Pizzapart[];
        service: Pizzapart[];
        toppings: Pizzapart[];
    }


    // export let allParts: Pizza = {
    //     groesse: [
    //         { option: "20cm", image: "pizza_20.png" },
    //         { option: "25cm", image: "pizza_25.png" },
    //         { option: "30cm", image: "pizza_30.png" }
    //     ],
    //     toppings: [
    //         { option: "Salami", image: "salami.png" },
    //         { option: "Mais", image: "mais.png" },
    //         { option: "Champignons", image: "Champignons.png" }
    //     ],
    //     service: [
    //         { option: "Lieferung", image: "bild.jpeg" },
    //         { option: "Abholung", image: "bild.jpeg" },
    //         { option: "Vorort", image: "bild.jpeg" }
    //     ]
    // };
    }
