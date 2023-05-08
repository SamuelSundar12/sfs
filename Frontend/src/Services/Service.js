import axios from "axios";
const Adminurl = "http://localhost:8080/admin";
const EntityTableurl= "http://localhost:8080/entity";
const Constitutionurl= "http://localhost:8080/constitution";
const EntityDetailsurl= "http://localhost:8080/entitydetails";
const GSTdetailsurl= "http://localhost:8080/gstdetails";
const Branchurl= "http://localhost:8080/branch";
const Service = {
  
  getCountry: async () => {
    const response = await axios.get(Adminurl + "/viewcountry");
    return response.data;
  },
  getState: async () => {
    const response = await axios.get(Adminurl + "/viewstate");
    return response.data;
  },
  getStateById: async (id) => {
    const response = await axios.get(`${Adminurl}/statebyid/${id}`);
    return response.data;
  },
  getCityById: async (id) => {
    const response = await axios.get(`${Adminurl}/citybyid/${id}`);
    return response.data;
  },
  getEntityTable: async () => {
    const response = await axios.get(EntityTableurl + "/viewEntityTable");
    return response.data;
  },
  getConstitution:async()=>{
    const response=await axios.get(Constitutionurl +"/viewConstitution");
    return response.data;
  },
  getEntityTableById: async (id) => {
    const response = await axios.get(`${EntityTableurl}/EntityTable/${id}`);
    return response.data;
  },
  postEntityDetails: async(data)=>{
    const response= await axios.post(EntityDetailsurl +"/addEntityDetails", data);
    return response;
  },
  postGSTdetails: async(data)=>{
    const response= await axios.post(GSTdetailsurl+"/addGSTdetails", data);
    return response;
  },
  getBranch: async () => {
    const response = await axios.get(Branchurl + "/viewbranch");
    return response.data;
  },
  getConstitutionById: async (id) => {
    const response = await axios.get(`${Constitutionurl}/Constitution/${id}`);
    return response.data;
  },
  getBranchByBranchid: async (branchid) => {
    const response = await axios.get(`${Branchurl}/Branch/${branchid}`);
    return response.data;
  },
}

export default Service