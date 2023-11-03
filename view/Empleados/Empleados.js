import React, { useState, useEffect } from "react";
import Content from "../../components/Content";
import axios from "axios";
import EmpleadoService from "../../services/EmpleadoService";
import EmpleadoEdit from "../Empleados/EmpleadoEdit";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useHistory } from "react-router";
const Empleados = () => {
  const [empleado, setEmpleado] = useState([]);
  // const [id, setId] = useState("");
  const server = `http://localhost:3000`;
  const getData = async () => {
    const { data } = await axios.get(`${server}/empleados`);
    console.log(data);
    setEmpleado(data);
  };
  useEffect(() => {
    getData();
  }, []);
  const DisplayData = empleado.map((info) => {
    return (
      <TableRow
        key={info.noempleado}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {info.noempleado}
        </TableCell>
        <TableCell>{info.noempleado}</TableCell>
        <TableCell>{info.nombre}</TableCell>
        <TableCell>
          <IconButton aria-label="editar">
            <a href={`empleados-edit/${info.noempleado}`}>
              <EditIcon color="primary" />
            </a>
          </IconButton>
        </TableCell>
        <TableCell>
          <IconButton
            aria-label="borrar"
            onClick={async () => {
              await EmpleadoService.deleteEmpleado(info.noempleado);
              await getData();
            }}
          >
            <DeleteIcon color="danger" />
          </IconButton>
        </TableCell>
      </TableRow>
    );
  });
  return (
    <Content>
      <h1>EMPLEADOS</h1>
      <a href="/empleados-add">
        <Button variant="contained" startIcon={<PersonAddIcon />}>
          Agregar empleado
        </Button>
      </a>
      <h3>Listado de empleados</h3>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>No.</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Departamento</TableCell>
                <TableCell>Editar</TableCell>
                <TableCell>Borrar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{DisplayData}</TableBody>
          </Table>
        </TableContainer>
      </div>
    </Content>
  );
};
export default Empleados;
