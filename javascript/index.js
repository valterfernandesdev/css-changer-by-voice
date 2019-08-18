var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

var Textbox = $('#textbox');

var startBtn = document.getElementById('start-btn');
var pauseBtn = document.getElementById('pause-btn');

var Content = '';

recognition.continuous = true;

recognition.onresult = function(event) {
    var current = event.resultIndex;
    console.log('current', current);
    var transcript = event.results[current][0].transcript;
    console.log('transcript', transcript);

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