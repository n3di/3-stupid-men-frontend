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
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex items-center gap-2">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" type="text" placeholder="John" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" type="text" placeholder="Doe" required />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="repeat-password">Repeat Password</Label>
            <Input id="repeat-password" type="repeat-password" required />
          </div>
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
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
