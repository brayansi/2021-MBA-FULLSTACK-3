import axios from "axios";

const path = '/users';
const procedurePath = '/procedure';
const professionalPath = '/professional';
const appointmentPath = '/appointment';

const api = axios.create({
  baseURL: "http://localhost:8080/clintech",
});

export function getAgendamento() {
  //The service will get the appointments for the user.
  //The last path parameter is the user id.
  //For the purpose of this exercise it is hardcoded.
  return api.get(`${appointmentPath}/list/7`);
}

export function saveAgendamento(data) {
  return api.post(`${appointmentPath}`, data);
}

export function deleteAgendamento(id) {
  return api.delete(`${appointmentPath}/${id}`);
}

export function getProcedimentos() {
  return api.get(`${procedurePath}/list`);
}

export function getProfissionais() {
  return api.get(`${professionalPath}/list`);
}

export default api;