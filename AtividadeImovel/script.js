function calcularImovel(metragem, quartos){
    let m2 = 3000;
    let preco = 0;

    switch (metragem, quartos) {
        case 1:
        default:
           preco = metragem * (m2*1)
            break;
        case 2:
            preco = metragem * (m2*1.2)
           
        case 3:
            preco = metragem * (m2*1.5)
            break;
        case quartos > 3:
            preco = metragem * (m2*2)
            break;
    }
    return preco
}

metragem = window.prompt('informe quantos m2 o imóvel tem: ')
quartos = window.prompt('informe a quantidade de quartos desse imóvel: ')
let calculaImovel = calcularImovel(metragem, quartos)
console.log(`o preço é R$${calculaImovel}`)
