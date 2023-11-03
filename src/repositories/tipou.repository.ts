import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DataJsonDataSource} from '../datasources';
import {Tipou, TipouRelations} from '../models';

export class TipouRepository extends DefaultCrudRepository<
  Tipou,
  typeof Tipou.prototype.idTipo,
  TipouRelations
> {
  constructor(
    @inject('datasources.dataJSON') dataSource: DataJsonDataSource,
  ) {
    super(Tipou, dataSource);
  }
}
