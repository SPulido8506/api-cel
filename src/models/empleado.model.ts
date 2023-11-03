import {Entity, model, property} from '@loopback/repository';

@model()
export class Empleado extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  noempleado?: number;

  @property({
    type: 'date',
    required: true,
  })
  fecha_ent: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  apellid_p: string;

  @property({
    type: 'string',
    required: true,
  })
  apellido_m: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha_nac: string;

  @property({
    type: 'string',
    required: true,
  })
  sexo: string;

  @property({
    type: 'string',
    required: true,
  })
  estado_c: string;

  @property({
    type: 'string',
    required: true,
  })
  escolaridad: string;

  @property({
    type: 'string',
    required: true,
  })
  lugar_nac: string;

  @property({
    type: 'string',
    required: true,
  })
  calle: string;

  @property({
    type: 'number',
    required: true,
  })
  numero: number;

  @property({
    type: 'string',
    required: true,
  })
  colonia: string;

  @property({
    type: 'string',
    required: true,
  })
  ciudad: string;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;

  @property({
    type: 'string',
    required: true,
  })
  curp: string;

  @property({
    type: 'string',
    required: true,
  })
  rfc: string;

  @property({
    type: 'string',
    required: true,
  })
  nss: string;

  @property({
    type: 'string',
    required: true,
  })
  departamento: string;

  @property({
    type: 'string',
    required: true,
  })
  puesto: string;

  @property({
    type: 'string',
    required: true,
  })
  telefono: string;

  @property({
    type: 'string',
    required: true,
  })
  mail: string;

  @property({
    type: 'string',
    required: true,
  })
  estatus: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo_e: string;


  constructor(data?: Partial<Empleado>) {
    super(data);
  }
}

export interface EmpleadoRelations {
  // describe navigational properties here
}

export type EmpleadoWithRelations = Empleado & EmpleadoRelations;
