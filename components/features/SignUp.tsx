"use client"

import { Controller, SubmitHandler, useForm } from "react-hook-form"
import z from "zod"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Field, FieldLabel } from "../ui/field"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import Image from "next/image"

interface signupInputs{
  name : string,
  email : string,
  password : string
}

const signUpSchema= z.object({
  name:z.string().min(3).describe("Name must be at least 3 characters long"),
  email:z.string().email().describe("Email must be a valid email address"),
  password:z.string().min(6).describe("Password must be at least 6 characters long"),
})

function SignUp() {
const{control,handleSubmit}= useForm<z.infer<typeof signUpSchema>>({
  resolver:zodResolver(signUpSchema),
  defaultValues:{
    name:"",
    email:"",
    password:"",
  }
})

const onSubmit:SubmitHandler<signupInputs>=(data)=>{
  console.log(data);
}
  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8 text-black flex items-center justify-center mt-10 ml-96 border">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex items-center justify-center">
          <Image src="window.svg" alt="Logo" width={50} height={50} />
        </div>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Create your account</h2>
          <p className="text-gray-600 mt-2">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:text-blue-900 font-medium">
              Log in
            </Link>
          </p>
        </div>
      <Controller name="name" control={control} render={({ field,fieldState }) => <Field>
        <FieldLabel>Name</FieldLabel>
        <Input  placeholder="Name" {...field} />
        {fieldState.error&& <span className="text-red-500">{fieldState.error.message}</span>}
      </Field>} />
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
      <Button type="submit" variant="outline" className="w-full cursor-pointer bg-accent hover:bg-accent/90">Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUp