import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import template from './productAdd.html';
import { Products } from '../../../api/products';
 
class ProductAdd {
    constructor() {
        this.product = {};
    }

    submit() {
        Products.insert(this.product);
        this.reset();
    }

    reset() {
        this.product = {};
    }
}
 
const name = 'productAdd';
 
export default angular.module(name, [
    angularMeteor
]).component(name, {
    template,
    controllerAs: name,
    controller: ProductAdd
});