import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import template from './productsList.html'; 
import { Products } from '../../../../collections/products';
 
class ProductsList {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);

        this.helpers({
            products() {
                return Products.find({});
            }
        });
    }
}
 
const name = 'productsList';
 
export default angular.module(name, [
    angularMeteor
]).component(name, {
    template,
    controllerAs: name,
    controller: ProductsList
});