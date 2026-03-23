import { Documento } from "../Domain/Documento";
import { DocumentoRepository } from "../Infrastructure/DocumentoRepository";

export class AtualizarDocumento{

    constructor(private repository = new DocumentoRepository())
    {}

    async execute(idDocumento: number, numeroDoc: string, tipoDoc: string){

        const doc = await this.repository.buscarDocumentoPorId(idDocumento)

        if(!doc){
            console.log('Documento não encontrado.')
        }else{
            doc.numeroDocumento = numeroDoc
            doc.tipoDocumento = tipoDoc
        }

        await this.repository.atualizarDocumento(doc!)

    }
}