var btn_copy = document.querySelector("#copiar");


btn_copy.addEventListener("click", function() {
    var content = document.querySelector("#finalSentence");


    var inputOculto = document.createElement("input");
    inputOculto.setAttribute('value', content.textContent);

    document.body.appendChild(inputOculto);
    inputOculto.select();
    document.execCommand('copy');
    document.body.removeChild(inputOculto);
    document.querySelector("#finalSentence").select();
});