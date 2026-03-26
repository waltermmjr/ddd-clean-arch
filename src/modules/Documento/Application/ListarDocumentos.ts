import { DocumentoRepository } from "../Infrastructure/DocumentoRepository";

export class ListarDocumento{

    constructor(private repository = new DocumentoRepository())
    {}

    async execute(){

        return this.repository.listarDocumentos()

    }
}