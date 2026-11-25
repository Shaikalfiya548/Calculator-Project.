
const display = document.getElementById("display");

function appendValue(value) {
    if (display.value === "Error") {
        display.value = "";
    }
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteNumber() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        if (display.value.trim() === "") {
            return;
        }

        // Allow only calculator characters
        if (!/^[0-9+\-*/%.() ]+$/.test(display.value)) {
            display.value = "Error";
            return;
        }

        const result = Function(
            '"use strict"; return (' + display.value + ')'
        )();

        if (!Number.isFinite(result)) {
            display.value = "Error";
        } else {
            display.value = Number(result.toFixed(10)).toString();
        }

    } catch (error) {
        display.value = "Error";
    }
}
