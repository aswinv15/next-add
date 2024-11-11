'use client';
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return(
    
<div>


    <div className='bg-red-500 p-2'>header</div>
    {children}
    </div>
  ) 
}
