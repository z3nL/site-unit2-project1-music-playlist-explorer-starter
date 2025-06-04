const modal = document.getElementById("playlistModal");
const close = document.getElementsByClassName("close");

function toggleModal() {
    if (modal.style.display === "flex") {
        modal.style.display = "none";
        return;
    }
    modal.style.display = "flex";
}

window.onclick = function(event) {
   if (event.target === modal) {
      modal.style.display = "none";
   }
}
