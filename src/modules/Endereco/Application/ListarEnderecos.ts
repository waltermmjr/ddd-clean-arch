import { EnderecoRepository } from "../Infrastructure/EnderecoRepository";

export class listarEnderecos{

    constructor(private repository = new EnderecoRepository())
    {}

    async execute(){

        return this.repository.listarEnderecos()

    }
}