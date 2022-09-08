const pelisFavoritas=[];
const seriesFavoritas=[];
let limite= 3;

do{
    let seleccion=prompt("Ingrese una de sus peliculas favoritas");
    pelisFavoritas.push(seleccion.toUpperCase());
    console.log(pelisFavoritas.length)

}while(pelisFavoritas.length!=limite)

do{
    let seleccionSeries=prompt("ingrese sus series favoritas")
    seriesFavoritas.push(seleccionSeries.toUpperCase())
    console.log(seriesFavoritas.length)
}while(seriesFavoritas.length!=limite)

alert("sus 3 peliculas favoritas son: \n" +pelisFavoritas.join("\n")+"\n Sus 3 series favoritas son:\n" +seriesFavoritas.join("\n"))