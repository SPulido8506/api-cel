import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Estatu} from '../models';
import {EstatuRepository} from '../repositories';

export class EstatusControllerController {
  constructor(
    @repository(EstatuRepository)
    public estatuRepository : EstatuRepository,
  ) {}

  @post('/estatus')
  @response(200, {
    description: 'Estatu model instance',
    content: {'application/json': {schema: getModelSchemaRef(Estatu)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Estatu, {
            title: 'NewEstatu',
            exclude: ['idEstatus'],
          }),
        },
      },
    })
    estatu: Omit<Estatu, 'idEstatus'>,
  ): Promise<Estatu> {
    return this.estatuRepository.create(estatu);
  }

  @get('/estatus/count')
  @response(200, {
    description: 'Estatu model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Estatu) where?: Where<Estatu>,
  ): Promise<Count> {
    return this.estatuRepository.count(where);
  }

  @get('/estatus')
  @response(200, {
    description: 'Array of Estatu model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Estatu, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Estatu) filter?: Filter<Estatu>,
  ): Promise<Estatu[]> {
    return this.estatuRepository.find(filter);
  }

  @patch('/estatus')
  @response(200, {
    description: 'Estatu PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Estatu, {partial: true}),
        },
      },
    })
    estatu: Estatu,
    @param.where(Estatu) where?: Where<Estatu>,
  ): Promise<Count> {
    return this.estatuRepository.updateAll(estatu, where);
  }

  @get('/estatus/{id}')
  @response(200, {
    description: 'Estatu model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Estatu, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Estatu, {exclude: 'where'}) filter?: FilterExcludingWhere<Estatu>
  ): Promise<Estatu> {
    return this.estatuRepository.findById(id, filter);
  }

  @patch('/estatus/{id}')
  @response(204, {
    description: 'Estatu PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Estatu, {partial: true}),
        },
      },
    })
    estatu: Estatu,
  ): Promise<void> {
    await this.estatuRepository.updateById(id, estatu);
  }

  @put('/estatus/{id}')
  @response(204, {
    description: 'Estatu PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() estatu: Estatu,
  ): Promise<void> {
    await this.estatuRepository.replaceById(id, estatu);
  }

  @del('/estatus/{id}')
  @response(204, {
    description: 'Estatu DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.estatuRepository.deleteById(id);
  }
}
