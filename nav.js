/* ============================================================= */
/*  Shared site navigation.                                      */
/*  Edit NAV_LINKS below to add, remove, or rename nav items or   */
/*  dropdown entries · every page on the site pulls from here.    */
/*                                                                */
/*  Each page must set window.NAV_BASE before loading this file:  */
/*    index.html         ->  window.NAV_BASE = "";                */
/*    projects/*.html    ->  window.NAV_BASE = "../";             */
/* ============================================================= */
(function () {
  const base = window.NAV_BASE || "";

  const NAV_LINKS = [
    { label: "Engineering work", children: [
      { label: "Bigfoot walking biped", href: base + "projects/bigfoot.html" },
      { label: "Robotic-hand mechanisms", href: base + "projects/origami.html" },
      { label: "Industrial sensing", href: base + "projects/nucor.html" }
    ] },
    {
      label: "Campus work",
      children: [
        { label: "Rethink the Rink", href: base + "projects/academic-projects.html#rethink-the-rink" },
        { label: "Greek Sing Sets",  href: base + "projects/academic-projects.html#greek-sing-sets" },
        { label: "Booth Committee",  href: base + "projects/academic-projects.html#booth-committee" }
      ]
    },
    {
      label: "Coursework",
      children: [
        { label: "AI/ML for Modern Manufacturing", href: base + "projects/ai-ml-manufacturing.html" },
        { label: "Intro to CAD/CAE",                href: base + "projects/intro-cad-cae.html" },
        { label: "Mechanical Design",               href: base + "projects/mechanical-design.html" }
      ]
    },
    { label: "About",   href: base + "index.html#about" },
    { label: "Contact", href: base + "index.html#contact" }
  ];

  const esc = s => String(s == null ? "" : s);

  function itemHTML(item) {
    if (item.children) {
      return `
        <li class="nav-item has-children">
          <button class="nav-link nav-toggle" type="button" aria-expanded="false">${esc(item.label)} <span class="nav-caret">&#9662;</span></button>
          <ul class="nav-dropdown">
            ${item.children.map(c => `<li><a href="${esc(c.href)}">${esc(c.label)}</a></li>`).join("")}
          </ul>
        </li>`;
    }
    return `<li class="nav-item"><a class="nav-link" href="${esc(item.href)}">${esc(item.label)}</a></li>`;
  }

  const nav = document.createElement("nav");
  nav.className = "site-nav";
  nav.innerHTML = `
    <div class="site-nav-wrap">
      <a class="site-nav-name" href="${base}index.html">Ricardo Castro</a>
      <ul class="site-nav-list">${NAV_LINKS.map(itemHTML).join("")}</ul>
      <button class="site-nav-burger" type="button" aria-label="Menu" aria-expanded="false">&#9776;</button>
    </div>
  `;

  const mount = document.getElementById("site-nav");
  if (mount) mount.replaceWith(nav);
  else document.body.insertBefore(nav, document.body.firstChild);

  // Dropdown toggle · click-based so it works on touch and keyboard, not just hover.
  nav.querySelectorAll(".nav-toggle").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = btn.getAttribute("aria-expanded") === "true";
      nav.querySelectorAll(".nav-toggle").forEach(b => b.setAttribute("aria-expanded", "false"));
      btn.setAttribute("aria-expanded", String(!open));
    });
  });
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target)) {
      nav.querySelectorAll(".nav-toggle").forEach(b => b.setAttribute("aria-expanded", "false"));
    }
  });

  // Mobile menu toggle.
  const burger = nav.querySelector(".site-nav-burger");
  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("nav-open");
    burger.setAttribute("aria-expanded", String(open));
  });
})();
