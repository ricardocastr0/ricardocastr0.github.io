async function inject(id, file) {
  const el = document.getElementById(id);
  if (!el) return;

  const res = await fetch(file);
  el.innerHTML = await res.text();

  // Highlight active nav link
  const page = document.body.dataset.page;
  if (!page) return;

  const active = el.querySelector(`[data-page="${page}"]`);
  if (active) active.classList.add("active");
}

inject("site-header", "header.html");
inject("site-footer", "footer.html");
