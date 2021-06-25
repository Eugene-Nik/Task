const element = document.Number;

function myFunction(check) {
  console.log(document.getElementById("check").value);
  if (check % 2 == 0) {
    console.log("Сработало четное");
    document.getElementById("conv").placeholder = "H'0";
  } else {
    document.getElementById("conv").placeholder = "H'8";
  }
}
