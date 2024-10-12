
//INICIO DEL JUEGO DEL AJOLCAO..................................................................................//


//ELEMENTOS DEL HTML:

const granContenedor = document.querySelector(".granContenedor");//contenedor de todo el juego(menos pantalla-win).

const boton= document.querySelector(".boton");//boton comprobar.

const body = document.querySelector("body");

//pantallita de estadisticas del juego (pantalla-win):
const vitacora = document.querySelector(".vitacora");
const puntos = document.querySelector(".puntuacion");

//pantallita de estadisticas del juego (pantalla-lose):
const world = document.querySelector(".world")
const vitacoraF = document.querySelector(".vitacoraF");
const puntosF = document.querySelector(".puntuacionF");


//Muñequito HTML-elements:
const tronco= document.querySelector(".tronco");
const rama= document.querySelector(".rama");
const cuerda= document.querySelector(".cuerda");
const cabeza= document.querySelector(".cabeza");
const ojoD= document.querySelector(".ojo-d");
const pupilaD = document.querySelector(".pupila-d")
const pupilaI = document.querySelector(".pupila-i")
const ojoI= document.querySelector(".ojo-i");
const nariz= document.querySelector(".nariz");
const boca= document.querySelector(".boca");
const cuerpo= document.querySelector(".cuerpo");
const brazoD= document.querySelector(".brazo-d");
const brazoI= document.querySelector(".brazo-i");
const pieD= document.querySelector(".pie-d");
const pieI= document.querySelector(".pie-i");

//pantalla win:
const pantallaWin = document.querySelector(".pantalla-win");

//pantalla lose:
const pantallalose = document.querySelector(".pantalla-lose");



//VARIABLES DEFINIDAS:
    let palabras=["arbol","casa","novia","telefono","abrigo","termo","amor","palabra", "jardin", "orden", "trabalenguas", "coche", "bicicleta", "animal", "estacion", "estrella", 
        "anime", "muebleria", "acentuacion", "via", "teclado", "espia", "ballena", "ventana", "hielo", "tocar", "hija", "atardecer", 
        "parecer", "nevera", "vaso", "muñeca", "luz", "letra", "profesion", "emociones", "leyenda", "comida", "gimnasio", "parpadeo",
        "ñu", "aeronautica", "especializacion", "orgullo", "paz", "inquebrantable", "taxi", "hogar", "niños", "mujer", "niñas", "niñez",
        "concentracion", "escandalo", "tema", "estudiosa", "astronauta", "azahar", "portero", "cohibir", "guantes", "inhumano", "libro", 
        "jugar", "exhausto", "existir", "sinonimo", "leon", "gato", "aguila", "canasta", "experimentar", "hipotesis", "psicologia", "psiquiatra",
        "mecanico", "belleza", "martillo", "lloviznar", "emprendimiento", "pegamento", "euforia", "murcielago", "adulterio", "ecuacion", "nivel",
        "electroencefalografista", "esternocleidomastoideo", "medicina", "caleidoscopio", "cañon", "cinturon", "envejecer", "pezuña", "cruz", "extra", 
        "españa", "otoño", "trabajador", "teñir", "uña", "socializar", "cuñado", "llamativo", "foca", "cafe", "pelo", "extrangero", "tiza", "pañuelo", "mandarina", "fogon", "navaja",
        "tatuajes", "movilizacion", "personal","rebaño", "muñeca", "canela", "proteina", "pañuelo", "cristal", "hoja", "arte", "autorretrato", 
        "despilfarrar", "vicerretoria", "irreverente", "gorrion", "cotorra", "zorro", "tortilla", "barahona", "almohada", "deshidratacion", "tia", "genio", "inteligencia", "planeta",
        "cuidar", "pais", "mundo", "vida", "gel", "chocolate", "silla", "elite", "jugo", "empanada", "pan", "sal", "ojo", "esperanza", "rodilla", "piel", "corazon", "vehiculo", "oro", "frenar", "robot",
        "izquierda", "absurdo", "diestro", "factura", "sopa", "cantar", "beber", "entidad", "deidad", "verdad", "amigos", "pareja", "esposa", "esposo",
        "cojo", "roja", "reloj", "gorra", "chaqueta", "critica", "exposicion", "riqueza", "decir", "entumecer", "destacado", "organo"
      ];

      //variables de la palabra elegida:
    var elegida= parseInt(Math.random()*palabras.length);
    var choosen= palabras[elegida];
    let palabraSecreta= choosen.replace(/./g, "- ");

    document.querySelector(".palabraOculta").innerHTML=palabraSecreta;

   //validacion de longitud de palabra elegida.  
   if(choosen.length > 20){
    document.querySelector(".palabraOculta").classList.add("mover");//si la palabra tiene mas de 20 letras, se centrara gracias a la clase (mover)
}


//FUNCIONES:

//Remplazar la letra:
function remplazar(espacio, letter, index) {

   return espacio.substring(0, index) + letter + espacio.substring(index + letter.length); 
};



//Contadores de (Errores) y (Puntuacion):
let contadorDeError= 0;
let puntuacion = 12;


//Comprobar la letra: Inicio de la funcion comprobar.
function comprobar(){
    let error= true;
    let letra= document.querySelector(".input").value;

    for(let i=0; i < choosen.length; i++){
       if(choosen[i]=== letra){
           palabraSecreta= remplazar(palabraSecreta, letra, i * 2);
           document.querySelector(".palabraOculta").innerHTML=palabraSecreta;
           error = false;
       }
    }

        if(error){
              contadorDeError++;
              puntuacion--;
                 if( contadorDeError == 1){
                     tronco.classList.add("color");

                }else if(contadorDeError == 2){
                    rama.classList.add("color");
                }

                else if(contadorDeError == 3){
                    cuerda.classList.add("color");
                }

                else if(contadorDeError == 4){
                    cabeza.classList.add("outline");
                }

                else if(contadorDeError == 5){
                    ojoD.classList.add("colorb");
                    ojoI.classList.add("colorb");
                    pupilaD.style.backgroundColor = "black"
                    pupilaI.style.backgroundColor = "black"
                }

                else if(contadorDeError == 6){
                    nariz.style.backgroundColor = "black"
                }

                else if(contadorDeError == 7){
                    boca.classList.add("border-color-happy");
                }

                else if(contadorDeError == 8){
                    cuerpo.style.backgroundColor = "red"
                    cuerpo.style.outline = ("5px solid black")
                }

                else if(contadorDeError == 9){
                    brazoD.classList.add("outline");
                }

                else if(contadorDeError == 10){
                    brazoI.classList.add("outline");
                }

                else if(contadorDeError ==11){
                    pieD.style.backgroundColor = "black"
                    boca.classList.replace("border-color-happy", "border-color-sad");
                    cuerpo.classList.add("rapido");
                    boton.style.backgroundColor= "red";
                }

                else{
                    pieI.style.backgroundColor = "black";
                    boca.classList.replace("border-color-sad", "grito-boca");
                    document.getElementById("grito-lose").play();//audio del muñequito gritando.
        
                }
                
           }
        }//Fin de la funcion comprobar


        //Funcion ganar:
        function ganar(){
            if(!palabraSecreta.includes("- ")){
                pantallaWin.removeAttribute("hidden");

                vitacora.innerHTML = "▹ Fallos: "+ contadorDeError;

                puntos.innerHTML = "▹ Puntuacion: "+ puntuacion + " de 12";
                
                granContenedor.style.opacity= 0;//opaca todos los elementos del body.

                document.getElementById("aplausos-win").play();//audio de victoria.


            }
        }//Fin de la funcion ganar.


        //Inicio de la funcion perder
        function perder(){
            if(contadorDeError == 12){
                pantallalose.removeAttribute("hidden");

                world.innerHTML = "🔐 "+ choosen.toLocaleUpperCase();

                vitacoraF.innerHTML = "▹ Fallos: "+ contadorDeError;

                puntosF.innerHTML = "▹ Puntuacion: "+ puntuacion + " de 12";
                
                granContenedor.style.opacity= 0;//opaca todos los elementos del body.

            }
                

        }//Fin de la funcion perder.


        //Funcion para reproducir audio de fondo:

        function playAudio(){
            document.getElementById("audio-fondo").play();
        }

        

//TESTIGOS:
    document.write("la palabra tiene: "+choosen.length+" letras");//Informa al usuario(jugador), la cantidad de letras de la palabra.
    
    //Testigos que usa el programador para probar el juego.
    console.log(choosen);
    console.log(choosen[0]);


    //Inicia el audio del juego:
    document.addEventListener("click",()=>{
        playAudio();
    })
    

//INICIALIZACION DEL JUEGO: aqui comienza a correr el juego.
 boton.addEventListener("click",()=>{
        comprobar(); 

        setTimeout(()=>{
             ganar();
             perder();

        },100);
    })




   