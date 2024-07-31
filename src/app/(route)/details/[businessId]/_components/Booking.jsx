import React, { useEffect, useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,

  SheetTrigger,
} from "@/components/ui/sheet" 
import { Calendar } from "@/components/ui/calendar"
import { Button } from '@/components/ui/button'







const Booking = ({children}) => {
  const [date, setDate] = useState(new Date())
  const [selectedTime,setSelectedTime]=useState();
  const [timeSlot,setTimeSlot]=useState([]);
  const [bookedSlot,setBookedSlot]=useState([]);

useEffect(()=>{
  getTime();
},[])



  const getTime = () => {
    const timeList = [];
    for (let i = 10; i <= 12; i++) {
        timeList.push({
            time: i + ':00 AM'
        })
        timeList.push({
            time: i + ':30 AM'
        })
    }
    for (let i = 1; i <= 6; i++) {
        timeList.push({
            time: i + ':00 PM'
        })
        timeList.push({
            time: i + ':30 PM'
        })
    }

    setTimeSlot(timeList)
  }


  const isSlotBooked=(time)=>{
    return bookedSlot.find(item=>item.time==time)
  }
  return (
    <div>
     
   


<Sheet>
  <SheetTrigger>{children}</SheetTrigger>
  <SheetContent  className="overflow-auto" >
    <SheetHeader>
      <SheetTitle>Book anService </SheetTitle>
      <SheetDescription>
       Date and Time slot book an service 
      </SheetDescription>
      {/* date peeker */}
      <div className="flex flex-col gap-5 items-baseline" >
        <h2 className='' >Date Picker</h2>
        <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-md border"
  />
      </div>
      {/* time slot picker */}
      <h2 className='my-5 font-bold'>Select Time Slot</h2>
        <div className='grid grid-cols-3 gap-3 mb-10 '>
            {timeSlot.map((item,index)=>(
                <Button key={index}
                disabled={isSlotBooked(item.time)}
                variant='outiline'
                className={`border rounded-full 
                p-2 px-3 hover:bg-slate-100
                 hover:text-black
                 ${selectedTime==item.time&&'bg-white text-black'}`}
                onClick={()=>setSelectedTime(item.time)}
                >{item.time}</Button>
            ))}
            </div>
            <SheetFooter className='my-10' >
          <SheetClose asChild>
            <Button type="submit">Booking Appoinement </Button>
          </SheetClose>
        </SheetFooter>
    </SheetHeader>
  </SheetContent>
</Sheet>


    </div>
  )
}

export default Booking
