export function Modal(image, pictures = [image.src], startIndex = 0, pictureDescriptions = {}) {
    const container = document.getElementById("modalcont");
    if (!container) return;

    let currentIndex = startIndex;

    const closeModal = () => {
        container.classList.remove("dflex");
        container.classList.add("dnone");
        container.innerHTML = "";
        container.removeEventListener("click", closeWhenBackdrop);
    };

    const closeWhenBackdrop = event => {
        if (event.target === container) closeModal();
    };

    image.addEventListener("click", () => {
        container.innerHTML = "";
        currentIndex = startIndex;

        const close = document.createElement("span");
        close.innerHTML = "&times;";

        const prev = document.createElement("button");
        prev.type = "button";
        prev.classList.add("modal-prev");
        prev.innerHTML = "&#8249;";

        const next = document.createElement("button");
        next.type = "button";
        next.classList.add( "modal-next");
        next.innerHTML = "&#8250;";

        const modalImage = document.createElement("img");

        const text = document.createElement("p");

        const dotsCont = document.createElement("div");
        dotsCont.classList.add("modal-dots");

        const dots = pictures.map((picture, dotIndex) => {
            const dot = document.createElement("button");
            dot.type = "button";
            dot.classList.add("modal-dot");

            dot.addEventListener("click", () => {
                currentIndex = dotIndex;
                showModalSlide();
            });

            dotsCont.appendChild(dot);
            return dot;
        });

        const showModalSlide = () => {
            const currentPicture = pictures[currentIndex];

            modalImage.src = currentPicture;
            modalImage.alt = image.alt;
            text.innerText = pictureDescriptions[currentPicture] || image.dataset.description || image.alt;

            dots.forEach((dot, dotIndex) => {
                dot.classList.toggle("active", dotIndex === currentIndex);
            });
        };

        prev.addEventListener("click", () => {
            currentIndex--;

            if (currentIndex < 0) {
                currentIndex = pictures.length - 1;
            }

            showModalSlide();
        });

        next.addEventListener("click", () => {
            currentIndex++;

            if (currentIndex >= pictures.length) {
                currentIndex = 0;
            }

            showModalSlide();
        });

        close.addEventListener("click", closeModal);
        container.addEventListener("click", closeWhenBackdrop);

        container.appendChild(close);
        container.appendChild(prev);
        container.appendChild(modalImage);
        container.appendChild(next);
        container.appendChild(text);
        container.appendChild(dotsCont);

        container.classList.remove("dnone");
        container.classList.add("dflex");
        showModalSlide();
    });

    return container;
}
