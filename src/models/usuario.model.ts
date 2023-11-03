import {Entity, model, property} from '@loopback/repository';

@model()
export class Usuario extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idUsuario?: number;

  @property({
    type: 'number',
    required: true,
  })
  noempleado: number;

  @property({
    type: 'number',
    required: true,
  })
  contrasenia: number;

  @property({
    type: 'number',
    required: true,
  })
  tipo_u: number;


  constructor(data?: Partial<Usuario>) {
    super(data);
  }
}

export interface UsuarioRelations {
  // describe navigational properties here
}

export type UsuarioWithRelations = Usuario & UsuarioRelations;
