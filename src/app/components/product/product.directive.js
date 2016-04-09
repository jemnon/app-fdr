class ProductDirective {
  constructor () {
    'ngInject';

    let directive = {
      replace: true,
      templateUrl: 'app/components/product/product.html',
      scope: {
        brand: '=appFdrProductBrand',
        name: '=appFdrProductName',
        img: '=appFdrProductImg'
      },
      link: function(scope, element, attrs) {

      }
    };

    return directive;
  }
}

export default ProductDirective;