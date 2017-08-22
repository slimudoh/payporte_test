

function hackerMenu() {
	this.menu = document.getElementsByClassName("drop-menu")[0];
	this.box = document.getElementsByClassName("menu")[0];
	this.insidePosition = document.getElementsByClassName("inside");
	//this.line = document.getElementsByClassName("line");

	this.calValue = window.getComputedStyle(this.menu, null).getPropertyValue("display");

	this.dropMenu = function() {

		if (this.calValue === "block") {
			this.menu.style.animation = "roll .5s";
			this.menu.style.webkitAnimation = "roll .5s";
			this.menu.style.width = "width: 5px";
			this.menu.style.height =  "height:  5px";
			setTimeout(function() {
				var menu = document.getElementsByClassName("drop-menu")[0];
				menu.style.display = "none";
			}, 200);
		} else {
			this.menu.style.display = "block";
			this.menu.style.animation = "drop .5s";
			this.menu.style.webkitAnimation = "drop .5s";
			this.menu.style.width = "width: 200px";
			this.menu.style.height =  "height:  216px";
		}
	}


	this.position = function() {
		var duration = 1;
		for (var i = 0; i < this.insidePosition.length; i++) {
			//console.log("hi");
			this.insidePosition[i].style.animation = "set-position .9s";
			this.insidePosition[i].style.webkitAnimation = "set-position .9s";
			this.insidePosition[i].style.animationDuration = duration + "s";
			this.insidePosition[i].style.webkitAnimationDuration = duration + "s";
			this.insidePosition[i].style.top = "0px";
			this.insidePosition[i].style.left = "0px";

			duration++;
		};
	};
}

document.getElementsByClassName("menu")[0].addEventListener("click", function() {
	var x = new hackerMenu();
	x.dropMenu();
})

onload = function() {
	// var x = new hackerMenu();
	// x.position();
	fetchData();
};




function fetchData() {
	var xmlhttp = new XMLHttpRequest();
	var url = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";
	var myjs, detailLink, myArr, incres = 0;

	xmlhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        myArr = JSON.parse(this.responseText);

	        var stories = [];

	         for(var i = 0; i < myArr.length; i++) { 
	         		detailLink = "https://hacker-news.firebaseio.com/v0/item/" + myArr[i] + ".json?print=pretty";
	         		getDetail(detailLink);

	         		function getDetail(url) {
			var xmlhttp = new XMLHttpRequest();
			var myJs;

			xmlhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
				        myjs = JSON.parse(this.responseText);  
					var post  = '<a href='+ myjs.url +'><div class="box"> <div class="inside"><div class="inside-top"><span id="top-name">'+ 
					myjs.by+'</span><div class="hr"></div></div><div class="inside-body"> '+
					myjs.title+'</div><div class="inside-bottom"><div style="overflow: hidden"><div class="point">'+
					myjs.score +' points'+'</div><div class="time">' + new Date(myjs.time).toDateString()  +
					'</div></div><div class="comment">'+ myjs.type + '</div></div></div></div></a>';

					document.getElementById("boxes").innerHTML  += post;	
				}
			};

			xmlhttp.open("GET", url, true);
			xmlhttp.send();
		};
		}
	    }
	};

	xmlhttp.open("GET", url, true);
	xmlhttp.send();	
}		