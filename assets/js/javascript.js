function Pokemon(nombre,color,poderDeAtaque){
this.nombre = nombre
this.color = color
this.nivelDeAmistad = 0
this.vida = 100
this.poderDeAtaque = poderDeAtaque

this.mostrarPokemon = function(){
	return("Hola, soy: "+ this.nombre+" y soy de color: "+this.color)
}

this.aumentarAmistad = function(valor){
	return (this.nivelDeAmistad = this.nivelDeAmistad + valor)
}

this.atacar = function(pokemon){
	pokemon.vida = pokemon.vida - this.poderDeAtaque
}
}

function pelear(){
	var uno = document.getElementById("choose").value;
	var dos = document.getElementById("elige").value;

	var primero = new Pokemon (uno,"amarillo",100)
	var segundo = new Pokemon (dos,"rojo",20)


	if(uno == dos){
		alert("Elegiste el mismo Pokemon!")
		return;
	}
var ataq = prompt("Ingresa poder de ataque primer Pokemon");
var ataq2 = prompt("Ingresa poder de ataque segundo Pokemon");
var life = segundo.vida - ataq
var ataque = primero.atacar(dos)
var final = document.getElementById("final")
final.innerHTML = "<b>"+uno+"</b>"+ " atacó a "+"<b>"+dos+"</b> y <i>"+dos+"</i> tiene una vida de: "+life+" restante."
 
}

