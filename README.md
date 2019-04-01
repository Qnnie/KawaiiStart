# KawaiiStart

<img src='images/preview.png'>

Features
-------------------------------
  <ul>
    <li>Menu</li>
    <li>Clock</li>
    <li>Dynamic Backgrounds</li>
    <li>Link Animations</li>
  </ul>
  
Customize
-------------------------------
### Adding Menu Options

Open index.html and look for <br>
``` html
 <li id='category-1'> Development
   <ul id='sub-menu-1'>
     <li><a id='link-1' href='https://github.com'>Github</a></li>
     <li><a id='link-2' href='https://codepen.io'>Codepen</a></li>
     <li><a id='link-3' href='https://stackoverflow.com'>Stack Overflow</a></li>
   </ul>
 </li>
```
Create a new one or replace an existing one.
-Note: You will have to open up css/style.css and edit the padding 
        on whatever you want. Example:
``` css
#sub-menu-1 {
    margin-top: -178px;
}
```
You will also need to copy paste the following but change it to your newly created category and color of choice.

``` css
#category-1 {
    color: var(--color-1);
}

#category-1 ul li a {
    background-image: linear-gradient(to right, var(--color-1) 0, var(--color-1) 100%);
    background-position: 0 2em;
    background-size: 0 5%;
    background-repeat: no-repeat;
    transition: background .5s;
}

#category-1 ul li a:hover {
    color: var(--color-1);
    background-size: 100% 2px;  
}
```

### Background and Theme colors: 

To add a new background image go to the images folder and name your image Wallpaper[next-number].jpg <br>
Open up js/theme.js, and look for 
``` javascript
  var currentBackground = getRandomIntInclusive(1, 2);//How many wallpapers on the right
```
change the right side number to include your new wallpaper.
### Color Theme
``` javascript
var colors = [
    ['#9E9CB1','#7A7994','#C0BCCD','#2C3350', dark], //Wallpaper1
    ['#DABEC3','#C1A7B1','#F3D9D7','#866E76', dark]  //Wallpaper2
]; 
```    
### Create a new sub array like so
``` javascript
    var colors = [
    ['#9E9CB1','#7A7994','#C0BCCD','#2C3350', dark], //Wallpaper1
    ['#DABEC3','#C1A7B1','#F3D9D7','#866E76', dark],  //Wallpaper2
    ['yourcolor','yourcolor','yourcolor','yourcolor', dark]  //Wallpaper3
];
```
if you add more categories you'll need to also add those colors here and make new variables in the css file.

### You're done, have fun.
