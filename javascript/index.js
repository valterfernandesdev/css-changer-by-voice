var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

var Textbox = $('#textbox');
var startBtn = document.getElementById('start-btn');
var pauseBtn = document.getElementById('pause-btn');

var Content = '';

recognition.continuous = true;

recognition.onresult = function(event) {
    var current = event.resultIndex;
    var transcript = event.results[current][0].transcript;

    if (transcript == "change body to Blue") {
        console.log('transcript', transcript);
        document.body.style.backgroundColor = "Blue";
    }
    if (transcript == "change title to White") {
        console.log('transcript', transcript);
        document.getElementById('titleapp').style.color = "White";
    }
    if (transcript == "open menu") {
        console.log('transcript', transcript);
        document.getElementById("mySidenav").style.width = "250px";
    }
    if (transcript == "Change menu color to Black") {
        console.log('transcript', transcript);
        document.getElementById("mySidenav").style.backgroundColor = "Black";
    }

    Content += transcript;
    Textbox.val(Content);
};

recognition.onstart = function() {
    console.log('Voice recognition is ON.');
}

recognition.onspeechend = function() {
    console.log('No activity.');
}

recognition.onerror = function(event) {
    if (event.error == 'no-speech') {
        console.log('Try again.');
    }
}

$('#start-btn').on('click', function(e) {
    if (Content.length) {
        Content += ' ';
    }

    pauseBtn.disabled = false;
    recognition.start();
    startBtn.disabled = true;
});

$('#pause-btn').on('click', function(e) {
    recognition.stop();
    startBtn.disabled = false;
    pauseBtn.disabled = true;
});