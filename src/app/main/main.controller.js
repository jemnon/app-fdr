class MainController {
  constructor ($log, productsService) {
    'ngInject';

    this.$log            = $log;

    this.productsService = productsService;
    this.products        = null;

    this.init();
  }

  init() {
    this.productsService.getProducts()
      .then((response) => {
        this.products = response.data.documents;
      })
      .catch((error) => {
        this.$log.error('XHR Failed');
      });
  }
}

export default MainController;
