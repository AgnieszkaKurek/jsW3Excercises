let textAnimation = document.getElementById("textAnimation");
if (textAnimation != null) {
    var text = document.getElementById("textAnimation").innerHTML;
    var characters = text.split("");

    setInterval(function () {
        var firstCharacter = characters.shift();
        characters.push(firstCharacter);
        textAnimation.innerHTML = characters.join("");
    }, 500);
}