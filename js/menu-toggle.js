const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('.navbar ul');

menuToggle.addEventListener('click', () => {
  // Alterna o menu visível/invisível
  navUl.classList.toggle('active');
  // Bloqueia ou desbloqueia o scroll do body conforme o menu
  document.body.classList.toggle('body-no-scroll', navUl.classList.contains('active'));
});

// Fecha o menu e libera o scroll ao clicar em qualquer link do menu
document.querySelectorAll('.navbar ul li a').forEach(link => {
  link.addEventListener('click', () => {
    navUl.classList.remove('active');
    document.body.classList.remove('body-no-scroll');
  });
});