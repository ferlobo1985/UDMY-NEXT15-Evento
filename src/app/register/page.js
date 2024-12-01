'use client'
import { Input, Button } from "@nextui-org/react"
import { useFormik } from "formik"
import { useState } from "react"
import * as Yup from "yup"

export default function RegisterPage(){
    const [ formType, setFormType] = useState(false);

    const formik = useFormik({
        initialValues:{ email:'',password:''},
        validationSchema: Yup.object({
            email:Yup.string()
            .email('This is not an email')
            .required('The email is required'),
            password:Yup.string()
            .required('The password is required ')
        }),
        onSubmit: async(values)=>{
            //// SUBMIT TO NEXT AUTH
            console.log(values)
        }
    })



    return(
        <form>


        </form>
    )
}