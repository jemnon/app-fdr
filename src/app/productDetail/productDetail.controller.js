class ProductDetailController {
  constructor ($log, $routeParams, productsService) {
    'ngInject';

    this.$log            = $log;
    this.id              = $routeParams.id;

    this.productsService = productsService;

    this.product = {
      series: null,
      type: null,
      img: null
    }

    this.init();
  }

  init() {
    this.productsService.getProduct(this.id)
      .then((response) => {
        this.product.series = response.data.series;
        this.product.type = response.data.productType;
        this.product.img = response.data.images[1];
      })
      .catch((error) => {
        this.$log.error('XHR Failed');
      });
  }
}

export default ProductDetailController;