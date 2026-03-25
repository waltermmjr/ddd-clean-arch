import { TelefoneRepository } from "../Infrastructure/TelefoneRepository";

export class buscarTelefonePorId{

    constructor(private repository = new TelefoneRepository())
    {}

    async execute(idTelefone: number){
        
        return this.repository.buscadTelefonePorID(idTelefone)

    }
}