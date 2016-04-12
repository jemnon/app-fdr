function routerConfig ($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/', {
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .when('/product-detail/:id', {
      templateUrl: 'app/components/productDetail/productDetail.html',
      controller: 'ProductDetailController',
      controllerAs: 'productDetail'
    })
    .otherwise({
      redirectTo: '/'
    });
}

export default routerConfig;
