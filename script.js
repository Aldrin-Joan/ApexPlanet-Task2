function validateForm() {
    const fname = document.getElementById("Fname").value.trim();
    const lname = document.getElementById("Lname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("PhoneNumber").value.trim();
    const message = document.getElementById("message").value.trim();
    
    if (!fname || !lname || !email || !phone || !message) {
        alert("Please fill out all required fields.");
        return false;
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    alert("Form submitted successfully!");
    return true;
}
// Function to add a new task to the To-Do List
function addTask() {
    const todoInput = document.getElementById("todoInput");
    const todoList = document.getElementById("todoList");

    // Check if input is not empty
    if (todoInput.value.trim() !== "") {
        // Create new list item
        const newTask = document.createElement("li");
        
        // Add task text
        newTask.textContent = todoInput.value;

        // Add delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Remove";
        deleteButton.onclick = () => todoList.removeChild(newTask);
        
        // Append delete button to task item
        newTask.appendChild(deleteButton);
        
        // Add new task to list
        todoList.appendChild(newTask);

        // Clear the input field
        todoInput.value = "";
    } else {
        alert("Please enter a task before adding.");
    }
}
function toggleMenu() {
    document.querySelector("header").classList.toggle("active");
}
// JavaScript for Lightbox functionality
document.querySelectorAll('.gallery-grid img').forEach(image => {
    image.addEventListener('click', () => {
        document.getElementById('lightbox').style.display = 'flex';
        document.getElementById('lightbox-img').src = image.src;
    });
});

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}
