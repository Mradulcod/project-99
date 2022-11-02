var SpeechRecognition= window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    recognition.start();
document.getElementById("textbox").innerHTML=""
}
recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript
    console.log(content);
    speak();
    document.getElementById("textbox").innerHTML=content;

}

function speak() {
    synth= window.speechSynthesis;
    var speak_data = document.getElementById("textbox").ariaValueMax;
    utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
}

Webcam.set ({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach(camera);