import axios from "axios";
const baseURL = "http://localhost:3001/persons";

const getPersons = () => axios.get(`${baseURL}`);

const create = (newPerson) => axios.post(baseURL, newPerson);

const deletePerson = (person) => {
  if (window.confirm(`Delete ${person.name}`)) {
    return axios.delete(`${baseURL}/${person.id}`);
  }

  return null;
};

const personService = {
  getPersons,
  create,
  deletePerson,
};

export default personService;
