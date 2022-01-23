let url = "https://api.exchangeratesapi.io/latest?base=USD&symbols=BRL"
let url1 = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"





function converter() {
    let input = document.getElementById("valor")
    let valor = input.value

    fetch(url1)
    .then((res)=>{

        // console.log(res)
        return res.json()

    })
    .then((data) => {
        let rate = data.USDBRL.bid
        console.log(data.USDBRL.bid)

        let resultado = `${valor} dolare(s) = R$${rate * valor}`

        document.getElementById("result").innerHTML = resultado
    })

}