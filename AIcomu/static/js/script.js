document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // ページ要素
  // =========================
  const pageTop = document.getElementById("pageTop");
  const pageAicomu = document.getElementById("pageAicomu");
  const goBtn = document.getElementById("goAicomu");
  const loading = document.getElementById("loading");

  // =========================
  // ページ切替関数（section方式）
  // =========================
  function showPage(page) {
    [pageTop, pageAicomu].forEach(p => {
      if (p) p.classList.add("hidden");
    });

    if (page) page.classList.remove("hidden");
  }

  // =========================
  // Top → Aicomu
  // =========================
  if (goBtn) {
    goBtn.addEventListener("click", () => {

      if (loading) loading.classList.remove("hidden");
      goBtn.disabled = true;

      setTimeout(() => {
        showPage(pageAicomu);
      }, 800);
    });
  };
  });
