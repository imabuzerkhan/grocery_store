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





export default {
  getCategory ,
  getAllbusinesslist,
 
};
