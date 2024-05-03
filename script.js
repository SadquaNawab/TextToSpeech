
let voices = [];
let voiceSelect = document.querySelector("select");
let speech = new SpeechSynthesisUtterance(); // Create a speech synthesis utterance object

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};


document.querySelector("#speakButton").addEventListener("click", () => {
    let textToSpeak = document.querySelector("textarea").value;
    let speech = new SpeechSynthesisUtterance(textToSpeak);
    window.speechSynthesis.speak(speech);
});
// Select the select element by its id

