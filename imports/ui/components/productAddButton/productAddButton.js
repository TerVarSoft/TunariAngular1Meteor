import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
import buttonTemplate from './productAddButton.html';
import modalTemplate from './productAddModal.html';
import { name as ProductAdd } from '../productAdd/productAdd';
 
class ProductAddButton {
    constructor($mdDialog, $mdMedia) {
        'ngInject';
    
        this.$mdDialog = $mdDialog;
        this.$mdMedia = $mdMedia
    }
 
    open(event) {
        this.$mdDialog.show({
            controller($mdDialog) {
                'ngInject';
        
                this.close = () => {
                    $mdDialog.hide();
                }
            },
            controllerAs: 'productAddModal',
            template: modalTemplate,
            targetEvent: event,
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: this.$mdMedia('sm') || this.$mdMedia('xs')
        });
    }
}
 
const name = 'productAddButton';
 
export default angular.module(name, [
    angularMeteor,
    ProductAdd
]).component(name, {
    template: buttonTemplate,
    controllerAs: name,
    controller: ProductAddButton
});