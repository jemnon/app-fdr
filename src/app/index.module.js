import config from './index.config';
import routerConfig from './index.route';
import runBlock from './index.run';
import MainController from './main/main.controller';
import ProductDetailController from './productDetail/productDetail.controller';
import ProductsService from '../app/components/products/products.service';
import ProductDirective from '../app/components/product/product.directive';
import SideBarDirective from '../app/components/sideBar/sideBar.directive';

angular.module('appFdr', ['ngRoute'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('productsService', ProductsService)
  .controller('MainController', MainController)
  .controller('ProductDetailController', ProductDetailController)
  .directive('appFdrProduct', () => new ProductDirective)
  .directive('appFdrSideBar', () => new SideBarDirective);
