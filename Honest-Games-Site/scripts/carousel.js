// script runs after DOM loaded
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("#patternsCarouselContent").forEach((carousel) => {
        const items = carousel.querySelectorAll(".patternsCarouselItem");
        const buttonsHtml = Array.from(items, () => {
            return `<span class="patternsCarouselButtons"></span>`;
        });

        carousel.insertAdjacentHTML(
            "beforeend",
            `
    <div class="patternsCarouselNav">
    ${buttonsHtml.join("")}
    </div>
    `
        );

        const buttons = carousel.querySelectorAll(".patternsCarouselButtons");

        buttons.forEach((button, i) => {
            button.addEventListener("click", () => {
                //un-select all the items
                items.forEach((item) => item.classList.remove("patternsCarouselItem--selected"));
                buttons.forEach((button) => button.classList.remove("patternsCarouselButtons--selected"));

                items[i].classList.add("patternsCarouselItem--selected");
                button.classList.add("patternsCarouselButtons--selected");
            });
        });

        // Select the first items on page load.
        items[0].classList.add("patternsCarouselItem--selected");
        buttons[0].classList.add("patternsCarouselButtons--selected");

        console.log(buttonsHtml);
    });
});
