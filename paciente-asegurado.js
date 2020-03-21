import Paciente from "./paciente.js";
export default class PacienteAsegurado extends Paciente{
    /**
     * 
     * @param {Nombre} nombre 
     * @param {Fecha} fechaNacimiento 
     * @param {string} telefono 
     * @param {number} numeroPoliza 
     * @param {Fecha} fechaFinVigencia 
     * @param {string} compañia 
     */
    constructor({nombre,fechaNacimiento,telefono,numeroPoliza,fechaFinVigencia,compañia}){
        super({nombre,fechaNacimiento,telefono});
        this._numeroPoliza = numeroPoliza;
        this._fechaFinVigencia = fechaFinVigencia;
        this._compañia = compañia;
    }
    getPerfil(){
        return (`${this._nombre.getNombreCompleto()}, ${this._fechaNacimiento.getFecha()}, ${this._telefono}, ${this._numeroPoliza}, ${this._fechaFinVigencia.getFecha()}, Seguros ${this._compañia}`);
    }
}