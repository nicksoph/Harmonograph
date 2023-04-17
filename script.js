// Initial settings
var svg = ""
const Points = [];
const timeControlsDiv = document.getElementById("timecontrols");
const svgContainer = document.getElementById("svg-container");
const Time = {
    start: 0, end: 1, steps: 1000
};
const keyPoints = [
    { order: 0, width: 1 },
    { order: 5, width: 3 },
    { order: 999, width: 1 },
];
const multi = 100;
const Pendulums = [
    { axis: 'x', amplitude: 100, frequency: 33.02, phaseShift: 1.575, damping: .5 },
    { axis: 'y', amplitude: 100, frequency: 33, phaseShift: 0, damping: .5 },
    { axis: 'x', amplitude: 100, frequency: 66, phaseShift: 0, damping: .5 },
    { axis: 'y', amplitude: 100, frequency: 66.01, phaseShift: 1.54, damping: .5 }
];
const settings = [
    { name: 'axis', type: 'radio', options: ['x', 'y'], default: 'x' },
    { name: 'amplitude', type: 'range', min: 0, max: 1000, step: 0.1, default: 100 },
    { name: 'frequency', type: 'range', min: 0, max: 1000, step: 0.1, default: 33 },
    { name: 'phaseShift', type: 'range', min: -Math.PI, max: Math.PI, step: 0.01, default: 1.574 },
    { name: 'damping', type: 'range', min: 0, max: 1, step: 0.001, default: 0.5 }
];

events()
createControls(); // makes controls for Pendulums
displayKeyPoints()
main() // is run on updates and run button

function setWidths() {
    setLineWidths(keyPoints, Points)
    //for (i = 0; i < 10; i++) { console.log(Points[i], Points.length) }
    draw(Points, svgContainer) // creates svg
}
function main() {
    makeData(Points) // creates x,y data (with extras)
    //   for (i = 0; i < 10; i++) { console.log(Points[i], Points.length) }
    smoothCurve(Points) // creates curve handle data

    chop(Points) // removes extra points made for curves
    draw(Points, svgContainer) // creates svg
};
function events() {
    document.getElementById("start").addEventListener("input", updateStart);
    document.getElementById("end").addEventListener("input", updateEnd);
    document.getElementById("steps").addEventListener("input", updateSteps);

    document.getElementById("addPendulum").addEventListener("click", () => {
        Pendulums.push({ ...Pendulums[0] });
        createControls();
    });
    document.getElementById("deletePendulum").addEventListener("click", () => {
        Pendulums.pop();
        createControls();
    });
    document.getElementById("run").addEventListener("click", () => {
        main()
    });
};
//add line thickness
function interpolate(a, b, t) {
    return a + (b - a) * t;
}
function setLineWidths(keyPoints, Points) {
    let keyPointOrder = 0;

    for (let i = 0; i < Points.length; i++) {
        const point = Points[i];
        let width;

        if (keyPointOrder < keyPoints.length && keyPoints[keyPointOrder].order === i) {
            width = keyPoints[keyPointOrder].width;
            keyPointOrder++;
        } else if (keyPointOrder > 0 && keyPointOrder < keyPoints.length) {
            const prevKeyPoint = keyPoints[keyPointOrder - 1];
            const nextKeyPoint = keyPoints[keyPointOrder];
            const t = (i - prevKeyPoint.order) / (nextKeyPoint.order - prevKeyPoint.order);
            width = interpolate(prevKeyPoint.width, nextKeyPoint.width, t);
        } else {
            width = keyPointOrder > 0 ? keyPoints[keyPointOrder - 1].width : null;
        }

        if (width !== null) {
            if (!point.hasOwnProperty('width')) {
                Object.defineProperty(point, 'width', {
                    writable: true,
                    enumerable: true,
                    configurable: true,
                    value: width
                });
            } else {
                point.width = width;
            }
        } else {
            console.error(`No width value computed for point at index ${i}.`);
        }
    }
}
function displayKeyPoints() {
    const container = document.getElementById("keyPointsContainer");
    container.innerHTML = "";

    keyPoints.forEach((keyPoint, index) => {
        const keyPointDiv = document.createElement("div");

        const indexLabel = document.createElement("label");
        indexLabel.innerText = `Index ${index + 1}:`;
        keyPointDiv.appendChild(indexLabel);

        const indexInput = document.createElement("input");
        indexInput.type = "number";
        indexInput.value = keyPoint.order;
        indexInput.style.width = "40px";
        indexInput.addEventListener("change", () => {
            keyPoints[index].order = parseInt(indexInput.value);
            keyPoints.sort((a, b) => a.order - b.order);
            // displayKeyPoints();
        });
        keyPointDiv.appendChild(indexInput);

        const widthLabel = document.createElement("label");
        widthLabel.innerText = `Width:`;
        keyPointDiv.appendChild(widthLabel);

        const widthInput = document.createElement("input");
        widthInput.type = "number";
        widthInput.value = keyPoint.width;
        widthInput.style.width = "50px";
        widthInput.addEventListener("change", () => {
            keyPoints[index].width = parseFloat(widthInput.value);
        });
        keyPointDiv.appendChild(widthInput);

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Remove";
        deleteButton.onclick = () => {
            keyPoints.splice(index, 1);
            displayKeyPoints();
        };
        keyPointDiv.appendChild(deleteButton);

        container.appendChild(keyPointDiv);
    });
}
function addKeyPoint() {
    const indexInput = document.getElementById("orderInput");
    const widthInput = document.getElementById("widthInput");

    const indexValue = parseInt(indexInput.value);
    const widthValue = parseFloat(widthInput.value);

    if (!isNaN(indexValue) && !isNaN(widthValue)) {
        // Ensure the first keypoint has an index of 0
        if (keyPoints.length === 0 && indexValue !== 0) {
            keyPoints.push({ index: 0, width: widthValue });
        }

        // Add the new keypoint
        keyPoints.push({ order: indexValue, width: widthValue });

        // Check and set width for the last keypoint if not already set
        const lastKeyPoint = keyPoints[keyPoints.length - 1];
        if (!('width' in lastKeyPoint)) {
            const previousKeyPoint = keyPoints[keyPoints.length - 2];
            lastKeyPoint.width = previousKeyPoint.width;
        }

        // Sort the keyPoints array
        keyPoints.sort((a, b) => a.order - b.order);

        displayKeyPoints();
    }
}
function updateKeyPointOrder() {
    const stepsInput = document.getElementById("steps");
    const stepsValue = parseInt(stepsInput.value);

    if (!isNaN(stepsValue) && keyPoints.length > 0) {
        // Calculate the scaling factor based on the old and new steps values
        const scalingFactor = stepsValue / oldStepsValue;

        // Update the order values proportionally
        for (let i = 0; i < keyPoints.length; i++) {
            keyPoints[i].order = Math.round(keyPoints[i].order * scalingFactor);
        }

        // Ensure the first keypoint has an order value of 0
        keyPoints[0].order = 0;

        // Ensure the last keypoint has an order value equal to the length of the Points array minus one
        keyPoints[keyPoints.length - 1].order = stepsValue - 1;


        // Update the display or any other processing needed
        displayKeyPoints();

        // Update the oldStepsValue for the next function call
        oldStepsValue = stepsValue;
    }
}
function updateTstep() {
    Time.ttstep = parseFloat(document.getElementById("tstep").value);
    // main;
}
function updateStart() {
    Time.start = parseInt(document.getElementById("start").value);
    //main);
}
function redraw() {
    makeData(Points) // creates x,y data (with extras)
    smoothCurve(Points) // creates curve handle data
    chop(Points) // removes extra points made for curves
    setLineWidths(keyPoints, Points)
    draw(Points, svgContainer) // creates svg
    // setViewBox(svg, svgContainer, Points) //sets window size - panzoom libray handles mov
}
function createControls() {
    const container = document.getElementById("pendCtrls");
    container.innerHTML = "";

    const settingsContainer = document.createElement("div");
    settingsContainer.classList.add("settings-container");

    Pendulums.forEach((pendulum, index) => {
        const pendulumDiv = document.createElement("div");
        pendulumDiv.innerHTML = `<bold>Pen. ${index + 1}</bold>`;

        settings.forEach((setting) => {
            if (setting.type === "radio") {
                const radioDiv = document.createElement("div");
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

                    });

                    label.appendChild(radio);
                    radioDiv.appendChild(label);
                });
                pendulumDiv.appendChild(radioDiv);
            } else {
                const container = document.createElement("div");
                container.classList.add("slider-container");

                // Add the headings only for the first pendulum
                if (index === 0) {
                    const label = document.createElement("label");
                    label.innerText = setting.name;
                    container.appendChild(label);
                }

                const input = document.createElement("input");
                input.type = "number";
                input.min = setting.min;
                input.max = setting.max;
                input.step = setting.step;
                input.value = pendulum[setting.name];
                input.inputmode = "numeric";
                input.pattern = "[0-9]*";
                input.classList.add("control-input");
                input.addEventListener("input", (e) => {
                    pendulum[setting.name] = parseFloat(e.target.value);

                    redraw();
                });

                container.appendChild(input);

                pendulumDiv.appendChild(container);
            }
        });

        settingsContainer.appendChild(pendulumDiv);
    });

    container.appendChild(settingsContainer);

};
function makeData(Points) {
    const step = (Time.end - Time.start) / Time.steps
    Points.length = 0
    for (i = 0; i < Time.steps + 3; i++) {
        var tim = ((i - 1) * step)
        var x = 0
        var y = 0
        Pendulums.forEach(pendulum => {
            var pos = getPos(tim, pendulum)
            if (pendulum.axis === "x") {
                x += pos
            } else {
                y += pos
            }
        })
        Points.push({ p1: { x: x * multi, y: y * multi } })
    }
    return Points
};
// calcs one time/pendulum
function getPos(tim, pendulum) {
    const { amplitude, frequency, phaseShift, damping } = pendulum;

    const position = amplitude * Math.exp(-damping * tim) * Math.sin(2 * Math.PI * frequency * tim + phaseShift);

    return position;
}
function smoothCurve(Points) {
    const tension = 6
    const result = {};
    for (let i = 1; i < Points.length - 2; i++) {
        const p0 = Points[i - 1];
        const p1 = Points[i];
        const p2 = Points[i + 1];
        const p3 = Points[i + 2];
        Points[i].cp1 = {};
        Points[i].cp2 = {};
        Points[i].cp1.x = p1.p1.x + ((p2.p1.x - p0.p1.x) / tension);
        Points[i].cp1.y = p1.p1.y + ((p2.p1.y - p0.p1.y) / tension);
        Points[i].cp2.x = p2.p1.x - ((p3.p1.x - p1.p1.x) / tension);
        Points[i].cp2.y = p2.p1.y - ((p3.p1.y - p1.p1.y) / tension);
        Points[i].p2 = { x: Points[i + 1].p1.x, y: Points[i + 1].p1.y };
    }
    return Points
};
function chop(Points) {
    Points.shift();
    Points.pop();
    Points.pop();
    return Points
};
function draw(Points, svgContainer) {
    svgContainer.innerHTML = ""
    svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");

    svgContainer.appendChild(svg);
    Points.forEach((line) => {
        const { p1, cp1, cp2, p2, width = 1 } = line || {};
        // const { p1, cp1, cp2, p2, { width = 1 } = width | 1 } = line;
        console.log(width)
        // if (!width) { break }
        //console.log(p1, cp1, cp2, p2, width)
        const { x: p1x, y: p1y } = p1;
        const { x: cp1x, y: cp1y } = cp1;
        const { x: cp2x, y: cp2y } = cp2;
        const { x: p2x, y: p2y } = p2;
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        const d = `M ${p1x} ${p1y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2x} ${p2y}`;
        path.setAttribute("d", d);
        path.setAttribute("stroke", "Red");
        console.log(width)
        if (width) { console.log("hi") }
        //{ path.setAttribute("stroke-width", width.toString()) };

        path.setAttribute("fill", "none");
        svg.appendChild(path);
    });
    setViewBox(svg, svgContainer, Points);
    const panZoomInstance = panzoom(svg, {
        zoomEnabled: true,
        panEnabled: true,
        controlIconsEnabled: true,
        fit: true,
        center: true,
        minZoom: 0.015,
        maxZoom: 1000,
        initialZoom: 0.95,
        beforePan: function () {
            // Disable animation during panning to improve performance
            panZoomInstance.disablePanAnimation();
        },
        onPan: function () {
            // Re-enable animation after panning is complete
            panZoomInstance.enablePanAnimation();
        },
        onZoom: function () {
            // Update the viewBox after zooming
            const { x, y } = panZoomInstance.getPan();
            const zoomLevel = panZoomInstance.getZoom();
            const viewBox = svg.getAttribute("viewBox").split(" ");
            const viewBoxWidth = parseFloat(viewBox[2]);
            const viewBoxHeight = parseFloat(viewBox[3]);
        },
    });
    return (svg)
};
function setViewBox(svg, svgContainer, Points) {
    const margin = 10;
    const [minX, maxX, minY, maxY] = Points.reduce(
        (acc, point) => [
            Math.min(acc[0], point.p1.x),
            Math.max(acc[1], point.p1.x),
            Math.min(acc[2], point.p1.y),
            Math.max(acc[3], point.p1.y),
        ],
        [Infinity, -Infinity, Infinity, -Infinity]
    );
    const contentWidth = maxX - minX * 2 //+ 2 * margin;
    const contentHeight = maxY - minY * 2//+ 2 * margin;

    const containerWidth = svgContainer.clientWidth;
    const containerHeight = svgContainer.clientHeight;
    const containerAspectRatio = containerWidth / containerHeight;

    const contentAspectRatio = contentWidth / contentHeight;
    let viewBoxWidth, viewBoxHeight;

    if (containerAspectRatio > contentAspectRatio) {
        viewBoxHeight = contentHeight;
        viewBoxWidth = contentHeight * containerAspectRatio;
    } else {
        viewBoxWidth = contentWidth;
        viewBoxHeight = contentWidth / containerAspectRatio;
    }
    console.log(minX, minY, maxX, maxY, margin, viewBoxHeight, viewBoxWidth)
    svg.setAttribute("viewBox", `${minX - margin} ${minY - margin} ${parseFloat(viewBoxWidth)} ${parseFloat(viewBoxHeight)}`);

};
// function setViewBox(svg, svgContainer, Points) {
//     if (!svg || !svgContainer || !Points) { console.log("error", svg, svgContainer, Points) }
//     const margin = 10;

//     const [minX, maxX, minY, maxY] = Points.reduce(
//         (acc, point) => [
//             Math.min(acc[0], point.p1.x),
//             Math.max(acc[1], point.p1.x),
//             Math.min(acc[2], point.p1.y),
//             Math.max(acc[3], point.p1.y),
//         ],
//         [Infinity, -Infinity, Infinity, -Infinity]
//     );
//     const contentWidth = maxX - minX + 2 * margin;
//     const contentHeight = maxY - minY + 2 * margin;

//     const containerWidth = svgContainer.clientWidth;
//     const containerHeight = svgContainer.clientHeight;
//     const containerAspectRatio = containerWidth / containerHeight;

//     const contentAspectRatio = contentWidth / contentHeight;
//     let viewBoxWidth, viewBoxHeight;

//     if (containerAspectRatio > contentAspectRatio) {
//         viewBoxHeight = contentHeight;
//         viewBoxWidth = contentHeight * containerAspectRatio;
//     } else {
//         viewBoxWidth = contentWidth;
//         viewBoxHeight = contentWidth / containerAspectRatio;
//     }
//     svg.setAttribute("viewBox", `${minX - margin} ${minY - margin} ${parseFloat(viewBoxWidth)} ${parseFloat(viewBoxHeight)}`);
//     //console.log("viewBox", `${minX - margin}`, `${minY - margin}`, `${parseFloat(viewBoxWidth)}`, `${parseFloat(viewBoxHeight)}`)
// };
function saveData() {
    const data = {
        pendulums: Pendulums,
        time: Time,
        keypoints: keyPoints
    };
    const filename = `FRED${new Date().getTime().toString().substr(-4)}.ham`;
    const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();

    URL.revokeObjectURL(url);
}
function loadData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.onchange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            const data = JSON.parse(event.target.result);
            const pendulums = data.pendulums;
            const time = data.time;
            const keypoints = data.keypoints;
            // Set the values of Pendulums and Time to the loaded values
            Object.assign(Pendulums, pendulums);
            Object.assign(Time, time);
            Object.assign(keyPoints, keypoints)
        };
        reader.readAsText(file);
    };
    input.click();
}
function rotatePoint(x, y, cx, cy, s, t) {
    const pRotation = 2 * Math.PI * s * t;
    const cosTheta = Math.cos(pRotation);
    const sinTheta = Math.sin(pRotation);
    const translatedPoint = {
        x: x - cx,
        y: y - cy
    };
    const rotatedPoint = {
        x: translatedPoint.x * cosTheta - translatedPoint.y * sinTheta,
        y: translatedPoint.x * sinTheta + translatedPoint.y * cosTheta
    };
    const rPoint = {
        x: rotatedPoint.x + cx,
        y: rotatedPoint.y + cy
    };
    return rPoint
}
function debounceAndPreventRapidCalls(func, wait, immediate) {
    let lastRun = 0;
    let debounceTimeout;

    return function () {
        const context = this;
        const args = arguments;

        const later = function () {
            debounceTimeout = null;
            if (!immediate) func.apply(context, args);
        };

        const now = Date.now();
        const timeSinceLastRun = now - lastRun;

        if (timeSinceLastRun >= wait) {
            clearTimeout(debounceTimeout);
            debounceTimeout = setTimeout(later, wait);
            if (immediate && !debounceTimeout) func.apply(context, args);

            lastRun = now;
        }
    };
}
function updateStart(event) {
    const value = parseFloat(event.target.value);
    if (!isNaN(value)) {
        Time.start = value;
    }
    console.log("Updated Start:", Time.start);
}
function updateEnd(event) {
    const value = parseFloat(event.target.value);
    if (!isNaN(value)) {
        Time.end = value;
    }
    console.log("Updated End:", Time.end);
}
function updateSteps(event) {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 0) {
        Time.steps = value;
    }
    console.log("Updated Steps:", Time.steps);
}

// const debouncedMain = debounceAndPreventRapidCalls(main, 3000, true);
// document.querySelector("#yourInput").addEventListener("input", debouncedMain);
// function update() {
//     updateCenter();
//     updateRspeed
// }
// // Function to update the center value in rData
// function updateCenter() {
//     const centerX = parseFloat(document.getElementById("center-x-input").value);
//     const centerY = parseFloat(document.getElementById("center-y-input").value);
//     rData.center = { x: centerX, y: centerY };
// };
// // Function to update the angle value in rData
// function updateRspeed() {
//     const rspeed = parseFloat(document.getElementById("rspeed-input").value);
//     rData.rspeed = rspeed;
// }
// // Function to toggle the rotating value in rData
// function toggleRotation() {
//     rData.rotating = !rData.rotating;
// }

// function rotate(Points, rData) {
//     for (let i = 0; i < Points.length; i++) {
//         // for (let i = Points.length; i = 0; i--) {
//         const rpoint = rotatePoint(
//             Points[i].p1.x,
//             Points[i].p1.y,
//             rData.center.x,
//             rData.center.y,
//             rData.rspeed,
//             i * 99
//         );
//         console.log("b3", Points[i].p1.x)
//         Points[i].p1.x = rpoint.x;
//         Points[i].p1.y = rpoint.y;
//         console.log("aft", Points[i].p1.x)
//     }
// }

// ***** Functions ******
// function displayPendulumData() {
//     const homeDiv = document.getElementById("home");
//     homeDiv.innerHTML = "<h3>Pendulum Data:</h3>";

//     const pre = document.createElement("pre");
//     pre.textContent = JSON.stringify(Pendulums, null, 2);
//     homeDiv.appendChild(pre);
// };
