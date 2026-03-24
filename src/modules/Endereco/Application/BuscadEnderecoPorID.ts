import { EnderecoRepository } from "../Infrastructure/EnderecoRepository";

export class buscarEnderecoPorId{

    constructor(private repository = new EnderecoRepository())
    {}

    async execute(idEndereco: number){
        
        return this.repository.buscadEnderecoPorID(idEndereco)

    }
}