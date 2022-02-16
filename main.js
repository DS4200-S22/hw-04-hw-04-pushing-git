/*

HW-04
Kreena Totala & Michelle Lim
2/15/22

*/

/* Circle #1 */
clickCount = 0;
function circle1Clicked() {
    //console.log("Button 1 was clicked"); 
    clickCount++;
    // Set innerHTML of div
    document.getElementById("click").innerHTML = clickCount; 
}

/* Circle #2 */
function showBorder() {
    let circle2 = document.getElementById("circle2");
    circle2.setAttribute("stroke", "black");
}
  
function hideBorder() {
  let circle2 = document.getElementById("circle2");
  circle2.setAttribute("stroke", "white");
}

/* Circle #3 */
function disappear() {
   let element = document.getElementById("circle3");
   if (element.style.opacity == 0) {
     element.style.opacity = 1;
   } else {
     element.style.opacity = 0;
   }
 }