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
import {Tipou} from '../models';
import {TipouRepository} from '../repositories';

export class TipoControllerController {
  constructor(
    @repository(TipouRepository)
    public tipouRepository : TipouRepository,
  ) {}

  @post('/tipous')
  @response(200, {
    description: 'Tipou model instance',
    content: {'application/json': {schema: getModelSchemaRef(Tipou)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tipou, {
            title: 'NewTipou',
            exclude: ['idTipo'],
          }),
        },
      },
    })
    tipou: Omit<Tipou, 'idTipo'>,
  ): Promise<Tipou> {
    return this.tipouRepository.create(tipou);
  }

  @get('/tipous/count')
  @response(200, {
    description: 'Tipou model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Tipou) where?: Where<Tipou>,
  ): Promise<Count> {
    return this.tipouRepository.count(where);
  }

  @get('/tipous')
  @response(200, {
    description: 'Array of Tipou model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Tipou, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Tipou) filter?: Filter<Tipou>,
  ): Promise<Tipou[]> {
    return this.tipouRepository.find(filter);
  }

  @patch('/tipous')
  @response(200, {
    description: 'Tipou PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tipou, {partial: true}),
        },
      },
    })
    tipou: Tipou,
    @param.where(Tipou) where?: Where<Tipou>,
  ): Promise<Count> {
    return this.tipouRepository.updateAll(tipou, where);
  }

  @get('/tipous/{id}')
  @response(200, {
    description: 'Tipou model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Tipou, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Tipou, {exclude: 'where'}) filter?: FilterExcludingWhere<Tipou>
  ): Promise<Tipou> {
    return this.tipouRepository.findById(id, filter);
  }

  @patch('/tipous/{id}')
  @response(204, {
    description: 'Tipou PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tipou, {partial: true}),
        },
      },
    })
    tipou: Tipou,
  ): Promise<void> {
    await this.tipouRepository.updateById(id, tipou);
  }

  @put('/tipous/{id}')
  @response(204, {
    description: 'Tipou PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tipou: Tipou,
  ): Promise<void> {
    await this.tipouRepository.replaceById(id, tipou);
  }

  @del('/tipous/{id}')
  @response(204, {
    description: 'Tipou DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tipouRepository.deleteById(id);
  }
}
