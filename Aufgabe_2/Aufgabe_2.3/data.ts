namespace Aufgabe_2_3 {

//Aufgabe 2c)

//Größen
export let größen: Größe[] = [];
größen.push({durchmesser: 20, image: "pizza.png", preis: "6,00€"});

größen.push({durchmesser: 25, image: "pizza.png", preis: "7,00€"});

größen.push({durchmesser: 30, image: "pizza.png", preis: "8,00€"});

//Toppings
export let toppings: Toppings[] = [];
toppings.push({toppings: "Salami", image: "bild.jpeg", aufpreis: "0,50€"});

toppings.push({toppings: "Mais", image: "bild.jpeg", aufpreis: "0,50€"});

toppings.push({toppings: "Champignions", image: "bild.jpeg", aufpreis: "0,50€"});

//Bestelloption
export let service: Order[] = [];
service.push({service: "Lieferung", image: "bild.jepg", aufpreis: "1,00€"});

service.push({service: "Abholung", image: "bild.jepg", aufpreis: "0,00€"});

service.push({service: "Vorort", image: "bild.jepg", aufpreis: "0,00€"});

}
