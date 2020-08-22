'use strict';

const Joi = require('joi');

module.exports = {
    method: 'get',
    path: '/branch-directive/{id?}',
    handler: function (request,h){
        
        const id = request.params.id

       // const {firstName} = request.query; no lo entiendo asi

       const params = request.query;
       const firstName = params.firstName;

       console.log(firstName);
       console.log("id = "+ id);  
       
       if(id!==undefined){
        console.log("checkID"); 
        return checkID(id);
       }
      else if(firstName===undefined || firstName===""){
        console.log("vacio"); 
        return directive;
        }
       else if(!directive.find(person => person.firstName === firstName)){
        console.log("no existia"); 
        let person = {
                id: String (directive.length+1),
                firstName: firstName,
                lastName: "",
                picture: ""
               }
               directive.push(person);
               return person;
        }else{
            console.log("si existe"); 
            return(directive.filter(person => person.firstName == firstName));
        }
        
                
        
    },
   
    //validacion
    options: {
        validate: {
            params: Joi.object({
             id: Joi.string().allow("").max(1) //verifica longitud de string, permite vacio
        })
    }
}
    
};

//array con la directiva
const directive = [
    {
        id:"1",
        firstName: "Juan",
        lastName: "del Pueblo",
        picture: 'foto'
    },
    {
        id:'2',
        firstName: 'Juan',
        lastName: "de los Parlotes",
        picture: 'dibujo'
    },
    {
        id:'3',
        firstName: 'Pepe',
        lastName: "Perez",
        picture: 'imagen'
    }
];

function checkID(id) {
   
    switch(id){
    
    case "1":
        return directive[0];
     
    case "2":
        return directive[1];
      
    case "3":
        return directive[2];
       
    default:
        return directive;
    }
    
  }