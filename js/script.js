function toggleDetail(e) {
    const target = e.currentTarget;
    const item = target.closest(".about-exp-item");
    const detail = item.querySelector(".about-exp-item-detail");

    if (detail.classList.contains("show")) {
        target.innerHTML = "More Info";
        detail.classList.remove("show");
    } else {
        target.innerHTML = "Less Info";
        detail.classList.add("show");
    }
}

