var btn_encriptar = document.querySelector("#encriptar");
var final_sentence = document.querySelector("#finalSentence");

var message_Board_Not_Found = document.querySelector("#messageBoardNotFound");
var message_Board = document.querySelector("#messageBoard");

btn_encriptar.addEventListener("click", function() { 
    var sentence = document.querySelector("#sentence").value;
    var modify_sentence = "";

    if(sentence.length) {
        message_Board_Not_Found.classList.add("invisible");
        message_Board.classList.remove("invisible");
        
        mediaQueries(side_panel, true);

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
        document.querySelector("#sentence").value = "";
        final_sentence.textContent = modify_sentence;
    }   
    else {
        mediaQueries(side_panel, false);

        message_Board_Not_Found.classList.remove("invisible");
        message_Board.classList.add("invisible");
    }
});
