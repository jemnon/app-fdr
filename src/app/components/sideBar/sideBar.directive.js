class SideBarDirective {
  constructor () {
    'ngInject';

    let directive = {
      replace: true,
      templateUrl: 'app/components/sideBar/sideBar.html'
    };

    return directive;
  }
}

export default SideBarDirective;