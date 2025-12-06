// 1. 等待DOM完全加载
document.addEventListener("DOMContentLoaded", function () {
  // 2. 深色模式切换（优化版：使用类名切换，存储偏好）
  const themeToggle = document.getElementById("themeToggle");
  const currentTheme = localStorage.getItem("theme") || "light";

  if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
  }

  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    themeToggle.textContent = isDark ? "☀️" : "🌓";
  });

  // 3. 实时时间显示
  function updateDateTime() {
    const now = new Date();
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      weekday: "long",
    };
    const formatter = new Intl.DateTimeFormat("zh-CN", options);
    document.getElementById(
      "liveDateTime"
    ).textContent = `当前时间：${formatter.format(now)}`;
  }
  setInterval(updateDateTime, 1000);
  updateDateTime(); // 初始化

  // 4. 平滑滚动（可选增强）
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
});
