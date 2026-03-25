import { TelefoneRepository } from "../Infrastructure/TelefoneRepository"

export class AtualizarTefefone{

    constructor(private repository = new TelefoneRepository())
    {}

    async execute(idTelefone: number, ddd: string, numeroTelefone: string, tipoTelefone: string, ativo: boolean){

        const tel = await this.repository.buscadTelefonePorID(idTelefone)

        if(!tel){
            console.log('Telefone não encontrado.')
        }else{
            tel.ddd = ddd
            tel.numeroTelefone = numeroTelefone
            tel.tipoTelefone = tipoTelefone
            tel.ativo = ativo        
        }

        await this.repository.atualizarTelefone(tel!)

    }
}