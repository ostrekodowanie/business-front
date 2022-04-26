import landingHeight from "./landingPageHeight.js";
import { animations, pseudoElemAnim } from "./animations.js";

// calling functions based on the window properties

window.addEventListener('resize', () => {
    landingHeight()
})

window.addEventListener('DOMContentLoaded', () => {
    let screenWidth = window.innerWidth;
    if(screenWidth >= 1150) {
        animations();
        pseudoElemAnim();
    }
})

// defining default functions

landingHeight()