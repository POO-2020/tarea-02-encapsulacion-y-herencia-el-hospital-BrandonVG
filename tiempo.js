export default class Tiempo{
    /**
     * 
     * @param {number} hora La hora
     * @param {number} minutos  los minutos
     */
    constructor(hora,minutos){
        this._periodo=["am","pm"];
        this._hora=hora;
        this._minutos=minutos;
    }
    getFormato12(){
        if (this._hora>=12 && this._hora<=23)
        {
            if(this._hora==12)
            {
                return (`${this._hora}:${this._minutos} ${this._periodo[1]}`);
            }
            else{
                var hora = this._hora-12;
            }
            
            return (`${hora}:${this._minutos} ${this._periodo[1]}`);
        }
        else if (this._hora==24){

            return (`00:${this._minutos} ${this._periodo[0]}`);
        }
        else{
            return (`${this._hora}:${this._minutos} ${this._periodo[0]}`);
        }
    }
    getFormato24(){
        return (`${this._hora}:${this._minutos}`)
    }
}
/*
var tiempo = new Tiempo(24,55)
console.log(tiempo.getFormato12())
*/