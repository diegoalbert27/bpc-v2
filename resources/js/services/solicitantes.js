import axios from "axios"

const API = "/api/solicitantes"

export async function getSolicitantes() {
  return await axios.get(API)
}

export async function getSolicitante(id) {
  return await axios.get(`${API}/${id}`)
}

export async function createSolicitante(solicitante) {
  return await axios.post(API, solicitante)
}

export async function updateSolicitante(id, editSolicitante) {
  return await axios.put(`${API}/${id}`, editSolicitante)
}
