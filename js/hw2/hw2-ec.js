const rates = [0.92, 1.38, 7.81, 156.73, 18.41];
let euro_usd = document.getElementById("hw2-ec-result-euro");
let cad_usd = document.getElementById("hw2-ec-result-cad");
let hkd_usd = document.getElementById("hw2-ec-result-hkd");
let jpy_usd = document.getElementById("hw2-ec-result-jpy");
let mxn_usd = document.getElementById("hw2-ec-result-mxn");

document.getElementById("usd").addEventListener("input", function (e) {
  const usdVal = e.target.value;

  euro_usd.value = (rates[0] * usdVal).toFixed(2);
  cad_usd.value = (rates[1] * usdVal).toFixed(2);
  hkd_usd.value = (rates[2] * usdVal).toFixed(2);
  jpy_usd.value = (rates[3] * usdVal).toFixed(2);
  mxn_usd.value = (rates[4] * usdVal).toFixed(2);
});
