class ProductsService {
  constructor ($http) {
    'ngInject';

    this.$http = $http;
  }

  getProducts() {
    return this.$http.get('assets/data/products.json'); 
  }

  getProduct(id) {
    return this.$http.get('assets/data/products/' + id + '.json');
  }
}

export default ProductsService;