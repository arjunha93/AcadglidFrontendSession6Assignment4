var arr = [
  {
	name: 'arjun',
	age: 26,
	salary: "9lpa",
	city: "mandya",
	state: "karnataka",
	pincode: 560103
},{
	name: 'akshay',
	age: 29,
	salary: "8lpa",
	city: "bhuvwneshwar",
	state: "Odisa",
	pincode: 560102
}, {
	name: "nutan",
	age: 29,
	salary: "10lpa",
	city: "Banglore",
	state: "Uttar Pradesh",
	pincode: 560104
}, {
	name: "pratik",
	age: 26,
	salary: "4lpa",
	city: "solapur",
	state: "Maharashtra",
	pincode: 513224
}];

for(var obj in arr){
    console.log(" name : "+arr[obj].name+"\n age : "  + arr[obj].age+"\n salary : " + arr[obj].salary+"\n city : " + arr[obj].city +"\n state : "+ arr[obj].state+"\n pincode : " + arr[obj].pincode);
}
