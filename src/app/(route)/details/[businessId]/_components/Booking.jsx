import React, { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet" 
import { Calendar } from "@/components/ui/calendar"







const Booking = ({children}) => {
  const [date, setDate] = useState(new Date())
  return (
    <div>
     
   


<Sheet>
  <SheetTrigger>{children}</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Book anService </SheetTitle>
      <SheetDescription>
       Date and Time slot book an service 
      </SheetDescription>
      {/* date peeker */}
      <div>
        <h2 className='my-4' >Date Picker</h2>
        <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-md border"
  />
      </div>
    </SheetHeader>
  </SheetContent>
</Sheet>


    </div>
  )
}

export default Booking
