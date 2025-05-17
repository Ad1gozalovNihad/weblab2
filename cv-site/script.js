function showInput(section) {
  document.getElementById(`${section}-input`).style.display = "block";
  document.getElementById(`new-${section}`).focus();
}

function confirmAdd(section) {
  const input = document.getElementById(`new-${section}`);
  const value = input.value.trim();
  if (value !== "") {
    const li = document.createElement("li");
    li.textContent = value;
    document.getElementById(`${section}-list`).appendChild(li);
    input.value = "";
    document.getElementById(`${section}-input`).style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const sections = ["contact", "education", "skills", "languages", "profile", "experience", "reference"];
  sections.forEach((section) => {
    const input = document.getElementById(`new-${section}`);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        confirmAdd(section);
      }
    });
  });
});
