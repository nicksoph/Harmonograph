// Initial settings ****************************************************
// Sets up a viable set of data and initalises variables and permanent event handlers

let svg = "" // the image
const multi = 10;  // multiplier to keep data in a sensible range - temp
const Points = []; // the points and their data
const timeControlsDiv = document.getElementById("timecontrols");
const svgDiv = document.getElementById("svg-container");
const svgViewport = document.getElementById("svg-viewport")
const goLoopButton = document.getElementById("goLoop");
const coloursDiv = document.getElementById("colours");
const colorInput = document.getElementById('color');
const orderInput = document.getElementById('order');
const addColourButton = document.getElementById('addColor');
const Time = { // the start/stop/steps data
    start: 0, end: 1, steps: 1000, oldStepsValue: 1000
};
let colourData = [ //the chosen fixed points and their colours
    { "color": "#000000", "order": 0 },
    { "color": "#9056d7", "order": 10 },
    { "color": "#283281", "order": 100 },
    { "color": "#9056d7", "order": 99 },
    { "color": "#283281", "order": 100 },
    { "color": "#9056d7", "order": 200 },
    { "color": "#281781", "order": 500 },
    { "color": "#9056d7", "order": 600 },
    { "color": "#282881", "order": 1000 }
]
let widthPoints = [  // the chosen fixed points and their widths
    { order: 0, width: 1 },
    { order: 49, width: 1 },
    { order: 50, width: 55 },
    { order: 51, width: 1 },
    { order: 100, width: 1 },
];
const Pendulums = [ // the pendulums settings
    { axis: 'x', amplitude: 100, frequency: 33.02, phaseShift: 1.575, damping: .5 },
    { axis: 'y', amplitude: 100, frequency: 33, phaseShift: 0, damping: .5 },
    { axis: 'x', amplitude: 100, frequency: 66, phaseShift: 0, damping: .5 },
    { axis: 'y', amplitude: 100, frequency: 66.01, phaseShift: 1.54, damping: .5 }
];
const Psettings = [  // the settings of the pendulum controls
    { name: 'axis', type: 'radio', options: ['x', 'y'], default: 'x' },
    { name: 'amplitude', type: 'range', min: 0, max: 1000, step: 10, default: 100 },
    { name: 'frequency', type: 'range', min: 0, max: 1000, step: 0.01, default: 33 },
    { name: 'phaseShift', type: 'range', min: -Math.PI, max: Math.PI, step: 0.01, default: 1.574 },
    { name: 'damping', type: 'range', min: 0, max: 1, step: 0.001, default: 0.5 }
];

events()
createControls(); // makes controls for Pendulums
showWidthPoints()
showColourPoints()

// ***********************************************
// This is run when some elements are updated to 
//recreate the svg with the current settings
main() // is run on updates and run button
// ***********************************************
function main() {  // called by the run button and program to do main functions
    makeData(Points) // creates x,y data (with extras)
    showWidthPoints()
    showColourPoints()
    smoothCurve(Points) // creates curve handle data
    chop(Points) // removes extra points made for curves
    //setLoopWidths();
    // markers(Points)
    setLineColours(colourData, Points)
    if (loopCheckbox.checked && !isNaN(parseInt(loopLengthInput.value, 10)) && loopLengthInput.value > 0) {
        //  updateKeyPointsWithLoop(loopLengthInput.value);
        setLoopWidths(widthPoints, Points)
    } else if (markersCheckbox.checked) {
        markers(Points, loopLengthInput)
    } else {
        setLineWidths(widthPoints, Points) // uses fixed points to create gradients between their values.
    }
    //showColourPoints()
    // displayColourPoints()
    draw(Points, svgDiv) // creates svg
};
//then the program is lead by events firing.from gui
function events() {
    //  document.getElementById("spinner").addEventListener("input", slideTime);
    start.addEventListener("input", updateTime);
    end.addEventListener("input", updateTime);
    steps.addEventListener("input", updateSteps);
    addPendulum.addEventListener("click", () => {
        Pendulums.push({ ...Pendulums[0] });
        createControls();
    });
    deletePendulum.addEventListener("click", () => {
        Pendulums.pop();
        createControls();
    });
    run.addEventListener("click", main);
    savesvg.addEventListener("click", saveSvg);
    goLoopButton.addEventListener("click", goLoop);
    divBtnControl()
    addColourButton.addEventListener('click', () => {
        const color = colorInput.value;
        const order = parseInt(orderInput.value);

        if (!isNaN(order) && order >= 0 && order < Points.length) {
            colourData.push({ color, order });
            colourData.sort((a, b) => a.order - b.order);
            main();
        }
    });
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
function interpolate(a, b, t) {//used to set line widths that are not explictly defined
    return a + (b - a) * t;
}
function draw(Points, svgContainer) {
    svgContainer.innerHTML = ""
    svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    Points.forEach((line) => {
        const { p1, cp1, cp2, p2, width, colour } = line;
        console.log(line)
        const { x: p1x, y: p1y } = p1;
        const { x: cp1x, y: cp1y } = cp1;
        const { x: cp2x, y: cp2y } = cp2;
        const { x: p2x, y: p2y } = p2;
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        const d = `M ${p1x} ${p1y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2x} ${p2y}`;
        path.setAttribute("d", d);
        console.log(colour)
        path.setAttribute("stroke", colour);
        if (!width) { console.log("MISSING WIDTH!") }
        //{ 
        path.setAttribute("stroke-width", width.toString())
        path.setAttribute("fill", "none");
        svg.appendChild(path);
    });
    svgContainer.appendChild(svg);
    const paddedvb = getViewBox(Points, 100)
    svg.setAttribute("viewBox", paddedvb);
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
function saveSvg(svg) {// makes svg file and saves with random name
    // Serialize the SVG content to a string
    const svgString = new XMLSerializer().serializeToString(svg);
    // Add the XML declaration to the beginning of the string
    const svgFileContent = `<?xml version="1.0" encoding="UTF-8"?>\n${svgString}`;
    // Create a Blob object with the SVG content
    const blob = new Blob([svgFileContent], { type: "image/svg+xml" });
    // Create a download link and click it to trigger the download
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "my_svg_file.svg";
    link.click();
    // Revoke the object URL to free memory
    URL.revokeObjectURL(link.href);
};
function saveData() {  // saves Pendulum, Time and width keypoint info
    const data = {
        pendulums: Pendulums,
        time: Time,
        widthpoints: widthPoints,
        colourpoints: colourData
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
function loadData() {  // loads Pendulum, Time and width keypoint info
    const input = document.createElement('input');
    input.type = 'file';
    input.onchange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            const data = JSON.parse(event.target.result);
            const pendulums = data.pendulums;
            const time = data.time;
            const widthpoints = data.widthpoints;
            const colourpoints = data.colourpoints;

            // Set the values of Pendulums and Time to the loaded values
            Object.assign(Pendulums, pendulums);
            Object.assign(Time, time);
            Object.assign(widthPoints, widthpoints)
            Object.assign(colourData, colourpoints)
        };
        reader.readAsText(file);
    };
    input.click();
    showWidthPoints;
    showColorPoints;
    console.log("setc")

}
function getViewBox(Points, padding) {
    const container = svgViewport
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const { minX, minY, maxX, maxY } = Points.reduce((acc, { p1: { x, y } }) => {
        acc.minX = Math.min(acc.minX, x);
        acc.minY = Math.min(acc.minY, y);
        acc.maxX = Math.max(acc.maxX, x);
        acc.maxY = Math.max(acc.maxY, y);
        return acc;
    }, { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity });
    const paddedMinX = minX - padding;
    const paddedMinY = minY - padding;
    const paddedMaxX = maxX + padding;
    const paddedMaxY = maxY + padding;
    const viewBoxWidth = paddedMaxX - paddedMinX;
    const viewBoxHeight = paddedMaxY - paddedMinY;
    const aspectRatio = viewBoxWidth / viewBoxHeight;
    let newWidth, newHeight;
    if (containerWidth / containerHeight > aspectRatio) {
        newWidth = containerHeight * aspectRatio;
        newHeight = containerHeight;
    } else {
        newWidth = containerWidth;
        newHeight = containerWidth / aspectRatio;
    }
    return `${paddedMinX} ${paddedMinY} ${viewBoxWidth} ${viewBoxHeight}`;
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

// Time and step
function slideTime() {
    const spinnerValue = parseFloat(document.getElementById("spinner").value);
    const startInput = document.getElementById("start");
    const endInput = document.getElementById("end");

    const newStart = parseFloat(startInput.value) + spinnerValue;
    const newEnd = parseFloat(endInput.value) + spinnerValue;

    startInput.value = newStart
    endInput.value = newEnd
    updateTime(); // Update the Time object with new values
}
function updateTime() { // gets value from input
    Time.start = parseFloat(document.getElementById("start").value);
    Time.end = parseFloat(document.getElementById("end").value);
    //main);
}
function updateSteps(event) {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 0) {
        Time.steps = value;
    }
    updateWidthPointOrder();
}
// time and step


// Pendulum Stuff
function createControls() {
    const container = document.getElementById("pendCtrls");
    container.innerHTML = "";

    const settingsContainer = document.createElement("div");
    settingsContainer.id = "settingscontainer";

    Pendulums.forEach((pendulum, index) => {
        const pendulumDiv = document.createElement("div");
        pendulumDiv.innerHTML = `<bold>Pen. ${index + 1}</bold>`;

        Psettings.forEach((setting) => {
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
                        main()

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

                    main();
                });

                container.appendChild(input);

                pendulumDiv.appendChild(container);
            }
        });

        settingsContainer.appendChild(pendulumDiv);
    });

    container.appendChild(settingsContainer);

};
function getPos(tim, pendulum) {//gets position for a single pendulum at a single time
    const { amplitude, frequency, phaseShift, damping } = pendulum;
    const position = amplitude * Math.exp(-damping * tim) * Math.sin(2 * Math.PI * frequency * tim + phaseShift);
    return position;
}

//Width Stuff
function markers(Points, loopLengthInput) {
    const loopLength = loopLengthInput.value;
    let wdth = 0;

    for (let i = 0; i < Points.length; i++) {
        wdth = i % loopLength === 0 ? 25 : 1;

        const point = Points[i];
        point.width = wdth;
    }
}
function showWidthPoints() {
    const container = document.getElementById("widthPointsContainer");
    const loopSettings = document.getElementById("loopSettingsDiv");
    loopCheckbox.addEventListener("change", () => {
    });
    markersCheckbox.addEventListener("change", () => {
    });
    // key point controls
    loopSettingsDiv.innerHTML = "";
    for (let order = 0; order < widthPoints.length; order++) {
        const widthPoint = widthPoints[order];
        const widthPointDiv = document.createElement("div");
        const orderLabel = document.createElement("label");
        orderLabel.innerText = `Order ${order}:`;
        widthPointDiv.appendChild(orderLabel);
        const orderInput = document.createElement("input");
        orderInput.type = "number";
        orderInput.value = widthPoint.order;
        orderInput.style.width = "40px";
        orderInput.addEventListener("change", () => {
            widthPoints[order].order = parseInt(orderInput.value);
            widthPoints.sort((a, b) => a.order - b.order);
            // displayWidthPoints();
        });
        widthPointDiv.appendChild(orderInput);
        const widthLabel = document.createElement("label");
        widthLabel.innerText = `Width:`;
        widthPointDiv.appendChild(widthLabel);
        const widthInput = document.createElement("input");
        widthInput.type = "number";
        widthInput.value = widthPoint.width;
        widthInput.style.width = "40px";
        widthInput.addEventListener("change", () => {
            widthPoints[order].width = parseFloat(widthInput.value);
        });
        widthPointDiv.appendChild(widthInput);

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Remove";
        deleteButton.onclick = () => {
            widthPoints.splice(order, 1);
            showWidthPoints();
        };
        widthPointDiv.appendChild(deleteButton);
        loopSettingsDiv.appendChild(widthPointDiv);
    }
}
function setLineWidths(keyPoints, Points) {//add line thickness
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
function setLoopWidths(keyPoints, Points) {
    const loopLength = parseInt(loopLengthInput.value, 10);
    // Iterate through each point in the points array
    for (let n = 0; n < Points.length; n++) {
        const currentPoint = Points[n];
        let i = n % loopLength

        // Find the closest key points on either side of the current point
        const prevKeyPoint = keyPoints.slice(0, i + 1).reverse().find(kp => kp.order <= i);
        const nextKeyPoint = keyPoints.find(kp => kp.order > i);

        // Initialize the width for the current point
        let width;

        // If both the previous and next key points exist
        if (prevKeyPoint && nextKeyPoint) {
            // Calculate the interpolation factor (t)
            const t = (i - prevKeyPoint.order) / (nextKeyPoint.order - prevKeyPoint.order);

            // Interpolate the width between the previous and next key points
            width = prevKeyPoint.width + t * (nextKeyPoint.width - prevKeyPoint.width);
        } else if (prevKeyPoint) { // If only the previous key point exists
            width = prevKeyPoint.width;
        } else if (nextKeyPoint) { // If only the next key point exists
            width = nextKeyPoint.width;
        } else { // If neither the previous nor the next key point exists
            console.error(`No key points found for point at index ${i}.`);
            continue;
        }

        // Set the width property for the current point
        currentPoint.width = width;
    }
}
function addWidthPoint() {// add set width marker
    const indexInput = document.getElementById("orderInput");
    const widthInput = document.getElementById("widthInput");
    const indexValue = parseInt(indexInput.value);
    const widthValue = parseFloat(widthInput.value);
    if (!isNaN(indexValue) && !isNaN(widthValue)) {
        // Ensure the first keypoint has an index of 0
        if (widthPoints.length === 0 && indexValue !== 0) {
            widthPoints.push({ index: 0, width: widthValue });
        }
        // Add the new keypoint
        widthPoints.push({ order: indexValue, width: widthValue });
        // Check and set width for the last keypoint if not already set
        const lastKeyPoint = widthPoints[widthPoints.length - 1];
        if (!('width' in lastKeyPoint)) {
            const previousKeyPoint = widthPoints[widthPoints.length - 2];
            lastKeyPoint.width = previousKeyPoint.width;
        }
        // Sort the keyPoints array
        widthPoints.sort((a, b) => a.order - b.order);
        showWidthPoints();
    }
}
function updateWidthPointOrder() {// ensures width points follow rules
    const stepsInput = document.getElementById("steps");
    const stepsValue = parseInt(stepsInput.value);
    if (!isNaN(stepsValue) && widthPoints.length > 0) {
        // Calculate the scaling factor based on the old and new steps values
        const scalingFactor = stepsValue / Time.oldStepsValue;
        // Update the order values proportionally
        for (let i = 0; i < widthPoints.length; i++) {
            widthPoints[i].order = Math.round(widthPoints[i].order * scalingFactor);
        }
        // Ensure the first keypoint has an order value of 0
        widthPoints[0].order = 0;
        // Ensure the last keypoint has an order value equal to the length of the Points array minus one
        widthPoints[widthPoints.length - 1].order = stepsValue - 1;
        // Update the display or any other processing needed
        showWidthPoints();
        // Update the oldStepsValue for the next function call
        Time.oldStepsValue = stepsValue;
    }
}
function updateWidthPointsWithLoop(loopLength) {
    // Remove all items in the array with a higher or equal order value
    widthPoints = widthPoints.filter(widthPoint => widthPoint.order <= loopLength - 1);
    const newWidthPoint = {
        order: loopLength,
        width: widthPoints[0].width // Set the width of the new key point to the width of the 0 order key point
    };
    widthPoints.push(newWidthPoint);
    showWidthPoints(); // Refresh the HTML after updating the keyPoints array
}

// Colour stuff
function setLineColours(colourPoints, Points) {//add line colour
    let colourPointOrder = 0;
    for (let i = 0; i < Points.length; i++) {
        const point = Points[i];
        let colour;

        if (colourPointOrder < colourPoints.length && colourPoints[colourPointOrder].order === i) {
            colour = colourPoints[colourPointOrder].colour;
            colourPointOrder++;
        } else if (colourPointOrder > 0 && colourPointOrder < colourPoints.length) {
            const prevColourPoint = colourPoints[colourPointOrder - 1];
            const nextColourPoint = colourPoints[colourPointOrder];
            const t = (i - prevColourPoint.order) / (nextColourPoint.order - prevColourPoint.order);
            colour = getColorAtOrder(i);
        } else {
            colour = colourPointOrder > 0 ? colourPoints[colourPointOrder - 1].colour : null;
        }
        console.log(point)
        if (colour !== null) {
            if (!point.hasOwnProperty('colour')) {
                Object.defineProperty(point, 'colour', {
                    writable: true,
                    enumerable: true,
                    configurable: true,
                    value: colour
                });
            } else {
                point.colour = colour;
                console.log("2", point)
            }
        } else {
            console.error(`No colour value computed for point at index ${i}.`);
        }
    }
}
function showColourPoints() {
    const colourSettingsDiv = document.getElementById("colourSettingsDiv");
    colourSettingsDiv.innerHTML = "";

    for (let order = 0; order < colourData.length; order++) {
        const colourPoint = colourData[order];
        const colourPointDiv = document.createElement("div");
        colourPointDiv.className = "colour-point";

        const orderLabel = document.createElement("label");
        orderLabel.innerText = `Order ${order}:`;
        colourPointDiv.appendChild(orderLabel);

        const orderInput = document.createElement("input");
        orderInput.type = "number";
        orderInput.value = colourPoint.order;
        orderInput.style.width = "40px";
        orderInput.addEventListener("change", () => {
            colourData[order].order = parseInt(orderInput.value);
            colourData.sort((a, b) => a.order - b.order);
            showColourPoints();
        });
        colourPointDiv.appendChild(orderInput);

        const colorContainer = document.createElement("div");
        colorContainer.className = "inline-block";
        colourPointDiv.appendChild(colorContainer);

        const colourLabel = document.createElement("label");
        colourLabel.innerText = `Color:`;
        colourLabel.className = "inline-block";
        colorContainer.appendChild(colourLabel);

        const colorPickerDiv = document.createElement("div");
        colorPickerDiv.style.backgroundColor = colourPoint.color;
        colorPickerDiv.style.width = "40px";
        colorPickerDiv.style.height = "20px";
        colorPickerDiv.style.cursor = "pointer";
        colorPickerDiv.className = "inline-block color-picker";
        colorContainer.appendChild(colorPickerDiv);

        const colourInput = document.createElement("input");
        colourInput.type = "color";
        colourInput.value = colourPoint.color;
        colourInput.style.display = "none";

        colourInput.addEventListener("change", () => {
            colourData[order].color = colourInput.value;
            colorPickerDiv.style.backgroundColor = colourInput.value;
            updateColors();
        });

        colorContainer.appendChild(colourInput);

        colorPickerDiv.addEventListener("click", () => {
            colourInput.click();
        });

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Remove";
        deleteButton.onclick = () => {
            colourData.splice(order, 1);
            showColourPoints();
        };
        colourPointDiv.appendChild(deleteButton);
        colourSettingsDiv.appendChild(colourPointDiv);
    }
}
function findColorAtOrder(order) {
    if (colourData.length === 0) {
        return null;
    }

    const prevColor = colourData.filter(c => c.order <= order).pop();
    const nextColor = colourData.find(c => c.order > order);

    if (!prevColor || !nextColor) {
        return prevColor ? prevColor.color : null;
    }

    const color1 = hexToRgb(prevColor.color);
    const color2 = hexToRgb(nextColor.color);
    const factor = (order - prevColor.order) / (nextColor.order - prevColor.order);

    const r = Math.round(lerp(color1.r, color2.r, factor));
    const g = Math.round(lerp(color1.g, color2.g, factor));
    const b = Math.round(lerp(color1.b, color2.b, factor));

    return `rgb(${r}, ${g}, ${b})`;
}
function getColorAtOrder(order) {
    if (colourData.length === 0) {
        return null;
    }

    const prevColor = colourData.filter(c => c.order <= order).pop();
    const nextColor = colourData.find(c => c.order > order);

    if (!prevColor || !nextColor) {
        return prevColor ? prevColor.color : null;
    }

    const color1 = hexToRgb(prevColor.color);
    const color2 = hexToRgb(nextColor.color);
    const factor = (order - prevColor.order) / (nextColor.order - prevColor.order);

    const r = Math.round(lerp(color1.r, color2.r, factor));
    const g = Math.round(lerp(color1.g, color2.g, factor));
    const b = Math.round(lerp(color1.b, color2.b, factor));

    return `rgb(${r}, ${g}, ${b})`;
}
function lerp(a, b, t) {
    return a + (b - a) * t;
}
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
        }
        : null;
}
function updateColors() {
    for (let i = 0; order < Points.length; i++) {
        const color = getColorAtOrder(i);
        point = Points[i]
        // if (color) {
        Points[i].color = color
        point.color = color;
        //   }
    }
}



function divBtnControl() {
    document.getElementById("btnTime").addEventListener("click", function () {
        toggleVisibility("timebtns");
    });

    document.getElementById("btnPendulums").addEventListener("click", function () {
        toggleVisibility("pendCtrls");
        toggleVisibility("addpens");
    });

    document.getElementById("btnColour").addEventListener("click", function () {
        toggleVisibility("colour");
    });

    document.getElementById("btnWidth").addEventListener("click", function () {
        toggleVisibility("width");
    });
    // function toggleVisibility(divId) {
    //     var div = document.getElementById(divId);
    //     const btnColour = document.getElementById(btnColour)
    //     // If btnColour is supposed to be a variable or constant, please make sure it is defined before using it.
    //     // For example:
    //     // const btnColour = 'your-color-button-id';

    //     if (div.id === btnColour) {
    //         var divtype = "block";
    //     } else {
    //         var divtype = "flex";
    //     }

    //     if (div.style.display === "none") {
    //         div.style.display = divtype;
    //     } else {
    //         div.style.display = "none";
    //     }
    // }



    function toggleVisibility(divId) {
        var div = document.getElementById(divId);
        // if (div == document.getElementById(btnColour)) {
        //     const divtype = "block"
        // } else {
        //     const divtype = "flex"
        // }
        if (div.style.display === "none") {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
        const temp = document.getElementById("colourSettingsDiv");
        if (temp.style.display == "block") {
            temp.style.display == "flex"
        }
    }

}



// function setColorPoints() {
//     const colourSettingsDiv = document.getElementById("colourSettingsDiv");
//     colourSettingsDiv.innerHTML = "";

//     for (let order = 0; order < colourPoints.length; order++) {
//         const colourPoint = colourPoints[order];
//         const colourPointDiv = document.createElement("div");
//         colourPointDiv.className = "colour-point";

//         // ... (rest of the code in the displayColourPoints function)

//         colourInput.addEventListener("change", () => {
//             colourPoints[order].color = colourInput.value;
//             colorPickerDiv.style.backgroundColor = colourInput.value;
//             updateColors();
//         });

//         // ... (rest of the code in the displayColourPoints function)
//     }
// }








// function displayColourPoints() {
//     const colourPointDiv = document.getElementById("colourSettingsDiv");
//     const colorContainer = document.createElement("div");
//     colorContainer.className = "inline-block";


//     for (let order = 0; order < colourPoints.length; order++) {
//         const colourPoint = colourPoints[order];
//         const colourPointDiv = document.createElement("div");
//         colourPointDiv.className = "colour-point";



//         colourSettingsDiv.innerHTML = "";
//         for (let order = 0; order < colourPoints.length; order++) {
//             const colourPoint = colourPoints[order];
//             const colourPointDiv = document.createElement("div");
//             colourPointDiv.className = "colour-point";
//             const orderLabel = document.createElement("label");
//             orderLabel.innerText = `Order ${order}:`;
//             colourPointDiv.appendChild(orderLabel);
//             const orderInput = document.createElement("input");
//             orderInput.type = "number";
//             orderInput.value = colourPoint.order;
//             orderInput.style.width = "40px";
//             orderInput.addEventListener("change", () => {
//                 colourPoints[order].order = parseInt(orderInput.value);
//                 colourPoints.sort((a, b) => a.order - b.order);
//                 displayColourPoints();
//             });
//             colourPointDiv.appendChild(colorContainer);



//             const colourLabel = document.createElement("label");
//             colourLabel.innerText = `Color:`;
//             colourLabel.className = "inline-block";
//             colorContainer.appendChild(colourLabel);



//             const colorPickerDiv = document.createElement("div");
//             colorPickerDiv.style.backgroundColor = colourPoint.color;
//             colorPickerDiv.style.width = "40px";
//             colorPickerDiv.style.height = "20px";
//             colorPickerDiv.style.cursor = "pointer";
//             colorPickerDiv.className = "inline-block color-picker";
//             colourPointDiv.appendChild(colorPickerDiv);

//             const colourInput = document.createElement("input");
//             colourInput.type = "color";
//             colourInput.value = colourPoint.color;
//             colourInput.style.display = "none";
//             colourInput.addEventListener("change", () => {
//                 colourPoints[order].color = colourInput.value;
//                 colorPickerDiv.style.backgroundColor = colourInput.value;
//                 colourPointDiv.className = "colour-point";
//             });
//             colourPointDiv.appendChild(colourInput);

//             colorPickerDiv.addEventListener("click", () => {
//                 colourInput.click();
//             });

//             const deleteButton = document.createElement("button");
//             deleteButton.innerText = "Remove";
//             deleteButton.onclick = () => {
//                 colourPoints.splice(order, 1);
//                 displayColourPoints();
//             };
//             colourPointDiv.appendChild(deleteButton);
//             colourSettingsDiv.appendChild(colourPointDiv);
//         }
//     }

// }




// function displayColourPoints() {
//     const colourSettingsDiv = document.getElementById("colourSettingsDiv");
//     colourSettingsDiv.innerHTML = "";
//     for (let order = 0; order < colourPoints.length; order++) {
//         const colourPoint = colourPoints[order];
//         const colourPointDiv = document.createElement("div");
//         const orderLabel = document.createElement("label");
//         orderLabel.innerText = `Order ${order}:`;
//         colourPointDiv.appendChild(orderLabel);
//         const orderInput = document.createElement("input");
//         orderInput.type = "number";
//         orderInput.value = colourPoint.order;
//         orderInput.style.width = "40px";
//         orderInput.addEventListener("change", () => {
//             colourPoints[order].order = parseInt(orderInput.value);
//             colourPoints.sort((a, b) => a.order - b.order);
//             displayColourPoints();
//         });
//         colourPointDiv.appendChild(orderInput);
//         const colourLabel = document.createElement("label");
//         colourLabel.innerText = `Color:`;
//         colourPointDiv.appendChild(colourLabel);
//         const colourInput = document.createElement("input");
//         colourInput.type = "color";
//         colourInput.value = colourPoint.color;
//         colourInput.addEventListener("change", () => {
//             colourPoints[order].color = colourInput.value;
//         });
//         colourPointDiv.appendChild(colourInput);

//         const deleteButton = document.createElement("button");
//         deleteButton.innerText = "Remove";
//         deleteButton.onclick = () => {
//             colourPoints.splice(order, 1);
//             displayColourPoints();
//         };
//         colourPointDiv.appendChild(deleteButton);
//         colourSettingsDiv.appendChild(colourPointDiv);
//     }
// }








// function displayColourPoints() {
//     const container = document.getElementById("colourPointsContainer");
//     const colourSettings = document.getElementById("colourSettingsDiv");

//     colourSettingsDiv.innerHTML = "";
//     for (let order = 0; order < colourPoints.length; order++) {
//         const colourPoint = colourPoints[order];
//         const colourPointDiv = document.createElement("div");
//         const orderLabel = document.createElement("label");
//         orderLabel.innerText = `Order ${order}:`;
//         colourPointDiv.appendChild(orderLabel);
//         const orderInput = document.createElement("input");
//         orderInput.type = "number";
//         orderInput.value = colourPoint.order;
//         orderInput.style.colour = "40px";
//         orderInput.addEventListener("change", () => {
//             colourPoints[order].order = parseInt(orderInput.value);
//             colourPoints.sort((a, b) => a.order - b.order);
//             // displaycolourPoints();
//         });
//         colourPointDiv.appendChild(orderInput);
//         const colourLabel = document.createElement("label");
//         colourLabel.innerText = `colour:`;
//         colourPointDiv.appendChild(colourLabel);
//         const colourInput = document.createElement("input");
//         colourInput.type = "number";
//         colourInput.value = colourPoint.colour;
//         colourInput.style.colour = "40px";
//         colourInput.addEventListener("change", () => {
//             colourPoints[order].colour = parseFloat(colourInput.value);
//         });
//         colourPointDiv.appendChild(colourInput);

//         const deleteButton = document.createElement("button");
//         deleteButton.innerText = "Remove";
//         deleteButton.onclick = () => {
//             colourPoints.splice(order, 1);
//             // displaycolourPoints();
//         };
//         colourPointDiv.appendChild(deleteButton);
//         colourSettingsDiv.appendChild(colourPointDiv);
//     }
// }


// function displayColourPoints() {
//     const container = document.getElementById("colour");
//     const colourSettings = document.getElementById("coloursDiv");


//     loopCheckbox.addEventListener("change", () => {
//     });
//     markersCheckbox.addEventListener("change", () => {
//     });
//     // key point controls
//     coloursDiv.innerHTML = "";
//     for (let index = 0; index < colourPoints.length; order++) {
//         const keyPoint = colourPoints[index];
//         const colourSett-ings = document.createElement("div");
//         const orderLabel = document.createElement("label");
//         orderLabel.innerText = `Order ${index}:`;
//         colourSettings.appendChild(orderLabel);
//         const orderInput = document.createElement("input");
//         orderInput.type = "color";
//         orderInput.value = colourPoint.color;
//         orderInput.style.width = "40px";
//         orderInput.addEventListener("change", () => {
//             colourPoints[index].order = parseInt(orderInput.value);
//             colourPoints.sort((a, b) => a.order - b.order);
//             //displayKeyPoints();
//         });
//         colourSettings.appendChild(orderInput);
//         const widthLabel = document.createElement("label");
//         widthLabel.innerText = `Width:`;
//         colourSettings.appendChild(widthLabel);
//         const widthInput = document.createElement("input");
//         widthInput.type = "number";
//         widthInput.value = keyPoint.width;
//         widthInput.style.width = "40px";
//         widthInput.addEventListener("change", () => {
//             keyPoints[order].width = parseFloat(widthInput.value);
//         });
//         colourSettings.appendChild(widthInput);

//         const deleteButton = document.createElement("button");
//         deleteButton.innerText = "Remove";
//         deleteButton.onclick = () => {
//             keyPoints.splice(order, 1);
//             displayKeyPoints();
//         };
//         colourSettings.appendChild(deleteButton);
//         loopSettingsDiv.appendChild(colourSettings);
//     }
// }



// markersCheckbox.addEventListener("change", () => {
// });
// // key point controls
// colourSettings.innerHTML = "";
// for (let order = 0; order < colourPoints.length; order++) {
//     const colourPoint = colourPoints[order];
//     const colourPointDiv = document.createElement("div");
//     const orderLabel = document.createElement("label");
//     orderLabel.innerText = `Order ${order}:`;
//     colourSettings.appendChild(orderLabel);
//     const orderInput = document.createElement("input");
//     orderInput.type = "number";
//     orderInput.value = colourPoint.order;
//     orderInput.style.width = "40px";
//     orderInput.addEventListener("change", () => {
//         colourPoints[order].order = parseInt(orderInput.value);
//         colourPoints.sort((a, b) => a.order - b.order);
//         displayColourPoints();
//     });
//     colours.appendChild(orderInput);
//     const colourLabel = document.createElement("label");
//     widtcolourl.innerText = `Colour:`;
//     coloursPointDiv.appendChild(widthLabel);
//     const widthInput = document.createElement("input");
//     colourInput.type = "number";
//     colourInput.value = keyPoint.width;
//     colourInput.style.width = "40px";
//     colourInput.addEventListener("change", () => {
//         colourPoints[order].colour = parseFloat(colourInput.value);
//     });
//     colours.appendChild(colourInput);

//     const deleteButton = document.createElement("button");
//     deleteButton.innerText = "Remove";
//     deleteButton.onclick = () => {
//         keyPoints.splice(order, 1);
//         displayColourPoints();
//     };
//     colours.appendChild(deleteButton);
//     loopSettingsDiv.appendChild(keyPointDiv);
// }
// 



