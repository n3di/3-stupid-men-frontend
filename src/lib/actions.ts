'use server';

function isInvalidText(text: string | null): boolean {
  return !text || text.trim() === '';
}

export async function registerForm(
  prevState: { message: string } | undefined,
  formData: FormData
) {
  const user = {
    first_name: formData.get('first_name') as string | null,
    last_name: formData.get('last_name') as string | null,
    email: formData.get('email') as string | null,
    password: formData.get('password') as string | null,
    repeat_password: formData.get('repeat_password') as string | null,
  };

  if (
    isInvalidText(user.first_name) ||
    isInvalidText(user.last_name) ||
    isInvalidText(user.email) ||
    isInvalidText(user.password) ||
    isInvalidText(user.repeat_password) ||
    (user.email && !user.email.includes('@'))
  ) {
    return {
      message: 'Invalid input.',
    };
  }

  console.log(user);
  return { message: 'Registration successful.' };
}

export async function loginForm(prevState: any, formData: FormData) {
  const user = {
    email: formData.get('email') as string | null,
    password: formData.get('password') as string | null,
  };

  if (
    isInvalidText(user.email) ||
    isInvalidText(user.password) ||
    (user.email && !user.email.includes('@'))
  ) {
    return {
      message: 'Invalid input.',
    };
  }

  console.log(user);
  return { message: 'Loging successful.' };
}
