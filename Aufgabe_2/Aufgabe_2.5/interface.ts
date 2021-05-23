namespace Aufgabe_2_5 {


    export interface Pizzapart {
        option: string;
        image: string;

    }
    export interface Pizza {
        groesse: Pizzapart[];
        service: Pizzapart[];
        toppings: Pizzapart[];
    }
    export interface ServerAnswer {
        [key: string]: string;
    }


  
}
