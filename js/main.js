/*Crea un array composto da 10 automobili. Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, elettrica, ibrida, gpl).
Dividi le automobili in 3 array separati:
nel primo array solo le auto a benzina,
nel secondo solo le auto a diesel,
nel terzo il resto delle auto.*/

//Creo un array da 10 automobili//
let cars = [
    { nome: "Alfa Romeo", modello: "Giulietta", alimentazione: "Diesel" },
    { nome: "Alfa Romeo", modello: "Giulia", alimentazione: "Benzina" },
    { nome: "BMW", modello: "X5", alimentazione: "Benzina" },
    { nome: "BMW", modello: "M5", alimentazione: "Benzina" },
    { nome: "Toyota", modello: "HR", alimentazione: "Ibrida" },
    { nome: "Toyota", modello: "Yaris", alimentazione: "Ibrida" },
    { nome: "Hyindai", modello: "Bayon", alimentazione: "GPL" },
    { nome: "Fiat", modello: "Panda", alimentazione: "GPL" },
    { nome: "Fiat", modello: "500X", alimentazione: "GPL" },
    { nome: "Nissan", modello: "Leaf", alimentazione: "Ellettrica" },
  ];
  
  //Divido le auto in 3 array separati//
  let listaMacchineBenzina = [];
  let listaMacchineDiesel = [];
  let listaMacchineRimaste = [];
  
  cars.forEach(function (cars) {
    if (cars.alimentazione == "Benzina") {
      listaMacchineBenzina.push(cars);
    } else if (cars.alimentazione == "Diesel") {
      listaMacchineDiesel.push(cars);
    } else {
      listaMacchineRimaste.push(cars);
    }
  });
  
  console.log(listaMacchineBenzina);
  console.log(listaMacchineDiesel);
  console.log(listaMacchineRimaste);