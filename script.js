//your JS code here. If required.
// add event listener to input
// then find the selected option using selectedIndex
// remove it.
document.querySelector("input[type='button']").addEventListener("click", () => {
    let colorSelect = document.getElementById("colorSelect");
    let selectedOption = colorSelect.options[colorSelect.selectedIndex];
    if (selectedOption) {
        selectedOption.remove();
    }
});