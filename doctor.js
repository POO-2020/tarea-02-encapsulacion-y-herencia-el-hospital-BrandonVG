export default class Doctor{
    /**
     * 
     * @param {Nombre} nombre Nombre completo del docor
     * @param {string} especialidad 
     * @param {number} telefono 
     * @param {number} cedula 
     */
    constructor({cedula,especialidad,nombre,telefono}){
        this._nombre=nombre;
        this._especialidad=especialidad;
        this._telefono=telefono;
        this._cedula=cedula;
    }
    getPerfil(){
        return (`${this._cedula}, ${this._especialidad}, ${this._nombre.getNombreCompleto()}, ${this._telefono}`);
    }
}
/*
var doctor1= new Doctor(12345678,"Cirujia",new Nombre("Elza","Sonador","Fajitas"),3121681475);
console.log(doctor1.getPerfil());
*/