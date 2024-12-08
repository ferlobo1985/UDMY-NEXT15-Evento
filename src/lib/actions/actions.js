'use server'
import DBconnect from '@/lib/db';
import Venue from '@/lib/models/venue';

export async function addVenue(prevState,formData){
    await DBconnect()
    try{
        // VALIDATION

        const newVenue = new Venue({
            name: formData.get('name'),
            address: formData.get('address'),
            state: formData.get('state')
        });
        await newVenue.save();
        return { success: true, message:"Event added" }
    }catch(error){
        return { success: false, message: [error.message] }
    }
}