import Link from 'next/link';

import { Button, buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { siteConfig } from '@/config/site';
import { Icons } from '@/components/ui/icons';
import { Checkbox } from '@/components/ui/checkbox';
import SignUpForm from './_components/SignUpForm';

export default function RegisterForm() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">
          <div className="flex justify-between items-center">
            <span>Sign Up</span>{' '}
            <Link href="/">
              <div
                className={buttonVariants({
                  size: 'icon',
                  variant: 'ghost',
                })}
              >
                <Icons.undo className="h-5 w-5" />
                <span className="sr-only">Undo</span>
              </div>
            </Link>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <SignUpForm />
          <Button variant="outline" className="w-full">
            Sign Up with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Do have an account?{' '}
          <Link href={siteConfig.auth.signIn} className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
