import axios from "axios";
const baseURL = "http://localhost:3001/persons";

const getPersons = () => axios.get(`${baseURL}`);

const createPerson = (newPerson) => axios.post(baseURL, newPerson);

const deletePerson = (person) => {
  if (window.confirm(`Delete ${person.name}`)) {
    return axios.delete(`${baseURL}/${person.id}`);
  }

  return null;
};

const updatePerson = (id, updatedPerson) =>
  axios.put(`${baseURL}/${id}`, updatedPerson);

const personService = {
  getPersons,
  createPerson,
  deletePerson,
  updatePerson,
};

export default personService;
