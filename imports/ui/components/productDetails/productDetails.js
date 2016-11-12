import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Meteor } from 'meteor/meteor';

import { Products } from '../../../api/products';
 
import template from './productDetails.html';
 
class ProductDetails {
    constructor($stateParams, $scope, $reactive) {
        'ngInject';
        
        $reactive(this).attach($scope);

        this.productId = $stateParams.productId;

        this.helpers({
            product() {
                return Products.findOne({
                    _id: $stateParams.productId
                })
            }

        });
    }

    save() {
        Products.update(
            {
                _id: this.product._id
            }, 
            {
                $set: {
                    name: this.product.name,
                    category: this.product.category
                }
            }, (error) => {
                if(error) {
                    console.log('Oops, unable to update the product...');
                } else {
                    console.log('Done!');
                }
            }
        );
    }
}
 
const name = 'productDetails';
 
export default angular.module(name, [
    angularMeteor
]).component(name, {
    template,
    controllerAs: name,
    controller: ProductDetails
})
.config(config);

function config($stateProvider) {
    'ngInject';
 
    $stateProvider.state('productDetails', {
        url: '/products/:productId',
        template: '<product-details></product-details>',
        resolve: {
            currentUser($q) {
                if(Meteor.userId() === null) {
                    return $q.reject('AUTH_REQUIRED');
                } else {
                    return $q.resolve();
                }
            }
        }
    });
}