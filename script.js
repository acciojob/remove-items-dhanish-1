//your JS code here. If required.
// add event listener to input
// then find the selected option using selectedIndex
// remove it.
// document.querySelector("input[type='button']").addEventListener("click", () => {
//     let colorSelect = document.getElementById("colorSelect");
//     let selectedOption = colorSelect.options[colorSelect.selectedIndex];
//     if (selectedOption) {
//         selectedOption.remove();
//     }
// });

document.querySelector("input[type='button']").addEventListener("click", () => {
    // Get the dropdown element
    let colorSelect = document.getElementById("colorSelect");
    
    // Get the currently selected option
    let selectedOption = colorSelect.options[colorSelect.selectedIndex];
    
    // Remove the selected option if it exists
    if (selectedOption) {
        selectedOption.remove();
    }
});