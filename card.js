export function createCard(name, role) {
  const card = document.createElement("div");
  card.classList.add("profile-card");

  // Name
  const title = document.createElement("h3");
  title.textContent = name;

  // Role
  const roleText = document.createElement("p");
  roleText.textContent = role;

  // Remove Button
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove-btn");
  removeBtn.textContent = "Remove";

  removeBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to remove this card?")) {
      card.remove();
    }
  });

  // Append children
  card.appendChild(title);
  card.appendChild(roleText);
  card.appendChild(removeBtn);

  return card;
}
