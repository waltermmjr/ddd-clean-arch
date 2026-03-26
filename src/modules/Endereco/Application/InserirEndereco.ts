import { Endereco } from "../Domain/Endereco"
import { EnderecoRepository } from "../Infrastructure/EnderecoRepository"


export class InserirEndereco{

    constructor(private repository = new EnderecoRepository())
    {}

    async execute(idEndereco: number, logradouro: string, numero: number, bairro: string, cidade: string, estado: string){

        const end = new Endereco(idEndereco, logradouro, numero, bairro, cidade, estado)

        await this.repository.inserirEndereco(end)

    }
}