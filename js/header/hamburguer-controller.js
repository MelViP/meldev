const hamBtn = document.querySelector(".hamburguerMenu");

const header = document.querySelector("[data-header]");

hamBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const textLine = document.createElement("nav");
  textLine.classList.add("dropdownMenu");
  const content = `
        <ul>
          <div class="darkMode-switch">
            <input class="checkbox" type="checkbox">
            <span class="slider"></span>
          </div>
            <li>Home</li>
            <li>services</li>
            <li>work</li>
            <li>Contact</li>
        </ul>`;
  textLine.innerHTML = content;
  header.appendChild(textLine);
  console.log(textLine);

  const closeMenu = document.querySelector(".closeMenu");
  closeMenu.addEventListener('click', () => {
    event.preventDefault();
    const textLine = document.querySelector(".dropdownMenu");
    closeMenu.style.cssText = `
      transition: 2s all;
      animation: desaparecer 2s ease-in-out;
    `;
    textLine.remove();
    }
  );

  return textLine;
});
