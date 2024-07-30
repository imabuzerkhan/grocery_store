"use client";

import { useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import GlobalApi from '@/_service/GlobalApi';
import Image from 'next/image';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'; // Importing icons
import { Button } from '@/components/ui/button';
import { Share } from 'next/font/google';
import { NotebookPen, ShareIcon, User } from 'lucide-react';
import Booking from './_components/Booking';


const BusinessDetails = ({ params }) => {
  const { data, status } = useSession();
  const [business, setBusiness] = useState([]);

  useEffect(() => {
    if (status === 'loading') {
      return; // Or show a loading spinner
    }
    
    if (status === 'unauthenticated') {
      signIn('descope');
    }
  }, [status]);

  useEffect(() => {
    if (params && params.businessId) {
      getBusinessById(params.businessId);
    }
  }, [params]);

  const getBusinessById = async (id) => {
    try {
      const res = await GlobalApi.getbusinessbyid(id);
      setBusiness(res.businesslists || []);
    } catch (error) {
      console.error('Error fetching business details:', error);
    }
  };

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'unauthenticated') {
    return <p>You need to sign in to view this page.</p>;
  }

  return (
    status === 'authenticated' && (
      <>
      <div className="py-8 md:py-20 px-10 md:px-36">
        {business.map((item) => (
          <>
          <div key={item.id} className="mb-8 md:flex item-center gap-4  ">
            {item.image && item.image.length > 0 && (
              <Image
                src={item.image[0]?.url || '/path/to/default/image.jpg'}
                alt={item.name || 'Business Image'}
                width={150}
                height={200}
                className='w-44 h-44 rounded-full object-cover '
              />
            )}
           <div className='flex items-center justify-between w-full ' >
            <div className='flex flex-col mt-4 md:mt-0  items-baseline gap-1 ' >
            <p className="mt-2 bg-purple-200 inline rounded-full px-2 py-1 text-lg  "> {item.category?.name || 'Category not available'}</p>
             <p className="mt-2 text-[40px] font-bold  ">{item.contactPerson || 'Contact person not available'}</p>
            <p className="mt-2 flex gap-2 text-lg text-gray-500  items-center ">
              <FaMapMarkerAlt className="inline mr-2" />
              {item.address || 'Address not available'}
            </p >
            <p className="mt-2 flex gap-2 text-lg text-gray-500 items-center ">
              <FaEnvelope className="inline mr-2" />
              {item.gmail || 'Gmail not available'}
            </p>
           

            </div>
            <div className='flex flex-col  items-end gap-3  ' >
              <Button><ShareIcon/></Button>
              <h2 className='flex item-center gap-2 text-xl text-gray-500 ' ><User/>{item.contactPerson}</h2>
              <h2 className='flex item-center gap-2 text-xl text-gray-500 ' ><User/>Availabe 8:00 AM 10:00 PM</h2>
            </div>
            </div>
            
           
           
          </div>
          <div className='grid grid-cols-4 ' >
<div className="businessdes col-span-4 md:col-span-3 mt-16 ">
<h2 className='font-bold text-[25px] ' >Description</h2>
<p className='mt-4 text-lg text-gray-700'  >{item.about|| 'about is not availabe '}</p>
<h2 className='font-bold text-[25px] mt-8 ' >Gallery</h2>
<div>

</div>
</div>
<div className="sugessted md:pl-8">
<Booking>
<Button className="flex gap-2 " >
  <NotebookPen/>
  Bokk Appoinment
</Button>
</Booking>
</div>
          </div>
          </>
          
        ))}
      </div>
      </>
    )
  );
};

export default BusinessDetails;
