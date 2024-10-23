function add(value) {
  if (value === "") {
    return 0;
  }
  let delimiter = /,|\n/;
  if (!value.includes(",") || !value.includes("/n")) {
    return value.split("").join(",");
  }
  const numbersArray = value.split(delimiter).map(Number);
  const negatives = numbersArray.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }
  return numbersArray.reduce((sum, num) => sum + num, 0);
}

function calculator() {
  const inputCount = document.getElementById("numbersInput").value;
  try {
    const finalResult = add(inputCount);
    document.getElementById("result").textContent = finalResult;
    console.log(finalResult);
  } catch (err) {
    document.getElementById("result").textContent = err.message;
  }
}
