import React from 'react'

export default function Mainpage() {

    const  date = new Date();
    const today = date.getDate()+":"+date.getUTCMonth()+":"+date.getUTCFullYear();

    

    return (
        <div>
        Main Page {today}
            
        </div>
    )
}
