let ExchangeRate = {
  USD: {
    KRW: 1298.05,
    USD: 1,
    VND: 23830.0,
    unit: "달러",
  },
  KRW: {
    USD: 0.00077,
    KRW: 1,
    vnd: 18.36,
    unit: "원",
  },
  VND: {
    KRW: 0.054,
    USD: 0.000042,
    VND: 1,
    unit: "동",
  },
};
//1. console.log (ExchangeRate.USD.unit);//

let fromCurrncy = "USD";
let toCurrncy = "USD";
document.querySelectorAll("#from-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    document.getElementById("from-but").textContent = this.textContent;
    fromCurrncy = this.textContent;
    convert();
  })
);

document.querySelectorAll("#to-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    document.getElementById("to-but").textContent = this.textContent;
    toCurrncy = this.textContent;
    console.log(toCurrncy);
    convert();
  })
);

function convert() {
  let amount = document.getElementById("from-input").value;

  let convertAmount = amount * ExchangeRate[fromCurrncy][toCurrncy];

  console.log(convertAmount);

  document.getElementById("to-input").value = convertAmount;
}
