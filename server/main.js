import { Meteor } from 'meteor/meteor';
import { Products } from '../collections/products';
 
Meteor.startup(() => {
  if (Products.find().count() === 0) {
    const products = [{
        'name': 'Borrador milan',
        'category': 'Libreria'
    }, {
        'name': 'ME-001',
        'category': 'Invitaciones'
    }, {
        'name': 'ME-010',
        'category': 'Invitaciones'
    }];
 
    products.forEach((product) => {
      Products.insert(product);
    });
  }
});