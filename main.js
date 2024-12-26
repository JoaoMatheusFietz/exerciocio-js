document.getElementById("validationForm").addEventListener("submit", function(event) {
event.preventDefault();

    //captura campo A
    const campoA = parseFloat(document.getElementById("campoA").value);
    //captura campo B
    const campoB = parseFloat(document.getElementById("campoB").value);
    //mensagem de validaçao
    const mensagem = document.getElementById("mensagem");
    //verifica se campo B é maior que campo A e libera mensagem de validaçao
    if (campoB > campoA) {
        mensagem.textContent = "Formulário válido! O número B é maior que o número A.";
        mensagem.style.color = "green";
    } else {
        mensagem.textContent = "Formulário inválido! O número B deve ser maior que o número A.";
        mensagem.style.color = "red";
    }
});
