async function inject(id, file) {
  const el = document.getElementById(id);
  if (!el) return;

  const res = await fetch(file);
  if (!res.ok) {
    el.innerHTML = `<!-- Failed to load ${file}: ${res.status} -->`;
    return;
  }

  el.innerHTML = await res.text();
}

inject("site-header", "header.html");
inject("site-footer", "footer.html");
