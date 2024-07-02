function updateTimeAndDay() {
  const now = new Date();

  const hours = String(now.getUTCHours()).padStart(2, "0");
  const minutes = String(now.getUTCMinutes()).padStart(2, "0");
  const seconds = String(now.getUTCSeconds()).padStart(2, "0");
  const currentTimeUTC = `${hours}:${minutes}:${seconds}`;

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = daysOfWeek[now.getUTCDay()];

  document.getElementById("currentTimeUTC").textContent = currentTimeUTC;
  document.getElementById("currentDay").textContent = currentDay;
}

setInterval(updateTimeAndDay, 1000);

updateTimeAndDay();
