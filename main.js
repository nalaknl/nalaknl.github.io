document
    .getElementById("bouton1", "bouton2", "bouton3")
    .addEventListener("mousemove", (e) => {
        const x = e.pageX - e.target.offsetLeft;
        const y = e.pageY - e.target.offsetTop;
        console.log(x + " / " + y);
        e.target.style.setProperty("--x", `${x}px`);
        e.target.style.setProperty("--y", `${y}px`);
    });
// document.getElementById("bouton2").addEventListener("mousemove", (e) => {
//     const x = e.pageX - e.target.offsetLeft;
//     const y = e.pageY - e.target.offsetTop;
//     console.log(x + " / " + y);
//     e.target.style.setProperty("--x", `${x}px`);
//     e.target.style.setProperty("--y", `${y}px`);
// });
// document.getElementById("bouton3").addEventListener("mousemove", (e) => {
//     const x = e.pageX - e.target.offsetLeft;
//     const y = e.pageY - e.target.offsetTop;
//     console.log(x + " / " + y);
//     e.target.style.setProperty("--x", `${x}px`);
//     e.target.style.setProperty("--y", `${y}px`);
// });