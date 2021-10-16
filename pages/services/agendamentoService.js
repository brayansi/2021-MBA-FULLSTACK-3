import axios from "axios";

const path = '/users';

const api = axios.create({
  baseURL: "https://api.github.com",
});

export function getAgendamento() {
  return api.get(`${path}`);
}

export function createAgendamento(data) {
  return api.post(`${path}/${data.id}`, data);
}

export function updateAgendamento(data) {
  return api.put(`${path}/${data.id}`, data);
}

export function deleteAgendamento(id) {
  return api.delete(`${path}/${id}`);
}

export default api;