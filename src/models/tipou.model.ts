import {Entity, model, property} from '@loopback/repository';

@model()
export class Tipou extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idTipo?: number;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;


  constructor(data?: Partial<Tipou>) {
    super(data);
  }
}

export interface TipouRelations {
  // describe navigational properties here
}

export type TipouWithRelations = Tipou & TipouRelations;
