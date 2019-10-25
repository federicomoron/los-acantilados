const app = require ('./app');

app.listen(app.get('port'));
console.log('Server on port', app.get('port'));

<div>
< script  src = " https://apis.google.com/js/api.js " > 
< guión >
function  start () { 
// 2. Inicialice la biblioteca del cliente JavaScript. gapi . cliente . init ({ ' apiKey ' : ' YOUR_API_KEY ' , // Su clave API se agregará automáticamente a las URL del documento de descubrimiento. ' discoveryDocs ' : [ ' https://people.googleapis.com/$discovery/rest ' ], / / clientId y el alcance son opcionales si no se requiere autenticación. ' clientId ' : ' YOUR_WEB_CLIENT_ID.apps.googleusercontent.com  
     
    
}
     ' ,
 ' alcance ' : ' perfil ' ,  }). then ( function () { // 3. Inicializa y realiza la solicitud de API. return gapi . client . people . people . get ({ ' resourceName ' : ' people / me ' , ' requestMask.includeField ' : ' person.names '     });  }). entonces ( función (     

   
       
 }
respuesta ) { 
consola . log ( respuesta . resultado )};   }, función ( razón ) { consola . log ( ' Error: ' + razón . resultado . error . mensaje )};   }); }; // 1. Cargue la biblioteca del cliente JavaScript. gapi . carga ( ' cliente ' , inicio);    

 </ guión>
</script>
</div>

