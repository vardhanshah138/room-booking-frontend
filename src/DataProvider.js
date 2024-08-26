import { fetchUtils } from "ra-core";
const apiUrl = "http://localhost:8081";

const dataProvider = {
  getList: (resource, params) => {
      //let url =  
    
    let url = (resource === "rooms") 
    ? `${apiUrl}/rooms?filter=${params?.filter}`
    :`${apiUrl}/rooms/${params.id}/schedules?date=${params.date}`; 

    return fetchUtils
    .fetchJson(url,{ method : "GET"})
    .then(({ json }) => {
      return { 
        data : json,
        total : json?.length,
       }
    })
    .catch((error) => {
      throw error;
    })
  },

  // to make getOne call each row should have a primary key
  getOne: (resource, params) => {
    
  },

  update: async (resource, params) => {},

  create: async (resource, params) => {},

};

export default dataProvider;
