let draggedCard = null;

// Function to make a card draggable
function makeCardDraggable(card) {

    card.addEventListener("dragstart", () => {
        draggedCard = card;
        card.classList.add("dragging");
    });

    card.addEventListener("dragend", () => {
        card.classList.remove("dragging");
        draggedCard = null;
    });

}

// Existing cards
document.querySelectorAll(".card").forEach(makeCardDraggable);

// Drag & Drop
document.querySelectorAll(".card-list").forEach(list => {

    list.addEventListener("dragover", e => {
        e.preventDefault();
        list.classList.add("drag-over");
    });

    list.addEventListener("dragleave", () => {
        list.classList.remove("drag-over");
    });

    list.addEventListener("drop", () => {
        list.classList.remove("drag-over");

        if (draggedCard) {
            list.appendChild(draggedCard);
        }
    });

});

// Add Task Button
document.querySelectorAll(".add-btn").forEach(button => {

    button.addEventListener("click", () => {

        const task = prompt("Enter Task Name");

        if (task === null || task.trim() === "")
            return;

        const card = document.createElement("div");

        card.className = "card";
        card.draggable = true;
        card.textContent = task;

        makeCardDraggable(card);

        button.previousElementSibling.appendChild(card);

    });

});
