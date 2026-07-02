"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import z from 'zod'
import { Field, FieldLabel } from '../ui/field'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Image from 'next/image'
import Link from 'next/link'


interface loginInputs{
  email:string,
  password:string
}

const loginSchema = z.object({
  email:z.string().email().describe("Email must be a valid email address"),
  password:z.string().min(6).describe("Password must be at least 6 characters long"),
})
function SignIn() {

  const {control,handleSubmit}= useForm<z.infer<typeof loginSchema>>({
    resolver:zodResolver(loginSchema),
    defaultValues:{
      email:"",
      password:"",
    }
  })

  const onSubmit:SubmitHandler<loginInputs>=(data)=>{
    console.log(data);
  }
  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8 text-black flex items-center justify-center mt-10 ml-96 border">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex items-center justify-center">
          <Image src="window.svg" alt="Logo" width={50} height={50} />
        </div>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Welcome back</h2>
          <p className="text-gray-600 mt-2">
            {"Don't have an account? "}
            <Link href="/signup" className="text-blue-600 hover:text-blue-900 font-medium">
              Sign up
            </Link>
          </p>
        </div>
        <Controller name="email" control={control} render={({ field,fieldState }) => <Field>
          <FieldLabel>Email</FieldLabel>
          <Input {...field} placeholder="@gmil.com"/>
          {fieldState.error&& <span className="text-red-500">{fieldState.error.message}</span>}
        </Field>} />
        <Controller name="password" control={control} render={({ field,fieldState }) => <Field>
          <FieldLabel>Password</FieldLabel>
          <Input {...field} placeholder="••••••••" type="password"/>
          {fieldState.error&& <span className="text-red-500">{fieldState.error.message}</span>}
        </Field>} />
        <Button type="submit" variant="outline" className="w-full cursor-pointer bg-accent hover:bg-accent/90">Sign In</Button>
      </form>
    </div>
  )
}

export default SignIn