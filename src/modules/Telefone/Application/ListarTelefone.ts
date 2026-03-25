import { TelefoneRepository } from "../Infrastructure/TelefoneRepository";

export class listarTelefone{

    constructor(private repository = new TelefoneRepository())
    {}

    async execute(){

        return this.repository.listarTelefones()

    }
}