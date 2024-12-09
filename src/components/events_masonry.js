'use client'
import { useState } from "react"
import { 
    Card,
    CardHeader,
    CardFooter,
    Divider,
    Image as UIimage,
    Button
 } from "@nextui-org/react"
 import Link from "next/link"
 import Masonry from 'react-masonry-css'


 const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
};


export default function EventsMasonryComponent({eventShows}){
    const [ events, setEvents] = useState(eventShows);

    return(
        <div className="max-w-5xl mx-auto mt-4 p-5">
            <h1 className="text-6xl antonfont py-3">Events</h1>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                { events?.map((event,index)=>(
                    <Card
                        key={`${event._id}+${index}`}
                        isFooterBlurred
                        className="w-full min-h-200 col-span-12 sm:col-span-7"
                    >
                        <CardHeader>

                        </CardHeader>
                        <UIimage/>
                        <CardFooter>
                            
                        </CardFooter>
                    </Card>
                ))}
            </Masonry>
        </div>
    )

}