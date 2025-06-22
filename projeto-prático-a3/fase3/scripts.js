function adicionarUC() {
  const novaUC = prompt("Digite o nome da nova UC:");
  if (novaUC && novaUC.trim() !== "") {
    const lista = document.getElementById("lista-ucs");
    const novoItem = document.createElement("li");

    novoItem.innerHTML = `
      ${novaUC}
      <button class="botões" onclick="moverUC(this, -1)">&#9206;</button>
      <button class="botões" onclick="moverUC(this, 1)">&#9207;</button>
    `;

    lista.appendChild(novoItem);
  }
}


const fotos = [
  "https://lh3.googleusercontent.com/pw/AP1GczMJCJtp4bix8kJZwRDVTFQHUWT8c_V9u9Lwip35n3jZnAEFixOkz9a6xFA3enqz0FmmWuhpDGiUIksUqGSFTXHWhpCPJSp5iAU7drO-w02n17E_x-Gv5GGCsDwuOD9n-1mScAiroE90jOFsYPHV_3os=w828-h828-s-no-gm?authuser=0",

  "https://lh3.googleusercontent.com/pw/AP1GczNOfpM8LKHSNRurGJTFVmD3yXjKt2r0V46vn7TjsWresy5hfD1MwbiQ-YZJbpnhBG1GhC5vlonDk7zYMGMBYWedq76j3hnQqmMdbmZ99g8MzRiUySPrBYD_6aOZQwOjVyMbOvQ1EsIp8KoGZdypoHsy=w869-h869-s-no-gm?authuser=0",

  "https://lh3.googleusercontent.com/pw/AP1GczP18WVdhmr3p-VhhNcn-Pv0RDc63CrMdy-Gi8CpzNZUqOeqack5fHlqzj1H9oGjyD_EJqrjBmomkSoc6koYQRhqdhRquZr80ujGTquogprb9UzLxy1rUBhQjnpIkWKaNSJuvonPR6fh1kCxcHpKh8kB=w870-h869-s-no-gm?authuser=0"
    ];

let indiceAtual = 0;

function trocarFoto(direcao) {
  indiceAtual += direcao;

  if (indiceAtual < 0) {
    indiceAtual = fotos.length - 1;
  } else if (indiceAtual >= fotos.length) {
    indiceAtual = 0;
  }

  document.getElementById("fotoPerfil").src = fotos[indiceAtual];
}

function moverUC(botao, direcao) {
  const item = botao.parentElement;
  const lista = item.parentElement;
  const irPara = direcao === -1 ? item.previousElementSibling : item.nextElementSibling;

  if (irPara) {
    if (direcao === -1) {
      lista.insertBefore(item, irPara);
    } else {
      lista.insertBefore(irPara, item);
    }
  }
}

function validarCPF() {
  const cpf = document.getElementById("cpf").value.trim();
  const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  const erroSpan = document.getElementById("erroCPF");

  if (regex.test(cpf)) {
    erroSpan.textContent = ""; // CPF válido
  } else {
    erroSpan.textContent = "CPF inválido! Use o formato 000.000.000-00";
  }
}

function validarEmail() {
  const email = document.getElementById("email").value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const erroSpan = document.getElementById("erroEmail");

  if (regex.test(email)) {
    erroSpan.textContent = "";

    document.getElementById("emailExibido").innerHTML = `
      <a href="mailto:${email}" id="emailLink">${email}</a>
    `;
  } else {
    erroSpan.textContent = "E-mail inválido! Use o formato nome@dominio.com";
  }
}

function atualizarDescricao() {
  const campo = document.getElementById("novaDescricao");
  const novaInfo = campo.value.trim();

  if (novaInfo) {
    const descricao = document.getElementById("descricaoPessoal");
    descricao.innerHTML += ` ${novaInfo}`;
    campo.value = "";   }
}
