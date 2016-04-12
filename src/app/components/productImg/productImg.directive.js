class ProductImgDirective {
  constructor () {
    'ngInject';

    let directive = {
      restrict: 'A',
      link: function(scope, element, attrs) {
        scope.$watch(function() {
            return attrs['ngSrc'];
          }, function (value) {
            if (!value) {
              element.addClass('is-broken-image');
              element.attr('src', attrs.appFdrProductImg);  
            }
        });

        element.bind('error', function() {
          element.addClass('is-broken-image');
          element.attr('src', attrs.appFdrProductImg);
        });
      }
    };

    return directive;
  }
}

export default ProductImgDirective;