const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

// Display message function
const showMessage = (msg) => {
    const messageBox = document.createElement("div");
    messageBox.className = "message";
    messageBox.innerText = msg;
    document.body.appendChild(messageBox);

    messageBox.style.display = "block";
    setTimeout(() => {
        messageBox.style.display = "none";
        document.body.removeChild(messageBox);
    }, 1500);
};

// Save notes to local storage
const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    const data = [];
    notes.forEach(note => data.push(note.value));
    data.length ? localStorage.setItem("notes", JSON.stringify(data)) : localStorage.removeItem("notes");
};

// Add a new note
const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
        <div class="tool">
            <i class="save fas fa-save"></i>
            <i class="trash fas fa-trash"></i>
        </div>
        <textarea>${text}</textarea>
    `;

    // Delete note
    note.querySelector(".trash").addEventListener("click", () => {
        if (confirm("Are you sure you want to delete this note?")) {
            note.remove();
            saveNotes();
            showMessage("Note Deleted");
        }
    });

    // Save note on icon click
    note.querySelector(".save").addEventListener("click", () => {
        saveNotes();
        showMessage("Note Saved..");
    });

    // Save note when focus is lost
    note.querySelector("textarea").addEventListener("focusout", saveNotes);

    main.appendChild(note);
    saveNotes();
};

addBtn.addEventListener("click", () => {
    addNote();
    showMessage("New Note Added");
});

// Load saved notes from local storage
(function loadNotes() {
    const savedNotes = JSON.parse(localStorage.getItem("notes") || "[]");
    savedNotes.forEach(text => addNote(text));
})();
