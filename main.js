let Sildes = document.querySelectorAll(".slide");
let Next = document.getElementById("nxt");
let Previous = document.getElementById("pre");
let counter = 0;
Sildes.forEach((img, indx) => {
    img.style.left = `${indx * 100}%`;
});
//Move image to show another
const ShowImage = () => {
    Sildes.forEach((image) => {
        image.style.transform = `translateX(-${counter * 100}%)`;
    })
}
Next.addEventListener("click", () => {
    if (counter < 8) {
        Next.style.cssText ="cursor:pointer";
        counter++;
        ShowImage();
    }
    else {
        Next.style.cssText ="pointer-event:none;cursor:no-drop";
    }
});
Previous.addEventListener("click", () => {
    if(counter>0){
        Previous.style.cssText ="cursor:pointer";
        counter--;
        ShowImage();
    }
    else{
        Previous.style.cssText ="pointer-event:none;cursor:no-drop";
    }
    
})