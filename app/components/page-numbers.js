import Ember from 'ember';

export default Ember.Component.extend({
  pageNumbers: function() {
   return Array(this.get('totalPages')).fill(0).map((e,i)=>i+1) 
  }.property()
});

