
const Pendulums = [
    { axis: 'x', amplitude: 1, frequency: 3.02, phaseShift: 0, damping: 1 },
    { axis: 'y', amplitude: 1, frequency: 3, phaseShift: 0, damping: 1 },
    { axis: 'x', amplitude: 1, frequency: 5, phaseShift: 0, damping: 1 },
    { axis: 'y', amplitude: 1, frequency: 5.01, phaseShift: 1, damping: 1 }
];

const settings = [
    { name: 'axis', type: 'radio', options: ['x', 'y'], default: 'x' },
    { name: 'amplitude', type: 'range', min: 0, max: 1000, step: 0.01, default: Pendulums[0].amplitude },
    { name: 'frequency', type: 'range', min: 0, max: 1000, step: 0.01, default: Pendulums[0].frequency },
    { name: 'phaseShift', type: 'range', min: -Math.PI, max: Math.PI, step: 0.01, default: Pendulums[0].phaseShift },
    { name: 'damping', type: 'range', min: 0, max: 1, step: 0.001, default: Pendulums[0].damping }
];

function displayPendulumData() {
    const homeDiv = document.getElementById("home");
    homeDiv.innerHTML = "<h3>Pendulum Data:</h3>";

    const pre = document.createElement("pre");
    pre.textContent = JSON.stringify(Pendulums, null, 2);
    homeDiv.appendChild(pre);
};

function createControls() {
    const container = document.getElementById("pendCtrls");
    container.innerHTML = "";

    Pendulums.forEach((pendulum, index) => {
        const pendulumDiv = document.createElement("div");
        pendulumDiv.innerHTML = `<h3>Pendulum ${index + 1}</h3>`;

        settings.forEach((setting) => {
            if (setting.type === "radio") {
                const radioDiv = document.createElement("div"); // Add this line
                setting.options.forEach((option) => {
                    const label = document.createElement("label");
                    label.innerText = option;

                    const radio = document.createElement("input");
                    radio.type = setting.type;
                    radio.name = `${setting.name}-${index}`;
                    radio.value = option;
                    radio.checked = option === pendulum[setting.name];
                    radio.addEventListener("change", () => {
                        pendulum[setting.name] = option;
                        displayPendulumData();
                    });

                    label.appendChild(radio);
                    radioDiv.appendChild(label); // Modify this line
                });
                pendulumDiv.appendChild(radioDiv); // Modify this line
            } else {
                const label = document.createElement("label");
                label.innerText = setting.name;

                const input = document.createElement("input");
                input.type = setting.type;
                input.min = setting.min;
                input.max = setting.max;
                input.step = setting.step;
                input.value = pendulum[setting.name];
                input.addEventListener("input", (e) => {
                    pendulum[setting.name] = parseFloat(e.target.value);
                    displayPendulumData();
                });

                label.appendChild(input);
                pendulumDiv.appendChild(label); // Modify this line
            }
            const lineBreak = document.createElement("br"); // Add this line
            pendulumDiv.appendChild(lineBreak); // Add this line
        });

        container.appendChild(pendulumDiv);
    });

    displayPendulumData();
};

document.getElementById("addPendulum").addEventListener("click", () => {
    Pendulums.push({ ...Pendulums[0] });
    createControls();
});

document.getElementById("deletePendulum").addEventListener("click", () => {
    Pendulums.pop();
    createControls();
});

createControls();
