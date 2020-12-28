# intro
in this file I am putting snippets for all the bit I hav created for the site
## area
this creates an area for content to go in for responsive design

 **CSS**
```CSS
    /* basic area element */
.area{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
}
.inside { grid-area: 1 / 1 / 2 / 2; }
 ```
## center
like the basic area but it centers the contents and adds some padding on the sides

**CSS**
```CSS
/* center contents inside */
.center{
    display: grid;
    grid-template-columns: 1fr 10fr 1fr;
    grid-template-rows: 1fr 10fr 1fr;
    gap: 0px 0px;
}
/* the area inside the css grid that is in the center */
.centered { grid-area: 2 / 2 / 3 / 3; }
 ```
## center contets
this uses css flex box to center the contents to its container, best used to center text inside a div(or other type of container) but can be used with something like images or anything else

**CSS**
```CSS
/* uses flexbox to center the contents of the element it is placed on */
.center_contents{
    display: flex;
    justify-content: center;
    align-items: center;
}
 ```
## paralax classes
the following css classes create hte parallax effect in the background 

**CSS**
```CSS
/* creates parallax effect */
.parallax {
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
 ```
```CSS
/* I use this for title though it could be used for anything */
/* place you image in the URL */
/* it could be parallax_# were # is any number, as long as you have a image for it */
.parallax_1{
    background-image: url('');
}
/* description section background */
.parallax_2{
    background-image: url('../backgrounds/clouds-conifer-daylight_optimized.jpg');
    background-attachment: scroll;
}
 ```
## black bar
this creates a bacl bar on the screen that can accept text in the center

**CSS**

```CSS
/* black bar */
/* black bar main */
.blk_bar {
    display: grid;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: 1fr 0.5fr 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    background-color: black;
    height: 16vh;
}
/* black bar outside */
.blk_bar_center { grid-area: 2 / 2 / 3 / 3; color: white; font-size: 2rem;} 
 ```
 ## title area
 creates a title area that takes up 100% of screen width though that can be customized

**HTML**

```HTML
<div class="parallax parallax_1 area">
    <div class="title_area">
        <div class="title_text "> Testing</div>
    </div>
</div>
```

**CSS**
```CSS
/* page title text styling */
.title_area {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: 5fr 1fr 5fr;
    gap: 0px 0px;
    height: 100vh;
}
/* same as above /\ */
.title_text { 
    grid-area: 2 / 2 / 3 / 3; 
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Nova Flat', cursive;
    text-align: center;
    font-size: 6.9rem;
    color: rgb(0, 0, 0);
    background-color: rgba(255, 255, 255, 0.37);
} 
 ```

 ## description area
 creates a space were you can type in some text, I use it for page descriptions, and it is placed in the center of the area and the area takes up all the space it needs for the text while applying padding using css grid

**HTML**
```HTML
<div class="area parallax parallax_2">
    <div class="description_area">
        <div class="description_text">
            <p class="center_contents">lorem ipsum </p>
        </div>
    </div>
</div>
```
**CSS**
```CSS
/* page description text style */
.description_area {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: 1fr 5fr 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}

/* same as above /\ */
.description_text { 
    grid-area: 2 / 2 / 3 / 3; 
    color: rgb(255, 255, 255);
    font-family: 'Nova Flat', cursive;
    font-size: 2rem;
    background-color: rgba(0, 0, 0, 0.349);
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
```
## NAV popout
this creates a popout nav overlay with animations ane everything

**HTML**
```HTML
<div class="navigation div">
    <div id="myNav" class="overlay">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <div class="overlay_content">
            <a href="index.html">Home</a>
            <a href="earth 2.0.html">earth 2.0</a>
            <a href="climate.html">environment</a>
            <a href="#">singularity</a>
            <a href="others.html">others</a>
            <a href="about.html">about</a>
        </div>
    </div>
    <span class="nav_activate" onclick="openNav()">&#9776; navigation</span>
</div>
```
**CSS**
```CSS
@charset "UTF-8";

.overlay {
	height: 100%;
	width: 0;
	position: fixed;
	z-index: 10;
	top: 0;
	left: 0;
	background-color: rgb(0,0,0);
	background-color: rgba(0,0,0, 0.6);
	overflow-x: hidden;
	transition: 0.5s;
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

.overlay_content {
	position: relative;
	top: 25%;
	width: 100%;
	text-align: center;
	margin-top: 30px;
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

.overlay a {
	padding: 10px;
	text-decoration: none;
	font-size: 36px;
	color: #818181;
	display: block;
	transition: 0.3s;
}

.overlay a:hover, .overlay a:focus {
	color: #f1f1f1;
}

.overlay .closebtn {
	position: absolute;
	top: 20px;
	right: 45px;
	font-size: 60px;
}

@media screen and (max-height: 500px) {
	.overlay a {font-size: 20px}
	.overlay .closebtn {
		font-size: 40px;
		top: 15px;
		right: 35px;
	}
}

.nav_activate{
	font-size:30px;
	cursor:pointer;
	color:white;
	position:fixed;
	z-index: 50;
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
```
## image gallary
creates a image gallery with __images around the edges and a videos in the center using css grids

**HTML**
place the following code in a div with the [paralax](#paralax-classes) classes provided above in that section and how I used them in [title](#title-area) and the [description area](#description-area) you want along with some area, preferably centered

```HTML
<div class="center">
    <div class="centered">
        <div class="gallery">
            <div class="gallery__item gallery__item--1">
                <img src="" alt="Gallery image 1" class="gallery__img">
            </div>
            <div class="gallery__item gallery__item--2">
                <img src="" alt="Gallery image 2"
                    class="gallery__img">
            </div>
            <div class="gallery__item gallery__item--3">
                <img src="" alt="Gallery image 3"
                    class="gallery__img">
            </div>
            <div class="gallery__item gallery__item--4">
                <img src="" alt="Gallery image 4"
                    class="gallery__img">
            </div>
            <div class="gallery__item gallery__item--5">
                <img src="" alt="Gallery image 5" class="gallery__img">
            </div>
            <div class="gallery__item gallery__item--6">
                <img src="" alt="Gallery image 6" class="gallery__img">
            </div>
            <div class="gallery__item gallery__item--7">
                <img src="" alt="Gallery image 7"
                    class="gallery__img">
            </div>
            <div class="gallery__item gallery__item--8">
                <img src="" alt="Gallery image 9" class="gallery__img">
            </div>
            <div class="gallery__item gallery__item--9">
                <video alt="Gallery video" class="gallery__img" autoplay loop>
                    <source src="" type="video/mp4">
                </video>
            </div>
        </div>
    </div>
</div>
```
**CSS**
```CSS
/* the image gallery styling */
.gallery {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 10vw); 
    grid-gap: 1.0rem; 
}

.gallery__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block; 
}

.gallery__item--1 {
    grid-area: 1 / 1 / 3 / 2;
    background-color: rgb(0, 204, 255);
}

.gallery__item--2 {
    grid-area: 1 / 2 / 2 / 3; 
    background-color: rgb(212, 0, 255);
}

.gallery__item--3 {
    grid-area: 1 / 3 / 2 / 5; 
    background-color: rgb(255, 0, 0);
}


.gallery__item--4 {
    grid-area: 2 / 4 / 3 / 5; 
    background-color: rgb(0, 255, 0);
}

.gallery__item--5 {
    grid-area: 3 / 4 / 5 / 5; 
    background-color: rgb(0, 0, 255);
}

.gallery__item--6 {
    grid-area: 4 / 3 / 5 / 4; 
    background-color: rgb(140, 0, 255);
}

.gallery__item--7{
    grid-area: 4 / 1 / 5 / 3; 
    background-color: rgb(255, 123, 0);
}

.gallery__item--8{
    grid-area: 3 / 1 / 4 / 2; 
    background-color: rgb(238, 255, 0);
}

.gallery__item--9{
    grid-area: 2 / 2 / 4 / 4; 
    background-color: rgb(255, 0, 149);
}
```
## link section
this creates a link section using css grid with multiple boxes containing a image and a link box

**HTML**
place the following code in a div with the [paralax](#paralax-classes) classes provided above in that section and how I used them in [title](#title-area) and the [description area](#description-area) you want along with some area, preferably centered
```HTML
<div class="centered">
    <div class="links_area">
        <div class="L1">
            <div class="BG"></div>
            <div class="image_area image_1 "></div>
            <div class="go_to_area">
                <div onclick="location.href='earth 2.0.html'" class="single_line_text">earth 2.0</div>
            </div>
        </div>
        <div class="L2">
            <div class="BG"></div>
            <div class="image_area image_2"></div>
            <div class="go_to_area">
                <div onclick="location.href='climate.html'" class="single_line_text">climate</div>
            </div>
        </div>
        <div class="L3">
            <div class="BG"></div>
            <div class="image_area image_3"></div>
            <div class="go_to_area">
                <div onclick="location.href='others.html'" class="single_line_text">others</div>
            </div>
        </div>
    </div>
</div>
```
**CSS**
```CSS
/* link section */
.links_area {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1% 1%;
    height: 90vh;
}
  
.L1 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 3fr repeat(2, 2fr 1fr);
    gap: 0px 0px;
    grid-area: 1 / 1 / 2 / 2;
}
  
.image_area { grid-area: 2 / 2 / 4 / 4; background-color: rgba(255, 0, 0, 0.514);}
  
.go_to_area {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 5fr 1fr;
    gap: 0px 0px;
    grid-area: 5 / 1 / 6 / 5;
    background-color: rgba(128, 128, 128, 0.514);
}

.BG { grid-area: 1 / 1 / 7 / 5; background-color: rgba(0, 0, 0, 0.61);}

.single_line_text { 
    grid-area: 2 / 2 / 3 / 3; 
    background-color: rgb(0, 0, 255);
    outline-color: rgb(0, 0, 0);
    outline-width: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    cursor: pointer;
    font-size: 2.6rem;
}

.L2 { grid-area: 2 / 2 / 3 / 3; 
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 3fr repeat(2, 2fr 1fr);
    gap: 0px 0px;
    grid-area: 2 / 2 / 3 / 3;
}
  
.L3 { grid-area: 1 / 3 / 2 / 4;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 3fr repeat(2, 2fr 1fr);
    gap: 0px 0px;
    grid-area: 1 / 3 / 2 / 4;
}

.image_1 { 
    background-image: url('');
    background-attachment: scroll;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 55%;
}
.image_2 { 
    background-image: url('');
    background-attachment: scroll;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
}
.image_3 { 
    background-image: url('');
    background-attachment: scroll;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
}
```
there is some more css for the responsive design but that will come latter

## comming soon
this is a simple one, it creates a section with text within telling viewers that there is more coming soon

**HTML**
```HTML
<div class="center parallax_4 parallax">
    <div class="centered soon center_contents">
        <p style="font-size: 9em;">more comming soon</p>
    </div>
</div>
```
**CSS**
```CSS
.soon{
    height: 40vh;
}
```
## slide show

