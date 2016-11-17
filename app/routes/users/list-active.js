import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').query('user', {isAdmin: false});
    // return this.store.query('user', {filter: {isAdmin: false}});
  }
});
