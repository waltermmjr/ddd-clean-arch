import { Telefone } from "../Domain/Telefone"


export class TelefoneRepository {

    private static telefones: Telefone[] = []

    //LISTAR TELEFONE
    async listarTelefones() {
        return TelefoneRepository.telefones

    }

    //BUSCAR TELEFONE POR ID
    async buscadTelefonePorID(idTelefone: number) {
        return TelefoneRepository.telefones.find(Telefone => Telefone.idTelefone === idTelefone)
    }

    //BUSCAR TELEFONE POR NÚMERO
    async buscadTelefonePorNumero(numeroTelefone: string) {
        return TelefoneRepository.telefones.find(Telefone => Telefone.numeroTelefone === numeroTelefone)
    }

    //INSERIR NOVO TELEFONE
    async inserirTelefone(telefone: Telefone) {
        TelefoneRepository.telefones.push(telefone)
    }

    //REMOVER TELEFONE:
    async removerTelefone(idTelefone: number) {
        TelefoneRepository.telefones = TelefoneRepository.telefones.filter(telefone => telefone.idTelefone !== idTelefone)
    }

    //ATUALIZAR TELEFONE
    async atualizarTelefone(telefone: Telefone) {
        //BUSCANDO A POSIÇÃO DO TELEFONE SOLICITADO DENTRO DO ARRAY
        const indice = TelefoneRepository.telefones.findIndex(tel => tel.idTelefone === telefone.idTelefone)

        if (indice !== -1) {
            TelefoneRepository.telefones[indice] = telefone;
        } else {
            console.log("Telefone não encontrado.")
        }
    }


}