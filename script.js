const titulo = document.getElementById("titulo");
const formulario = document.getElementById("formulario");;
const botaoTrocar = document.getElementById("trocar"); // Certifique-se de que existe um elemento com este id no HTML
const botaoPassword = document.getElementById("mostraPassword");

let modo = "registo";



botaoTrocar.addEventListener("click", function() {
    if (modo == "registo") {
        titulo.textContent = "Login";
        botaoTrocar.textContent = "Ainda não tenho conta";
        formulario.innerHTML = `
            <input type="email" id="email" placeholder="Email" />
            <input type="password" id="senha" placeholder="Senha" />
            <button type="button" id="mostraPassword" onclick= "mostraPassword()">👁️</button>
            <button type="button" id="registar">Registar</button>

            `;
        modo = "login";
    } else {
        titulo.textContent = "registo";
        botaoTrocar.textContent = "Já tenho conta";
        formulario.innerHTML = `
            <input type="text" id="nome" placeholder="Nome Completo" />
            <input type="email" id="email" placeholder="Email" />
            <input type="password" id="senha" placeholder="Senha" />
            <button type="button" id="mostraPassword">👁️</button>
            <button type="button" id="entrar">Entrar</button>`
        modo = "registo";

    }
// Evento mostrar/ocultar senha
    document.getElementById("mostraPassword").onclick = function () {
        const botaoPassword = document.getElementById("mostraPassword");

        const senha = document.getElementById("senha");
        if (senha.type === "password") {
            senha.type = "text";
            this.textContent = "🙈";
        } else {
            senha.type = "password";
            this.textContent = "👁️";
        }
    };

    

});