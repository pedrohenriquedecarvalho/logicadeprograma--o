function diadasemana(dias)  {
const resto = dias % 7;
if(resto == 0){
    console.log("Domingo")

}else if ( resto == 1){
    console.log("Segunda")

}else if ( resto == 2 ){
    console.log("terça")

}else if ( resto == 3 ){
    console.log("quarta")

}else if ( resto == 4 ){
    console.log("quinta")

}else if ( resto == 5 ){
    console.log("sexta")

}else if ( resto == 6 ){
    console.log("sabado")

}else if ( resto == 7  ){
    console.log("domingo")
}
}
diadasemana(15);