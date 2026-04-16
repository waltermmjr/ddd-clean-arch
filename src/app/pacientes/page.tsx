<<<<<<< HEAD
import { PacienteForm } from "@/modules/Paciente/Components/PacienteForm"
import "@src/app/estilo.css"


export default function PagePacientes(){
    
    return(
        
=======
import "@/app/estilo.css"
import { PacienteList } from "@/modules/Paciente/Components/PacienteList";

export default function PacientesPage(){

    return(
>>>>>>> SRCnovo
        <div>
            <h1> Página de registro e alteração de pacientes </h1>

<<<<<<< HEAD
            <PacienteForm />

        </div>

    )
    
=======
            <PacienteList />
        </div>
    );
>>>>>>> SRCnovo
}