# intro

in this file I am putting snippets for all the bits I have created for the site

## area

This creates an area for content to go in for responsive design, it uses css grid to create a 1x1 grid (so a single cell), it has no effect on the how the site is rendered, it just makes things more clear, though it helps with responsivity because css grids are really good at resizing content and fitting to the given area. the css class `inside` creates a class for the element on the inside of the grid though because it is 1X1 it is automatically placed in the right one so it usually is not needed though I created it just in case it ever is needed. 

 **CSS**

```CSS
/* basic area element */
.area{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
}
/* the class for the elemnt inside the area */
.inside { grid-area: 1 / 1 / 2 / 2; }
 ```

## center

like the basic area but it centers the contents and adds some padding on the sides. it creates a 3X3 grid placing the content in the center cell making the center cell larger then the other cells so that there is enough space for the elements inside it, in this the `centered` class is required because otherwise the contents would not know were in the css grid to place them selves

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

## center contents

this uses css flex box to center the contents to its container, best used to center text inside a div (or other type of container) but can be used with something like images or anything else really

**CSS**

```CSS
/* uses flexbox to center the contents of the element it is placed on */
.center_contents{
    display: flex;
    justify-content: center;
    align-items: center;
}
 ```

## parallax classes

The following css classes create the parallax effect in the background, though it does not provide a background image, for that create a separate class per background image you want

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

## black bar

this creates a black bar on the screen that can accept text in the center, use the `blk_bar_center` variable for the area were you place your text

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
/* were you put your text */
.blk_bar_center { grid-area: 2 / 2 / 3 / 3; color: white; font-size: 2rem;} 
 ```

## title area

 creates a title area that takes up 100% of screen height though that can be customized

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

 creates a space were you can type in some text, I use it for page descriptions, and it is placed in the center of the area and the area takes up all the space it needs for the text while applying padding using css grid, the `parallax_2` class would be were you put your background image etc. 

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

## NAV pop out

this creates a pop out nav overlay with animations 

**HTML**

below is the html necessary for this 

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

I will go through the css in order of how its used in the above html

the first class created is the `overlay` class that creates a partially transparent back background for the navigation, that when the animations are applied comes out from the side, it is the container for all the links and button that is used to close the nav overlay.
```CSS
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
```
if there is a `a` html tag inside the `overlay` class the following is applied
```CSS
.overlay a {
	padding: 10px;
	text-decoration: none;
	font-size: 36px;
	color: #818181;
	display: block;
	transition: 0.3s;
}
```
if there is a `closebtn` css class inside the `overlay` class the following is applied
```CSS
.overlay .closebtn {
	position: absolute;
	top: 20px;
	right: 45px;
	font-size: 60px;
}
```
if you hover over the `a` html tag inside the `overlay` class or the `a` tag is in the focus state the following is applied
```CSS
.overlay a:hover, .overlay a:focus {
	color: #f1f1f1;
}
```
next we create the `overlay_content` class that contains the links not the close button it is positions the links in the overlay properly adding some margins while also centering text etc. 
```CSS
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
```
next we have the `nav_activate` class that styles the button that activates the nav code provided above, it just has a partially transparent color for the background etc.
```CSS
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
there is also some simple media queries that are used for better responsivity
```CSS
@media screen and (max-height: 500px) {
	.overlay a {font-size: 20px}
	.overlay .closebtn {
		font-size: 40px;
		top: 15px;
		right: 35px;
	}
}
```

## image gallery

creates a image gallery with 8 images around the edges and a video in the center using css grids

**HTML**

place the following code in a div with the [parallax](#parallax-classes) classes provided above in that section and how I used them in [title](#title-area) and the [description area](#description-area) you want along with some area, preferably centered. css below the html
I would recommend having the following html inside 2 `div`s, one for the `center` and `centered` classes so that the image gallery is properly centered and has some padding around the edges so it looks better. 

first create a div with the `gallery` class which creates the css grid and is a container for the other elements in the gallery, obviously you need a closing div though that is obvious so I only show the start div
```HTML
<div class="gallery">
```
next create 8 of the following `div`s inside the `div` with the `gallery` class, these are the images along the outside of the video in the center
```HTML
<div class="gallery__item gallery__item--1">
    <img src="" alt="Gallery image 1" class="gallery__img">
</div>
```
after that create a div like the one below, this one creates the video in the center
```HTML
<div class="gallery__item gallery__item--9">
    <video alt="Gallery video" class="gallery__img" autoplay loop>
        <source src="" type="video/mp4">
    </video>
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

place the following code in a div with the [parallax](#paralax-classes) classes provided above in that section and how I used them in [title](#title-area) and the [description area](#description-area) you want along with some area, preferably centered

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

## interactive image gallery

this creates a Gallery with multiple images that can be clicked through showing off all the images

**HTML**

place the following code in a div with the [parallax](#paralax-classes) classes provided above in that section and how I used them in [title](#title-area) and the [description area](#description-area) you want along with some area, preferably centered

```HTML
<div class="centered">
    <div class="sld_show">
        <div class="top">
            <div class="what">housing sketches</div>
        </div>
        <div class="image">
            <div class="mySlides img img_1 "></div>
            <div class="mySlides img img_2 "></div>
        </div>
        <div class="img_area">
            <div class="prev_" onclick="plusSlides(1)">&#10095;</div>
            <div class="next_" onclick="plusSlides(-1)">&#10094;</div>
        </div>
        <div class="caption-container">
            <div class="about" id="Caption">~</div>
        </div>
        <div class="right">
            <div class="next" onclick="plusSlides(1)">&#10095;</div>
        </div>
        <div class="left">
            <div class="prev" onclick="plusSlides(-1)">&#10094;</div>
        </div>
        <div class="tabs">
            <div class="grd_1">
                <div class="demo cursor img grd_img grd_img_1" onclick="currentSlide(1)"
                    title="house design #1">
                </div>
            </div>
            <div class="grd_2">
                <div class="demo cursor img grd_img grd_img_2" onclick="currentSlide(2)"
                    title="schematics coming soon"></div>
            </div>
            <div class="grd_3">
                <div class="demo cursor img grd_img grd_img_2" onclick="currentSlide(2)"
                    title="schematics coming soon"></div>
            </div>
            <div class="grd_4">
                <div class="demo cursor img grd_img grd_img_2" onclick="currentSlide(2)"
                    title="schematics coming soon"></div>
            </div>
            <div class="grd_5">
                <div class="demo cursor img grd_img grd_img_2" onclick="currentSlide(2)"
                    title="schematics coming soon"></div>
            </div>
        </div>
    </div>
</div>
<script src="slides.js"></script>
```

**CSS**

```CSS
/* slide show image gallery */
/* base css grid class */
.sld_show {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 0.5fr 5fr 0.3fr 2fr;
    gap: 0px 0px;
    height: 90vh;
}

/* the description of what will be found in the image gallery*/
/* the base css grid for this section */
.top {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 2fr 1.5fr 2fr;
    gap: 0px 0px;
    grid-area: 1 / 2 / 2 / 3;
}
/* styling for the text and the area it takes up,
uses css flex to center its self*/
.what { 
    grid-area: 2 / 2 / 3 / 3; 
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: 2rem;
    background-color: rgba(255, 255, 255, 0.493);
}

/* images that go in the slides */
.mySlides {
    display: none;
}
.image { grid-area: 2 / 2 / 3 / 3; }
.img{
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
}

.img_1{
    height: 100%;
    background-image: url("../idea page_1.jpg");
    /* background-color: rgb(255, 0, 255); */
}
.img_2{
    height: 100%;
    background-image: url("../to be drawn.jpg");
    /* background-color: rgb(255, 0, 21); */
}

/* styling for the next and previous image buttons on the inside of the image area
which are for the phone screen size (for the responsive design of this page) */
.img_area {
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    grid-template-rows: 1fr 3fr 1fr;
    gap: 0px 0px;
    grid-area: 2 / 2 / 3 / 3;
}
/* previous image */
.prev_ { 
    grid-area: 2 / 1 / 3 / 2;
    visibility:hidden
}
/* next image */
.next_ { 
    grid-area: 2 / 3 / 3 / 4;
    visibility:hidden
}

/* the description of what the currently selected slide shows*/
/* the base css grid for this section */
.caption-container {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 2fr 1fr 2fr;
    gap: 0px 0px;
    grid-area: 3 / 2 / 4 / 3;
    text-align: center;
	background-color: rgb(36, 36, 36);
    color: rgb(255, 255, 255);
}
/* styling for the text and the area it takes up,
uses css flex to center its self*/
#Caption{
    display: flex;
    justify-content: center;
    align-items: center;
	color: rgb(255, 255, 255);
	animation-name: zoom;
	animation-duration: 0.6s;
}
.about { grid-area: 2 / 2 / 3 / 3; 
    /* background-color: rgb(25, 0, 250); */
}

/* the styling for the button on the right side of the screen */
/* the base css grid for this section */
.right {
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 1fr 2fr 1fr;
    gap: 0px 0px;
    grid-area: 2 / 3 / 3 / 4;
}
/* next image */
.next { grid-area: 2 / 1 / 3 / 2; }
/* the styling for the button on the left side of the screen */
/* the base css grid for this section */
.left {
    display: grid;
    grid-template-columns: 6fr 1fr;
    grid-template-rows: 1fr 2fr 1fr;
    gap: 0px 0px;
    grid-area: 2 / 1 / 3 / 2;
}
/* previous image */
.prev { grid-area: 2 / 2 / 3 / 3; }
/* the tabs at the bottom of the slide show that allow you to go between multiple images */
/* the base css grid for this section */
.tabs {
    display: grid;
    grid-template-columns: repeat(5, 1fr 5fr) 1fr;
    grid-template-rows: 1fr;
    gap: 0em 0em;
    grid-area: 4 / 1 / 5 / 4;
}

.grd_img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block; 
}
/* grid area 1 */
.grd_1 { 
    grid-area: 1 / 2 / 2 / 3;
	width: 100%;
    height: 100%;
    /* background-color: aqua; */
}
.grd_img_1{
    background-image: url('../idea page_1.jpg'); 
}
/* grid area 2 */
.grd_2 { 
    grid-area: 1 / 4 / 2 / 5; 
    width: 100%;
    height: 100%;
    /* background-color: aqua; */
}
.grd_img_2{
    background-image: url('../to be drawn.jpg'); 
}
/* grid area 3 */
.grd_3 { 
    grid-area: 1 / 6 / 2 / 7;
    width: 100%;
    height: 100%;
    /* background-color: aqua; */
}
.grd_img_2{
    background-image: url('../to be drawn.jpg'); 
}
/* grid area 4 */
.grd_4 { 
    grid-area: 1 / 8 / 2 / 9;
    width: 100%;
    height: 100%;
    /* background-color: aqua; */
}
.grd_img_2{
    background-image: url('../to be drawn.jpg'); 
}
/* grid area 5 */
.grd_5 { 
    grid-area: 1 / 10 / 2 / 11; 
    width: 100%;
    height: 100%;
    /* background-color: aqua; */
}
.grd_img_2{
    background-image: url('../to be drawn.jpg'); 
}

/* general styling for the next and previous image buttons in the image gallery */
.prev,
.next,
.prev_,
.next_ {
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
	cursor: pointer;
	color: rgb(255, 255, 255);
	font-weight: bold;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.prev:hover,
.next:hover,
.prev_:hover,
.next_:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Add a transparency effect for thumbnail images */
.demo {
    opacity: 0.6;
}

.active,
.demo:hover {
    opacity: 1;
}

.cursor {
    cursor: pointer;
}

.demo {
    opacity: 0.6;
}
```
