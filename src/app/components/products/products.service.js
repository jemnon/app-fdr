class ProductsService {
  constructor ($http) {
    'ngInject';

    this.$http = $http;
  }

  getProducts() {
    return this.$http.get('assets/data/products.json'); 
  }
}

export default ProductsService;