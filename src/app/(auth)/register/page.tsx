'use client';

import { useFormState } from 'react-dom';
import { registerForm } from '@/lib/actions';
import FormSubmit from './_components/FormSubmit';
import Link from 'next/link';

export default function RegisterPage() {
  const [state, formAction] = useFormState(registerForm, { message: '' });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action={formAction}>
        <p className="p-2">
          <label className="p-2" htmlFor="first_name">
            First Name
          </label>
          <input
            className="text-black"
            type="text"
            id="first_name"
            name="first_name"
            required
          />
        </p>
        <p className="p-2">
          <label className="p-2" htmlFor="last_name">
            Last Name
          </label>
          <input
            className="text-black"
            type="text"
            id="last_name"
            name="last_name"
            required
          />
        </p>
        <p className="p-2">
          <label className="p-2" htmlFor="email">
            E-mail
          </label>
          <input
            className="text-black"
            type="email"
            id="email"
            name="email"
            required
          />
        </p>
        <p className="p-2">
          <label className="p-2" htmlFor="password">
            Password
          </label>
          <input
            className="text-black"
            type="text"
            id="password"
            name="password"
            required
          />
        </p>
        <p className="p-2">
          <label className="p-2" htmlFor="repeat_password">
            Repeat Password
          </label>
          <input
            className="text-black"
            type="text"
            id="repeat_password"
            name="repeat_password"
            required
          />
        </p>
        {state?.message && <p>{state.message}</p>}
        <FormSubmit />
      </form>
      <Link href="/">Powrót</Link>
      <Link href="/login">Login</Link>
    </main>
  );
}
