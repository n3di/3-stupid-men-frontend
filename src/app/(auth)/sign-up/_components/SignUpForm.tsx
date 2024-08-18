'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; // Zakładam, że import jest poprawny
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useState } from 'react';

const formSchema = z
  .object({
    first_name: z.string().min(2, 'Imię musi mieć co najmniej 2 znaki').max(50),
    last_name: z
      .string()
      .min(2, 'Nazwisko musi mieć co najmniej 2 znaki')
      .max(50),
    email: z.string().email('Podaj poprawny adres email').max(50),
    password: z.string().min(8, 'Hasło musi mieć co najmniej 8 znaków').max(50),
    repeat_password: z.string().min(8).max(50),
    terms: z
      .boolean()
      .refine((value) => value === true, 'Musisz zaakceptować regulamin'),
  })
  .refine((data) => data.password === data.repeat_password, {
    path: ['repeat_password'],
    message: 'Hasła muszą być identyczne',
  });

export default function SignUpForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      repeat_password: '',
      terms: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: (...event: any[]) => void
  ) => {
    const newValue = e.target.value.replace(/\s/g, '');
    onChange(newValue);
  };

  const { handleSubmit, control, formState } = form;
  const { isSubmitting } = formState;

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex gap-2">
          <FormField
            control={control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="John"
                    {...field}
                    value={field.value}
                    onChange={(e) => handleInputChange(e, field.onChange)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Doe"
                    {...field}
                    value={field.value}
                    onChange={(e) => handleInputChange(e, field.onChange)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="m@example.com"
                  {...field}
                  value={field.value}
                  onChange={(e) => handleInputChange(e, field.onChange)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="********"
                  {...field}
                  value={field.value}
                  onChange={(e) => handleInputChange(e, field.onChange)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="repeat_password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Repeat Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="********"
                  {...field}
                  value={field.value}
                  onChange={(e) => handleInputChange(e, field.onChange)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="terms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Accept terms and conditions</FormLabel>
              </div>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Signing Up...' : 'Sign Up'}
        </Button>
      </form>
    </Form>
  );
}
