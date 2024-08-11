const pessoa = {
    nome: "pedro" ,
    idade : 16 ,
    ehmaiordeidade : false , 
    altura : 1.20
};

if(pessoa.idade >=12){
    if(pessoa.altura >= 1.40){
        console.log(`${pessoa.nome} tá liberado(a) pra usar o brinquedo`)
    }else{
        console.log(`${pessoa.nome} não pode brincar`)
    }
}