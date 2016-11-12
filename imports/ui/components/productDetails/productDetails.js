import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
 
import template from './productDetails.html';
 
class ProductDetails {
    constructor($stateParams) {
        'ngInject';
 
        this.productId = $stateParams.productId;
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
        template: '<product-details></product-details>'
    });
}