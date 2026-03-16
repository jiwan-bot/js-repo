function calculateGrade() {
    let obtained = document.getElementById("obtained").value.trim();
    let max = document.getElementById("max").value.trim();
    let box = document.getElementById("infoBox");

    if (obtained === "" || max === "") {
        box.innerHTML = "<h3>⚠ Please enter both fields!</h3>";
        return;
    }

    if (isNaN(obtained) || isNaN(max)) {
        box.innerHTML = "<h3>⚠ Enter valid numbers only!</h3>";
        return;
    }

    obtained = parseFloat(obtained);
    max = parseFloat(max);

    if (max <= 0 || obtained < 0 || obtained > max) {
        box.innerHTML = "<h3>⚠ Invalid marks entered!</h3>";
        return;
    }

    let percentage = (obtained / max) * 100;
    let grade = "";

    if (percentage >= 90) grade = "A+";
    else if (percentage >= 80) grade = "A";
    else if (percentage >= 70) grade = "B+";
    else if (percentage >= 60) grade = "B";
    else if (percentage >= 50) grade = "C";
    else if (percentage >= 40) grade = "D";
    else grade = "Fail";

    box.innerHTML = `
        <h3>Result</h3>
        <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
        <p><strong>Grade:</strong> ${grade}</p>
    `;
}

function resetForm() {
    document.getElementById("obtained").value = "";
    document.getElementById("max").value = "";

    let box = document.getElementById("infoBox");

    box.innerHTML = `
        <h3>Grading Scale</h3>
        <p>A+: 90% – 100%</p>
        <p>A: 80% – 89%</p>
        <p>B+: 70% – 79%</p>
        <p>B: 60% – 69%</p>
        <p>C: 50% – 59%</p>
        <p>D: 40% – 49%</p>
        <p>Fail: Below 40%</p>
    `;
}
