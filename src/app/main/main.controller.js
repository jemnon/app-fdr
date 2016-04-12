class MainController {
  constructor ($log, productsService) {
    'ngInject';

    this.$log            = $log;

    this.productsService = productsService;
    this.products        = null;

    this.productFilters = {
      'guitars': true,
      'guitar_and_bass_parts': true,
      'standard': true,
      'artist': true,
      'mounting_hardware': true,
      'miscellaneous_parts': true,
      'plates_covers': true,
      'vintage_modified_models': true,
      'classic': true,
      'american_standard': true,
      'knobs_kits_pickup_covers': true,
      'pickguards_backplates': true
    };

    this.productFiltersLabels = [
      { id:'guitars', label: 'guitars' },
      { id:'guitar_and_bass_parts', label: 'guitar and bass parts' },
      { id:'standard', label: 'standard' },
      { id:'artist', label: 'artist' },
      { id:'mounting_hardware', label: 'mounting hardware' },
      { id:'miscellaneous_parts', label: 'miscellaneous parts' },
      { id:'plates_covers', label: 'plates covers' },
      { id:'vintage_modified_models', label: 'vintage modified models' },
      { id:'classic', label: 'classic' },
      { id:'american_standard', label: 'american standard' },
      { id:'knobs_kits_pickup_covers', label: 'knobs kits pickup covers' },
      { id:'pickguards_backplates', label: 'pickguards backplates' }
    ];

    this.activate();
  }

  activate() {
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
