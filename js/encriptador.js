var btn_encriptar = document.querySelector("#encriptar");

btn_encriptar.addEventListener("click", function() { 
    var sentence = document.querySelector("#sentence");
    var final_sentence = "";

    if(sentence.length) {
        for(var i = 0; i < sentence.length; i++) {
            var char = sentence.charAt(i);
            switch(char) {
                case 'a':
                    final_sentence += "ai";
                    break;
                case 'e':
                    final_sentence += "enter";
                    break;
                case 'i':
                    final_sentence += "imes";
                    break;
                case 'o':
                    final_sentence += "ober";
                    break;
                case 'u':
                    final_sentence += "ufat";
                    break;
                default:
                    final_sentence += char;
                    break;
            }
        }
    }
    document.querySelector("#sentence").value = "";
});
