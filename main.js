import Tiempo from "./tiempo.js";
import Nombre from "./nombre.js";
import Doctor from "./doctor.js";
import Fecha from "./fecha.js";
import Paciente from "./paciente.js";
import Hospital from "./hospital.js";
import Cita from "./cita.js";
import PacienteAsegurado from "./paciente-asegurado.js";
var datosHospital = {
    nombre: "San Jose",
    direccion: "Calle falsa #123"
};
class Main{
    constructor(){
        this.hospital = new Hospital(datosHospital);
    }
    testHospital(){
        var datosDoctor1 = {
            cedula: 1234594,
            especialidad: "Urologia",
            nombre: new Nombre("Elza","Sonador","Fajitas"),
            telefono: 3121542578
        };
        var datosDoctor2 = {
            cedula: 154879,
            especialidad: "Traumatologia",
            nombre: new Nombre("Elmer","Homero","Torrez"),
            telefono:3128746365
        };
        var datosDoctor3 = {
            cedula: 597135,
            especialidad: "Oftalmologia",
            nombre: new Nombre("Zacarias","Rios","Gomez"),
            telefono: 312657841
        };
        var doctor1= new Doctor(datosDoctor1);
        var doctor2 = new Doctor(datosDoctor2);
        var doctor3= new Doctor(datosDoctor3);
        this.hospital.registrarDoctores(doctor1);
        this.hospital.registrarDoctores(doctor2);
        this.hospital.registrarDoctores(doctor3);
        this.hospital.listarDoctores();
    
        var datosCita1 = {
            fecha: new Fecha(16,2,2020),
            hora: new Tiempo(15,50),
            doctor: new Nombre("Elza","Sonador","Fajitas"),
            paciente: new Nombre("Elmo","Torista","Diaz")
        };
        var datosCita2 = {
            fecha: new Fecha(22,3,2020),
            hora: new Tiempo(20,10),
            doctor: new Nombre("Elmer","Homero","Torrez"),
            paciente: new Nombre("Barni","El","Dinosaurio")
        };
        var datosCita3 = {
            fecha: new Fecha(22,3,2020),
            hora: new Tiempo(20,30),
            doctor: new Nombre("Zacarias","Rios","Gomez"),
            paciente: new Nombre("Elza","Capitos","3000")
        };
        var c1= new Cita(datosCita1);
        var c2 = new Cita(datosCita2);
        var c3 = new Cita(datosCita3);
        this.hospital.registrarCitas(c1);
        this.hospital.registrarCitas(c2);
        //this.hospital.registrarCitas(c3);
        this.hospital.listarCitas();
        console.log("--------------------");
        console.log(this.hospital.actualizarCita(c2,c3));
        this.hospital.listarCitas();
    }
}
/*
var datosPacienteAsegurado = {
    nombre: new Nombre("Elza","Ca","Pitos"),
    fechaNacimiento: new Fecha(5,2,2000),
    telefono: 3121487896,
    numeroPoliza: 12345678,
    fechaFinVigencia: new Fecha(5,8,2021),
    compañia: "Vida feliz"
};
var pacienteA = new PacienteAsegurado(datosPacienteAsegurado);
console.log(pacienteA.getPerfil());
*/
var app =new Main();

app.testHospital();