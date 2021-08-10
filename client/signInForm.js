Template.signInForm.events({
    'click .js-logout'(){
        AccountsTemplates.logout();
    }  
});

Template.signInForm.helpers({
    username(){
        return Meteor.user().username;
    }
});
