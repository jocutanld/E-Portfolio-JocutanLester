// =========================
// MODAL ELEMENTS
// =========================
const modal = document.getElementById("projectModal");
const closeModalBtn = document.getElementById("closeModal");

const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalDesc = document.getElementById("modalDesc");
const modalLink = document.getElementById("modalLink");

// =========================
// OPEN MODAL (VIEW PROJECT)
// =========================
document.querySelectorAll(".view-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const card = e.target.closest(".project-card");

        modalTitle.textContent = card.dataset.title;
        modalImage.src = card.dataset.img;
        modalDesc.textContent = card.dataset.desc;
        modalLink.href = card.dataset.link;

        modal.classList.add("show");
    });
});

// =========================
// CLOSE MODAL (EXIT BUTTON)
// =========================
closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("show");
});

// =========================
// CLOSE WHEN CLICKING OUTSIDE MODAL
// =========================
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("show");
    }
});

// =========================
// OPTIONAL: ESC KEY CLOSE
// =========================
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modal.classList.remove("show");
    }
});