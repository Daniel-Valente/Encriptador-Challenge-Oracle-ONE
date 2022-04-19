var btn_desencriptar = document.querySelector("#desencriptar");
var final_sentence = document.querySelector("#finalSentence");

var message_Board_Not_Found = document.querySelector("#messageBoardNotFound");
var message_Board = document.querySelector("#messageBoard");

var side_panel = document.querySelector(".sidePanel");

btn_desencriptar.addEventListener("click", function() {
    var sentence = document.querySelector("#sentence").value;
    modify_sentence = sentence;

    document.querySelector("#sentence").value = "";
    document.querySelector("#finalSentence").value = "";

    var a = "ai";
    var e = "enter";
    var i = "imes";
    var o = "ober";
    var u = "ufat";

    var arraySearch = [a, e, i, o, u];

    if(modify_sentence.length) {
        message_Board_Not_Found.classList.add("invisible");
        message_Board.classList.remove("invisible");
        
        mediaQueries(side_panel, true);

        for(var k = 0; k < modify_sentence.length; k++) {
            
            for(var j = 0; j < arraySearch.length; j++) {
            
                var valueIndex = sentence.search(arraySearch[j]);
                
                if(valueIndex != -1) {
                    if(arraySearch[j] == a) {
                        modify_sentence = modify_sentence.replace(arraySearch[j], "a");
                    } 
                    if(arraySearch[j] == e) {
                        modify_sentence = modify_sentence.replace(arraySearch[j], "e");
                    } 
                    if(arraySearch[j] == i) {
                        modify_sentence = modify_sentence.replace(arraySearch[j], "i");
                    } 
                    if(arraySearch[j] == o) {
                        modify_sentence = modify_sentence.replace(arraySearch[j], "o");
                    } 
                    if(arraySearch[j] == u) {
                        modify_sentence = modify_sentence.replace(arraySearch[j], "u");
                    } 
                }
            }
        }
        final_sentence.value = modify_sentence;
    }   
    else {
        mediaQueries(side_panel, false);

        message_Board_Not_Found.classList.remove("invisible");
        message_Board.classList.add("invisible");
    }
});   

function mediaQueries(side_panel, flat) {
    if(flat) {
        if ((window.matchMedia("(min-width: 481px)").matches) && (window.matchMedia("(max-width:992px)").matches)) {
            side_panel.style.height = "343px";
        }
    
        if(window.matchMedia("(max-width:480px)").matches) {
            side_panel.style.height = "595px";
        }
    }
    else {
        if ((window.matchMedia("(min-width: 481px)").matches) && (window.matchMedia("(max-width:992px)").matches)) {
            side_panel.style.height = "133px";
        }
    
        if(window.matchMedia("(max-width:480px)").matches) {
            side_panel.style.height = "186px";
        }
    }
}

