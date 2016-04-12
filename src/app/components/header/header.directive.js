class HeaderDirective {
  constructor () {
    'ngInject';

    let directive = {
      replace: true,
      templateUrl: 'app/components/header/header.html'
    };

    return directive;
  }
}

export default HeaderDirective;