prediction1="";
prediction2="";

Webcam.set({
width:350,
height:350,
image_format:'png',
png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML="<img id='capture' src="+data_uri+">";
});
}

console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Mm6eMOBT5/model.json",modelLoaded);
function modelLoaded() {
    console.log("Model Loaded!");
}
function speak() {
    synth=window.speechSynthesis;
    speak1="The First Prediction Is"+prediction1;
    speak2="And The Second Prediction Is"+prediction2;
utter=new SpeechSynthesisUtterance(speak1+speak2);
synth.speak(utter);
}