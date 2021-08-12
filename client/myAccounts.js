Template.myAccounts.helpers({
    theProfiles(){
        let prevTime = Date.now()- 15000;
        let results = profilesdb.find({createdOn: {$gte: prevTime}}).count();
        if (results > 0){
            return profilesdb.find({} , {sort:{createdOn: -1}, limit: Session.get("profLimit")});
        } else {
            if (Session.get("filter") === "All")
                return profilesdb.find({} , {limit: Session.get("profLimit")});
            return profilesdb.find({"pGen": Session.get("filter")} , {limit: Session.get("profLimit")});
        }
        
        
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
        $('#'+delID).fadeOut('slow', function() {
            //Delete permanently
            profilesdb.remove({_id: delID});
        });
    },
    'click .js-edit'(event){
        let myID = this._id;
        $('#editID').val(myID);
        let imgPath = this.pPic;
        let fname = this.pFirst;
        let lname = this.pLast;
        let age = this.pAge;
        let gender = this.pGen;

        if (imgPath == ""){
            imgPath = "blankprofile.png"
        }
        document.getElementById("editImg").src = imgPath;
        $('#editPic').val(imgPath);
        $('#editfirstName').val(fname);
        $('#editlastName').val(lname);
        $('#editage').val(age);
        $('#editModal').modal('show');
        let genRadio = $('#editModal input[name="genderRadio"]');
        if (gender === "male")
            genRadio.filter('[value=male]').prop('checked', true);
        else
            genRadio.filter('[value=female]').prop('checked', true);
    },
    'click .js-saveEdit'(event){
        let editID = $('#editID').val();
        let imgPath = $('#editPic').val();
        let fname = $('#editfirstName').val();
        let lname = $('#editlastName').val();
        let age = $('#editage').val();
        let gender = $('#editModal input[name="genderRadio"]:checked').val();
        

        //reset each input box
        let formGood = true;
        $("editPic").removeClass("invalidWarn");
        $("editfirstName").removeClass("invalidWarn");
        $("editlastName").removeClass("invalidWarn");
        $("editage").removeClass("invalidWarn");
        if (editPic == ""){
            $("#editPic").addClass("invalidWarn");
            formGood = false;
        }
        if (fname == ""){
            $("#editfirstName").addClass("invalidWarn");
            formGood = false;
        }
        if (lname == ""){
            $("#editlastName").addClass("invalidWarn");
            formGood = false;
        }
        if (age == ""){
            $("#editage").addClass("invalidWarn");
            formGood = false;
        }
        if (formGood == true){

            //update the document    
            profilesdb.update({_id: editID},
                {$set:{
                    "pPic": imgPath,
                    "pFirst": fname,
                    "pLast": lname,
                    "pAge": age,
                    "pGen": gender
                }});
                //clear input boxes
                document.getElementById("editImg").src = "blankprofile.png";
                $('#editPic').val("");
                $('#editfirstName').val("");
                $('#editlastName').val("");
                $('#editage').val("");
                $('#editModal').modal('hide');
        }
    }           
    
});