const openSettingsButton = document.getElementById("sett-but");
const settingOverlay = document.getElementById("settings-content");

openSettingsButton.addEventListener("click", () => {
  settingOverlay.style.display = "flex";
});

function closeSettings() {
  settingOverlay.style.display = "none";
}
