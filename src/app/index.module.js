import config from './index.config';
import routerConfig from './index.route';
import runBlock from './index.run';
import MainController from './main/main.controller';
import ProductsService from '../app/components/products/products.service';
import ProductDirective from '../app/components/product/product.directive';

angular.module('appFdr', ['ngRoute'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('productsService', ProductsService)
  .controller('MainController', MainController)
  .directive('appFdrProduct', () => new ProductDirective);
