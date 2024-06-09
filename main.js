const dropdown = document.querySelector(".dropdown");
const dropBtn = document.querySelector(".link_btn");
let dropdownStatus = false;
dropdown.style.display = "none";

dropBtn.addEventListener("click", () => {
  onChangeDropdown();
});
const onChangeDropdown = () => {
  console.log("onChangeDropdown");
  dropdownStatus = !dropdownStatus;
  dropdown.style.display = dropdownStatus ? "flex" : "none";
};

window.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target) && !dropBtn.contains(e.target)) {
    dropdown.style.display = "none";
  }
});
