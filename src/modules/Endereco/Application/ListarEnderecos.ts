import { EnderecoRepository } from "../Infrastructure/EnderecoRepository";

export class listarEndereco{

    constructor(private repository = new EnderecoRepository())
    {}

    async execute(){

        return this.repository.listarEnderecos()

    }
}