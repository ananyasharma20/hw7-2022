var video;
var speed = 1.0;

window.addEventListener("load", function() {
	video = document.getElementById("player1");
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
	video.load();
});


document.querySelector("#play").addEventListener("click", function() {
	video.play();
	//console.log("Play Video");
	//console.log(document.getElementById("slider").value);
	var volume = document.getElementById("slider").value;
	video.volume = volume / 100;
	document.getElementById("volume").innerHTML = volume + "%";
});


document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	//console.log("Pause Video");
});


document.querySelector("#faster").addEventListener("click", function() {
	speed = speed * 1.10;
	console.log(speed);
	document.querySelector('video').playbackRate = speed;
});

document.querySelector("#slower").addEventListener("click", function() {
	speed = speed * 0.90;
	console.log(speed);
	document.querySelector('video').playbackRate = speed;
});

document.querySelector("#skip").addEventListener("click", function() {
	video.addEventListener("ended", function () {video.currentTime = 0; video.play(); console.log(video.currentTime);});
	video.currentTime += 10;
	video.play();
	console.log(video.currentTime);
});


document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted == false){
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
		//console.log("muted");
	}
	else{
		video.volume = document.getElementById("slider").value / 100;
		document.getElementById("mute").innerHTML = "Mute";
	}
});


document.querySelector("#slider").addEventListener("change", function() {
	//console.log("SLIDER CHANGING");
	volume = document.getElementById("slider").value;
	video.volume = volume / 100;
	document.getElementById("volume").innerHTML = volume + "%";
});


document.querySelector("#vintage").addEventListener("click", function() {
	var element = document.getElementById("player1");
  	element.classList.add("oldSchool");
	console.log("OLD SCHOOL");
});


document.querySelector("#orig").addEventListener("click", function() {
	var element = document.getElementById("player1");
  	element.classList.remove("oldSchool");
	console.log("ORIGINAL");
});
