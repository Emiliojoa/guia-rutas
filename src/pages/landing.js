export function LandingPage() {
  const $container = document.createElement('div');

  $container.classList.add("w-1/2", "mx-auto", "p-4", "bg-white", "rounded-md");

  $container.innerHTML += `
    <h1 class="text-2xl">Landing</h1>
    <div class="wi">
    <p>¡Bienvenidos a nuestra página informativa! Nos complace tenerte aquí, donde nuestro objetivo es brindarte la información más relevante, precisa y actualizada. Ya sea que estés buscando respuestas a preguntas específicas, explorando nuevos temas o simplemente manteniéndote al día con las últimas novedades, estamos aquí para ayudarte..</p>
    </div>
  
  `;

  return $container
}