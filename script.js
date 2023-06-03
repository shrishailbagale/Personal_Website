const body = document.querySelector("body"),
	   nav = document.querySelector("nav"),
	   modeToggle = document.querySelector(".dark-light"),
	   searchToggle = document.querySelector(".searchToggle"),
	   sidebarOpen = document.querySelector(".sidebarOpen"),
	   siderbarClose = document.querySelector(".siderbarClose");

		let getMode = localStorage.getItem("mode");
	   		if (getMode && getMode === "dark-mode") {
	   			body.classList.add("dark");
	   		}
	   
	   
// js code to toggle dark and light mode
	   modeToggle.addEventListener("click", () =>{
	   	modeToggle.classList.toggle("active");
	   	body.classList.toggle("dark");

	   	// js code to keep user selected mode even page refresh or file reopen
	   	if (!body.classList.contains("dark")) {
	   		localStorage.setItem("mode", "light-mode");
	   	}else{
	   		localStorage.setItem("mode", "dark-mode");
	   	}
	   });

// js code to toggle SEARCH BOX
	   searchToggle.addEventListener("click", () =>{
	   	searchToggle.classList.toggle("active");	   	
	   });

// js code to toggle sidebar
sidebarOpen.addEventListener("click", () =>{
	nav.classList.add("active");
});

body.addEventListener("click", e =>{
	let clickedElm = e.target;

	if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")) {
		nav.classList.remove("active");
	}
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
	  var dropdowns = document.getElementsByClassName("dropdown-content");
	  var i;
	  for (i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
		if (openDropdown.classList.contains('show')) {
		  openDropdown.classList.remove('show');
		}
	  }
	}
  }