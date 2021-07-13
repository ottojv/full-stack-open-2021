import axios from "axios";
const baseURL = "http://localhost:3001/persons";

const getPersons = () => axios.get(`${baseURL}`);

const create = (newPerson) => axios.post(baseURL, newPerson);

export default {
  getPersons,
  create,
};
