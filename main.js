var API=window.webkitSpeechRecognition
var nuevo=new API
function Click() {
    nuevo.start()
}
function hablar(){
    var appi=window.speechSynthesis;
    var respuesta="rojo"
    var decir=new SpeechSynthesisUtterance(respuesta)
    appi.speak(decir)
    Webcam.attach(camarota);
}

nuevo.onresult=function(results){
    hablar()
   console.log(results)
    var guardar=results.results[0][0].transcript
    console.log(guardar)
     document.getElementById("textarea").innerHTML=guardar

    }
    camarota=document.getElementById("Div")
    Webcam.set({
        width:500,
        height:500,
        image_format:"png"
    })

