function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
var currentBackground = getRandomIntInclusive(1, 2);//How many wallpapers on the right
document.body.style.background = 'url(./images/Wallpaper'+currentBackground+'.jpg)';
document.body.style.backgroundSize = 'cover';

//Grabs Colorscheme Equivalent
// [First category, Second, Third, SearchBorder, Theme Dark/Light]
//Dark Theme: rgba(26,26,26,.98)
//Light Theme: rgba(196, 196, 196, 0.98)
var dark = 'rgba(26,26,26,.98)';
var light = 'rgba(26,26,26,.98)';

var colors = [
    ['#9E9CB1','#7A7994','#C0BCCD','#2C3350', dark], //Wallpaper1
    ['#DABEC3','#C1A7B1','#F3D9D7','#866E76', dark]  //Wallpaper2
];

currentBackground -= 1;
let root = document.documentElement;
root.style.setProperty("--color-1", colors[currentBackground][0]);
root.style.setProperty("--color-2", colors[currentBackground][1]);
root.style.setProperty("--color-3", colors[currentBackground][2]);
root.style.setProperty("--color-4", colors[currentBackground][3]);
root.style.setProperty("--menu-color", colors[currentBackground][4]);

