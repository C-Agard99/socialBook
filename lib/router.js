import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

BlazeLayout.setRoot('.container');

// Create index route
FlowRouter.route('/', {
  name: 'index',
  action() {
        // Do something here
        // After route is followed
        BlazeLayout.render('app_layout', {nav: 'nav', header: 'signInForm'});
  },
  waitOn(){
      return Meteor.subscribe('noUser');
  }
});

// Create profile route
FlowRouter.route('/profiles', {
  action() {
        BlazeLayout.render('app_layout', {nav: 'nav', mainBody: 'myAccounts'});
  },
  waitOn(params) {
    return Meteor.subscribe('profData', params.pid);
  }
});

// Create profile route to show an individual profile
FlowRouter.route('/profile/:pid', {
    action(params) {
        //after route is followed
        BlazeLayout.render('app_layout', {nav: 'nav', mainBody: 'viewProfile'});
    },
    waitOn(params) {
      return Meteor.subscribe('proDat', params.pid);
    }
});