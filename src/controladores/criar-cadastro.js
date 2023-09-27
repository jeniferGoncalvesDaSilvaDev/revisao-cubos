const dados = {
    nome: 'Pedro',
    idade: 25,
    email: 'pedro@gmail.com',
    cpf: '123.456.789-10',
    endereco : {
        logradouro: 'Rua ABC',
        numero: 123,
        cidade: 'São Paulo',
        estado: 'SP'
    }
}
const criarCadastro = function async (req, res) {
    const { nome, idade, email, cpf, endereco } = req.body
    return  res.status(200).json(nome, idade, cpf, endereco)
}