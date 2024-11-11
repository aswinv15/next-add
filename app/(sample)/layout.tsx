'use client';
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return(
    
<div>


    <div className='bg-black p-2 text-white'>header</div>
    {children}
    </div>
  ) 
}
