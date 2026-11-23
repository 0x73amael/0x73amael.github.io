(() => {
  const time = document.querySelector('#local-time');
  const year = document.querySelector('#year');

  const updateClock = () => {
    if (!time) return;
    const now = new Date();
    time.textContent = new Intl.DateTimeFormat(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).format(now);
  };

  if (year) year.textContent = String(new Date().getFullYear());
  updateClock();
  window.setInterval(updateClock, 30_000);
})();
