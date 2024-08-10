const pessoa = {
    nome: "pedro" ,
    idade : 16 ,
    ehmaiordeidade : false , 
    altura : 1.82
};

if(pessoa.idade < 18) {
    console.log(` ${pessoa.nome} é criança de ${pessoa.idade} anos`)
}
else if (pessoa.idade < 60 ) {
    console.log(` ${pessoa.nome} é adulto de ${pessoa.idade} anos`)
}
else{
    console.log(` ${pessoa.nome} é idoso de ${pessoa.idade} anos `)
}
