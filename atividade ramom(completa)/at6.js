let anobissexto = (ano) => {
    if((ano % 4== 0  && ano % 100 != 0)||ano % 400 == 0){
        console.log("ano bissexto")
    } else {
        console.log("não é ano bissexto")
    }
}