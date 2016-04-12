class ProductDirective {
  constructor () {
    'ngInject';

    let directive = {
      replace: true,
      templateUrl: 'app/components/product/product.html',
      scope: {
        series: '=appFdrProductSeries',
        type: '=appFdrProductType',
        name: '=appFdrProductName',
        img: '=appFdrProductImg',
        id: '=appFdrProductId'
      }
    };

    return directive;
  }
}

export default ProductDirective;