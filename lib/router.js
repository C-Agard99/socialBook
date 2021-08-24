import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

BlazeLayout.setRoot('.container');

// Create index route
FlowRouter.route('/', {
  name: 'index',
  action() {
    // Do something here
    // After route is followed
    BlazeLayout.render('app_layout', {nav: 'nav', header: 'signInForm'});
  }
});

// Create profile route
FlowRouter.route('/profiles', {
  action() {
    BlazeLayout.render('app_layout', {nav: 'nav', mainBody: 'myAccounts'});
  }
});
