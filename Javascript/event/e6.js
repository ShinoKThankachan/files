const addListenerButton = document.getElementById("addListener");
const removeListenerButton = document.getElementById("removeListener");
const targetButton = document.getElementById("targetButton");
const output = document.getElementById("output");
function handleClick() {
 output.textContent = "Target button clicked!";
}
addListenerButton.addEventListener("click", () => {
 targetButton.addEventListener("click", handleClick);
 output.textContent = "Event listener added.";
})
removeListenerButton.addEventListener("click", () => {
 targetButton.removeEventListener("click", handleClick);
 output.textContent = "Event listener removed.";
});