export default class Nombre{
    /**
     * 
     * @param {string} nombre  El nombre
     * @param {string} apellidoPaterno  El apellido paterno
     * @param {string} apellidoMaterno  El apellido materno
     */
    constructor(nombre,apellidoPaterno,apellidoMaterno){
        this._nombre= nombre;
        this._apellidoPaterno= apellidoPaterno;
        this._apellidoMaterno=apellidoMaterno;
    }
    getNombreCompleto(){
        return (`${this._nombre} ${this._apellidoPaterno} ${this._apellidoMaterno}`);
    }
    getApellidoNombre(){
        return (`${this._apellidoPaterno} ${this._apellidoMaterno} ${this._nombre}`);
    }
    getIniciales(){
        return (`${this._nombre.charAt(0)}${this._apellidoPaterno.charAt(0)}${this._apellidoMaterno.charAt(0)}`);
    }
}
/*
var namae = new Nombre("Elmo","Torista","Diaz");
console.log(namae.getIniciales());
*/