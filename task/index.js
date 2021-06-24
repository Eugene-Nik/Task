const element = document.Number;

function myFunction() {
  console.log(document.getElementById("check").value);
  if (document.getElementById("check").value % 2 == 0) {
    console.log("Сработало четное");
    document.getElementById("conv").placeholder = "H'0";
  } else {
    document.getElementById("conv").placeholder = "H'8";
  }
}
