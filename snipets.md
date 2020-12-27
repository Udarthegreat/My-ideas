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
## paralax classes
