import angular from 'angular';
import angularMeteor from 'angular-meteor';
import ngMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';
 
import { name as Navigation } from '../navigation/navigation';
import { name as SideNav } from '../sideNav/sideNav';
import { name as ProductsList } from '../productsList/productsList';
import { name as ProductDetails } from '../productDetails/productDetails';

import template from './tunariApp.html';
 
class TunariApp {}
 
const name = 'tunariApp';
 
export default angular.module(name, [
    angularMeteor,
    uiRouter,
    'accounts.ui',
    ngMaterial,
    Navigation,
    SideNav,
    ProductsList,
    ProductDetails
]).component(name, {
    template,
    controllerAs: name,
    controller: TunariApp
})
.config(config)
.run(run);

function config($locationProvider, $urlRouterProvider, $mdThemingProvider, $mdIconProvider) {
    'ngInject';

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/products');

    $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey')
        .accentPalette('pink');

    const iconPath =  '/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/';
 
  $mdIconProvider
    .iconSet('social',
      iconPath + 'svg-sprite-social.svg')
    .iconSet('action',
      iconPath + 'svg-sprite-action.svg')
    .iconSet('communication',
      iconPath + 'svg-sprite-communication.svg')
    .iconSet('content',
      iconPath + 'svg-sprite-content.svg')
    .iconSet('toggle',
      iconPath + 'svg-sprite-toggle.svg')
    .iconSet('navigation',
      iconPath + 'svg-sprite-navigation.svg')
    .iconSet('image',
      iconPath + 'svg-sprite-image.svg');
}

function run($rootScope, $state) {
    'ngInject';

    $rootScope.$on('$stateChangeError', 
        (event, toState, toParams, fromState, fromParams, error) => {
            if(error === 'AUTH_REQUIRED') {
                $state.go('products');    
            }
        });    
}