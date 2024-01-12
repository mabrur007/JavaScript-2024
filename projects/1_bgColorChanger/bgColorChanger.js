const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        // console.log(e);
        // console.log(e.target.id);
        switch (e.target.id) {
            case "white":
                body.style.backgroundColor = "#fff"
                break;
            case "yellow":
                body.style.backgroundColor = "yellow"
                break;
            case "blue":
                body.style.backgroundColor = "blue"
                break;
            case "grey":
                body.style.backgroundColor = "grey"
                break;
        
            default:
                break;
        }
    })
})

document.addEventListener(function (e) {
    
})