'use client'
import { useState, useTransition } from "react"
import { Input, Button, Divider, Select, SelectItem, Textarea } from "@nextui-org/react"
import { errorHelper } from "@/components/utils";

import { useFormik } from "formik";
import * as Yup from 'yup'

export default function AddEventComponent({venuesList, postEvent}){


    const formik = useFormik({
        initialValues:{
            artist:"",
            venue:"",
            description:"",
            date:"",
            slug:""
        },
        validationSchema:Yup.object({
            artist:Yup.string().required('Sorry, artist is required'),
            venue:Yup.string().required('Sorry, venue is required'),
            description:Yup.string().required('Sorry, description is required'),
            date:Yup.string().required('Sorry, date is required'),
            slug:Yup.string().required('Sorry, slug is required')
        }),
        onSubmit: async(values)=>{
            /// SUBMIT/ POST
        }
    })


    return(
        <form className="max-w-2xl mx-auto" onSubmit={formik.handleSubmit}>
            <h1 className="text-2xl py-5">Add Event</h1>
            <Divider className="mb-5"/>

            <Input
                className="mb-5"
                type="text"
                label="Artist name"
                variant="bordered"
                fullWidth={true}
                {...formik.getFieldProps('artist')}
                {...errorHelper(formik,'artist')}
            />

            <Select
                label="Venue"
                placeholder="Select a Venue"
                fullWidth={true}
                className="mb-5"
                {...formik.getFieldProps('venue')}
                {...errorHelper(formik,'venue')}
            >
                { venuesList?.map((venue,index)=>(
                    <SelectItem key={`${venue._id}`}>
                        {venue.name}
                    </SelectItem>
                ))}
            </Select>

            <Divider className="mb-5"/>

            <Textarea
                label="Description"
                placeholder="Enter a description"
                fullWidth={true}
                className="mb-5"
                variant="bordered"
                {...formik.getFieldProps('description')}
                {...errorHelper(formik,'description')}
            />


            {/*  DATEPICKER */}


            <Divider className="mb-5"/>

            <Input
                className="mb-5"
                type="text"
                label="Slug"
                variant="bordered"
                fullWidth={true}
                {...formik.getFieldProps('slug')}
                {...errorHelper(formik,'slug')}
            />

            <Button color="secondary" variant="solid" type="submit">
                Add Event
            </Button>


        </form>
    )
}