function showMessage() {
    document.getElementById("message").innerHTML =
    "💖 I love you so much! You are my forever happiness MIRHA KE BABA MERE MUNEEB💖";
    
    
    
window.onload = function () {
    let music = document.getElementById("bgMusic");

    setTimeout(function () {
        music.currentTime = 30; // start at 30 sec
        music.play();
    }, 500);

    setTimeout(function () {
        music.pause();
        music.currentTime = 0;
    }, 90500); // stop at 1:30
};