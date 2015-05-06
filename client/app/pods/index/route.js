import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function(transition, queryParams){
		if (this.get('session.isAuthenticated')){
			this.transitionTo('user', this.get('session.user.owner') );
		} else {
			this.transitionTo('login');
		}
		this._super(transition, queryParams);
	},
});
