import Fecha from "./fecha.js"
import Nombre from "./nombre.js"
export default class Paciente{
    /**
     * 
     * @param {Nombre} Nombre El nombre del paciente 
     * @param {Fecha} fechaNacimiento Fecha de nacimiento
     * @param {number} telefono Numero de telefono del paciente
     */
    constructor(nombre,fechaNacimiento,telefono){
        this.nombre= nombre;
        this.fechaNacimiento= fechaNacimiento;
        this.telefono=telefono;
    }
    getPerfil(){
        var telefonoString= this.telefono.toString();
        return (`${this.nombre.getNombreCompleto()}, ${this.fechaNacimiento.getFecha()}, ${telefonoString.slice(0,3)}-${telefonoString.slice(3,6)}-${telefonoString.slice(6,10)}`);
    }
}
/*
var paciente1= new Paciente(new Nombre("Elmo","Torista","Diaz"),new Fecha(14,8,2003),3121683634);
console.log(paciente1.getPerfil());
*/