function add(value) {
  return value;
}

function calculator() {
  const inputCount = document.getElementById("numbersInput").value;
  try {
    const finalResult = add(inputCount);
    document.getElementById("result").textContent = finalResult;
  } catch (err) {
    document.getElementById("result").textContent = err.message;
  }
}
