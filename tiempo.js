export default class Tiempo{
    /**
     * 
     * @param {number} hora La hora
     * @param {number} minutos  los minutos
     */
    constructor(hora,minutos){
        this.periodo=["am","pm"];
        this.hora=hora;
        this.minutos=minutos;
    }
    getFormato12(){
        if (this.hora>=12 && this.hora<=23)
        {
            if(this.hora==12)
            {
                return (`${this.hora}:${this.minutos} ${this.periodo[1]}`);
            }
            else{
                var hora = this.hora-12;
            }
            
            return (`${hora}:${this.minutos} ${this.periodo[1]}`);
        }
        else if (this.hora==24){

            return (`00:${this.minutos} ${this.periodo[0]}`);
        }
        else{
            return (`${this.hora}:${this.minutos} ${this.periodo[0]}`);
        }
    }
    getFormato24(){
        return (`${this.hora}:${this.minutos}`)
    }
}
/*
var tiempo = new Tiempo(24,55)
console.log(tiempo.getFormato12())
*/