'use client';

import { useFormStatus } from 'react-dom';

export default function FormSubmit() {
  const { pending } = useFormStatus();

  return (
    <button className="bg-gray-600 p-2 rounded-md" disabled={pending}>
      {pending ? 'Loging...' : 'Login'}
    </button>
  );
}
