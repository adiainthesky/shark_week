const addShark = () => {
    const newShark = document.createElement("span");
    const sharkContainer = document.querySelector("#sharkContainer");
    newShark.textContent = "🦈 ";
    sharkContainer.appendChild(newShark);
  };
  
  const registerEventHandlers = () => {
    const sharkButton = document.querySelector("#addSharkButton");
    sharkButton.addEventListener("click", addShark);
  };
  
  document.addEventListener("DOMContentLoaded", registerEventHandlers);