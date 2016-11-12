import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
 
import { name as Navigation } from '../navigation/navigation';
import { name as ProductsList } from '../productsList/productsList';
import { name as ProductDetails } from '../productDetails/productDetails';

import template from './tunariApp.html';
 
class TunariApp {}
 
const name = 'tunariApp';
 
export default angular.module(name, [
    angularMeteor,
    uiRouter,
    Navigation,
    ProductsList,
    ProductDetails
]).component(name, {
    template,
    controllerAs: name,
    controller: TunariApp
})
.config(config);

function config($locationProvider, $urlRouterProvider) {
    'ngInject';

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/products');
}