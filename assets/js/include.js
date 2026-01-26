async function inject(id, url, after) {
  const el = document.getElementById(id);
  if (!el) return;

  const res = await fetch(url);
  if (!res.ok) {
    console.error(`Failed to load ${url}: ${res.status}`);
    return;
  }

  el.innerHTML = await res.text();
  if (typeof after === "function") after();
}

function setActiveNav() {
  // Works both on GitHub Pages (/projects.html) and local file paths (.../projects.html)
  const currentFile = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();

  document.querySelectorAll(".nav .links a").forEach((a) => {
    const href = a.getAttribute("href") || "";
    const targetFile = (href.split("/").pop() || "").toLowerCase();

    const isHome =
      (currentFile === "index.html" && (targetFile === "" || targetFile === "index.html")) ||
      (currentFile === "" && (targetFile === "" || targetFile === "index.html"));

    const isMatch = isHome || (targetFile && targetFile === currentFile);

    a.classList.toggle("active", isMatch);
  });
}

inject("site-header", "../partials/header.html", setActiveNav);
inject("site-footer", "../partials/footer.html");
