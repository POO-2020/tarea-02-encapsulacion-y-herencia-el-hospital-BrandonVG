import Nombre from "./nombre.js";
export default class Doctor{
    /**
     * 
     * @param {Nombre} nombre Nombre completo del docor
     * @param {string} especialidad 
     * @param {number} telefono 
     * @param {number} cedula 
     */
    constructor(cedula,especialidad,nombre,telefono){
        this.nombre=nombre;
        this.especialidad=especialidad;
        this.telefono=telefono;
        this.cedula=cedula;
    }
    getPerfil(){
        return (`${this.cedula}, ${this.especialidad}, ${this.nombre.getNombreCompleto()}, ${this.telefono}`);
    }
}
/*
var doctor1= new Doctor(12345678,"Cirujia",new Nombre("Elza","Sonador","Fajitas"),3121681475);
console.log(doctor1.getPerfil());
*/