import Tiempo from "./tiempo.js";
import Nombre from "./nombre.js";
import Doctor from "./doctor.js";
import Fecha from "./fecha.js";
import Paciente from "./paciente.js";
import Cita from "./cita.js";
export default class Hospital{
    /**
     * 
     * @param {string} nombre Nombre del hospital
     * @param {string} direccion Direccion del hospital
     */
    constructor(nombre,direccion){
        this.nombre=nombre;
        this.direccion=direccion;
        this.doctores=new Array();
        this.citas= new Array();
    }
    registrarDoctores(doctor){
        this.doctores.push(doctor);
    }
    registrarCitas(cita){
        this.citas.push(cita);
    }
    listarCitas(){
        this.citas.forEach((cita,i)=>{
            console.log(`${i} ${cita.getPerfil()}`);
        });
    }
    listarDoctores(){
        this.doctores.forEach((doctores,a)=>{
            console.log(`${a} ${doctores.getPerfil()}`);
        });
    }
}