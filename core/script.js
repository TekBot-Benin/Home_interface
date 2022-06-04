var firebaseConfig = {
    apiKey: "AIzaSyDtQcMZIgc7ZyxMUCEeF-nXfi3_-PfrJkg",
    authDomain: "my-home-d35d6.firebaseapp.com",
    databaseURL: "https://my-home-d35d6-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "my-home-d35d6",
    storageBucket: "my-home-d35d6.appspot.com",
    messagingSenderId: "908101030608",
    appId: "1:908101030608:web:841352982c506f71b904d5",
    measurementId: "G-JM1W2P70QT"
};
firebase.initializeApp(firebaseConfig);

$(document).ready(function () {
    var database = firebase.database();
	var Led_bathroom_0;
	var Led_kitchen_0;
	var Led_livingroom_0;
	var Led_bedroom_0;
	var Led_livingroom2_0;
	var Led_entrance_0;
	var Door_garage_0;
	var Led_pool_0;
	var Brasseur_livingroom_0;
	var Led_bathroom1_1;
	var Led_bathroom2_1;
	var Led_bedroom1_1;
	var Led_bedroom2_1;
	var Led_bedroom3_1;
	var Led_dressing_1;
	var Led_corridor_1;
	var Led_terrace_1;
	var temperature;

	database.ref().on("value", function(snap){
		temperature = snap.val().temperature;
		$("temp").append(temperature);
		$("temp").append("°");
		Led_bathroom_0 = snap.val().Led_bathroom_0;
		Led_kitchen_0 = snap.val().Led_kitchen_0;
		Led_livingroom_0 = snap.val().Led_livingroom_0;
		Led_bedroom_0 = snap.val().Led_bedroom_0;
		Led_livingroom2_0 = snap.val().Led_livingroom2_0;
		Led_entrance_0 = snap.val().Led_entrance_0;
		Door_garage_0 = snap.val().Door_garage_0;
		Led_pool_0 = snap.val().Led_pool_0;
		Brasseur_livingroom_0 = snap.val().Brasseur_livingroom_0;
		Led_bathroom1_1 = snap.val().Led_bathroom1_1;
		Led_bathroom2_1 = snap.val().Led_bathroom2_1;
		Led_bedroom1_1 = snap.val().Led_bedroom1_1;
		Led_bedroom2_1 = snap.val().Led_bedroom2_1;
		Led_bedroom3_1 = snap.val().Led_bedroom3_1;
		Led_dressing_1 = snap.val().Led_dressing_1;
		Led_corridor_1 = snap.val().Led_corridor_1;
		Led_terrace_1 = snap.val().Led_terrace_1;
		if(Led_bathroom_0 == "1"){
			document.getElementById("bathroom_0_lampKO").style.display = "none";
			document.getElementById("bathroom_0_lampOK").style.display = "block";
		} else {
			document.getElementById("bathroom_0_lampKO").style.display = "block";
			document.getElementById("bathroom_0_lampOK").style.display = "none";
		}
		if(Led_kitchen_0 == "1"){
			document.getElementById("kitchen_0_lampKO").style.display = "none";
			document.getElementById("kitchen_0_lampOK").style.display = "block";
		} else {
			document.getElementById("kitchen_0_lampKO").style.display = "block";
			document.getElementById("kitchen_0_lampOK").style.display = "none";
		}
		if(Led_livingroom_0 == "1"){
			document.getElementById("livingroom_0_lampKO").style.display = "none";
			document.getElementById("livingroom_0_lampOK").style.display = "block";
		} else {
			document.getElementById("livingroom_0_lampKO").style.display = "block";
			document.getElementById("livingroom_0_lampOK").style.display = "none";
		}
		if(Led_bedroom_0 == "1"){
			document.getElementById("bedroom_0_lampKO").style.display = "none";
			document.getElementById("bedroom_0_lampOK").style.display = "block";
		} else {
			document.getElementById("bedroom_0_lampKO").style.display = "block";
			document.getElementById("bedroom_0_lampOK").style.display = "none";
		}
		if(Led_livingroom2_0 == "1"){
			document.getElementById("bathroom_0_lampKO4").style.display = "none";
			document.getElementById("bathroom_0_lampOK4").style.display = "block";
		} else {
			document.getElementById("bathroom_0_lampKO4").style.display = "block";
			document.getElementById("bathroom_0_lampOK4").style.display = "none";
		}
		if(Led_entrance_0 == "1"){
			document.getElementById("entrance_0_lampKO").style.display = "none";
			document.getElementById("entrance_0_lampOK").style.display = "block";
		} else {
			document.getElementById("entrance_0_lampKO").style.display = "block";
			document.getElementById("entrance_0_lampOK").style.display = "none";
		}
		if(Door_garage_0 == "1"){
			document.getElementById("garage_0_doorKO").style.display = "none";
			document.getElementById("garage_0_doorOK").style.display = "block";
		} else {
			document.getElementById("garage_0_doorKO").style.display = "block";
			document.getElementById("garage_0_doorOK").style.display = "none";
		}
		if(Led_pool_0 == "1"){
			document.getElementById("pool_0_lampKO").style.display = "none";
			document.getElementById("pool_0_lampOK").style.display = "block";
		} else {
			document.getElementById("pool_0_lampKO").style.display = "block";
			document.getElementById("pool_0_lampOK").style.display = "none";
		}
		if(Brasseur_livingroom_0 == "1"){
			document.getElementById("livingroom_0_brasseurKO").style.display = "none";
			document.getElementById("livingroom_0_brasseurOK").style.display = "block";
		} else {
			document.getElementById("livingroom_0_brasseurKO").style.display = "block";
			document.getElementById("livingroom_0_brasseurOK").style.display = "none";
		}
        if(Led_bathroom1_1 == "1"){
			document.getElementById("bathroom1_1_lampKO").style.display = "none";
			document.getElementById("bathroom1_1_lampOK").style.display = "block";
		} else {
			document.getElementById("bathroom1_1_lampKO").style.display = "block";
			document.getElementById("bathroom1_1_lampOK").style.display = "none";
		}
        if(Led_bathroom2_1 == "1"){
			document.getElementById("bathroom2_1_lampKO").style.display = "none";
			document.getElementById("bathroom2_1_lampOK").style.display = "block";
		} else {
			document.getElementById("bathroom2_1_lampKO").style.display = "block";
			document.getElementById("bathroom2_1_lampOK").style.display = "none";
		}
        if(Led_bedroom1_1 == "1"){
			document.getElementById("bedroom1_1_lampKO").style.display = "none";
			document.getElementById("bedroom1_1_lampOK").style.display = "block";
		} else {
			document.getElementById("bedroom1_1_lampKO").style.display = "block";
			document.getElementById("bedroom1_1_lampOK").style.display = "none";
		}
        if(Led_bedroom2_1 == "1"){
			document.getElementById("bedroom2_1_lampKO").style.display = "none";
			document.getElementById("bedroom2_1_lampOK").style.display = "block";
		} else {
			document.getElementById("bedroom2_1_lampKO").style.display = "block";
			document.getElementById("bedroom2_1_lampOK").style.display = "none";
		}
        if(Led_bedroom3_1 == "1"){
			document.getElementById("bedroom3_1_lampKO").style.display = "none";
			document.getElementById("bedroom3_1_lampOK").style.display = "block";
		} else {
			document.getElementById("bedroom3_1_lampKO").style.display = "block";
			document.getElementById("bedroom3_1_lampOK").style.display = "none";
		}
        if(Led_dressing_1 == "1"){
			document.getElementById("dressing_1_lampKO").style.display = "none";
			document.getElementById("dressing_1_lampOK").style.display = "block";
		} else {
			document.getElementById("dressing_1_lampKO").style.display = "block";
			document.getElementById("dressing_1_lampOK").style.display = "none";
		}
        if(Led_corridor_1 == "1"){
			document.getElementById("corridor_1_lampKO").style.display = "none";
			document.getElementById("corridor_1_lampOK").style.display = "block";
		} else {
			document.getElementById("corridor_1_lampKO").style.display = "block";
			document.getElementById("corridor_1_lampOK").style.display = "none";
		}
        if(Led_terrace_1 == "1"){
			document.getElementById("terrace_1_lampKO").style.display = "none";
			document.getElementById("terrace_1_lampOK").style.display = "block";
		} else {
			document.getElementById("terrace_1_lampKO").style.display = "block";
			document.getElementById("terrace_1_lampOK").style.display = "none";
		}
	});

	$(".bathroom_0_lamp").click(function() {
		var firebaseRef = firebase.database().ref().child("Led_bathroom_0");
		if(Led_bathroom_0 == "1"){
			firebaseRef.set("0");
			Led_bathroom_0 = "0";
		} else {
			firebaseRef.set("1");
			Led_bathroom_0 = "1";
		}
	})
	$(".kitchen_0_lamp").click(function(){
		var firebaseRef = firebase.database().ref().child("Led_kitchen_0");
		if(Led_kitchen_0 == "1"){
			firebaseRef.set("0");
			Led_kitchen_0 = "0";
		} else {
			firebaseRef.set("1");
			Led_kitchen_0 = "1";
		}
	})
	$(".livingroom_0_lamp").click(function(){
		var firebaseRef = firebase.database().ref().child("Led_livingroom_0");
		if(Led_livingroom_0 == "1"){
			firebaseRef.set("0");
			Led_livingroom_0 = "0";
		} else {
			firebaseRef.set("1");
			Led_livingroom_0 = "1";
		}
	})
	$(".bedroom_0_lamp").click(function(){
		var firebaseRef = firebase.database().ref().child("Led_bedroom_0");
		if(Led_bedroom_0 == "1"){
			firebaseRef.set("0");
			Led_bedroom_0 = "0";
		} else {
			firebaseRef.set("1");
			Led_bedroom_0 = "1";
		}
	})
	$(".livingroom2_0_lamp").click(function(){
		var firebaseRef = firebase.database().ref().child("Led_livingroom2_0");
		if(Led_livingroom2_0 == "1"){
			firebaseRef.set("0");
			Led_livingroom2_0 = "0";
		} else {
			firebaseRef.set("1");
			Led_livingroom2_0 = "1";
		}
	})
	$(".entrance_0_lamp").click(function(){
		var firebaseRef = firebase.database().ref().child("Led_entrance_0");
		if(Led_entrance_0 == "1"){
			firebaseRef.set("0");
			Led_entrance_0 = "0";
		} else {
			firebaseRef.set("1");
			Led_entrance_0 = "1";
		}
	})
	$(".garage_0_door").click(function(){
		var firebaseRef = firebase.database().ref().child("Door_garage_0");
		if(Door_garage_0 == "1"){
			firebaseRef.set("0");
			Door_garage_0 = "0";
		} else {
			firebaseRef.set("1");
			Door_garage_0 = "1";
		}
	})
	$(".pool_0_lamp").click(function(){
		var firebaseRef = firebase.database().ref().child("Led_pool_0");
		if(Led_pool_0 == "1"){
			firebaseRef.set("0");
			Led_pool_0 = "0";
		} else {
			firebaseRef.set("1");
			Led_pool_0 = "1";
		}
	})
	$(".livingroom_0_brasseur").click(function(){
		var firebaseRef = firebase.database().ref().child("Brasseur_livingroom_0");
		if(Brasseur_livingroom_0 == "1"){
			firebaseRef.set("0");
			Brasseur_livingroom_0 = "0";
		} else {
			firebaseRef.set("1");
			Brasseur_livingroom_0 = "1";
		}
	})
	$(".bathroom1_1_lamp").click(function() {
		var firebaseRef = firebase.database().ref().child("Led_bathroom1_1");
		if(Led_bathroom1_1 == "1"){
			firebaseRef.set("0");
			Led_bathroom1_1 = "0";
		} else {
			firebaseRef.set("1");
			Led_bathroom1_1 = "1";
		}
	})
	$(".bathroom2_1_lamp").click(function() {
		var firebaseRef = firebase.database().ref().child("Led_bathroom2_1");
		if(Led_bathroom2_1 == "1"){
			firebaseRef.set("0");
			Led_bathroom2_1 = "0";
		} else {
			firebaseRef.set("1");
			Led_bathroom2_1 = "1";
		}
	})
	$(".bedroom1_1_lamp").click(function() {
		var firebaseRef = firebase.database().ref().child("Led_bedroom1_1");
		if(Led_bedroom1_1 == "1"){
			firebaseRef.set("0");
			Led_bedroom1_1 = "0";
		} else {
			firebaseRef.set("1");
			Led_bedroom1_1 = "1";
		}
	})
	$(".bedroom2_1_lamp").click(function() {
		var firebaseRef = firebase.database().ref().child("Led_bedroom2_1");
		if(Led_bedroom2_1 == "1"){
			firebaseRef.set("0");
			Led_bedroom2_1 = "0";
		} else {
			firebaseRef.set("1");
			Led_bedroom2_1 = "1";
		}
	})
	$(".bedroom3_1_lamp").click(function() {
		var firebaseRef = firebase.database().ref().child("Led_bedroom3_1");
		if(Led_bedroom3_1 == "1"){
			firebaseRef.set("0");
			Led_bedroom3_1 = "0";
		} else {
			firebaseRef.set("1");
			Led_bedroom3_1 = "1";
		}
	})
	$(".dressing_1_lamp").click(function() {
		var firebaseRef = firebase.database().ref().child("Led_dressing_1");
		if(Led_dressing_1 == "1"){
			firebaseRef.set("0");
			Led_dressing_1 = "0";
		} else {
			firebaseRef.set("1");
			Led_dressing_1 = "1";
		}
	})
	$(".corridor_1_lamp").click(function() {
		var firebaseRef = firebase.database().ref().child("Led_corridor_1");
		if(Led_corridor_1 == "1"){
			firebaseRef.set("0");
			Led_corridor_1 = "0";
		} else {
			firebaseRef.set("1");
			Led_corridor_1 = "1";
		}
	})
	$(".terrace_1_lamp").click(function() {
		var firebaseRef = firebase.database().ref().child("Led_terrace_1");
		if(Led_terrace_1 == "1"){
			firebaseRef.set("0");
			Led_terrace_1 = "0";
		} else {
			firebaseRef.set("1");
			Led_terrace_1 = "1";
		}
	})
});
