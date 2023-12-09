const notes = document.getElementsByClassName("notes");

function play(i) {
    var sound = new Audio(notes[i].src);
    sound.play();
}
