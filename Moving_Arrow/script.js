document.body.style="display: flex; justify-content: center; align-items: center; height:100vh"
const mybox = document.createElement("img");
mybox.style.cssText = "width: 360px; height: 250px; position: relative;";
mybox.src = "./img/box.jpg";
document.body.appendChild(mybox);
const moveindex = 40;
let x = 0;
let y = 0;


document.addEventListener("keydown",event=>{
    event.preventDefault(); // does not allow screen to follow in ourcase box;
  if(event.key.startsWith("Arrow")){
    switch(event.key){
     
      case "ArrowUp":
        mybox.src = "./img/key.jpg";
        mybox.style.cssText = "width: 100px; height: 100px; position: relative;  transform: rotate(90deg);";
        y-=moveindex;
        break;
      case "ArrowDown":
        mybox.src = "./img/key.jpg";
        mybox.style.cssText = "width: 100px; height: 100px; position: relative;  transform: rotate(270deg);";
        y+=moveindex;
        break;
      case "ArrowRight":
        mybox.src = "./img/key.jpg";
        mybox.style.cssText = "width: 100px; height: 100px; position: relative;transform: rotate(180deg);";
  
        x+=moveindex;
        break;
      case "ArrowLeft":
        mybox.src = "./img/key.jpg";
        mybox.style.cssText = "width: 100px; height: 100px; position: relative;";
        x-=moveindex;
        break;
    }
    mybox.style.top =`${y}px`;
    mybox.style.left =`${x}px`;
  }
});

