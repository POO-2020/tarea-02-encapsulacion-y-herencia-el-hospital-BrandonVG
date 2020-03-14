export default class Nombre{
    /**
     * 
     * @param {string} nombre  El nombre
     * @param {string} apellidoPaterno  El apellido paterno
     * @param {string} apellidoMaterno  El apellido materno
     */
    constructor(nombre,apellidoPaterno,apellidoMaterno){
        this.nombre= nombre;
        this.apellidoPaterno= apellidoPaterno;
        this.apellidoMaterno=apellidoMaterno;
    }
    getNombreCompleto(){
        return (`${this.nombre} ${this.apellidoPaterno} ${this.apellidoMaterno}`);
    }
    getApellidoNombre(){
        return (`${this.apellidoPaterno} ${this.apellidoMaterno} ${this.nombre}`);
    }
    getIniciales(){
        return (`${this.nombre.charAt(0)}${this.apellidoPaterno.charAt(0)}${this.apellidoMaterno.charAt(0)}`);
    }
}
/*
var namae = new Nombre("Elmo","Torista","Diaz");
console.log(namae.getIniciales());
*/