import React from 'react'
import Header from './header'



export default function pagelayout({children}) {
    
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}


    