async function inject(id, url) {
  const el = document.getElementById(id);
  if (!el) return;

  const res = await fetch(url);
  if (!res.ok) {
    console.error(`Failed to load ${url}: ${res.status}`);
    return;
  }

  el.innerHTML = await res.text();
}

inject("site-header", "/partials/header.html");
inject("site-footer", "/partials/footer.html");
