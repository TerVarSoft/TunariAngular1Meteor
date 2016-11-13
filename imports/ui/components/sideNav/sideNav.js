import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import template from './sideNav.html';
 
const name = 'sideNav';
 
export default angular.module(name, [
    angularMeteor
]).component(name, {
    template,
    controllerAs: name
});