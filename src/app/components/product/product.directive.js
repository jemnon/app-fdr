class ProductDirective {
  constructor () {
    'ngInject';

    let directive = {
      replace: true,
      templateUrl: 'app/components/product/product.html',
      scope: {
        name: '=appFdrProductName',
        img: '=appFdrProductImg',
        id: '=appFdrProductId'
      },
      link: function(scope, element, attrs) {

      }
    };

    return directive;
  }
}

export default ProductDirective;