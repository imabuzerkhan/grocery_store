import { request, gql } from 'graphql-request';

const Master_url = 'https://ap-south-1.cdn.hygraph.com/content/clys4td3k023a08uyk4fudlyg/master';

const getCategory = async () => {
  const query = gql`
    {
      categories {
        id
        name
        bgColor {
          hex
          css
        }
        categoryimage {
          url
        }
      }
    }
  `;

  const result = await request(Master_url, query);
  return result;
};


const getAllbusinesslist = async () => {
  const query = gql`
    query businesslist {
  businesslists {
    about
    address
    category {
      name
    }
    contactPerson
    gmail
    image {
      url
    }
    id
    name
  }
}
  `;

  const result = await request(Master_url, query);
  return result;
};

const getBusinessByCategory= async (category)=>{
  const query = gql
  `query MyQuery {
  businesslists(where: {category: {name: "`+category+`"}}) {
    about
    address
    category {
      name
    }
    contactPerson
    gmail
    id
    image {
      url
    }
  }
}`
const result = await request(Master_url, query);
return result;
};


const  getbusinessbyid= async (id) =>{
  const query = gql `query MyQuery {
  businesslists(where: {id: "`+id+`"}) {
    about
    address
    category {
      name
    }
    contactPerson
    gmail
    id
    image {
      url
    }
  }
}`

const result = await request(Master_url, query);
return result;

}





// new mutation
const createNewBooking= async (businessId , data , time , userEmail , userName )=>{
  const mutationQuery= gql`
  mutation CreateBooking {
  createBooking(
    data: {bookingStatus: booked, businesslist: {connect: {id: "`+businessId+`"}}, date: "`+date+`", time: "`+time+`", userEmail: "`+userEmail+`", userName: "`+userName+`"}
  ) {
    id
  }
}`

const result = await request(Master_url,mutationQuery);
return result;
}

export default {
  getCategory ,
  getAllbusinesslist,
  getbusinessbyid,
  getAllbusinesslist,
  createNewBooking
 
};
