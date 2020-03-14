import Tiempo from "./tiempo.js";
import Nombre from "./nombre.js";
import Doctor from "./doctor.js";
import Fecha from "./fecha.js";
import Paciente from "./paciente.js";
import Hospital from "./hospital.js";
import Cita from "./cita.js";
class Main{
    constructor(){
        this.hospital = new Hospital("San jose", "Calle falsa #123")
    }
    registrarDoctores(){
        var doctor1= new Doctor(1234594,"Urologia",new Nombre("Elza","Sonador","Fajitas"),3121542578);
        var doctor2 = new Doctor(154879,"Traumatologia",new Nombre("Elmer","Homero","Torrez"),3128746365);
        var doctor3= new Doctor(597135,"Oftalmologia",new Nombre("Zacarias","Rios","Gomez"),312657841);
        this.hospital.registrarDoctores(doctor1);
        this.hospital.registrarDoctores(doctor2);
        this.hospital.registrarDoctores(doctor3);
        this.hospital.listarDoctores();
    }
    registrarCitas(){
        var c1= new Cita(new Fecha(16,2,2020),new Tiempo(15,50),new Nombre("Elza","Sonador","Fajitas"),new Nombre("Elmo","Torista","Diaz"));
        this.hospital.registrarCitas(c1);
        this.hospital.listarCitas();
    }
}
var app =new Main();
app.registrarDoctores();
console.log("--------------------");
app.registrarCitas();