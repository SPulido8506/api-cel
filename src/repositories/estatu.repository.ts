import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DataJsonDataSource} from '../datasources';
import {Estatu, EstatuRelations} from '../models';

export class EstatuRepository extends DefaultCrudRepository<
  Estatu,
  typeof Estatu.prototype.idEstatus,
  EstatuRelations
> {
  constructor(
    @inject('datasources.dataJSON') dataSource: DataJsonDataSource,
  ) {
    super(Estatu, dataSource);
  }
}
