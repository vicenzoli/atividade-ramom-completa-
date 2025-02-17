let numero = 0;
let SaberNumero = numero === 0 ? "zero" : 
    (numero % 2 === 0 ? (numero > 0 ? "par positivo" : "par negativo") :
    (numero > 0 ? "impar positivo" : "impar negativo"));

console.log(SaberNumero);