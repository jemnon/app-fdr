class MainController {
  constructor ($log, productsService) {
    'ngInject';

    this.$log            = $log;

    this.productsService = productsService;
    this.products        = null;

    this.filterProducts = {
      'guitars': true,
      'american_standard': true,
      'guitar_bass_parts': true,
      'knobs_kits_pickup_covers': true,
      'classic': true,
      'pickguards_backplates': true,
      'vintage_modified_models': true,
      'miscellaneous_parts': true
    };

    this.productFilterNames = [
      { label: 'Guitars', id: 'guitars' },
      { label: 'American Standard', id: 'american_standard' },
      { label: 'Guitar and Bass Parts', id: 'guitar_bass_parts' },
      { label: 'Knobs Kits Pickup Covers', id: 'knobs_kits_pickup_covers' },
      { label: 'Classic', id: 'classic' },
      { label: 'Pickguards Backplates', id: 'pickguards_backplates' },
      { label: 'Vintage Modified Models', id: 'vintage_modified_models' },
      { label: 'Miscellaneous Parts', id: 'miscellaneous_parts' }
    ];

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
