//===== Button Mobile =====

const btnMobile = document.getElementById('button-mobile');

function toggleMenu () {
  const menu_container = document.getElementById('menu-container');
  menu_container.classList.toggle('active');
}


//===== Form Contact =====
function sendEmail(){
    Email.send({
        SecureToken: "3885e412-fc2b-4321-82e9-681fb1fa1961",
        To : 'elton_yoshi@outlook.com',
        From : document.getElementById("contact-email").value,
        Subject : "Novo Contato",
        Body : "Nome: " + document.getElementById("contact-name").value + "<br>Email " + document.getElementById("contact-email").value  + "<br>Telefone: " + document.getElementById("contact-phone").value + "<br>Mensagem: " + document.getElementById("contact-message").value
    }).then(
      message => alert("Mensagem envida com sucesso")
    );
}

