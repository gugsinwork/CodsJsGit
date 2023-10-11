function calcularImovel(metragem, quartos){
    let m2 = 3000;
    let preco = 0;
    quartos = window.prompt('informe a quantidade de quartos desse imóvel: ')
    switch (metragem, quartos) {
        case 1:
            default:
                metragem = parseFloat(window.prompt('informe quantos m2 o imóvel tem: '))
                preco = metragem * (m2*1)
                console.log(`o preço é R$${preco}`)
                break;
        case 2:
            metragem = parseFloat(window.prompt('informe quantos m2 o imóvel tem: '))
            preco = metragem * (m2*1.2)
            console.log(`o preço é R$${preco}`)
           
        case 3:
            metragem = parseFloat(window.prompt('informe quantos m2 o imóvel tem: '))
            preco = metragem * (m2*1.5)
            console.log(`o preço é R$${preco}`)
            break;
        case quartos > 3:
            metragem = parseFloat(window.prompt('informe quantos m2 o imóvel tem: '))
            preco = metragem * (m2*2)
            console.log(`o preço é R$${preco}`)
            break;
    }
    return preco
}

console.log(calcularImovel())

