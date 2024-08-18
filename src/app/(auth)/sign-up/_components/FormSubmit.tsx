'use client';

import { useFormStatus } from 'react-dom';

export default function FormSubmit() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="w-full" disabled={pending}>
      {pending ? 'Registring...' : 'Register'}
    </button>
  );
}
