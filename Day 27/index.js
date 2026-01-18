
  const box = document.getElementById("box");

  // add
  add.onclick = () => box.classList.add("red");

  // remove
  remove.onclick = () => box.classList.remove("red");

  // toggle
  toggle.onclick = () => box.classList.toggle("blue");

  // multiple classes
  multi.onclick = () => box.classList.add("rounded", "shadow");

  // replace
  replace.onclick = () => box.classList.replace("red", "blue");

  // hover animation
  hoverBtn.addEventListener("mouseenter", () => {
    hoverBtn.classList.add("animate");
  });

  hoverBtn.addEventListener("mouseleave", () => {
    hoverBtn.classList.remove("animate");
  });

  // dark theme
  theme.onclick = () => document.body.classList.toggle("dark");

  // disable
  disable.onclick = () => disable.classList.add("disabled");

  // accordion
  accBtn.onclick = () => accContent.classList.toggle("open");

  // modal
  openModal.onclick = () => modal.classList.add("show");
  closeModal.onclick = () => modal.classList.remove("show");

  // sticky header
  window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 100);
  });

  // contains check
  console.log(box.classList.contains("box"));

  // loop classes
  box.classList.forEach(cls => console.log(cls));
