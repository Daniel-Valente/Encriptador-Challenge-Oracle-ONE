var btn_desencriptar = document.querySelector("#desencriptar");

btn_desencriptar.addEventListener("click", function() {
    var sentence = document.querySelector("#sentence").value;

    var a = "ai";
    var e = "enter";
    var i = "imes";
    var o = "ober";
    var u = "ufat";

    if(sentence.length) {
        var arraySearch = [a, e, i, o, u];

        for(var k = 0; k < sentence.length; k++) {
            
            for(var j = 0; j < arraySearch.length; j++) {
            
                var valueIndex = sentence.search(arraySearch[j]);
                
                if(valueIndex != -1) {
                    if(arraySearch[j] == a) {
                        sentence = sentence.replace(arraySearch[j], "a");
                    } 
                    if(arraySearch[j] == e) {
                        sentence = sentence.replace(arraySearch[j], "e");
                    } 
                    if(arraySearch[j] == i) {
                        sentence = sentence.replace(arraySearch[j], "i");
                    } 
                    if(arraySearch[j] == o) {
                        sentence = sentence.replace(arraySearch[j], "o");
                    } 
                    if(arraySearch[j] == u) {
                        sentence = sentence.replace(arraySearch[j], "u");
                    } 
                }
            }
        }
    }   
});   