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
