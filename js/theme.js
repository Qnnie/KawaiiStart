function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

/*FOR USER*/
var category_1_Items = 3; //How Many Items are in each category? If you added another category create a new variable
var category_2_Items = 4;
var category_3_Items = 5;
var currentBackground = getRandomIntInclusive(1, 2); //Number of wallpapers on the right
////////////////////////////////////////////////////////////////////////////////////////
document.body.style.background = 'url(./images/Wallpaper'+currentBackground+'.jpg)';
document.body.style.backgroundSize = 'cover';

//Grabs Colorscheme Equivalent
// [First category, Second, Third, SearchBorder, Theme Dark/Light]
//Dark Theme: rgba(26,26,26,.98);
var dark = 'rgba(26,26,26,.98)';

var categories = ['0px', '88px','133px','178px','223px','268px','313px','358px','403px']; //Removes the need to modify margin in css

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
root.style.setProperty("--margin-c1", categories[category_1_Items]);
root.style.setProperty("--margin-c2", categories[category_2_Items]);
root.style.setProperty("--margin-c3", categories[category_3_Items]);


