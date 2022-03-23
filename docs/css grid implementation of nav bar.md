[TOC]

# CSS grid implementation of nav bar

## explanation

​	Currently the UI for the nav bar and the theme switcher, currently I have to use `left: `  and `top: ` to position them currently but I don't want to have to specify positions for ever element in the nav bar for ever element, I want to be able to add div's to the container div for the UI and it to automatically add them to the UI and auto position them, id be ok if I have to add a class for the browser to add them to the UI I just don't want to have to add positioning data for every element. I tried using flexbox and CSS grids but neither were able to get everything I wanted done. Fexbox does not let you offset the position of the boxes easily, I need this for animations, I want the elements to slide in from the side of the screen on hover and that means setting the default position of the elements x units to the left of the start position, flex box is my preference for this but I just does not work properly. I then tried grid and got further but even there I ran into some issues I cannot fix. I know I could get this to work w/ js but I want this and as much as possible of my page to be CSS only, as I did w/ my theme switcher. I tried using CSS grid but similar to CSS grid I could not find a way to offset it either though I found a hacky way of offsetting it though `margin-left: -5vw;` which offsets the standard position to the left and lets it slide in on hover by setting the `margin-left` to zero, but this comes with the side affect that because of how I had to write it to work with this hack I would have had to do some confusing calculations to get the items to stick out slightly from the screen. I just want to be able to add items to the html and the CSS to auto place it with the need to add special CSS for every individual item, most will have their own CSS but I don't want to have to to get it looking right, I want to use CSS to set background colors etc., not positioning. Code below:

## the code

HTML

```html
<div class="nav_section">
    <div class="nav"><a class="nav_link">nav</a></div>
    <div class="theme_switch"><a class="theme_switch_link">theme switch</a></div>
</div>
```

CSS

```css
.nav_section{
    width: 10vw;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    gap: 5px 0px;
}

.nav_section>div{
    /* position: absolute;
    left: -80px; */
    margin-left: -5vw;
    transition: 0.3s;
    border-radius: 0 5px 5px 0;
}

.nav_section a{
    text-decoration: none;
    font-size: 2em;
    color: white;
    min-width: 11vw;
}

.nav_section div:hover {
    margin-left: 0vw;
}

.nav {
    grid-area: 1 / 1 / 2 / 2;
}

.nav_link{
    background-color: #04AA6D;
}

.theme_switch {
    grid-area: 2 / 1 / 3 / 2;
}

.theme_switch_link {
    background-color: #2196F3;
}
```

