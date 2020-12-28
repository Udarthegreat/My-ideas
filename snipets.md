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
 ## title are
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

