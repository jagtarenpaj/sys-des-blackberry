
const vm = new Vue({

    el: '#dashboardContent',
    data:{

	profiles: userProfiles,  //Imported from JSON
  pairs: []
    },

    created() {

      let pairIndex = 0;
      	//Arranges profile pairs with number of profiles
      	for(let i= 0; i < this.profiles.length; i += 2 ){

      	    this.pairs[pairIndex] = [this.profiles[i], this.profiles[i+1]];
            ++pairIndex;
      	}
    },



    methods: {

	getPairedProfile: function(index){
	    console.log(this.profiles[index +1]);
	    return this.profiles[index +1];
	},

	dragSidebar: function(event){
	    event.dataTransfer.setData("input", event.target.id);

	    let profile= document.getElementById(event.target.id);
	    this.displayMiniProfile(profile);
	},
	displayMiniProfile: function(person){


	    //TODO: APPEND MINIPROFILE DESCRIPTION TO THE LEFT OF PROFILE PICTURE
	},

	dragProfile: function(event){

	    event.dataTransfer.setData("input", event.target.id);
	},


	allowDrop: function(event){
	    event.preventDefault();
	},

	dropSidebar: function(event){
	    event.preventDefault();
	    let data = event.dataTransfer.getData("input");
	    let person = document.getElementById(data);
	    event.target.appendChild(person);

	    //Undo circle transformation
	    //person.style.transform = "none";
	    person.style.opacity = "100%";
	},
	dropCircle: function(event){
	    event.preventDefault();
	    let data = event.dataTransfer.getData("input");
	    let person = document.getElementById(data);
	    event.target.appendChild(person);

	    //Redo circle transformation
	    person.style.transform= "${spaceProfile(person, person.index)}";
	},

  dropProfile: function(event){

    let data = event.dataTransfer.getData("input");

    let personInput = document.getElementById(data);

    //let person = this.profiles[personInput.index];

    //console.log(personInput);

    let div = document.createElement("div");

    let profileSum = document.createTextNode("PROFILE STAND-IN");

    div.appendChild(profileSum);

    event.target.appendChild(div);

    //div.classList.add(profileSum);

    //TODO: FUNKTION SOM SKAPAR OCH APPENDAR DIV TILL PROFILESIDEBAR
  }
    }

});
