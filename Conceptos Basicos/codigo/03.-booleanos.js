//En este tipo de datos solo se tienen dos salidas true/false
let userName = true;
let userId   = false;
//Como tal casi nunca se va asignar true o false, es mas una salida de una funcion o expression 

//Todo lo que sea 0/undefined, NaN, null, -0, "", false simpre dara falso
let active = Boolean(0)
//-1, 1 o cualquier numero, "una cadena no vacia", simpre daran true
let online = Boolean(1)

console.log(`Salida false: ${active}`);
console.log(`Salida true: ${online}`);