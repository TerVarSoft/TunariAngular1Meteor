import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import { Meteor } from 'meteor/meteor';

import template from './productAdd.html';
import { Products } from '../../../api/products';
 
class ProductAdd {
    constructor() {
        this.product = {};
    }

    submit() {
        this.product.owner = Meteor.userId();
        Products.insert(this.product);

        if(this.done) {
            this.done();
        }
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
    bindings: {
        done: '&?'
    },
    controllerAs: name,
    controller: ProductAdd
});