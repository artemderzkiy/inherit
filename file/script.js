
	function  Human(name,age,weight) {
		 this.name=name,
			this.age=age,
			 this.weight=weight;
			
 			Human.prototype.changeName = function() {
			this.name = this.name+"shtein";
			return name;
		};		
	}	

	function  Female(name,age,weight,isNice,dressedIn ) {
		 this.name=name,
			this.age=age,
			 this.weight=weight;
			 this.sex="female";
			 this.isNice=isNice;
			 this.dressedIn=dressedIn;
			
 			Female.prototype.makeUp = function() {
 			this.isNice =true;
			return isNice;
		};		
	}	
	
	function  Male(name,age,weight,isRich) {
		 this.name=name,
			this.age=age,
			 this.weight=weight;
			 this.sex="male";
			 this.isRich=isRich;
			
 			Male.prototype.isBelovedByFem = function() {
 				if (age>18 && age<60 && isRich)
			{console.log("is Beloved")}
		else 
			{console.log("is NOT Beloved")}
		
		};		
	}	

	var Anon = new Human("Anon",29,60);
	Anon.changeName();
	console.log(Anon);

	var Masha = new Female("Masha",30,60,false,"none");
	Masha.makeUp();
	console.log(Masha);

	var Ivan = new Male("Ivan",40,80,true);
	Ivan.isBelovedByFem();
	console.log(Ivan);