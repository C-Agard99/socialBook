Template.myAccounts.helpers({
    theProfiles(){
        return profilesdb.find();
    }
});

Template.myAccounts.events({
    'click .js-delete'(event){
        let myID = this._id;
        $('#confirmID').val(myID);
        $('#confirmModal').modal('show');
    },
    'click .js-confirmDel'(event){
        let delID = $('#confirmID').val();
        $('#confirmModal').modal('hide');
        $('#'+delID).fadeout('slow', function() {
            //Delete permanently
            profilesdb.remove({_id: delID});
        });
    }

});