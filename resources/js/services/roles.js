import axios from "axios"

const API = "/api/roles"

export async function getRoles() {
  return await axios.get(API)
}

export async function getRole(id) {
  return await axios.get(`${API}/${id}`)
}

export async function createRole(role) {
  return await axios.post(API, role)
}
