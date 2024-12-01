import { getServerSession } from "next-auth/next"
import { options } from '@/api/auth/[...nextauth]/options'
import { redirect } from "next/navigation";

export default async function DashboardPage(){
    const session = await getServerSession(options);

    // if(!session){
    //     redirect('/api/auth/signin')
    // }

    return(
        <>
           { !session ?
            <p>NOt AUTH</p>
            :
                <p>Welcome user</p>
            }
        </>
    )
}