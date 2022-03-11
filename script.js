//===== Button Mobile =====


function toggleMenu() { 
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('show');
  
  const closeIcon = document.getElementById('close-icon');
  closeIcon.classList.toggle('active');

  const openIcon = document.getElementById('open-icon');
  openIcon.classList.toggle('close');
}

//===== Ativar e remover =====


function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
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
      message => swal('Sua mensagem foi envida com sucesso!','', 'success')
    );
}

