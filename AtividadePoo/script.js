window.alert('VOCÊ FARÁ O CADASTRO')

class DadosCandidatos{
    constructor(nomeCandidato, profissaoCandidato, idadeCandidato, telefoneCandidato, enderecoCandidato, cidadeCandidato){
        this.nomeCandidato = nomeCandidato
        this.profissaoCandidato = profissaoCandidato
        this.telefoneCandidato = telefoneCandidato
        this.enderecoCandidato = enderecoCandidato
        this.cidadeCandidato = cidadeCandidato
    }

}

function solicitarDados() {
        let c1_Nome = window.prompt('informe o nome do candidato: ')
        let c1_Profissao = window.prompt('informe a profissão do candidato: ')
        let c1_Idade = window.prompt('informe a idade do candidato: ')
        let c1_Telefone = window.prompt('informe o telefone do candidato: ')
        let c1_Endereco = window.prompt('informe o endereço do candidato: ')
        let c1_Cidade = window.prompt('informe a cidade do candidato: ')


        let Candidato1 = new DadosCandidatos(c1_Nome, c1_Profissao, c1_Idade, c1_Telefone, c1_Endereco, c1_Cidade)

        document.write(`Nome do candidato: ${Candidato1.nomeCandidato}`)
        document.write('</br>')
        document.write(`Profissão do candidato: ${Candidato1.profissaoCandidato}`)
        document.write('</br>')
        document.write(`Idade do candidato: ${Candidato1.idadeCandidato}`)
        document.write('</br>')
        document.write(`Telefone do candidato: ${Candidato1.telefoneCandidato}`)
        document.write('</br>')
        document.write(`Endereço do candidato: ${Candidato1.enderecoCandidato}`)
        document.write('</br>')
        document.write(`Cidade do candidato: ${Candidato1.cidadeCandidato}`)
    }

solicitarDados()