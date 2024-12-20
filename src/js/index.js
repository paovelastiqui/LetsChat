// Selecciona el botón del menú móvil y el menú móvil
const mobileMenuButton = document.querySelector('[aria-controls="mobile-menu"]');
const mobileMenu = document.getElementById('mobile-menu');

// Agrega un evento de clic al botón del menú móvil
mobileMenuButton.addEventListener('click', () => {
  // Alterna la clase 'hidden' para mostrar u ocultar el menú móvil
  const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
  mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
  mobileMenu.classList.toggle('hidden');

  // Alterna los íconos entre "hamburguesa" y "cerrar"
  const icons = mobileMenuButton.querySelectorAll('[data-slot="icon"]');
  icons.forEach(icon => icon.classList.toggle('hidden'));
});
