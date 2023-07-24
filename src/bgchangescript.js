let hours = new Date().getHours();
setTimeout(()=>{Bgchange(hours)}, 500)
    

function Bgchange(hours) {
    setTimeout(() => {
    const bgimage = document.getElementById("left-container")

    if (hours >= 5 && hours < 10) {
        bgimage.style.backgroundImage = "url(./morning.jpg)";
    }
    else if (hours >= 10 && hours < 16) {
        bgimage.style.backgroundImage = "url('./afternoon2.jpg')";

    }
    else if (hours >= 16 && hours < 20) {
        bgimage.style.backgroundImage = "url('./evening3.jpg')";

    }
    else {
        bgimage.style.backgroundImage = "url('./night1.webp')";
    }
},2);
}
export default Bgchange;