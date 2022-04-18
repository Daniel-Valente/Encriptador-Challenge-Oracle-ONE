var btn_desencriptar = document.querySelector("#desencriptar");
var final_sentence = document.querySelector("#finalSentence");

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

    if(modify_sentence.length) {
        var arraySearch = [a, e, i, o, u];

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
        final_sentence.textContent = modify_sentence;
    }   
});   