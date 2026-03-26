import { Documento } from "../Domain/Documento";
import { DocumentoRepository } from "../Infrastructure/DocumentoRepository";

export class InserirDocumento{

    constructor(private repository = new DocumentoRepository())
    {}

    async execute(idDocumento: number, numeroDoc: string, tipoDoc: string){

        const doc = new Documento(idDocumento, numeroDoc, tipoDoc)

        await this.repository.inserirDocumento(doc)

    }
}