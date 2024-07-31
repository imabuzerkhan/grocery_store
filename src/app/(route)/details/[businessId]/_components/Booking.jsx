import React, { useEffect, useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Calendar } from "@/components/ui/calendar";
import { Button } from '@/components/ui/button';
import GlobalApi from '@/_service/GlobalApi';
import { toast } from 'sonner';
import moment from 'moment';
import { useSession } from 'next-auth/react';

const Booking = ({ children, business }) => {
  const { data: sessionData } = useSession(); // Correctly get session data
  const [date, setDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState();
  const [timeSlot, setTimeSlot] = useState([]);
  const [bookedSlot, setBookedSlot] = useState([]);

  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    const timeList = [];
    for (let i = 10; i <= 12; i++) {
      timeList.push({ time: i + ':00 AM' });
      timeList.push({ time: i + ':30 AM' });
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({ time: i + ':00 PM' });
      timeList.push({ time: i + ':30 PM' });
    }

    setTimeSlot(timeList);
  };

  useEffect(() => {
    if (sessionData) {
      savingBooking();
    }
  }, [sessionData]); // Make sure savingBooking runs when sessionData is available

  const savingBooking = () => {
    GlobalApi.createNewBooking(
      business.id,
      moment(date).format('DD-MMM-yyyy'),
      selectedTime,
      sessionData?.user?.email,
      sessionData?.user?.name
    )
      .then(resp => {
        console.log(resp);
        if (resp) {
          setDate(new Date()); // Reset the date to current date
          setSelectedTime('');
          toast('Service Booked successfully!');
        }
      })
      .catch(e => {
        toast('Error while creating booking');
      });
  };

  const isSlotBooked = (time) => {
    return bookedSlot.find(item => item.time === time);
  };

  return (
    <div>
      <Sheet>
        <SheetTrigger>{children}</SheetTrigger>
        <SheetContent className="overflow-auto">
          <SheetHeader>
            <SheetTitle>Book a Service</SheetTitle>
            <SheetDescription>
              Date and Time slot to book a service
            </SheetDescription>
            {/* Date picker */}
            <div className="flex flex-col gap-5 items-baseline">
              <h2>Date Picker</h2>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </div>
            {/* Time slot picker */}
            <h2 className='my-5 font-bold'>Select Time Slot</h2>
            <div className='grid grid-cols-3 gap-3 mb-10'>
              {timeSlot.map((item, index) => (
                <Button
                  key={index}
                  disabled={isSlotBooked(item.time)}
                  variant='outline'
                  className={`border rounded-full p-2 px-3 hover:bg-slate-100 hover:text-black ${selectedTime === item.time && 'bg-[#272E3F] text-white'}`}
                  onClick={() => setSelectedTime(item.time)}
                >
                  {item.time}
                </Button>
              ))}
            </div>
            <SheetFooter className='my-10'>
              <SheetClose asChild>
                <Button
                  type="submit"
                  disabled={!(selectedTime && date)}
                >
                  Book Appointment
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Booking;
