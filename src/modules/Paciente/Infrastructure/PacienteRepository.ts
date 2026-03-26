import { Paciente } from "../Domain/Paciente";

export class PacienteRepository{

    private static pacientes: Paciente[] =[];

    //LISTAR PACIENTES
    async listarPacientes(){
        return PacienteRepository.pacientes;
    }

    //INSERIR PACIENTE
    async inserirPaciente(paciente: Paciente){
        PacienteRepository.pacientes.push(paciente);
    }

    //BUSCAR PACIENTE POR ID
    async buscarPacientePorId(id: number){
        return PacienteRepository.pacientes.find(pac => pac.id === id);
    }

    //REMOVER PACIENTE
    async removerPaciente(id: number){
        PacienteRepository.pacientes = PacienteRepository.pacientes.filter(pac => pac.id !== id)
    }

    //ATUALIZAR PACIENTE
    async atualizarPaciente(paciente:Paciente){
        //BUSCANDO A POSIÇÃO DO PACIENTE SOLICITADO DENTRO DO ARRAY
        const indice = PacienteRepository.pacientes.findIndex(pac => pac.id === paciente.id)

        if(indice !== -1){
            PacienteRepository.pacientes[indice] = paciente;
        }else{
            console.log("Paciente não encontrado.")
        }
    }

}