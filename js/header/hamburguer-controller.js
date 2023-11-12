const hamBtn = document.querySelector(".hamburguerMenu");

const header = document.querySelector("[data-header]");

hamBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const textLine = document.createElement("nav");
  textLine.classList.add("dropdownMenu");
  const content = `
        <ul>
        <label class="closeMenu">
          <input type="checkbox" />
          <img width="67" height="67" src="https://img.icons8.com/external-flat-icons-inmotus-design/67/external-close-headphones-flat-icons-inmotus-design.png" alt="external-close-headphones-flat-icons-inmotus-design"/>
        </label>
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
    textLine.remove();
    }
  );

  return textLine;
});
