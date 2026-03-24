import { Endereco } from "../Domain/Endereco"
import { EnderecoRepository } from "../Infrastructure/EnderecoRepository"


export class inserirEndereco{

    constructor(private repository = new EnderecoRepository())
    {}

    async execute(idEndereco: number, logradouro: string, numero: number, bairro: string, cidade: string, estado: string){

        const doc = new Endereco(idEndereco, logradouro, numero, bairro, cidade, estado)

        await this.repository.inserirEndereco(doc)

    }
}