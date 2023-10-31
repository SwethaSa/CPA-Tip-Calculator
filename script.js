let bill = document.getElementById("bill");
let percent = document.getElementById("percent");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let people = document.getElementById("people");
let result = document.getElementById("result");

let calculateBill = () => {
  if (
    typeof bill.value !== "string" ||
    typeof percent.value !== "string" ||
    isNaN(Number(bill.value)) ||
    isNaN(Number(percent.value))
  ) {
    alert("Please Enter Numbers Only!");
    location.reload();
  } else {
    let billAmnt = Number(bill.value);
    let tipAmnt = Number(percent.value) / 100;
    let logic = billAmnt * tipAmnt;
    let total = logic + billAmnt;
    result.innerText = "$" + total.toFixed(2);
    return total;
  }
};
let handleAdd = () => {
  plus.onclick = () => {
    people.innerText++;
    let totalAmnt = calculateBill();
    let final = totalAmnt / people.innerText;
    result.innerText = "$" + final.toFixed(2);
    return final;
  };
};

let handleDecrease = () => {
  minus.onclick = () => {
    if (people.innerText <= 1) {
      return;
    } else {
      people.innerText--;
      let totalAmnt = calculateBill();
      let final = totalAmnt / people.innerText;
      Math.round(final);
      result.innerText = "$" + final.toFixed(2);
      return final;
    }
  };
};
