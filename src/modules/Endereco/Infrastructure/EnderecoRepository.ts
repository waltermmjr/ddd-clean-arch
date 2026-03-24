import { endianness } from "os";
import { Endereco } from "../Domain/Endereco";


export class EnderecoRepository {

    private static enderecos: Endereco[] = []

    //LISTAR ENDERECOS
    async listarEnderecos() {
        return EnderecoRepository.enderecos

    }

    //BUSCAR ENDERECO
    async buscadEnderecoPorID(idEndereco: number) {
        return EnderecoRepository.enderecos.find(endereco => endereco.idEndereco === idEndereco)
    }

    //INSERIR NOVO ENDERECO
    async inserirEndereco(endereco: Endereco) {
        EnderecoRepository.enderecos.push(endereco)
    }

    //REMOVER ENDERECO:
    async removerEndereco(idEndereco: number) {
        EnderecoRepository.enderecos = EnderecoRepository.enderecos.filter(endereco => endereco.idEndereco !== idEndereco)
    }

    //ATUALIZAR ENDERECO
    async atualizarEndereco(endereco: Endereco) {
        //BUSCANDO A POSIÇÃO DO ENDERECO SOLICITADO DENTRO DO ARRAY
        const indice = EnderecoRepository.enderecos.findIndex(end => end.idEndereco === endereco.idEndereco)

        if (indice !== -1) {
            EnderecoRepository.enderecos[indice] = endereco;
        } else {
            console.log("Endereço não encontrado.")
        }
    }


}