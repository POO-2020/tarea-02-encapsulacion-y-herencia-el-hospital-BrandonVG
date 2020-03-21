export default class Fecha {
    /**
     * @param {number} dia Valor 1..31
     * @param {number} mes Valor 1..12
     * @param {number} año Año
     */
    constructor(dia,mes,año){
        this._fecha= new Date(año, mes-1,dia);
        this._diaSem = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
        this._meses= ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    }
    getAños(){
        var difMseg = Date.now() - this._fecha;
        var mSegAño= 1000 * 60 * 60 * 24 * 365;
        var años = Math.trunc(difMseg/mSegAño);
        return años;
    }
    getMeses(){
        var difMseg = Date.now()-this._fecha ;
        var mSegMes= 1000 * 60 * 60 * 24 * 28;
        var meses= Math.trunc(difMseg/mSegMes);
        return meses;
    }
    getSemanas(){
        var difMseg = Date.now()-this._fecha;
        var mSegSemana= 1000* 60*60*24*7;
        var semanas= Math.trunc(difMseg/mSegSemana);
        return semanas;
    }
    getDias(){
        var difMseg= Date.now()-this._fecha;
        var mSegDias= 1000*60*60*24;
        var dias = Math.trunc(difMseg/mSegDias);
        return dias;
    }
    getFecha(){
        var numMes= this._meses[this._fecha.getMonth()];
        return(`${this._fecha.getDate()}/${numMes}/${this._fecha.getFullYear()}`);
    }
    getDiaFecha(){
        var dia= this._diaSem[this._fecha.getDay()];
        return dia;
    }
}
/*
var fecha1= new Fecha(14,2,2019);
console.log(fecha1.getDiaFecha());
*/