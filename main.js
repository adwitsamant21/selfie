var SpeechRecognition = window.webkitSpeechRecognition;

var  recognition  = new SpeechRecognition;
var img_id=selfie_image1;

function  start(){
document.getElementById("rele").innerHTML = "";
recognition.start();
}
recognition.onresult = function(event) {
console.log(event);

var Content = event.results[0][0].transcript;
document.getElementById("rele").innerHTML = Content;
console.log(Content);
if(Content == "take my selfie"){
console.log("taking selfie");
speak();
}
}

camera = document.getElementById("camera");
Webcam.set({
width: 360,
height:300,
image_format:'jpeg',
jpeg_quallity: 90

});

function speak() {
var synth = window.speechSynthesis;
speak_data = "taking your selfie in 5 seconds";

var utterThis = new SpeechSynthesisUtterance(speak_data);

synth.speak(utterThis)
Webcam.attach(camera)

setTimeout(function(){
take_snapshot();
save();

}, 5000);
}


function take_snapshot(){

    console.log(img_id);
    Webcam.snap(function(data_uri){
if(img_id == "selfie_image1"  ){
    document.getElementById("r1").innerHTML = '<img id="selfie_image1" src="'+data_uri+'"/>';
}
if(img_id == "selfie_image2"  ){
    document.getElementById("r2").innerHTML = '<img id="selfie_image3" src="'+data_uri+'"/>';
}
if(img_id == "selfie_image3"  ){
    document.getElementById("r3").innerHTML = '<img id="selfie_image3" src="'+data_uri+'"/>';
}
    });
    
    }



function save(){
    link = document.getElementById("link");
    image =  document.getElementById("selfie_image1").src;
    link.href = image;
    link.click();
}