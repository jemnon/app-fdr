class ProductsService {
  constructor ($http) {
    'ngInject';

    this.$http = $http;
  }

  /**
   * Get request for products json
   *
   * @public
   */
  getProducts() {
    return this.$http.get('assets/data/products.json'); 
  }

  /**
   * Get request for individual product json
   *
   * @param {number} id - product id
   * @public
   */
  getProduct(id) {
    return this.$http.get('assets/data/products/' + id + '.json');
  }
}

export default ProductsService;