import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import product from './product';
import banner from './banner';
import banner_without_product from './banner_without_product';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([ product, banner, banner_without_product ]),
})
  