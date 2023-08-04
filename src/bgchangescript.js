import morning from "./morning.jpg";
import afternoon from "./afternoon2.jpg";
import evening from "./evening3.jpg";
import night from "./night1.webp";

let hours = new Date().getHours();
setTimeout(()=>{Bgchange(hours)}, 1000)


function Bgchange(hours) {
    setTimeout(() => {
    const bgimage = document.getElementById("left-container")

    if (hours >= 5 && hours < 10) {
        bgimage.style.backgroundImage = `url(${morning})`;
    }
    else if (hours >= 10 && hours < 16) {
        bgimage.style.backgroundImage = `url(${afternoon})`;

    }
    else if (hours >= 16 && hours < 20) {
        // bgimage.style.backgroundImage = "url('../public/evening3.jpg')";
        bgimage.style.backgroundImage = `url(${evening})`;
    }
    else if(hours<5 || hours>=20){
        bgimage.style.backgroundImage = `url(${night})`;
    }
},2);
}
export default Bgchange;