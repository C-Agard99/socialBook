Template.addProfile.events({
    'click .js-save'(event){
        let profFirst = $('#firstName').val();
        let profLast = $('#lastName').val();
        let profAge = $('#age').val();
        //console.log(profFirst, profLast, profAge);
        profilesdb.insert({
            "pFirst":profFirst,
            "pLast":profLast,
            "pAge":profAge
        });
        $('#firstName').val("");
        $('#lastName').val("");
        $('#age').val("");
    }
});