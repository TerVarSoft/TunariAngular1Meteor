import angular from 'angular';
import angularMeteor from 'angular-meteor';
//import { Products} from '../imports/api/products';

import { name as TunariApp } from '../imports/ui/components/tunariApp/tunariApp';

function onReady() {
    angular.bootstrap(document, [
        TunariApp
    ], {
        strictDi: true
    });
}
 
if (Meteor.isCordova) {
    angular.element(document).on('deviceready', onReady);
} else {
    angular.element(document).ready(onReady);
}