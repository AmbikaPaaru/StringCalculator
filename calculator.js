function add(value) {
  if (value === "") {
    return 0;
  }
  let delimiter = /,|\n/;
  if (value.startsWith("//")) {
    const splittedValue = value.split("\n", 2);
    if (splittedValue?.length < 2) {
      throw new Error("Delimiter and numbers must be provided.");
    }
    delimiter = new RegExp(splittedValue[0].substring(2));
    value = splittedValue[1];
  }

  const numbersArray = value
    .split(delimiter)
    .map((num) => {
      const trimmedNum = num.trim();
      return trimmedNum === "" ? null : Number(trimmedNum);
    })
    .filter((num) => num !== null && !isNaN(num));

  const negatives = numbersArray.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }
  return numbersArray.reduce((sum, num) => sum + num, 0);
}

function calculator() {
  const inputCount = document.getElementById("numbersInput").value.trim();
  try {
    const finalResult = add(inputCount);
    document.getElementById("result").textContent = finalResult;
  } catch (err) {
    document.getElementById("result").textContent = err.message;
  }
}
