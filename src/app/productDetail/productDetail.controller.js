class ProductDetailController {
  constructor ($log, $routeParams, productsService) {
    'ngInject';

    this.$log            = $log;
    this.id              = $routeParams.id;

    this.productsService = productsService;

    this.product         = null;

    this.init();
  }

  init() {
    this.productsService.getProduct(this.id)
      .then((response) => {
        this.product = response.data;
      })
      .catch((error) => {
        this.$log.error('XHR Failed');
      });
  }
}

export default ProductDetailController;