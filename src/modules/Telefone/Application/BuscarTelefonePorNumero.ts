import { TelefoneRepository } from "../Infrastructure/TelefoneRepository";

export class buscarTelefonePorNumero{

    constructor(private repository = new TelefoneRepository())
    {}

    async execute(numeroTelefone: string){
        
        return this.repository.buscadTelefonePorNumero(numeroTelefone)

    }
}