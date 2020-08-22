'use strict';

const Joi = require('joi');

module.exports = {
    method: 'get',
    path: '/upcoming-activities/{id?}',
    handler: function (request,h){
        
        const id = request.params.id
        // const {title} = request.query;

        const params = request.query;
        const title = params.title;

        console.log(title);  
        console.log("id = "+ id);  
                
        if( id!==undefined){
            console.log("checkID"); 
            return checkID(id);
        }
          else if(title===undefined || title===""){
            console.log("vacio"); 
                return activities;
            }
           else if(!activities.find(event => event.title === title)){
            console.log("no existia"); 
                let event = {
                    id: String (activities.length+1),
                    title: title,
                    Date: "",
                    Description: ""
                   }
                   activities.push(event);
                   return event;
            }else{
                console.log("si existe"); 
                return(activities.filter(event => event.title == title));
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



 //array de activities
const activities = [
    {
        id:1,
        title:"Birthday Party",
        Date: "December 14",
        Description: "My birthday :)",
    },

    {
        id:2,
        title:"Christmas",
        Date: "December 25",
        Description: "Jesus birthday",
    }

];

function checkID(id) {
   
    switch(id){
    
    case "1":
        return activities[0];
     
    case "2":
        return activities[1];

    default:
        return activities;
    }
    
  }
