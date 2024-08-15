'use client';

import { useFormState } from 'react-dom';
import { loginForm } from '@/lib/actions';
import FormSubmit from './_components/FormSubmit';
import Link from 'next/link';

export default function RegisterPage() {
  const [state, formAction] = useFormState(loginForm, { message: '' });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action={formAction}>
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
        {state?.message && <p>{state.message}</p>}
        <FormSubmit />
      </form>
      <Link href="/">Powrót</Link>
      <Link href="/register">register</Link>
    </main>
  );
}
