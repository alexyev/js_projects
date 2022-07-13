const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

password1El = document.getElementById('pw-1')
password2El = document.getElementById('pw-2')
hasGenerated = false

function generateRandom() {
    return Math.floor(Math.random() * characters.length)
}

function generatePasswords() {
    if (hasGenerated === false) {
        for (i = 0; i < 15; i++) {
            password1El.textContent += characters[generateRandom()]
        }
        for (i = 0; i < 15; i++) {
            password2El.textContent += characters[generateRandom()]
        }
    }
    hasGenerated = true
}
