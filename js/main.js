document.querySelector("#hotspotBtnHead").addEventListener ("click", updateInfobox);

function updateInfoboxOne() {
    console.log("updateInfoboxOne")
// document.querySelector("efficiency").textContent = "Her er information om One";
// document.querySelector("requirement").textContent = "Her er noget mere information om One";

document.querySelector(".info-text .placeholder").textContent = "Her er info";
document.querySelector("#efficiency").innerHTML = "<h2>One</h2><p>Info om One</p><img src='billede.webp'>";
document.querySelector("requirement").textContent = "<p>Her er noget mere vedrørende zombiers hoveder</p>";
}
