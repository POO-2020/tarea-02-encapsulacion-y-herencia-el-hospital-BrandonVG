export default class Paciente{
    /**
     * 
     * @param {Nombre} Nombre El nombre del paciente 
     * @param {Fecha} fechaNacimiento Fecha de nacimiento
     * @param {number} telefono Numero de telefono del paciente
     */
    constructor({nombre,fechaNacimiento,telefono}){
        this._nombre = nombre;
        this._fechaNacimiento = fechaNacimiento;
        this._telefono = telefono;
    }
    getPerfil(){
        var telefonoString= this._telefono.toString();
        return (`${this._nombre.getNombreCompleto()}, ${this._fechaNacimiento.getFecha()}, ${telefonoString.slice(0,3)}-${telefonoString.slice(3,6)}-${telefonoString.slice(6,10)}`);
    }
}
/*
var datosPaciente1 = {
    nombre: new Nombre("Elmo","Torista","Diaz"),
    fechaNacimiento: new Fecha(14,8,2003),
    telefono: 3121683634
};
var paciente1= new Paciente(datosPaciente1);
console.log(paciente1.getPerfil());
*/