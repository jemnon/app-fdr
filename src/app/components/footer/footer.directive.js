class FooterDirective {
  constructor () {
    'ngInject';

    let directive = {
      replace: true,
      templateUrl: 'app/components/footer/footer.html'
    };

    return directive;
  }
}

export default FooterDirective;