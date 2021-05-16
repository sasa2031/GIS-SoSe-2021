
namespace Aufgabe_2_4 {
  //Aufgabe 1

  export let myJSON: string = `
{
"groesse":[
{
"option":"20cm",
"image":"pizza_20.png"
},
{
"option":"25cm",
"image":"pizza_25.png"
},
{
"option":"30cm",
"image":"pizza_30.png"
}
],
"toppings":[
{
"option":"Salami",
"image":"salami.png"
},
{
"option":"Mais",
"image":"mais.png"
},
{
"option":"Champignons",
"image":"Champignons.png"
}
],
"service":[
{
"option":"Lieferung",
"image":"lieferung.png"
},
{
"option":"Abholung",
"image":"abholung.png"
},
{
"option":"Vorort",
"image":"vorort.png"
}
]
}`;

  export let myObj: Pizza = JSON.parse(myJSON);
}
  


