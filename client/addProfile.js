Template.addProfile.events({
    'click .js-save'(event){
        //grabs data from html page
        let profPic = $('#profPic').val();
        let profFirst = $('#firstName').val();
        let profLast = $('#lastName').val();
        let profAge = $('#age').val();
        //save data into collection
        profilesdb.insert({
            "pPic":profPic,
            "pFirst":profFirst,
            "pLast":profLast,
            "pAge":profAge
        });
        //clear input boxes
        $('#profPic').val("");
        $('#firstName').val("");
        $('#lastName').val("");
        $('#age').val("");
        $('#addModal').modal('hide');
    }
});