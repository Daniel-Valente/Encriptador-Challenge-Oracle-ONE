var btn_encriptar = document.querySelector("#encriptar");
var final_sentence = document.querySelector("#finalSentence");

btn_encriptar.addEventListener("click", function() { 
    var sentence = document.querySelector("#sentence").value;
    var modify_sentence = "";

    if(sentence.length) {
        for(var i = 0; i < sentence.length; i++) {
            var char = sentence.charAt(i);
            switch(char) {
                case 'a':
                    modify_sentence += "ai";
                    break;
                case 'e':
                    modify_sentence += "enter";
                    break;
                case 'i':
                    modify_sentence += "imes";
                    break;
                case 'o':
                    modify_sentence += "ober";
                    break;
                case 'u':
                    modify_sentence += "ufat";
                    break;
                default:
                    modify_sentence += char;
                    break;
            }
        }
        final_sentence.textContent = modify_sentence;
    }
    document.querySelector("#sentence").value = "";
});
