/*Tomamos el nombre del usuario para saludarlo */

function saludo(){
	var nombre = prompt("¿Como te llamas?");
	if(nombre != Number(nombre) && nombre != ""){
		return document.getElementById("saludar").innerHTML = "<span>Hola </span>" + nombre;
	}else{
		return alert("Nombre no valido");
	}
}

saludo();


/*Desde aca para calcular los dias transcurridos hasta hoy */

var diaHoy = new Date();
var numeroHoy = diaHoy.getDate();
var mesActual = diaHoy.getMonth() + 1;
var yearActual = diaHoy.getFullYear()

/*Cuenta dias hasta fin del mes anterior al dado */
	
function diasHastaMesPasado(mes){
	var diasPasados = 0;
	switch(mes){
		case 1:
			diasPasados = 0;
			break;
		case 2:
			diasPasados = 31;
			break;
		case 3:
			diasPasados = 59;
			break;
		case 4:
			diasPasados = 90;
			break;
		case 5:
			diasPasados = 120;
			break;
		case 6:
			diasPasados = 151;
			break;
		case 7:
			diasPasados = 181;
			break;
		case 8:
			diasPasados = 212;
			break;
		case 9:
			diasPasados = 243;
			break;
		case 10:
			diasPasados = 273;
			break;
		case 11:
			diasPasados = 304;
			break;
		case 12:
			diasPasados = 334;
			break;	
	}
	return diasPasados;
}




/********************************************************* */
/*Se suman loss valores de  diasHastaMesPasado y numeroHoy para obtener el numero del dia en el que nos encontramos hoy*/

var numDiasSinBisiesto = numeroHoy + diasHastaMesPasado(mesActual);

/***********************************************************************************/
/*Funcion que devuelve la cantidad de dias transcurridos del año hasta el dia de hoy verificando si el año es bisiesto*/

function totalDiasHastaHoy(){
	if(esBisiesto(yearActual) && mesActual > 2){
		return numDiasSinBisiesto = numDiasSinBisiesto + 1;
	}else{
		return numDiasSinBisiesto;
	}
}

/*se guarda lo anterior en una variable */

var numDiaHoy =  totalDiasHastaHoy();

/********************************************************************************************************** */
/*Desde aca todo para vcerificar lo del usuario */

var diaCumple = 0;
var mesCumple = 0;



/*Funciones que comprueban los datos ingresados por el usuario */

function esMesCon31(num){
	return num == 1 || num == 3 || num == 5 || num == 7 || num == 8 || num == 10 || num == 12;
}

function esMesCon30(num){
	return num == 4 || num == 6 || num == 9 || num == 11;
}

function esMesCon29(num){
	return num == 2;
}

function esNumero(ent){
	return ent == Number(ent);
}
function esMesValido(num){
	return esNumero(num) && num > 0 && num <=12;
}

function esDiaValido31(num){
	return esNumero(num) && num <= 31  && num > 0;
}

function esDiaValido30(num){
	return esNumero(num) && num <= 30  && num > 0;
}

function esDiaValido29(num){
	return esNumero(num) && num <= 29  && num > 0;
}

function esBisiesto(year) {
	return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
}

function esFechaValida31(dia, mes){
	return esDiaValido31(dia) && esMesCon31(mes);
}

function esFechaValida30(dia, mes){
	return esDiaValido30(dia) && esMesCon30(mes);
}

function esFechaValida29(dia, mes){
	return esDiaValido29(dia) && esMesCon29(mes);
}

function esFechaValida(dia, mes){
		return esFechaValida30(dia, mes) || esFechaValida31(dia, mes) || esFechaValida29(dia, mes);
}




/*********************************************************************************** */
/*Funcion que devuelve cuantos dias faltan para el cumpleaños */

function cuantosDiasParaCumple(diaQueCumple){
	var diasParaCumplir= 0
	if(numDiaHoy < diaQueCumple){
		diasParaCumplir = diaQueCumple - numDiaHoy;
	}else{
		diasParaCumplir = 365 - (numDiaHoy - diaQueCumple);
	}
	return diasParaCumplir;
}


/****************************************************************************** */

var numDiaCumple = 0;
/*Recibe la info del usuario, la verifica y la almacena */
function fechaCumple(){
	var dia = prompt("Ingresa el dia de tu cumpleaños en numeros");
	/*Validamos y convertimos lo que el usuario pone en numero */
	if(esDiaValido31(dia)){
		dia = Number(dia);
		diaCumple = dia;
	}else{
		alert("No es un dia valido");
	}

	var mes = prompt("Ingresa el mes de tu cumpleaños en numeros");
	if(esMesValido(mes)){
		mes = Number(mes);
		mesCumple = mes;
	}else{
		alert("No es un mes valido");
	}

/*Calculamos el numero de dia en que cumple el usuario */
	numDiaCumple = diaCumple + diasHastaMesPasado(mesCumple);
/*Validación final y cuenta final para saber cuanto falta para el proximo cumple */
	if(esFechaValida(diaCumple, mesCumple) && esMesValido(mesCumple) && esDiaValido31(diaCumple)){
		alert(cuantosDiasParaCumple(numDiaCumple));
	}else{
		alert("No es fecha valida. Intente de nuevo");
	}
	
}

/************************************************************************************************************* */


/*comenzamos codigo para la seccion de cuantos dias faltan para que se termine el año*/

function diasParaTerminarElAno(){
	var diasQueQuedanDelano = 0;
	if(esBisiesto(yearActual) && numDiaHoy <= 60){
		diasQueQuedanDelano = 367 - numDiaHoy;
	}else{
		diasQueQuedanDelano = 366 - numDiaHoy;
	}
	return diasQueQuedanDelano;
}



/*************************************************************************************************git */
/*funciones signo */


function aries(num){
	if(num > 79 && num < 110){
		return "Aries";	
	} 
}

function tauro(num){
	if(num > 109 && num < 141){
		return "Tauro";	
	}
}

function geminis(num){
	if(num > 140 && num < 172){
		return "Geminis";	
	}
	
}

function cancer(num){
	if(num > 171 && num < 204){
		return "Cancer";	
	}
	
}

function leo(num){
	if(num > 203 && num < 235){
		return "Leo";	
	}
	
}

function virgo(num){
	if(num > 234 && num < 266){
		return "Virgo";	
	}
	
}

function libra(num){
	if(num > 265 && num < 296){
		return "Libra";	
	}
	
}

function escorpio(num){
	if(num > 295 && num < 326){
		return "Escorpio";	
	}
}

function sagitario(num){
	if(num > 325 && num < 356){
		return "Sagitario";	
	}
}

function capricornio(num){
	if((num > 355 && num < 366)  || (num > 0 && num < 20)){
		return "Capricornio";
	}
}

function acuario(num){
	 if(num > 19  && num < 50){
	 	return "Acuario";
	}
}

function piscis(num){
	if(num > 49  && num < 80){
		return "Piscis";
	}
}


/*Funcion que devuelve el signo correcto */

function todosLosSignos(num){
	return aries(num) || tauro(num) || geminis(num) || cancer(num) || leo(num) || virgo(num) || libra(num) || escorpio(num) || sagitario(num) || capricornio(num) || acuario(num) || piscis(num);
}




/*************************************************************************** */

/*Funcion final que se desencadena con el evento click */

function teDigoTuSigno(){
	var dia = prompt("Ingresa el dia de tu cumpleaños en numeros");
	/*Validamos y convertimos lo que el usuario pone en numero */
	if(esDiaValido31(dia)){
		dia = Number(dia);
		diaCumple = dia;
	}else{
		alert("No es un dia valido");
	}
	var mes = prompt("Ingresa el mes de tu cumpleaños en numeros");
	if(esMesValido(mes)){
		mes = Number(mes);
		mesCumple = mes;
	}else{
		alert("No es un mes valido");
	}

/*Calculamos el numero de dia en que cumple el usuario */
	numDiaCumple = diaCumple + diasHastaMesPasado(mesCumple);

/*Validación final y cuenta final para saber cuanto falta para el proximo cumple */
	if(esFechaValida(diaCumple, mesCumple) && esMesValido(mesCumple) && esDiaValido31(diaCumple)){
		alert("Tu signo es " + todosLosSignos(numDiaCumple));
	}else{
		alert("No es fecha valida. Intente de nuevo");
	}
	
}




