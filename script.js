<script>
// Affiliate link
const AFFILIATE_URL = "https://uh8f8d208auh.uewhbgfvds.cc/?rid=-7EBNQCgQAAHD1WwYABgEBEREKEQkKEQ1CEQ0SAAF_YWRjb21ibwEx";

function goToAffiliate() {
  window.open(AFFILIATE_URL, "_blank");
}

// Simple countdown placeholder
let time = 13*3600 + 59*60 + 59; 
const timerEl = document.getElementById("timer");

function updateTimer() {
  const h = Math.floor(time / 3600);
  const m = Math.floor((time % 3600) / 60);
  const s = time % 60;
  timerEl.textContent = `${h}:${m}:${s}`;
  if (time > 0) time--;
}
setInterval(updateTimer, 1000);
</script>
