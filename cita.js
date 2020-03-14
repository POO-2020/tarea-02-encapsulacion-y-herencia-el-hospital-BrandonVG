import Tiempo from "./tiempo.js";
import Nombre from "./nombre.js";
import Doctor from "./doctor.js";
import Fecha from "./fecha.js";
import Paciente from "./paciente.js";
export default class Cita{
    /**
     * 
     * @param {Fecha} fecha 
     * @param {Tiempo} hora 
     * @param {Nombre} doctor Nombre del doctor
     * @param {Nombre} paciente nombre del paciente
     */
    constructor(fecha,hora,doctor,paciente){
        this.fecha= fecha;
        this.hora=hora;
        this.doctor=doctor;
        this.paciente=paciente;
    }
    getPerfil(){
        return (`${this.fecha.getFecha()}, ${this.hora.getFormato24()}, Dr. ${this.doctor.getNombreCompleto()}, ${this.paciente.getNombreCompleto()}`);
    }
}
/*
var cita1= new Cita(new Fecha(19,2,2020),new Tiempo(17,30),new Nombre("Elza","Sonador","Fajitas"),new Nombre("Elmo","Torista","Diaz"));
console.log(cita1.getPerfil());
*/