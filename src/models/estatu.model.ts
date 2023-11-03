import {Entity, model, property} from '@loopback/repository';

@model()
export class Estatu extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idEstatus?: number;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;


  constructor(data?: Partial<Estatu>) {
    super(data);
  }
}

export interface EstatuRelations {
  // describe navigational properties here
}

export type EstatuWithRelations = Estatu & EstatuRelations;
