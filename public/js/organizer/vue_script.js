
const vm = new Vue({

    el: '#dashboardContent',
    data:{

	profiles: userProfiles,  //Imported from JSON
	degreeSpace: [],
    },

    created() {
	//Arranges profile spacing dynamically with number of profiles
	for(let i= 0; i < this.profiles.length; ++i ){

	    this.degreeSpace[i] = (i*2) * (360/this.profiles.length);   /*  *2 to match up pairs?*/
	}
    },

	

    methods: {

	spaceProfile: function(index){
	    
	    return 'transform: rotate(' + this.degreeSpace[index] + 'deg) translate(380%) rotate(' + (-this.degreeSpace[index]) + 'deg)';	    
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
	    person.style.transform = "none";
	    person.style.margin= "auto 2% auto auto";
	},
	dropProfile: function(event){
	    event.preventDefault();
	    let data = event.dataTransfer.getData("input");
	    let person = document.getElementById(data);
	    event.target.appendChild(person);

	    //Redo circle transformation
	    person.style.transform= "${spaceProfile(person, person.index)}";
	}
    }
    
});

