import axios from "axios";
const EMPLEADO_API_BASE_URL = "http://localhost:3000/empleados";
class EmpleadoService {
  getEmpleado() {
    return axios.get(EMPLEADO_API_BASE_URL);
  }
  createEmpleado(empleado) {
    return axios.post(EMPLEADO_API_BASE_URL, empleado);
  }
  getEmpleadoById(empleadoId) {
    return axios.get(EMPLEADO_API_BASE_URL + "/" + empleadoId);
  }
  updateEmpleado(empleado, empleadoId) {
    return axios.put(EMPLEADO_API_BASE_URL + "/" + empleadoId, empleado);
  }
  deleteEmpleado(empleadoId) {
    return axios.delete(EMPLEADO_API_BASE_URL + "/" + empleadoId);
  }
}
export default new EmpleadoService();
