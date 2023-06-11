# navbar

this is a temporary file which contains the code for a feature that I would like to repurpose in the future to some capacity but need to remove while redesigning the site, this being the nav bar element. **As a note last I checked this was not 100% working** but as mentioned above this is only temporary and I will fix it when I redesign the site. 

## HTML

``` html
<input type="checkbox" class="theme-switch" id="theme-switch">
	<div id="page">
		<div class="content">
			<section id="nav_section">
				<div id="Nav" class="overlay">
					<div class="closebtn_area">
						<div class="closebtn">
							<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
						</div>
					</div>
					<div class="overlay_content"><a href="index.html">Home</a>
						<a href="earth 2.0.html">earth 2.0</a>
						<a href="climate.html">environment</a>
						<a href="#">singularity</a>
						<a href="others.html">others</a>
						<a href="about.html">about</a>
					</div>
				</div>
				<div class="sidenav">
					<span class="nav_activate nav" onclick="openNav()">&#9776; nav</span>
					<label for="theme-switch" class="switch-label theme_switcher"></label>
				</div>
```

## CSS

```CSS
@charset "UTF-8";

.nav_activate{
	position: fixed;
	top: 5vh;
	font-size: 20px;
	cursor: pointer;
	color: var(--text-color);
	z-index: 5;
	text-shadow:
	/* Outline */
	-1px -1px 0 #000000,
	1px -1px 0 #000000,
	-1px 1px 0 #000000,
	1px 1px 0 #000000,  
	-2px 0 0 #000000,
	2px 0 0 #000000,
	0 2px 0 #000000,
	0 -2px 0 #000000,

}

.overlay {
	position: fixed;
	z-index: 10;
	top: 0;
	left: 0;
	display: grid;
	grid-template-columns: 1fr 4fr 1fr;
	grid-template-rows: 1fr 4fr 1fr;
	gap: 0px 0px;
	width: 0;
	height: 100vh;
	background-color: var(--partially_transparent);
	overflow-x: hidden;
	transition: 0.5s;
}

.overlay_content { 
	grid-area: 2 / 2 / 3 / 3; 
	display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
	flex-wrap: nowrap;
	text-shadow:
	/* Outline */
	-1px -1px 0 #000000,
	1px -1px 0 #000000,
	-1px 1px 0 #000000,
	1px 1px 0 #000000,  
	-2px 0 0 #000000,
	2px 0 0 #000000,
	0 2px 0 #000000,
	0 -2px 0 #000000;
}

.closebtn_area {
	display: grid;
	grid-template-columns: 1fr 4fr 1fr;
	grid-template-rows: repeat(3, 1fr);
	gap: 0px 0px;
	grid-area: 1 / 1 / 2 / 4;
}

.closebtn { 
	grid-area: 1 / 3 / 2 / 4;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	flex-wrap: nowrap;
	text-shadow:
	/* Outline */
	-1px -1px 0 #000000,
	1px -1px 0 #000000,
	-1px 1px 0 #000000,
	1px 1px 0 #000000,  
	-2px 0 0 #000000,
	2px 0 0 #000000,
	0 2px 0 #000000,
	0 -2px 0 #000000;
}

.overlay_content a,a.closebtn{
	font-size: 2.5em;
	text-decoration: none;
	color: var(--text_secondary);
	transition: 0.3s;
}

.overlay_content a:hover, .overlay_content a:focus {
	color: var(--text-color);;
}

a.closebtn:hover, a.closebtn:focus {
	color: var(--text-color);;
}

```

## JS

```Js
function openNav() {
	document.getElementById("Nav").style.width = "100%";
}

function closeNav() {
	document.getElementById("Nav").style.width = "0%";
}
```

