
const vm = new Vue({

    el: '#dashboardContent',
    data:{

	profiles: userProfiles,  //Imported from JSON
	degreeSpace: [],
    },

    created() {
	//Arranges grid spacing dynamically with number of profiles
	//Value must be used at least once to be defined
	for(let i= 0; i < this.profiles.length; ++i ){

	    this.degreeSpace[i] = (i * 2) * (360/this.profiles.length);   /*  *2 to match up pairs?*/
	}
    },

	

    methods: {

	spaceProfile: function(index, person){
	    
	    //Wait until DOM element is loaded to execute
	    this.$nextTick(
		function(){
		    let profile = document.getElementById(person.name);

		    profile.style.transform =
			'rotate(' + this.degreeSpace[index] + 'deg) translate(350%) rotate(' + (-this.degreeSpace[index]) + 'deg)';    
		    if(profile.classList.contains('profile00')){
			
		    }
		}
	    );	    
	},
    }
    
});

