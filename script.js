// document.querySelector('#center')
//     .addEventListener("mousemove", function (dets) {
//         console.log(dets.clientX, dets.clientY)
//     })

//This will create more divs for imgs to appear than we actuual req.
//So, here we use the concept throttling - to reduce the executions of a particular function.

const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}

document.querySelector('#center').addEventListener("mousemove", throttleFunction((dets) => {
    var div = document.createElement("div");
    // Add this line to hide the div when the image disappears
    div.classList.add('hidden');

    div.classList.add('imagediv');
    div.style.left = dets.clientX + 'px';
    div.style.top = dets.clientY + 'px';

    var img = document.createElement("img");
    img.setAttribute("src", "https://wallpapers.com/images/hd/glowing-batman-suit-4k-3y4dk223snh6bb47.webp");

    div.appendChild(img);
    document.body.appendChild(div);
    gsap.to(img, {
        y: "0",
        ease: Power1,
        duration: .2
    })
    gsap.to(img, {
        y: "100%",
        delay: .6,
        ease: Power2
    })
    setTimeout(function () {
        div.remove();
    }, 2000);
}, 100));
