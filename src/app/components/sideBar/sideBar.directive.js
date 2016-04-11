class SideBarDirective {
  constructor () {
    'ngInject';

    let directive = {
      replace: true,
      templateUrl: 'app/components/sideBar/sideBar.html',
      link: function(scope, element, attrs) {

      }
    };

    return directive;
  }
}

export default SideBarDirective;