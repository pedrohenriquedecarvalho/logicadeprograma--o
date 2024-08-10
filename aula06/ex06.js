

const pessoa = {
    nome: "pedro" ,
    idade : 60 ,
    ehmaiordeidade : false , 
    altura : 1.82
};
 console.log("pessoa");

if(pessoa.idade < 18) {
    console.log("menor de idade")
}
else if (pessoa.idade < 60 ) {
    console.log("maior de idade")
}
else{
    console.log("idoso")
}
