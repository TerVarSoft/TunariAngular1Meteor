import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import template from './tunariApp.html';
import { name as ProductsList } from '../productsList/productsList';
 
class TunariApp {}
 
const name = 'tunariApp';
 
export default angular.module(name, [
    angularMeteor,
    ProductsList
]).component(name, {
    template,
    controllerAs: name,
    controller: TunariApp
});