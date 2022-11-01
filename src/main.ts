import './style.css';

const form = document.querySelector<HTMLFormElement>('form');

type Data = {
  name: string;
  email: string;
  telephone: string;
  message: string;
};

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget as HTMLFormElement);

  const data = Object.fromEntries(formData as any) as Data;

  const { email, message, name, telephone } = data;
  if (!email || !message || !name || !telephone) {
    alert('Por favor, complete todos los campos');
    return;
  }

  alert(
    `${data.name}, Gracias por contactarte, te responderemos a la brevedad`
  );
  form.reset();
});
