import { DocumentoRepository } from "../Infrastructure/DocumentoRepository";

export class listarDocumento{

    constructor(private repository = new DocumentoRepository())
    {}

    async execute(){

        return this.repository.listarDocumentos()

    }
}