'use client'

import SubmitBtn from '@/app/register/components/SubmitBtn'
import { Alert, AlertDescription } from "@/components/shadcn/alert"
import { Checkbox } from "@/components/shadcn/checkbox"
import { Input } from "@/components/shadcn/input"
import { Label } from "@/components/shadcn/label"
import FormField from '@/components/ui/CustomField'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import PasswordField from './PasswordField'

function LoginForm() {
    const router = useRouter();
    const [formState, setFormState] = useState<{ errors: { email?: string[], password?: string[] } | null, message: string | null }>({ errors: null, message: null });

    //============================
    // Login user
    //============================
    const handleLogin = async (data: FormData) => {
        const formData = Object.fromEntries(data);
        try {
            const res = await signIn("credentials", { ...formData, redirect: false });

            if (res?.error) {
                setFormState({
                    errors: {
                        email: ['Invalid credentials'],
                        password: ['Invalid credentials'],
                    },
                    message: res.error,
                });
                return
            }

            router.push('/dashboard');
            router.refresh();

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.log('error: ', error);
            setFormState({
                errors: {
                    email: ['Unknown error'],
                    password: ['Unknown error'],
                },
                message: error.message,
            });
        }
    };
    return (
        <form className="mt-8 space-y-6" action={handleLogin}>
            {formState?.errors && (
                <Alert variant="destructive">
                    <AlertDescription>{formState?.message}</AlertDescription>
                </Alert>
            )}
            <div>
                <FormField label='Email address' htmlFor="email" error={formState?.errors?.email}>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="mt-1"
                    />
                </FormField>
                <FormField label='Password' htmlFor="password" error={formState?.errors?.password}>
                    <PasswordField />
                </FormField>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Checkbox
                        id="remember-me"
                        name="remember"
                    />
                    <Label htmlFor="remember-me" className="ml-2 text-sm">
                        Remember me
                    </Label>
                </div>
                <div className="text-sm">
                    <Link href="/forgot-password" className="text-gray-600 hover:underline">
                        Forgot your password?
                    </Link>
                </div>
            </div>

            <SubmitBtn text='Sign in' loadingText='Singing in...' />

        </form>
    )
}

export default LoginForm