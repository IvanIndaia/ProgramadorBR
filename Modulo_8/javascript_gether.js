



var nomes = ["Igor", "José", "Maria", "Isabel"]
var nota1 = [7.0, 6.5, 9.5, 8.0]
var nota2 = [8.0, 7.0, 8.0, 7.5]

function media(n1, n2) {
    return (n1+n2)/2
}

function statu(media) {
    if (media > 7){
        return "Aprovado"
    }else {
        return "Reprovado"
    }
}

for (var index in nomes) {
    
    var n1 = nota1[index]
    var n2 = nota2[index]
    var m = media(n1, n2)
    var sta = statu(m)

    console.log(nomes[index] + " - " + 
                n1 + " - " +
                n2 + " - " +
                m + " - " +
                sta
    )
}