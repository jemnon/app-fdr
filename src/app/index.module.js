import config from './index.config';
import routerConfig from './index.route';
import runBlock from './index.run';
import MainController from './main/main.controller';
import ProductDetailController from '../app/components/productDetail/productDetail.controller';
import ProductsService from '../app/components/products/products.service';
import ProductDirective from '../app/components/product/product.directive';
import SideBarDirective from '../app/components/sideBar/sideBar.directive';
import HeaderDirective from '../app/components/header/header.directive';
import FooterDirective from '../app/components/footer/footer.directive';
import ProductImgDirective from '../app/components/productImg/productImg.directive';

angular.module('appFdr', ['ngRoute'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('productsService', ProductsService)
  .controller('MainController', MainController)
  .controller('ProductDetailController', ProductDetailController)
  .directive('appFdrProduct', () => new ProductDirective)
  .directive('appFdrProductImg', () => new ProductImgDirective)
  .directive('appFdrSideBar', () => new SideBarDirective)
  .directive('appFdrHeader', () => new HeaderDirective)
  .directive('appFdrFooter', () => new FooterDirective);
