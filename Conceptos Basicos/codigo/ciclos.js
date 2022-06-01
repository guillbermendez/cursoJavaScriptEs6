//Los ciclos son bluques de codigo que se ejecutan repetidamente
//este se detendra cuando se cumpla el requisito

// imprime hasta el numero 10
/*
1.-se declara una variable con valor inicial 1 necesitamos incrementar el valor de 1 en 1 hasta 10.
2.-se declara la condicion, el programa va a parar cuando i sea menor o igual a 10.
3.-se declara la instruccion que se ejecutara por cada iteracion del bloque de codigo hasta que se cumpla
la intruccion de la linea 2.
*/ 
for (let i = 1; i <= 10; i++){
 //console.log(i);
}

//cuando nse ecnuentre la palabra break el ciclo se va a detner automaticamente
for (let e = 1; e <= 10; e++){
    //console.log(e);
    if(e % 2 != 0){ continue;}
    //console.log("es par");
 }

 //Este bloque de codigo hace lo mismo que el  primero bloque con for
 let a = 1;
 while(a <= 10){
     //console.log(a);
     a++;
 }

 //en comparacion al while, el cambio es en el oreden de ejecucion, primero se itera y despues se
 //lee la condicion, por lo menos se va a ejecutar una vez o mas antes de cumplir la condicion
 let age = 1;
 do {
    age++;
   console.log(age)  
 } while (age <= 18);