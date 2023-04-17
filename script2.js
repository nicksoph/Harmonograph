var svg = ""
const Points = [];
const timeControlsDiv = document.getElementById("timecontrols");
const svgContainer = document.getElementById("svg-container");
const Time = {
    start: 0, end: 1, steps: 1000
};
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
makeData(Points)
smoothCurve(Points)
chop(Points)
draw(Points, svgContainer)

function main() {

    makeData(Points) // creates x,y data (with extras)
    smoothCurve(Points) // creates curve handle data

    setLineWidths(keyPoints, Points)
    draw(Points, svgContainer) // creates svg
};
function makeData(Points) {
    const step = (Time.end - Time.start) / Time.steps
    Points.length = 0
    for (i = 0; i < Time.steps + 3; i++) {
        var tim = (i - 1 * step)
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
    console.log(Points)
    return Points
};
function draw(Points, svgContainer) {
    // svgContainer.innerHTML = ""
    // svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    // svg.setAttribute("width", "100%");
    // svg.setAttribute("height", "100%");

    // svgContainer.appendChild(svg);
    // Points.forEach((line) => {
    //     const x = line.p1.x;
    //     const y = line.p1.y;
    //     const { p1, cp1, cp2, p2, width } = line;
    //     // if (!width) { break }
    //     //console.log(p1, cp1, cp2, p2, width)
    //     const { x: p1x, y: p1y } = p1;
    //     const { x: cp1x, y: cp1y } = cp1;
    //     const { x: cp2x, y: cp2y } = cp2;
    //     const { x: p2x, y: p2y } = p2;
    //     const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    //     const d = `M ${p1x} ${p1y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2x} ${p2y}`;
    //     path.setAttribute("d", d);
    //     path.setAttribute("stroke", "Red");
    //     path.setAttribute("stroke-width", width.toString());
    //     path.setAttribute("fill", "none");
    //     svg.appendChild(path);
    // });
    svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");

 
      <linearGradient id="linearGradient2303">
        <stop id="stop2305" offset="0.00000000" style="stop-color: rgb(83, 25, 113); stop-opacity: 1;"/>
        <stop id="stop2323" offset="0.60601109" style="stop-color: rgb(44, 18, 84); stop-opacity: 1;"/>
        <stop id="stop2321" offset="0.80524760" style="stop-color: rgb(0, 0, 0); stop-opacity: 1;"/>
        <stop id="stop2307" offset="1.0000000" style="stop-color: rgb(0, 0, 0); stop-opacity: 0;"/>
      </linearGradient>
      <linearGradient id="linearGradient2195">
        <stop id="stop2197" offset="0.00000000" style="stop-color: rgb(50, 50, 50); stop-opacity: 1;"/>
        <stop id="stop2199" offset="1.0000000" style="stop-color: rgb(150, 150, 150); stop-opacity: 1;"/>
      </linearGradient>
      <linearGradient id="linearGradient2189">
        <stop id="stop2191" offset="0.00000000" style="stop-color: rgb(190, 190, 190); stop-opacity: 1;"/>
        <stop id="stop2193" offset="1.0000000" style="stop-color: rgb(210, 210, 210); stop-opacity: 1;"/>
      </linearGradient>
      <linearGradient id="linearGradient2160">
        <stop id="stop2162" offset="0.00000000" style="stop-color: rgb(0, 0, 0); stop-opacity: 1;"/>
        <stop id="stop2164" offset="1.0000000" style="stop-color: rgb(0, 0, 0); stop-opacity: 0;"/>
      </linearGradient>
      <linearGradient id="linearGradient2127">
        <stop id="stop2129" offset="0.00000000" style="stop-color: rgb(100, 100, 100); stop-opacity: 1;"/>
        <stop id="stop2131" offset="1.0000000" style="stop-color: rgb(255, 255, 255); stop-opacity: 1;"/>
      </linearGradient>
      <linearGradient id="linearGradient2118">
        <stop id="stop2120" offset="0.00000000" style="stop-color: rgb(125, 125, 125); stop-opacity: 1;"/>
        <stop id="stop2122" offset="1.0000000" style="stop-color: rgb(220, 220, 220); stop-opacity: 1;"/>
      </linearGradient>
      <linearGradient id="linearGradient2099">
        <stop id="stop2101" offset="0.00000000" style="stop-color: rgb(0, 0, 0); stop-opacity: 1;"/>
        <stop id="stop2103" offset="1.0000000" style="stop-color: rgb(0, 0, 0); stop-opacity: 0.588235;"/>
      </linearGradient>
      <linearGradient id="linearGradient2143">
        <stop id="stop2145" offset="0.00000000" style="stop-color: rgb(0, 0, 0); stop-opacity: 1;"/>
        <stop id="stop2147" offset="1.0000000" style="stop-color: rgb(255, 255, 255); stop-opacity: 1;"/>
      </linearGradient>
      <linearGradient id="linearGradient2061">
        <stop id="stop2063" offset="0.00000000" style="stop-color: rgb(255, 255, 255); stop-opacity: 1;"/>
        <stop id="stop2187" offset="0.29381442" style="stop-color: rgb(255, 255, 255); stop-opacity: 1;"/>
        <stop id="stop2065" offset="1.0000000" style="stop-color: rgb(255, 255, 255); stop-opacity: 0;"/>
      </linearGradient>
      <linearGradient gradientTransform="matrix(3.93701, 0, 0, 0.127, 0, 176.181)" gradientUnits="userSpaceOnUse" id="linearGradient2101" x1="82.550041" x2="82.550041" xlink:href="#linearGradient2061" y1="1462.0551" y2="1391.1869"/>
      <linearGradient gradientTransform="scale(0.745356, 1.34164)" gradientUnits="userSpaceOnUse" id="linearGradient2149" x1="298.88779" x2="298.88779" xlink:href="#linearGradient2143" y1="403.20471" y2="270.08881"/>
      <linearGradient gradientTransform="scale(0.745356, 1.34164)" gradientUnits="userSpaceOnUse" id="linearGradient2200" x1="352.06747" x2="347.65460" xlink:href="#linearGradient2143" y1="386.44376" y2="233.72731"/>
      <linearGradient gradientTransform="scale(2.29518, 0.435695)" gradientUnits="userSpaceOnUse" id="linearGradient2224" x1="94.440163" x2="100.54987" xlink:href="#linearGradient2061" y1="823.22485" y2="875.80542"/>
      <linearGradient gradientTransform="matrix(1.56589, 0, 0, 0.732797, 98.7092, -125.467)" gradientUnits="userSpaceOnUse" id="linearGradient2329" x1="-327.88300" x2="-327.78314" xlink:href="#linearGradient2143" y1="220.74342" y2="233.92133"/>
      <linearGradient gradientTransform="matrix(1.4613, 0, 0, 0.684323, 222.645, -79.8309)" gradientUnits="userSpaceOnUse" id="linearGradient2343" x1="-338.12735" x2="-337.99255" xlink:href="#linearGradient2143" y1="192.44231" y2="214.70348"/>
      <linearGradient gradientTransform="matrix(2.3702, 0, 0, 0.421906, 198.87, -89.375)" gradientUnits="userSpaceOnUse" id="linearGradient2362" x1="-227.78334" x2="-185.92982" xlink:href="#linearGradient2143" y1="576.82489" y2="565.61029"/>
      <radialGradient cx="195.33907" cy="367.99432" fx="195.33907" fy="367.99432" gradientTransform="matrix(0.793492, 0, 0, 1.26025, -89.375, -198.87)" gradientUnits="userSpaceOnUse" id="radialGradient2464" r="10.189606" spreadMethod="reflect" xlink:href="#linearGradient2195"/>
      <linearGradient gradientTransform="matrix(1.36931, 0, 0, 0.730297, -89.375, -198.87)" gradientUnits="userSpaceOnUse" id="linearGradient2466" x1="234.54350" x2="234.54350" xlink:href="#linearGradient2195" y1="745.65509" y2="484.63116"/>
      <linearGradient gradientTransform="matrix(0.793492, 0, 0, 1.26025, -89.375, -198.87)" gradientUnits="userSpaceOnUse" id="linearGradient2468" x1="219.60535" x2="169.10524" xlink:href="#linearGradient2143" y1="385.28711" y2="327.64883"/>
      <radialGradient cx="164.88359" cy="367.24536" fx="164.88359" fy="367.24536" gradientTransform="matrix(1.33333, 0, 0, 1.33334, -139.375, -316.325)" gradientUnits="userSpaceOnUse" id="radialGradient2470" r="14.648915" xlink:href="#linearGradient2061"/>
      <radialGradient cx="164.88269" cy="367.24536" fx="164.88269" fy="367.24536" gradientTransform="matrix(0, -1.33333, 1.33334, 0, -409.193, 553.492)" gradientUnits="userSpaceOnUse" id="radialGradient2472" r="14.883290" xlink:href="#linearGradient2061"/>
      <radialGradient cx="164.88269" cy="367.24536" fx="164.88269" fy="367.24536" gradientTransform="matrix(0, -1.33333, -1.33334, 0, 905.443, 553.492)" gradientUnits="userSpaceOnUse" id="radialGradient2474" r="14.883290" xlink:href="#linearGradient2061"/>
      <radialGradient cx="164.88269" cy="367.24536" fx="164.88269" fy="367.24536" gradientTransform="matrix(0, 1.33333, -1.33334, 0, 905.443, -46.5077)" gradientUnits="userSpaceOnUse" id="radialGradient2476" r="14.883290" xlink:href="#linearGradient2061"/>
      <linearGradient gradientTransform="matrix(4.09268, 0, 0, 0.244339, 89.375, 198.87)" gradientUnits="userSpaceOnUse" id="linearGradient2478" x1="-82.464378" x2="-82.464378" xlink:href="#linearGradient2061" y1="-2178.7864" y2="-2258.8235"/>
      <linearGradient gradientTransform="matrix(2.82843, 0, 0, 0.353553, 198.87, -89.375)" gradientUnits="userSpaceOnUse" id="linearGradient2480" x1="-159.93404" x2="-159.93404" xlink:href="#linearGradient2061" y1="480.33670" y2="424.26443"/>
      <linearGradient gradientTransform="matrix(2.82843, 0, 0, 0.353553, 198.87, 89.375)" gradientUnits="userSpaceOnUse" id="linearGradient2482" x1="-159.93404" x2="-159.93404" xlink:href="#linearGradient2061" y1="-1428.3561" y2="-1484.4293"/>
      <linearGradient gradientTransform="matrix(4.09268, 0, 0, 0.244339, -89.375, -198.87)" gradientUnits="userSpaceOnUse" id="linearGradient2484" x1="82.159187" x2="82.159187" xlink:href="#linearGradient2061" y1="1523.0514" y2="1441.1952"/>
      <linearGradient gradientTransform="matrix(1.38538, 0, 0, 0.721822, -89.375, -198.87)" gradientUnits="userSpaceOnUse" id="linearGradient2486" x1="224.19640" x2="224.19640" xlink:href="#linearGradient2189" y1="503.96042" y2="749.76471"/>
      <linearGradient gradientTransform="matrix(0.5547, 0, 0, 1.80278, -89.375, -198.87)" gradientUnits="userSpaceOnUse" id="linearGradient2488" spreadMethod="reflect" x1="272.21921" x2="308.27469" xlink:href="#linearGradient2143" y1="285.29071" y2="262.75601"/>
      <linearGradient gradientTransform="matrix(0.720082, 0, 0, 1.38873, -89.375, -198.87)" gradientUnits="userSpaceOnUse" id="linearGradient2490" x1="656.78778" x2="656.78760" xlink:href="#linearGradient2127" y1="373.10587" y2="278.93256"/>
      <linearGradient gradientTransform="matrix(0.723143, 0, 0, 1.38285, -89.375, -198.87)" gradientUnits="userSpaceOnUse" id="linearGradient2492" x1="653.25012" x2="653.25012" xlink:href="#linearGradient2143" y1="373.10922" y2="279.66632"/>
      <linearGradient gradientTransform="matrix(0.720082, 0, 0, 1.38873, -89.375, -198.87)" gradientUnits="userSpaceOnUse" id="linearGradient2494" spreadMethod="reflect" x1="641.06244" x2="639.63287" xlink:href="#linearGradient2143" y1="319.18408" y2="327.53815"/>
      <linearGradient gradientTransform="matrix(0.720082, 0, 0, 1.38873, -89.375, -198.87)" gradientUnits="userSpaceOnUse" id="linearGradient2496" spreadMethod="reflect" x1="665.36487" x2="665.36487" xlink:href="#linearGradient2143" y1="310.82980" y2="313.87778"/>
      <linearGradient gradientTransform="matrix(0.720082, 0, 0, 1.38873, -89.375, -198.87)" gradientUnits="userSpaceOnUse" id="linearGradient2498" spreadMethod="reflect" x1="665.36505" x2="665.36505" xlink:href="#linearGradient2143" y1="310.82990" y2="311.97168"/>
      <linearGradient gradientTransform="matrix(0.919171, 0, 0, 1.10218, -92.1837, -201.406)" gradientUnits="userSpaceOnUse" id="linearGradient2500" x1="390.37320" x2="390.37320" xlink:href="#linearGradient2143" y1="334.77237" y2="489.11697"/>
      <linearGradient gradientTransform="matrix(0.910781, 0, 0, 1.09796, -89.375, -198.87)" gradientUnits="userSpaceOnUse" id="linearGradient2502" x1="410.82294" x2="410.82294" xlink:href="#linearGradient2143" y1="486.58331" y2="328.51572"/>
      <linearGradient gradientTransform="matrix(1.68783, 0, 0, 0.592476, -89.375, -198.87)" gradientUnits="userSpaceOnUse" id="linearGradient2504" x1="224.52806" x2="224.51540" xlink:href="#linearGradient2127" y1="781.65656" y2="660.40173"/>
      <linearGradient gradientTransform="matrix(0.910781, 0, 0, 1.09796, -89.375, -198.87)" gradientUnits="userSpaceOnUse" id="linearGradient2506" x1="409.31522" x2="389.55954" xlink:href="#linearGradient2143" y1="405.39236" y2="350.85809"/>
      <linearGradient gradientTransform="matrix(1.5288, 0, 0, 0.654109, -89.375, -198.87)" gradientUnits="userSpaceOnUse" id="linearGradient2508" x1="238.77391" x2="238.77391" xlink:href="#linearGradient2143" y1="787.97565" y2="661.18909"/>
      <linearGradient gradientTransform="matrix(1.55423, 0, 0, 0.643406, -89.375, -198.87)" gradientUnits="userSpaceOnUse" id="linearGradient2510" x1="241.94136" x2="241.94136" xlink:href="#linearGradient2195" y1="802.59015" y2="653.53149"/>
      <radialGradient cx="272.21921" cy="277.40359" fx="270.41644" fy="276.27689" gradientTransform="matrix(0.5547, 0, 0, 1.80278, -89.375, -198.87)" gradientUnits="userSpaceOnUse" id="radialGradient2512" r="36.908104" spreadMethod="reflect" xlink:href="#linearGradient2143"/>
      <linearGradient gradientTransform="matrix(0.5547, 0, 0, 1.80278, -89.375, -198.87)" gradientUnits="userSpaceOnUse" id="linearGradient2514" spreadMethod="pad" x1="263.20532" x2="286.64139" xlink:href="#linearGradient2160" y1="258.24908" y2="258.24905"/>
      <linearGradient gradientTransform="matrix(1.00653, 0, 0, 1.23234, -129.279, -198.37)" gradientUnits="userSpaceOnUse" id="linearGradient2516" x1="265.96707" x2="265.96704" xlink:href="#linearGradient2099" y1="439.40738" y2="293.78394"/>
      <linearGradient gradientTransform="matrix(0.825706, 0, 0, 1.21108, -89.375, -198.87)" gradientUnits="userSpaceOnUse" id="linearGradient2518" x1="286.23761" x2="286.23761" xlink:href="#linearGradient2127" y1="529.02618" y2="291.34518"/>
      <linearGradient gradientTransform="matrix(1.13228, 0, 0, 1.09599, -127.715, -201.617)" gradientUnits="userSpaceOnUse" id="linearGradient2520" x1="260.92453" x2="241.63106" xlink:href="#linearGradient2127" y1="415.67227" y2="393.49112"/>
      <radialGradient cx="81.898430" cy="1244.3292" fx="81.898430" fy="1244.3292" gradientTransform="matrix(2.904, 0, 0, 0.42713, -129.279, -198.87)" gradientUnits="userSpaceOnUse" id="radialGradient2522" r="87.748901" xlink:href="#linearGradient2118"/>
      <linearGradient gradientTransform="matrix(2.904, 0, 0, 0.42713, -129.279, -198.87)" gradientUnits="userSpaceOnUse" id="linearGradient2524" x1="91.790848" x2="91.790848" xlink:href="#linearGradient2160" y1="1207.4102" y2="1233.5283"/>
      <linearGradient gradientTransform="matrix(0.834046, 0, 0, 1.19897, -89.375, -198.87)" gradientUnits="userSpaceOnUse" id="linearGradient2526" spreadMethod="reflect" x1="302.40866" x2="302.40866" xlink:href="#linearGradient2143" y1="349.93118" y2="351.37485"/>
      <linearGradient gradientTransform="matrix(0.834046, 0, 0, 1.19897, -89.375, -198.87)" gradientUnits="userSpaceOnUse" id="linearGradient2528" spreadMethod="reflect" x1="271.04855" x2="271.04855" xlink:href="#linearGradient2143" y1="350.81409" y2="354.59967"/>
      <linearGradient gradientTransform="matrix(0.834046, 0, 0, 1.19897, -89.375, -198.87)" gradientUnits="userSpaceOnUse" id="linearGradient2530" spreadMethod="reflect" x1="234.90314" x2="243.74902" xlink:href="#linearGradient2143" y1="340.21918" y2="372.00415"/>
      <linearGradient gradientTransform="matrix(0.834046, 0, 0, 1.19897, -89.375, -198.87)" gradientUnits="userSpaceOnUse" id="linearGradient2532" spreadMethod="reflect" x1="337.99429" x2="336.71158" xlink:href="#linearGradient2143" y1="361.38681" y2="369.07602"/>
      <linearGradient gradientUnits="userSpaceOnUse" id="linearGradient2534" x1="406.76318" x2="406.76318" xlink:href="#linearGradient2160" y1="402.41534" y2="519.04663"/>
      <radialGradient cx="387.54489" cy="514.14392" fx="387.54489" fy="514.14392" gradientUnits="userSpaceOnUse" id="radialGradient2536" r="108.39503" xlink:href="#linearGradient2189"/>
      <linearGradient gradientUnits="userSpaceOnUse" id="linearGradient2538" x1="404.61307" x2="404.61307" xlink:href="#linearGradient2143" y1="510.83701" y2="406.23483"/>
      <linearGradient gradientUnits="userSpaceOnUse" id="linearGradient2540" x1="393.83939" x2="393.83939" xlink:href="#linearGradient2143" y1="404.70325" y2="515.28473"/>
      <linearGradient gradientUnits="userSpaceOnUse" id="linearGradient2542" spreadMethod="reflect" x1="406.76318" x2="405.88797" xlink:href="#linearGradient2143" y1="387.34207" y2="465.23468"/>
      <linearGradient gradientUnits="userSpaceOnUse" id="linearGradient2544" x1="378.74927" x2="378.74927" xlink:href="#linearGradient2143" y1="513.11932" y2="403.91809"/>
      <linearGradient gradientUnits="userSpaceOnUse" id="linearGradient2546" spreadMethod="reflect" x1="401.51196" x2="372.63031" xlink:href="#linearGradient2061" y1="455.60751" y2="426.72598"/>
      <linearGradient gradientUnits="userSpaceOnUse" id="linearGradient2548" x1="378.74927" x2="378.74927" xlink:href="#linearGradient2143" y1="513.11932" y2="403.91809"/>
      <linearGradient gradientUnits="userSpaceOnUse" id="linearGradient2550" x1="398.83572" x2="398.83572" xlink:href="#linearGradient2143" y1="404.49619" y2="514.75488"/>
      <radialGradient cx="406.76318" cy="459.98349" fx="406.76318" fy="459.98349" gradientUnits="userSpaceOnUse" id="radialGradient2552" r="55.331104" xlink:href="#linearGradient2303"/>
      <radialGradient cx="389.47220" cy="447.87982" fx="389.47220" fy="447.87982" gradientUnits="userSpaceOnUse" id="radialGradient2554" r="8.6886206" xlink:href="#linearGradient2061"/>
      <radialGradient cx="365.26486" cy="421.07880" fx="365.26486" fy="421.07880" gradientUnits="userSpaceOnUse" id="radialGradient2556" r="65.002319" xlink:href="#linearGradient2061"/>
      <linearGradient gradientTransform="matrix(0.720082, 0, 0, 1.38873, -89.375, -198.87)" gradientUnits="userSpaceOnUse" id="linearGradient2558" spreadMethod="reflect" x1="638.20325" x2="639.63287" xlink:href="#linearGradient2143" y1="300.19751" y2="315.38678"/>
      <linearGradient gradientTransform="matrix(2.3702, 0, 0, 0.421906, 198.87, -89.375)" gradientUnits="userSpaceOnUse" id="linearGradient2560" x1="-227.78334" x2="-185.92982" xlink:href="#linearGradient2143" y1="576.82489" y2="565.61029"/>
      <linearGradient gradientTransform="matrix(2.23385, 0, 0, 0.536851, -88.875, -274.561)" gradientUnits="userSpaceOnUse" id="linearGradient2562" spreadMethod="reflect" x1="204.79185" x2="221.93906" xlink:href="#linearGradient2127" y1="839.64862" y2="839.64862"/>
      <linearGradient gradientTransform="matrix(2.23385, 0, 0, 0.536851, -88.875, -274.561)" gradientUnits="userSpaceOnUse" id="linearGradient2564" x1="203.41141" x2="217.53874" xlink:href="#linearGradient2143" y1="826.88013" y2="841.10950"/>
      <linearGradient gradientTransform="matrix(2.32989, 0, 0, 0.514722, -88.875, -274.561)" gradientUnits="userSpaceOnUse" id="linearGradient2566" spreadMethod="reflect" x1="202.38510" x2="202.48843" xlink:href="#linearGradient2061" y1="850.50427" y2="853.85681"/>
      <linearGradient gradientTransform="matrix(2.74099, 0, 0, 0.371923, -84.1373, -211.322)" gradientUnits="userSpaceOnUse" id="linearGradient2568" spreadMethod="pad" x1="169.78445" x2="169.78447" xlink:href="#linearGradient2061" y1="1014.1465" y2="1046.7983"/>
      <linearGradient gradientTransform="matrix(1.18118, 0, 0, 0.846611, -89.375, -198.87)" gradientUnits="userSpaceOnUse" id="linearGradient2570" x1="288.18646" x2="293.39722" xlink:href="#linearGradient2143" y1="437.91830" y2="443.31836"/>
      <radialGradient cx="331.80984" cy="391.51016" fx="331.80984" fy="391.51016" gradientTransform="scale(1.03749, 0.963863)" gradientUnits="userSpaceOnUse" id="radialGradient2572" r="10.186243" xlink:href="#linearGradient2061"/>
      <linearGradient gradientTransform="scale(1.03872, 0.96272)" gradientUnits="userSpaceOnUse" id="linearGradient2574" x1="333.62552" x2="327.73431" xlink:href="#linearGradient2061" y1="404.92667" y2="386.88702"/>
      <linearGradient gradientTransform="scale(1.03872, 0.96272)" gradientUnits="userSpaceOnUse" id="linearGradient2576" x1="338.45172" x2="332.51279" xlink:href="#linearGradient2061" y1="369.61816" y2="391.97516"/>
      <radialGradient cx="336.93637" cy="375.66098" fx="336.93637" fy="375.66098" gradientUnits="userSpaceOnUse" id="radialGradient2578" r="1.4142135" xlink:href="#linearGradient2061"/>
      <radialGradient cx="336.93637" cy="375.66098" fx="336.93637" fy="375.66098" gradientUnits="userSpaceOnUse" id="radialGradient2580" r="1.4142135" xlink:href="#linearGradient2061"/>
      <radialGradient cx="331.89600" cy="204.99352" fx="331.78088" fy="205.33112" gradientTransform="matrix(0.431331, 0, 0, 2.3184, -89.375, -198.87)" gradientUnits="userSpaceOnUse" id="radialGradient2582" r="17.614996" xlink:href="#linearGradient2061"/>
      <linearGradient gradientTransform="matrix(1.09129, 0, 0, 0.916344, -89.375, -198.87)" gradientUnits="userSpaceOnUse" id="linearGradient2584" x1="340.56873" x2="363.77615" xlink:href="#linearGradient2143" y1="396.86478" y2="421.51526"/>
      <radialGradient cx="331.80984" cy="391.51016" fx="331.80984" fy="391.51016" gradientTransform="scale(1.03749, 0.963863)" gradientUnits="userSpaceOnUse" id="radialGradient2586" r="10.186243" xlink:href="#linearGradient2061"/>
      <linearGradient gradientTransform="scale(1.03872, 0.96272)" gradientUnits="userSpaceOnUse" id="linearGradient2588" x1="333.62552" x2="327.73431" xlink:href="#linearGradient2061" y1="404.92667" y2="386.88702"/>
      <linearGradient gradientTransform="scale(1.03872, 0.96272)" gradientUnits="userSpaceOnUse" id="linearGradient2590" x1="338.45172" x2="332.51279" xlink:href="#linearGradient2061" y1="369.61816" y2="391.97516"/>
      <radialGradient cx="336.93637" cy="375.66098" fx="336.93637" fy="375.66098" gradientUnits="userSpaceOnUse" id="radialGradient2592" r="1.4142135" xlink:href="#linearGradient2061"/>
      <radialGradient cx="336.93637" cy="375.66098" fx="336.93637" fy="375.66098" gradientUnits="userSpaceOnUse" id="radialGradient2594" r="1.4142135" xlink:href="#linearGradient2061"/>
      <linearGradient gradientTransform="scale(1.03872, 0.96272)" gradientUnits="userSpaceOnUse" id="linearGradient2596" x1="338.45172" x2="332.51279" xlink:href="#linearGradient2061" y1="369.61816" y2="391.97516"/>
      <linearGradient gradientTransform="scale(1.03872, 0.96272)" gradientUnits="userSpaceOnUse" id="linearGradient2598" x1="338.45172" x2="332.51279" xlink:href="#linearGradient2061" y1="369.61816" y2="391.97516"/>
      <linearGradient gradientTransform="matrix(0.35887, 0, 0, 2.78652, -89.375, -198.87)" gradientUnits="userSpaceOnUse" id="linearGradient2600" spreadMethod="pad" x1="525.77820" x2="525.77820" xlink:href="#linearGradient2143" y1="185.73842" y2="138.61699"/>
      <linearGradient gradientTransform="matrix(0.35887, 0, 0, 2.78652, -89.375, -198.87)" gradientUnits="userSpaceOnUse" id="linearGradient2602" x1="517.73596" x2="517.73596" xlink:href="#linearGradient2160" y1="185.10786" y2="137.73700"/>
      <linearGradient gradientTransform="matrix(0.35887, 0, 0, 2.78652, -89.375, -198.87)" gradientUnits="userSpaceOnUse" id="linearGradient2604" spreadMethod="reflect" x1="500.98907" x2="520.82123" xlink:href="#linearGradient2127" y1="162.27498" y2="162.19385"/>
      <linearGradient gradientTransform="matrix(0.339683, 0, 0, 2.94392, -89.375, -198.87)" gradientUnits="userSpaceOnUse" id="linearGradient2606" x1="547.19476" x2="556.77557" xlink:href="#linearGradient2143" y1="132.62198" y2="170.48996"/>
      <linearGradient gradientTransform="matrix(0.254427, 0, 0, 1.21601, -42.3154, 42.2932)" gradientUnits="userSpaceOnUse" id="linearGradient2608" x1="547.19476" x2="556.77557" xlink:href="#linearGradient2061" y1="132.62198" y2="170.48996"/>
      <linearGradient gradientTransform="matrix(0.339683, 0, 0, 2.94392, -89.375, -198.87)" gradientUnits="userSpaceOnUse" id="linearGradient2610" spreadMethod="reflect" x1="550.12598" x2="559.42310" xlink:href="#linearGradient2061" y1="159.70277" y2="159.70277"/>
      <radialGradient cx="387.72849" cy="177.34306" fx="387.72849" fy="177.34306" gradientTransform="scale(0.408248, 2.44949)" gradientUnits="userSpaceOnUse" id="radialGradient2612" r="15.509140" xlink:href="#linearGradient2160"/>
      <radialGradient cx="387.72849" cy="177.34306" fx="387.72849" fy="177.34306" gradientTransform="scale(0.408248, 2.44949)" gradientUnits="userSpaceOnUse" id="radialGradient2614" r="15.509140" xlink:href="#linearGradient2061"/>
      <linearGradient gradientTransform="matrix(1.56589, 0, 0, 0.732797, 98.7092, -125.467)" gradientUnits="userSpaceOnUse" id="linearGradient2616" x1="-327.88300" x2="-327.78314" xlink:href="#linearGradient2143" y1="220.74342" y2="233.92133"/>
      <linearGradient gradientTransform="matrix(1.4613, 0, 0, 0.684323, 222.645, -79.8309)" gradientUnits="userSpaceOnUse" id="linearGradient2618" x1="-338.12735" x2="-337.99255" xlink:href="#linearGradient2143" y1="192.44231" y2="214.70348"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2143" id="linearGradient2790" gradientUnits="userSpaceOnUse" gradientTransform="matrix(2.3702, 0, 0, 0.421906, 198.87, -89.375)" x1="-227.78334" y1="576.82489" x2="-185.92982" y2="565.61029"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2143" id="linearGradient2846" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.56589, 0, 0, 0.732797, 98.7092, -125.467)" x1="-327.88300" y1="220.74342" x2="-327.78314" y2="233.92133"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2143" id="linearGradient2848" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.4613, 0, 0, 0.684323, 222.645, -79.8309)" x1="-338.12735" y1="192.44231" x2="-337.99255" y2="214.70348"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2143" id="linearGradient2853" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.4613, 0, 0, 0.684322, 390.988, -110.87)" x1="-338.12735" y1="192.44231" x2="-337.99255" y2="214.70348"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2143" id="linearGradient2857" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.56589, 0, 0, 0.732797, 331.41, -147.922)" x1="-327.88300" y1="220.74342" x2="-327.78314" y2="233.92133"/>
      <radialGradient inkscape:collect="always" xlink:href="#linearGradient2061" id="radialGradient2860" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.564795, 0.114444, 0.109653, 2.8513, -205.536, -428.778)" cx="387.72849" cy="177.34306" fx="387.72849" fy="177.34306" r="15.509140"/>
      <radialGradient inkscape:collect="always" xlink:href="#linearGradient2160" id="radialGradient2863" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.278815, 0.0645387, -0.231885, 2.79362, -31.5504, -441.922)" cx="387.72849" cy="177.34306" fx="387.72849" fy="177.34306" r="15.509140"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2061" id="linearGradient2866" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.339683, 0, 0, 2.94392, -124.125, -349.237)" spreadMethod="reflect" x1="550.12598" y1="159.70277" x2="559.42310" y2="159.70277"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2061" id="linearGradient2869" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.254427, 0, 0, 1.21601, -77.0654, -108.074)" x1="547.19476" y1="132.62198" x2="556.77557" y2="170.48996"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2143" id="linearGradient2872" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.339683, 0, 0, 2.94392, -124.125, -349.237)" x1="547.19476" y1="132.62198" x2="556.77557" y2="170.48996"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2127" id="linearGradient2875" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.35887, 0, 0, 2.78652, -124.125, -349.237)" spreadMethod="reflect" x1="500.98907" y1="162.27498" x2="520.82123" y2="162.19385"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2143" id="linearGradient2878" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.35887, 0, 0, 2.78652, -124.125, -349.237)" spreadMethod="pad" x1="525.77820" y1="185.73842" x2="525.77820" y2="138.61699"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2160" id="linearGradient2880" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.35887, 0, 0, 2.78652, -124.125, -349.237)" x1="517.73596" y1="185.10786" x2="517.73596" y2="137.73700"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2061" id="linearGradient2883" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.209165, -0.798624, 0.597918, 0.0996396, -89.9483, 253.269)" x1="338.45172" y1="369.61816" x2="332.51279" y2="391.97516"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2061" id="linearGradient2886" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.208533, -0.821256, 0.597997, 0.10214, -47.0517, 257.218)" x1="338.45172" y1="369.61816" x2="332.51279" y2="391.97516"/>
      <radialGradient inkscape:collect="always" xlink:href="#linearGradient2061" id="radialGradient2889" gradientUnits="userSpaceOnUse" cx="336.93637" cy="375.66098" fx="336.93637" fy="375.66098" r="1.4142135" gradientTransform="matrix(2.975, 0, 0, 2.975, -738.785, -1087.2)"/>
      <radialGradient inkscape:collect="always" xlink:href="#linearGradient2061" id="radialGradient2892" gradientUnits="userSpaceOnUse" cx="336.93637" cy="375.66098" fx="336.93637" fy="375.66098" r="1.4142135" gradientTransform="matrix(1.4, 0, 0, 1.4, -211.07, -503.235)"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2061" id="linearGradient2895" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.02282, 0, 0, 0.610828, -77.5944, -210.324)" x1="338.45172" y1="369.61816" x2="332.51279" y2="391.97516"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2061" id="linearGradient2898" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.27362, 0, 0, 1.21992, -160.714, -452.607)" x1="333.62552" y1="404.92667" x2="327.73431" y2="386.88702"/>
      <radialGradient inkscape:collect="always" xlink:href="#linearGradient2061" id="radialGradient2901" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.982239, 0, 0, 0.982282, -64.5328, -359.003)" cx="331.80984" cy="391.51016" fx="331.80984" fy="391.51016" r="10.186243"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2143" id="linearGradient2904" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.09129, 0, 0, 0.916344, -124.125, -349.237)" x1="340.56873" y1="396.86478" x2="363.77615" y2="421.51526"/>
      <radialGradient inkscape:collect="always" xlink:href="#linearGradient2061" id="radialGradient2907" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.431331, 0, 0, 2.3184, -124.125, -349.237)" cx="331.89600" cy="204.99352" fx="331.78088" fy="205.33112" r="17.614996"/>
      <radialGradient inkscape:collect="always" xlink:href="#linearGradient2061" id="radialGradient2918" gradientUnits="userSpaceOnUse" cx="336.93637" cy="375.66098" fx="336.93637" fy="375.66098" r="1.4142135" gradientTransform="matrix(2.975, 0, 0, 2.975, -780.16, -1085.75)"/>
      <radialGradient inkscape:collect="always" xlink:href="#linearGradient2061" id="radialGradient2921" gradientUnits="userSpaceOnUse" cx="336.93637" cy="375.66098" fx="336.93637" fy="375.66098" r="1.4142135" gradientTransform="matrix(1.46332, 0, 0, 1.4, -276.376, -500.44)"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2061" id="linearGradient2924" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.02282, 0, 0, 0.610828, -120.76, -208.424)" x1="338.45172" y1="369.61816" x2="332.51279" y2="391.97516"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2061" id="linearGradient2927" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.27362, 0, 0, 1.21992, -203.88, -450.708)" x1="333.62552" y1="404.92667" x2="327.73431" y2="386.88702"/>
      <radialGradient inkscape:collect="always" xlink:href="#linearGradient2061" id="radialGradient2930" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.982239, 0, 0, 0.982282, -107.699, -357.104)" cx="331.80984" cy="391.51016" fx="331.80984" fy="391.51016" r="10.186243"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2143" id="linearGradient2933" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.18118, 0, 0, 0.846611, -124.125, -349.237)" x1="288.18646" y1="437.91830" x2="293.39722" y2="443.31836"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2061" id="linearGradient2936" gradientUnits="userSpaceOnUse" gradientTransform="matrix(2.74099, 0, 0, 0.371923, -118.887, -361.689)" spreadMethod="pad" x1="169.78445" y1="1014.1465" x2="169.78447" y2="1046.7983"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2061" id="linearGradient2939" gradientUnits="userSpaceOnUse" gradientTransform="matrix(2.32989, 0, 0, 0.514722, -123.625, -424.928)" spreadMethod="reflect" x1="202.38510" y1="850.50427" x2="202.48843" y2="853.85681"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2127" id="linearGradient2942" gradientUnits="userSpaceOnUse" gradientTransform="matrix(2.23385, 0, 0, 0.536851, -123.625, -424.928)" spreadMethod="reflect" x1="204.79185" y1="839.64862" x2="221.93906" y2="839.64862"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2143" id="linearGradient2944" gradientUnits="userSpaceOnUse" gradientTransform="matrix(2.23385, 0, 0, 0.536851, -123.625, -424.928)" x1="203.41141" y1="826.88013" x2="217.53874" y2="841.10950"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2143" id="linearGradient2951" gradientUnits="userSpaceOnUse" gradientTransform="matrix(2.3702, 0, 0, 0.421906, 349.237, -124.125)" x1="-227.78334" y1="576.82489" x2="-185.92982" y2="565.61029"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2143" id="linearGradient2958" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.720082, 0, 0, 1.38873, -124.125, -349.237)" spreadMethod="reflect" x1="638.20325" y1="300.19751" x2="639.63287" y2="315.38678"/>
      <radialGradient inkscape:collect="always" xlink:href="#linearGradient2061" id="radialGradient2962" gradientUnits="userSpaceOnUse" cx="365.26486" cy="421.07880" fx="365.26486" fy="421.07880" r="65.002319" gradientTransform="matrix(0.414966, 0, 0, 0.415122, 89.645, -75.3635)"/>
      <radialGradient inkscape:collect="always" xlink:href="#linearGradient2061" id="radialGradient2965" gradientUnits="userSpaceOnUse" cx="389.47220" cy="447.87982" fx="389.47220" fy="447.87982" r="8.6886206" gradientTransform="matrix(0.414966, 0, 0, 0.415122, 89.645, -75.3635)"/>
      <radialGradient inkscape:collect="always" xlink:href="#linearGradient2303" id="radialGradient2968" gradientUnits="userSpaceOnUse" cx="406.76318" cy="459.98349" fx="406.76318" fy="459.98349" r="55.331104" gradientTransform="matrix(0.414966, 0, 0, 0.415122, 89.645, -75.3635)"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2143" id="linearGradient2973" gradientUnits="userSpaceOnUse" x1="398.83572" y1="404.49619" x2="398.83572" y2="514.75488" gradientTransform="matrix(0.708729, 0, 0, 0.708996, -29.847, -210.541)"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2061" id="linearGradient2976" gradientUnits="userSpaceOnUse" spreadMethod="reflect" x1="401.51196" y1="455.60751" x2="372.63031" y2="426.72598" gradientTransform="matrix(0.916689, 0, 0, 0.917034, -114.437, -306.235)"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2143" id="linearGradient2978" gradientUnits="userSpaceOnUse" x1="378.74927" y1="513.11932" x2="378.74927" y2="403.91809" gradientTransform="matrix(0.916689, 0, 0, 0.917034, -114.437, -306.235)"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2143" id="linearGradient2981" gradientUnits="userSpaceOnUse" spreadMethod="reflect" x1="406.76318" y1="387.34207" x2="405.88797" y2="465.23468" gradientTransform="matrix(0.916689, 0, 0, 0.917034, -114.437, -306.235)"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2143" id="linearGradient2983" gradientUnits="userSpaceOnUse" x1="378.74927" y1="513.11932" x2="378.74927" y2="403.91809" gradientTransform="matrix(0.916689, 0, 0, 0.917034, -114.437, -306.235)"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2143" id="linearGradient2986" gradientUnits="userSpaceOnUse" x1="393.83939" y1="404.70325" x2="393.83939" y2="515.28473" gradientTransform="matrix(0.93005, 0, 0, 0.9304, -119.872, -312.383)"/>
      <radialGradient inkscape:collect="always" xlink:href="#linearGradient2189" id="radialGradient2989" gradientUnits="userSpaceOnUse" cx="387.54489" cy="514.14392" fx="387.54489" fy="514.14392" r="108.39503" gradientTransform="matrix(1.08387, 0, 0, 1.08428, -182.443, -383.166)"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2143" id="linearGradient2991" gradientUnits="userSpaceOnUse" x1="404.61307" y1="510.83701" x2="404.61307" y2="406.23483" gradientTransform="matrix(1.08387, 0, 0, 1.08428, -182.443, -383.166)"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2160" id="linearGradient2994" gradientUnits="userSpaceOnUse" x1="406.76318" y1="402.41534" x2="406.76318" y2="519.04663" gradientTransform="matrix(1.11713, 0, 0, 1.11755, -195.969, -398.469)"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2143" id="linearGradient2998" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.834046, 0, 0, 1.19897, -124.125, -349.237)" spreadMethod="reflect" x1="337.99429" y1="361.38681" x2="336.71158" y2="369.07602"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2143" id="linearGradient3001" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.834046, 0, 0, 1.19897, -124.125, -349.237)" spreadMethod="reflect" x1="234.90314" y1="340.21918" x2="243.74902" y2="372.00415"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2143" id="linearGradient3004" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.834046, 0, 0, 1.19897, -124.125, -349.237)" spreadMethod="reflect" x1="271.04855" y1="350.81409" x2="271.04855" y2="354.59967"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2143" id="linearGradient3007" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.834046, 0, 0, 1.19897, -124.125, -349.237)" spreadMethod="reflect" x1="302.40866" y1="349.93118" x2="302.40866" y2="351.37485"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2160" id="linearGradient3010" gradientUnits="userSpaceOnUse" gradientTransform="matrix(2.904, 0, 0, 0.42713, -164.029, -349.237)" x1="91.790848" y1="1207.4102" x2="91.790848" y2="1233.5283"/>
      <radialGradient inkscape:collect="always" xlink:href="#linearGradient2118" id="radialGradient3013" gradientUnits="userSpaceOnUse" gradientTransform="matrix(2.904, 0, 0, 0.42713, -164.029, -349.237)" cx="81.898430" cy="1244.3292" fx="81.898430" fy="1244.3292" r="87.748901"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2127" id="linearGradient3016" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.13228, 0, 0, 1.09599, -162.465, -351.984)" x1="260.92453" y1="415.67227" x2="241.63106" y2="393.49112"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2127" id="linearGradient3020" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.825706, 0, 0, 1.21108, -124.125, -349.237)" x1="286.23761" y1="529.02618" x2="286.23761" y2="291.34518"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2099" id="linearGradient3024" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.00653, 0, 0, 1.23234, -164.029, -348.737)" x1="265.96707" y1="439.40738" x2="265.96704" y2="293.78394"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2160" id="linearGradient3027" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.5547, 0, 0, 1.80278, -124.125, -349.237)" spreadMethod="pad" x1="263.20532" y1="258.24908" x2="286.64139" y2="258.24905"/>
      <radialGradient inkscape:collect="always" xlink:href="#linearGradient2143" id="radialGradient3030" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.5547, 0, 0, 1.80278, -124.125, -349.237)" spreadMethod="reflect" cx="272.21921" cy="277.40359" fx="270.41644" fy="276.27689" r="36.908104"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2195" id="linearGradient3033" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.55423, 0, 0, 0.643406, -124.125, -349.237)" x1="241.94136" y1="802.59015" x2="241.94136" y2="653.53149"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2143" id="linearGradient3036" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.5288, 0, 0, 0.654109, -124.125, -349.237)" x1="238.77391" y1="787.97565" x2="238.77391" y2="661.18909"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2127" id="linearGradient3039" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.68783, 0, 0, 0.592476, -124.125, -349.237)" x1="224.52806" y1="781.65656" x2="224.51540" y2="660.40173"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2143" id="linearGradient3041" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.910781, 0, 0, 1.09796, -124.125, -349.237)" x1="409.31522" y1="405.39236" x2="389.55954" y2="350.85809"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2143" id="linearGradient3044" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.910781, 0, 0, 1.09796, -124.125, -349.237)" x1="410.82294" y1="486.58331" x2="410.82294" y2="328.51572"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2143" id="linearGradient3047" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.919171, 0, 0, 1.10218, -126.934, -351.773)" x1="390.37320" y1="334.77237" x2="390.37320" y2="489.11697"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2143" id="linearGradient3050" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.720082, 0, 0, 1.38873, -124.125, -349.237)" spreadMethod="reflect" x1="665.36505" y1="310.82990" x2="665.36505" y2="311.97168"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2143" id="linearGradient3053" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.720082, 0, 0, 1.38873, -124.125, -349.237)" spreadMethod="reflect" x1="665.36487" y1="310.82980" x2="665.36487" y2="313.87778"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2143" id="linearGradient3056" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.720082, 0, 0, 1.38873, -124.125, -349.237)" spreadMethod="reflect" x1="641.06244" y1="319.18408" x2="639.63287" y2="327.53815"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2127" id="linearGradient3059" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.720082, 0, 0, 1.38873, -124.125, -349.237)" x1="656.78778" y1="373.10587" x2="656.78760" y2="278.93256"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2143" id="linearGradient3061" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.723143, 0, 0, 1.38285, -124.125, -349.237)" x1="653.25012" y1="373.10922" x2="653.25012" y2="279.66632"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2143" id="linearGradient3064" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.5547, 0, 0, 1.80278, -124.125, -349.237)" spreadMethod="reflect" x1="272.21921" y1="285.29071" x2="308.27469" y2="262.75601"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2189" id="linearGradient3067" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.38538, 0, 0, 0.721822, -124.125, -349.237)" x1="224.19640" y1="503.96042" x2="224.19640" y2="749.76471"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2061" id="linearGradient3070" gradientUnits="userSpaceOnUse" gradientTransform="matrix(4.09268, 0, 0, 0.244339, -124.125, -349.237)" x1="82.159187" y1="1523.0514" x2="82.159187" y2="1441.1952"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2061" id="linearGradient3073" gradientUnits="userSpaceOnUse" gradientTransform="matrix(2.82843, 0, 0, 0.353553, 349.237, 124.125)" x1="-159.93404" y1="-1428.3561" x2="-159.93404" y2="-1484.4293"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2061" id="linearGradient3076" gradientUnits="userSpaceOnUse" gradientTransform="matrix(2.82843, 0, 0, 0.353553, 349.237, -124.125)" x1="-159.93404" y1="480.33670" x2="-159.93404" y2="424.26443"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2061" id="linearGradient3079" gradientUnits="userSpaceOnUse" gradientTransform="matrix(4.09268, 0, 0, 0.244339, 124.125, 349.237)" x1="-82.464378" y1="-2178.7864" x2="-82.464378" y2="-2258.8235"/>
      <radialGradient inkscape:collect="always" xlink:href="#linearGradient2061" id="radialGradient3082" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0, 1.33333, -1.33334, 0, 870.693, -196.875)" cx="164.88269" cy="367.24536" fx="164.88269" fy="367.24536" r="14.883290"/>
      <radialGradient inkscape:collect="always" xlink:href="#linearGradient2061" id="radialGradient3085" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0, -1.33333, -1.33334, 0, 870.693, 403.125)" cx="164.88269" cy="367.24536" fx="164.88269" fy="367.24536" r="14.883290"/>
      <radialGradient inkscape:collect="always" xlink:href="#linearGradient2061" id="radialGradient3088" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0, -1.33333, 1.33334, 0, -443.943, 403.125)" cx="164.88269" cy="367.24536" fx="164.88269" fy="367.24536" r="14.883290"/>
      <radialGradient inkscape:collect="always" xlink:href="#linearGradient2061" id="radialGradient3091" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.33333, 0, 0, 1.33334, -174.125, -466.692)" cx="164.88359" cy="367.24536" fx="164.88359" fy="367.24536" r="14.648915"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2143" id="linearGradient3094" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.793492, 0, 0, 1.26025, -124.125, -349.237)" x1="219.60535" y1="385.28711" x2="169.10524" y2="327.64883"/>
      <linearGradient inkscape:collect="always" xlink:href="#linearGradient2195" id="linearGradient3097" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.36931, 0, 0, 0.730297, -124.125, -349.237)" x1="234.54350" y1="745.65509" x2="234.54350" y2="484.63116"/>
      <radialGradient inkscape:collect="always" xlink:href="#linearGradient2195" id="radialGradient3100" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.793492, 0, 0, 1.26025, -124.125, -349.237)" spreadMethod="reflect" cx="195.33907" cy="367.99432" fx="195.33907" fy="367.99432" r="10.189606"/>
    </defs >
    <path d="M 30.875,63.13818 C 17.07501,63.13818 5.87501,81.05816 5.875,103.13818 C 5.875,125.21818 17.07501,143.13817 30.875,143.13818 C 44.67499,143.13818 55.875,125.21817 55.875,103.13818 C 55.875,81.05818 44.67499,63.13819 30.875,63.13818 z M 20.875,93.13818 C 26.39495,93.13818 30.875,97.61819 30.875,103.13818 C 30.875,108.65818 26.39494,113.13818 20.875,113.13818 C 15.35506,113.13818 10.875,108.65817 10.875,103.13818 C 10.87501,97.6182 15.35506,93.13818 20.875,93.13818 z" id="path2384" style="fill: url(#radialGradient3100) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: rgb(0, 0, 0); stroke-width: 1; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.196078;"/>
    <rect height="200" id="rect2052" rx="20" ry="20" style="fill: url(#linearGradient3097) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 1;" width="375" x="25.875" y="3.1253552"/>
    <path d="M 26.46875,65.85693 C 10.97866,73.07925 6.98398,92.66893 8.18432,108.2536 C 9.31104,121.04905 14.60474,137.21345 28.44484,140.72776 C 42.10525,142.53231 50.00942,127.50227 52.38715,116.08226 C 55.89979,99.49037 53.34672,79.26696 39.5,67.98193 C 35.5773,65.44914 31.00487,64.5967 26.46875,65.85693 z M 21.28125,91.16943 C 32.40125,91.054 37.14905,107.44937 27.41108,112.98513 C 18.21517,120.06859 4.68188,108.34728 10,98.10693 C 12.18219,93.83917 16.46195,91.13653 21.28125,91.16943 z" id="path2424" style="opacity: 0.563452; fill: none; fill-opacity: 1; fill-rule: evenodd; stroke: url(#linearGradient3094) rgb(0, 0, 0); stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 1;"/>
    <path d="M 45.875,23.12537 L 25.87495,23.12537 C 25.87495,12.08534 34.83495,3.12531 45.87495,3.12531 L 45.875,23.12537 z" id="path2058" style="fill: url(#radialGradient3091) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 1.59894; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.196078;"/>
    <path d="M 45.875,183.12531 L 45.875,203.12536 C 34.83497,203.12536 25.87493,194.16537 25.87493,183.12536 L 45.875,183.12531 z" id="path2077" style="fill: url(#radialGradient3088) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 1.59894; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.196078;"/>
    <path d="M 380.87493,183.12531 L 380.87493,203.12536 C 391.91496,203.12536 400.875,194.16537 400.875,183.12536 L 380.87493,183.12531 z" id="path2081" style="fill: url(#radialGradient3085) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 1.59894; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.196078;"/>
    <path d="M 380.87493,23.12541 L 380.87493,3.12536 C 391.91496,3.12536 400.875,12.08535 400.875,23.12536 L 380.87493,23.12541 z" id="path2085" style="fill: url(#radialGradient3082) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 1.59894; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.196078;"/>
    <rect height="20" id="rect2103" style="fill: url(#linearGradient3079) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.196078;" transform="scale(-1, -1)" width="335" x="-380.875" y="-203.12537"/>
    <rect height="20" id="rect2107" style="fill: url(#linearGradient3076) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.196078;" transform="matrix(0, -1, 1, 0, 0, 0)" width="160" x="-183.12537" y="25.875"/>
    <rect height="20" id="rect2111" style="fill: url(#linearGradient3073) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.196078;" transform="matrix(0, -1, -1, 0, 0, 0)" width="160" x="-183.12537" y="-400.875"/>
    <rect height="20" id="rect2089" style="fill: url(#linearGradient3070) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.196078;" width="335" x="45.875" y="3.1253552"/>
    <rect height="180.16859" id="rect2054" rx="10" ry="10" style="fill: url(#linearGradient3067) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.196078;" width="345.79498" x="40.875" y="13.125356"/>
    <rect height="130" id="rect2603" rx="2.5" ry="65" style="fill: url(#linearGradient3064) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 1.25; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 1;" width="40" x="20.875" y="38.125355"/>
    <rect height="135" id="rect2348" style="opacity: 0.8; fill: url(#linearGradient3059) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: url(#linearGradient3061) rgb(0, 0, 0); stroke-width: 1.25; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 1;" width="70" x="315.875" y="38.125355"/>
    <rect height="135" id="rect2371" style="opacity: 0.03; fill: url(#linearGradient3056) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 1.11873; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.784314;" width="70" x="315.875" y="38.125355"/>
    <rect height="135" id="rect2367" style="opacity: 0.03; fill: url(#linearGradient3053) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 1.11873; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.784314;" width="70" x="315.875" y="38.125355"/>
    <rect height="135" id="rect2363" style="opacity: 0.03; fill: url(#linearGradient3050) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 1.11873; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.784314;" width="70" x="315.875" y="38.125355"/>
    <path d="M 186.10383,12.92399 L 310.51723,12.92399 C 313.80458,12.92399 316.58619,17.85462 316.58619,18.84073 C 331.75854,52.36891 331.75854,150.98121 316.58619,184.50938 C 316.58619,185.49552 314.5632,190.67265 310.51723,190.42612 L 186.10383,190.42612 C 182.74164,190.42612 180.0349,187.78727 180.0349,184.50938 L 180.0349,18.84073 C 180.0349,15.56286 182.74164,12.92399 186.10383,12.92399 z" id="path2206" style="fill: none; fill-opacity: 1; fill-rule: evenodd; stroke: url(#linearGradient3047) rgb(0, 0, 0); stroke-width: 1.25; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.784314;"/>
    <path d="M 187.37987,14.12536 L 309.45474,14.12536 C 312.6803,14.12536 315.40962,18.98927 315.40962,19.96203 C 330.29679,53.03652 330.29679,150.31443 315.40962,183.38891 C 315.40962,184.36171 313.42466,189.46879 309.45474,189.22559 L 187.37987,189.22559 C 184.08087,189.22559 181.425,186.62244 181.425,183.38891 L 181.425,19.96203 C 181.425,16.72852 184.08087,14.12536 187.37987,14.12536 z" id="rect2201" style="fill: rgb(159, 159, 159); fill-opacity: 1; fill-rule: evenodd; stroke: url(#linearGradient3044) rgb(0, 0, 0); stroke-width: 1.25; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.784314;"/>
    <path d="M 181.4375,38.13818 L 181.4375,88.13818 L 326.1875,88.13818 C 325.59411,69.7418 323.91809,52.10331 320.90625,38.13818 L 181.4375,38.13818 z" id="path2333" style="fill: url(#linearGradient3039) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: url(#linearGradient3041) rgb(0, 0, 0); stroke-width: 1.25; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.784314;"/>
    <path d="M 181.4375,107.12536 L 181.4375,169.13818 L 320.3125,169.13818 C 324.11259,152.51335 326.03565,130.04065 326.375,107.12536 L 181.4375,107.12536 z" id="path2569" style="fill: url(#linearGradient3036) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 1.25; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.784314;"/>
    <path d="M 181.4375,108.13818 L 181.4375,168.13818 L 320.3125,168.13818 C 324.11259,152.05296 326.03565,130.30968 326.375,108.13818 L 181.4375,108.13818 z" id="path2585" style="fill: url(#linearGradient3033) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 1.25; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.784314;"/>
    <rect height="130" id="rect2613" rx="2.5" ry="65" style="opacity: 0.558376; fill: url(#radialGradient3030) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 1.25; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 1;" width="40" x="20.875" y="38.125355"/>
    <rect height="130" id="rect2619" rx="2.5" ry="65" style="opacity: 0.614213; fill: url(#linearGradient3027) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 1.25; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 1;" width="40" x="20.875" y="38.125355"/>
    <path d="M 53.03853,13.62536 C 94.38469,13.62536 129.52894,13.62536 170.8751,13.62536 C 195.6828,13.62536 195.6828,193.62536 170.8751,193.62536 C 129.52894,193.62536 94.38469,193.62536 53.03853,193.62536 C 40.63468,193.62537 40.63468,13.62536 53.03853,13.62536 z" id="rect2141" style="opacity: 0.5; fill: none; fill-opacity: 1; fill-rule: evenodd; stroke: url(#linearGradient3024) rgb(0, 0, 0); stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 1;"/>
    <path d="M 53.03853,13.12126 C 50.48382,13.12126 48.49401,20.73017 46.99165,32.44782 L 182.96885,32.44782 C 179.96412,20.73037 175.98448,13.12126 170.8751,13.12126 C 129.52894,13.12126 94.38469,13.12126 53.03853,13.12126 z" id="path2157" style="fill: rgb(250, 250, 250); fill-opacity: 1; fill-rule: evenodd; stroke: rgb(0, 0, 0); stroke-width: 1; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.392157;"/>
    <path d="M 47.72993,33.13818 C 43.4849,67.76814 43.48318,138.52301 47.72993,173.13818 L 182.2643,173.13818 C 190.75776,138.52283 190.75442,67.76795 182.2643,33.13818 L 47.72993,33.13818 z" id="path2152" style="fill: url(#linearGradient3020) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 0.5; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 1;"/>
    <rect height="130" id="rect2373" rx="7.5" ry="65" style="opacity: 0.5; fill: rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.196078;" width="15" x="57.141327" y="40.125355"/>
    <path d="M 48.27533,33.86189 C 44.06391,68.13388 44.06221,138.15735 48.27533,172.4147 L 181.74474,172.4147 C 190.17094,138.15717 190.16765,68.1337 181.74474,33.86189 L 48.27533,33.86189 z" id="path2226" style="fill: none; fill-opacity: 1; fill-rule: evenodd; stroke: url(#linearGradient3016) rgb(0, 0, 0); stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 1;"/>
    <path d="M 46.99159,172.63818 C 48.49369,184.75197 50.48522,192.63818 53.03846,192.63818 C 94.38461,192.63818 129.52885,192.63818 170.875,192.63818 C 175.9815,192.63818 179.96453,184.75207 182.96875,172.63818 L 46.99159,172.63818 z" id="path2168" style="fill: url(#radialGradient3013) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: rgb(0, 0, 0); stroke-width: 1; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.392157;"/>
    <path d="M 46.99159,172.63818 C 48.49369,184.75197 50.48522,192.63818 53.03846,192.63818 C 94.38461,192.63818 129.52885,192.63818 170.875,192.63818 C 175.9815,192.63818 179.96453,184.75207 182.96875,172.63818 L 46.99159,172.63818 z" id="path2156" style="opacity: 0.5; fill: url(#linearGradient3010) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 1; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 1;"/>
    <path d="M 48.59015,35.38818 C 44.39815,68.90503 44.39645,137.38564 48.59015,170.88818 L 181.44386,170.88818 C 189.83122,137.38547 189.82792,68.90485 181.44386,35.38818 L 48.59015,35.38818 z" id="path2169" style="opacity: 0.03; fill: url(#linearGradient3007) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 0.5; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 1;"/>
    <path d="M 48.59015,35.38818 C 44.39815,68.90503 44.39645,137.38564 48.59015,170.88818 L 181.44386,170.88818 C 189.83122,137.38547 189.82792,68.90485 181.44386,35.38818 L 48.59015,35.38818 z" id="path2175" style="opacity: 0.03; fill: url(#linearGradient3004) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 0.5; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 1;"/>
    <path d="M 48.59015,35.38818 C 44.39815,68.90503 44.39645,137.38564 48.59015,170.88818 L 181.44386,170.88818 C 189.83122,137.38547 189.82792,68.90485 181.44386,35.38818 L 48.59015,35.38818 z" id="path2183" style="opacity: 0.05; fill: url(#linearGradient3001) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 0.5; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 1;"/>
    <path d="M 48.59015,35.38818 C 44.39815,68.90503 44.39645,137.38564 48.59015,170.88818 L 181.44386,170.88818 C 189.83122,137.38547 189.82792,68.90485 181.44386,35.38818 L 48.59015,35.38818 z" id="path2224" style="opacity: 0.03; fill: url(#linearGradient2998) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 0.5; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 1;"/>
    <path d="M 320.25039,115.58555 C 320.25039,149.73623 292.5762,177.42083 258.43835,177.42082 C 224.30051,177.42082 196.62632,149.73623 196.62632,115.58555 C 196.62632,81.434864 224.30051,53.750267 258.43836,53.750267 C 292.5762,53.750267 320.25039,81.434864 320.25039,115.58555 L 320.25039,115.58555 z" id="path2230" style="opacity: 0.6; fill: none; fill-opacity: 1; fill-rule: evenodd; stroke: rgb(0, 0, 0); stroke-width: 1.25; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.784314;"/>
    <path d="M 320.25039,115.58555 C 320.25039,149.73623 292.5762,177.42083 258.43835,177.42082 C 224.30051,177.42082 196.62632,149.73623 196.62632,115.58555 C 196.62632,81.434864 224.30051,53.750267 258.43836,53.750267 C 292.5762,53.750267 320.25039,81.434864 320.25039,115.58555 L 320.25039,115.58555 z" id="path2232" style="opacity: 0.8; fill: none; fill-opacity: 1; fill-rule: evenodd; stroke: url(#linearGradient2994) rgb(0, 0, 0); stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.784314;"/>
    <path d="M 318.40714,115.5849 C 318.40714,148.7189 291.55688,175.57931 258.43541,175.5793 C 225.31394,175.5793 198.46369,148.7189 198.46369,115.5849 C 198.46369,82.450896 225.31394,55.590483 258.43542,55.590483 C 291.55688,55.590483 318.40714,82.450896 318.40714,115.5849 L 318.40714,115.5849 z" id="path2242" style="fill: url(#radialGradient2989) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: url(#linearGradient2991) rgb(0, 0, 0); stroke-width: 1.24999; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.784314;"/>
    <path d="M 309.89859,115.58564 C 309.89859,144.0173 286.85886,167.0657 258.4379,167.06569 C 230.01694,167.06569 206.97721,144.0173 206.97721,115.58564 C 206.97721,87.153983 230.01694,64.105574 258.4379,64.105574 C 286.85886,64.105574 309.89859,87.153983 309.89859,115.58564 L 309.89859,115.58564 z" id="path2254" style="fill: rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: url(#linearGradient2986) rgb(0, 0, 0); stroke-width: 1.25; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.784314;"/>
    <path d="M 309.15935,115.5855 C 309.15935,143.60871 286.4506,166.32601 258.43793,166.326 C 230.42527,166.326 207.71652,143.60871 207.71652,115.5855 C 207.71652,87.562289 230.42527,64.844991 258.43794,64.844991 C 286.4506,64.844991 309.15935,87.562289 309.15935,115.5855 L 309.15935,115.5855 z" id="path2260" style="fill: url(#linearGradient2981) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: url(#linearGradient2983) rgb(0, 0, 0); stroke-width: 1.25; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.784314;"/>
    <path d="M 309.15935,115.5855 C 309.15935,143.60871 286.4506,166.32601 258.43793,166.326 C 230.42527,166.326 207.71652,143.60871 207.71652,115.5855 C 207.71652,87.562289 230.42527,64.844991 258.43794,64.844991 C 286.4506,64.844991 309.15935,87.562289 309.15935,115.5855 L 309.15935,115.5855 z" id="path2243" style="opacity: 0.85; fill: url(#linearGradient2976) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: url(#linearGradient2978) rgb(0, 0, 0); stroke-width: 1.25; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.784314;"/>
    <path d="M 297.65261,115.58575 C 297.65261,137.25163 280.09557,154.81529 258.43785,154.81528 C 236.78014,154.81528 219.2231,137.25163 219.2231,115.58575 C 219.2231,93.919879 236.78014,76.356219 258.43786,76.356219 C 280.09557,76.356219 297.65261,93.919879 297.65261,115.58575 L 297.65261,115.58575 z" id="path2274" style="fill: rgb(80, 80, 80); fill-opacity: 1; fill-rule: evenodd; stroke: url(#linearGradient2973) rgb(0, 0, 0); stroke-width: 1.25; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.784314;"/>
    <path d="M 235.1875,88.34529 C 227.37734,94.97681 222.31249,104.73973 222.3125,115.78279 C 222.3125,126.89379 227.45032,136.71341 235.34375,143.34529 L 281.53125,143.34529 C 289.42468,136.71341 294.5625,126.89379 294.5625,115.78279 C 294.5625,104.73973 289.49766,94.97681 281.6875,88.34529 L 235.1875,88.34529 z" id="path2286" style="fill: rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 1.88141; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.784314;"/>
    <path d="M 237.1444,89.97164 C 229.9916,96.21097 225.35305,105.39651 225.35306,115.78649 C 225.35306,126.24038 230.05844,135.47927 237.2875,141.71894 L 279.5875,141.71894 C 286.81656,135.47927 291.52194,126.24038 291.52194,115.78649 C 291.52194,105.39651 286.8834,96.21097 279.7306,89.97164 L 237.1444,89.97164 z" id="path2319" style="fill: rgb(25, 25, 25); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 1.88141; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.784314;"/>
    <path d="M 281.39842,115.58577 C 281.39842,128.27128 271.11864,138.55493 258.43789,138.55492 C 245.75714,138.55492 235.47736,128.27128 235.47736,115.58577 C 235.47736,102.90025 245.75714,92.616605 258.43789,92.616605 C 271.11864,92.616605 281.39842,102.90025 281.39842,115.58577 L 281.39842,115.58577 z" id="path2299" style="fill: url(#radialGradient2968) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 2.6962; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.784314;"/>
    <path d="M 281.39842,115.58577 C 281.39842,128.27128 271.11864,138.55493 258.43789,138.55492 C 245.75714,138.55492 235.47736,128.27128 235.47736,115.58577 C 235.47736,102.90025 245.75714,92.616605 258.43789,92.616605 C 271.11864,92.616605 281.39842,102.90025 281.39842,115.58577 L 281.39842,115.58577 z" id="path2325" style="opacity: 0.445026; fill: url(#radialGradient2965) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 2.6962; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.784314;"/>
    <path d="M 281.39842,115.58577 C 281.39842,128.27128 271.11864,138.55493 258.43789,138.55492 C 245.75714,138.55492 235.47736,128.27128 235.47736,115.58577 C 235.47736,102.90025 245.75714,92.616605 258.43789,92.616605 C 271.11864,92.616605 281.39842,102.90025 281.39842,115.58577 L 281.39842,115.58577 z" id="path2329" style="opacity: 0.198953; fill: url(#radialGradient2962) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 2.6962; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.784314;"/>
    <path d="M 385.16789,46.98193 C 382.2674,55.61978 380.16789,78.51092 380.16789,105.63818 C 380.16789,132.76544 382.2674,155.62533 385.16789,164.26318 L 385.16789,46.98193 z" id="path2358" style="opacity: 0.7; fill: rgb(0, 0, 0); fill-opacity: 0.784314; fill-rule: evenodd; stroke: none; stroke-width: 1.11873; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.784314;"/>
    <rect height="135" id="rect2375" style="opacity: 0.03; fill: url(#linearGradient2958) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 1.11873; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.784314;" width="70" x="315.875" y="38.125355"/>
    <path transform="matrix(0, -1, 1, 0, 0, 0)" style="font-style: normal; font-variant: normal; font-weight: bold; font-stretch: normal; text-anchor: start; fill: none; fill-opacity: 1; stroke: rgb(255, 255, 255); stroke-width: 0.625; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 4; stroke-opacity: 0.196078; font-family: Bitstream Vera Serif;" d="M -142.77359,123.0159 C -143.00407,123.91825 -143.41813,124.58817 -144.01578,125.02567 C -144.61344,125.46317 -145.41617,125.68192 -146.42398,125.68192 C -147.90055,125.68192 -149.06754,125.27469 -149.92496,124.46024 C -150.78238,123.64578 -151.21109,122.54129 -151.21109,121.14676 C -151.21109,119.74833 -150.78238,118.64188 -149.92496,117.82742 C -149.06754,117.01298 -147.90055,116.60575 -146.42398,116.60574 C -145.90446,116.60575 -145.36344,116.66825 -144.80093,116.79324 C -144.23844,116.91825 -143.64274,117.1077 -143.01382,117.3616 L -143.01382,119.51199 L -143.75797,119.51199 C -143.91032,118.77763 -144.18766,118.22782 -144.59,117.86258 C -144.99235,117.49735 -145.5236,117.31474 -146.18375,117.31473 C -147.03531,117.31474 -147.66813,117.62821 -148.08218,118.25516 C -148.49625,118.88212 -148.70328,119.84598 -148.70328,121.14676 C -148.70328,122.44754 -148.49625,123.41043 -148.08218,124.03543 C -147.66813,124.66043 -147.03141,124.97293 -146.17203,124.97293 C -145.59,124.97293 -145.11442,124.81082 -144.74527,124.4866 C -144.37614,124.16239 -144.10758,123.67215 -143.93961,123.0159 L -142.77359,123.0159 z M -135.54312,121.68582 L -135.54312,124.80301 L -134.6525,124.80301 L -134.6525,125.51199 L -137.61734,125.51199 L -137.61734,124.72098 C -137.89078,125.0491 -138.19547,125.29129 -138.5314,125.44754 C -138.86734,125.60379 -139.25016,125.68192 -139.67984,125.68192 C -140.31656,125.68192 -140.80582,125.51102 -141.14761,125.16922 C -141.48941,124.82742 -141.66031,124.33817 -141.66031,123.70145 C -141.66031,123.00223 -141.41519,122.47879 -140.92496,122.13113 C -140.43472,121.78348 -139.69547,121.60965 -138.70718,121.60965 L -137.61734,121.60965 L -137.61734,121.24051 C -137.61734,120.73661 -137.73649,120.36454 -137.97476,120.1243 C -138.21305,119.88407 -138.58219,119.76395 -139.08218,119.76395 C -139.49625,119.76395 -139.81558,119.84891 -140.04019,120.01883 C -140.2648,120.18876 -140.42398,120.46708 -140.51773,120.85379 L -141.17984,120.85379 L -141.17984,119.51199 C -140.80875,119.37919 -140.42398,119.27958 -140.02554,119.21317 C -139.62711,119.14677 -139.20719,119.11356 -138.76578,119.11356 C -137.6525,119.11356 -136.83707,119.32059 -136.31949,119.73465 C -135.80192,120.14872 -135.54313,120.79911 -135.54312,121.68582 L -135.54312,121.68582 z M -137.61734,123.55496 L -137.61734,122.30692 L -138.39664,122.30692 C -138.78336,122.30692 -139.08023,122.41239 -139.28726,122.62332 C -139.4943,122.83426 -139.59781,123.137 -139.59781,123.53152 C -139.59781,123.92606 -139.52262,124.22098 -139.37222,124.41629 C -139.22184,124.6116 -138.99234,124.70926 -138.68375,124.70926 C -138.36344,124.70926 -138.10563,124.60379 -137.91031,124.39285 C -137.715,124.18192 -137.61734,123.90262 -137.61734,123.55496 L -137.61734,123.55496 z M -127.08804,120.30301 C -126.79899,119.88895 -126.48649,119.58719 -126.15054,119.39774 C -125.81461,119.20829 -125.42204,119.11356 -124.97281,119.11356 C -124.25798,119.11356 -123.7238,119.31571 -123.37027,119.72 C -123.01677,120.1243 -122.84001,120.73465 -122.84,121.55106 L -122.84,124.80301 L -121.94937,124.80301 L -121.94937,125.51199 L -125.65836,125.51199 L -125.65836,124.80301 L -124.91422,124.80301 L -124.91422,121.8616 C -124.91422,121.08426 -124.97379,120.59403 -125.09293,120.3909 C -125.21208,120.18778 -125.43376,120.08622 -125.75797,120.08621 C -126.12516,120.08622 -126.41032,120.22782 -126.61343,120.51102 C -126.81657,120.79422 -126.91813,121.19754 -126.91812,121.72098 L -126.91812,124.80301 L -126.17398,124.80301 L -126.17398,125.51199 L -129.73648,125.51199 L -129.73648,124.80301 L -128.99234,124.80301 L -128.99234,121.8616 C -128.99235,121.08426 -129.05289,120.59403 -129.17398,120.3909 C -129.29508,120.18778 -129.51578,120.08622 -129.83609,120.08621 C -130.20719,120.08622 -130.4943,120.22782 -130.69742,120.51102 C -130.90055,120.79422 -131.00211,121.19754 -131.00211,121.72098 L -131.00211,124.80301 L -130.25797,124.80301 L -130.25797,125.51199 L -133.96109,125.51199 L -133.96109,124.80301 L -133.07632,124.80301 L -133.07632,119.99246 L -133.96109,119.99246 L -133.96109,119.28348 L -131.00211,119.28348 L -131.00211,120.16238 C -130.75992,119.79911 -130.48258,119.53348 -130.17007,119.36551 C -129.85758,119.19755 -129.48649,119.11356 -129.05679,119.11356 C -128.54899,119.11356 -128.13688,119.21024 -127.82047,119.40359 C -127.50407,119.59696 -127.25993,119.89676 -127.08804,120.30301 L -127.08804,120.30301 z M -116.85757,121.99637 C -116.85758,121.17606 -116.93375,120.60087 -117.08609,120.27078 C -117.23844,119.94071 -117.4982,119.77567 -117.86539,119.77567 C -118.22086,119.77567 -118.47574,119.93778 -118.63004,120.26199 C -118.78434,120.58622 -118.86148,121.12919 -118.86148,121.8909 L -118.86148,121.99637 L -116.85757,121.99637 z M -114.57828,122.69363 L -118.86148,122.69363 L -118.86148,122.74051 C -118.86148,123.5452 -118.74039,124.12625 -118.4982,124.48367 C -118.25602,124.8411 -117.86539,125.01981 -117.32632,125.01981 C -116.87711,125.01981 -116.51383,124.90067 -116.23648,124.66238 C -115.95914,124.4241 -115.78141,124.0784 -115.70328,123.62527 L -114.73062,123.62527 C -114.8986,124.33231 -115.23258,124.85184 -115.73257,125.18387 C -116.23258,125.5159 -116.9318,125.68192 -117.83023,125.68192 C -118.90836,125.68192 -119.73551,125.39774 -120.31168,124.82938 C -120.88785,124.26102 -121.17593,123.4495 -121.17593,122.39481 C -121.17593,121.36356 -120.88101,120.55887 -120.29117,119.98074 C -119.70133,119.40262 -118.88101,119.11356 -117.83023,119.11356 C -116.79899,119.11356 -116.00797,119.41727 -115.45718,120.02469 C -114.90641,120.63212 -114.61344,121.52176 -114.57828,122.69363 L -114.57828,122.69363 z M -107.58218,119.21317 L -107.58218,121.07059 L -108.24429,121.07059 C -108.26774,120.73856 -108.35758,120.49149 -108.51382,120.32938 C -108.67008,120.16727 -108.89664,120.08622 -109.19351,120.08621 C -109.64664,120.08622 -110.00406,120.28544 -110.26578,120.68387 C -110.5275,121.08231 -110.65836,121.63504 -110.65836,122.34207 L -110.65836,124.80301 L -109.5275,124.80301 L -109.5275,125.51199 L -113.61734,125.51199 L -113.61734,124.80301 L -112.73257,124.80301 L -112.73257,119.99246 L -113.68179,119.99246 L -113.68179,119.28348 L -110.65836,119.28348 L -110.65836,120.3909 C -110.45523,119.95731 -110.18668,119.63602 -109.85269,119.42703 C -109.51871,119.21805 -109.10953,119.11356 -108.62515,119.11356 C -108.50406,119.11356 -108.3566,119.12235 -108.18277,119.13992 C -108.00895,119.15751 -107.80875,119.18192 -107.58218,119.21317 L -107.58218,119.21317 z M -101.09,121.68582 L -101.09,124.80301 L -100.19937,124.80301 L -100.19937,125.51199 L -103.16422,125.51199 L -103.16422,124.72098 C -103.43766,125.0491 -103.74234,125.29129 -104.07828,125.44754 C -104.41422,125.60379 -104.79703,125.68192 -105.22672,125.68192 C -105.86344,125.68192 -106.35269,125.51102 -106.69449,125.16922 C -107.03629,124.82742 -107.20718,124.33817 -107.20718,123.70145 C -107.20718,123.00223 -106.96207,122.47879 -106.47183,122.13113 C -105.9816,121.78348 -105.24234,121.60965 -104.25406,121.60965 L -103.16422,121.60965 L -103.16422,121.24051 C -103.16422,120.73661 -103.28336,120.36454 -103.52164,120.1243 C -103.75992,119.88407 -104.12906,119.76395 -104.62906,119.76395 C -105.04312,119.76395 -105.36246,119.84891 -105.58707,120.01883 C -105.81168,120.18876 -105.97086,120.46708 -106.06461,120.85379 L -106.72672,120.85379 L -106.72672,119.51199 C -106.35562,119.37919 -105.97086,119.27958 -105.57242,119.21317 C -105.17398,119.14677 -104.75406,119.11356 -104.31265,119.11356 C -103.19938,119.11356 -102.38395,119.32059 -101.86636,119.73465 C -101.34879,120.14872 -101.09,120.79911 -101.09,121.68582 L -101.09,121.68582 z M -103.16422,123.55496 L -103.16422,122.30692 L -103.94351,122.30692 C -104.33023,122.30692 -104.62711,122.41239 -104.83414,122.62332 C -105.04117,122.83426 -105.14469,123.137 -105.14468,123.53152 C -105.14469,123.92606 -105.06949,124.22098 -104.9191,124.41629 C -104.76871,124.6116 -104.53922,124.70926 -104.23062,124.70926 C -103.91031,124.70926 -103.6525,124.60379 -103.45718,124.39285 C -103.26188,124.18192 -103.16422,123.90262 -103.16422,123.55496 L -103.16422,123.55496 z" id="text2445"/>
    <path transform="matrix(0, -1, 1, 0, 0, 0)" style="font-style: normal; font-variant: normal; font-weight: bold; font-stretch: normal; text-anchor: start; fill: none; fill-opacity: 1; stroke: rgb(0, 0, 0); stroke-width: 0.625; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 4; stroke-opacity: 0.196078; font-family: Bitstream Vera Serif;" d="M -141.35959,121.60191 C -141.59007,122.50426 -142.00413,123.17418 -142.60178,123.61168 C -143.19944,124.04918 -144.00217,124.26793 -145.00998,124.26793 C -146.48655,124.26793 -147.65354,123.8607 -148.51096,123.04625 C -149.36838,122.2318 -149.79709,121.12731 -149.79709,119.73277 C -149.79709,118.33434 -149.36838,117.2279 -148.51096,116.41344 C -147.65354,115.59899 -146.48655,115.19177 -145.00998,115.19176 C -144.49045,115.19177 -143.94944,115.25427 -143.38693,115.37926 C -142.82444,115.50427 -142.22874,115.69372 -141.59982,115.94762 L -141.59982,118.09801 L -142.34396,118.09801 C -142.49632,117.36364 -142.77366,116.81383 -143.17599,116.44859 C -143.57835,116.08337 -144.10959,115.90075 -144.76974,115.90074 C -145.62131,115.90075 -146.25412,116.21423 -146.66818,116.84117 C -147.08225,117.46813 -147.28928,118.432 -147.28928,119.73277 C -147.28928,121.03356 -147.08225,121.99645 -146.66818,122.62144 C -146.25412,123.24645 -145.61741,123.55895 -144.75803,123.55894 C -144.176,123.55895 -143.70042,123.39684 -143.33127,123.07262 C -142.96214,122.7484 -142.69358,122.25817 -142.5256,121.60191 L -141.35959,121.60191 z M -134.12912,120.27184 L -134.12912,123.38902 L -133.23849,123.38902 L -133.23849,124.09801 L -136.20334,124.09801 L -136.20334,123.30699 C -136.47678,123.63512 -136.78147,123.8773 -137.1174,124.03355 C -137.45334,124.1898 -137.83615,124.26793 -138.26584,124.26793 C -138.90256,124.26793 -139.39182,124.09703 -139.73361,123.75523 C -140.07541,123.41344 -140.24631,122.92418 -140.24631,122.28746 C -140.24631,121.58824 -140.00119,121.06481 -139.51096,120.71715 C -139.02072,120.3695 -138.28147,120.19567 -137.29318,120.19566 L -136.20334,120.19566 L -136.20334,119.82652 C -136.20334,119.32262 -136.32248,118.95055 -136.56076,118.71031 C -136.79905,118.47008 -137.16819,118.34997 -137.66818,118.34996 C -138.08225,118.34997 -138.40158,118.43493 -138.62619,118.60484 C -138.8508,118.77477 -139.00998,119.05309 -139.10373,119.4398 L -139.76584,119.4398 L -139.76584,118.09801 C -139.39475,117.9652 -139.00998,117.86559 -138.61154,117.79918 C -138.21311,117.73278 -137.79319,117.69958 -137.35178,117.69957 C -136.2385,117.69958 -135.42307,117.90661 -134.90549,118.32066 C -134.38792,118.73473 -134.12913,119.38512 -134.12912,120.27184 L -134.12912,120.27184 z M -136.20334,122.14098 L -136.20334,120.89293 L -136.98264,120.89293 C -137.36936,120.89293 -137.66623,120.9984 -137.87326,121.20934 C -138.08029,121.42028 -138.18381,121.72301 -138.18381,122.11754 C -138.18381,122.51207 -138.10861,122.80699 -137.95822,123.0023 C -137.80783,123.19762 -137.57834,123.29527 -137.26974,123.29527 C -136.94944,123.29527 -136.69162,123.1898 -136.49631,122.97887 C -136.301,122.76793 -136.20334,122.48863 -136.20334,122.14098 L -136.20334,122.14098 z M -125.67404,118.88902 C -125.38499,118.47497 -125.07249,118.17321 -124.73654,117.98375 C -124.40061,117.7943 -124.00804,117.69958 -123.55881,117.69957 C -122.84397,117.69958 -122.30979,117.90172 -121.95627,118.30602 C -121.60276,118.71032 -121.42601,119.32067 -121.42599,120.13707 L -121.42599,123.38902 L -120.53537,123.38902 L -120.53537,124.09801 L -124.24435,124.09801 L -124.24435,123.38902 L -123.50021,123.38902 L -123.50021,120.44762 C -123.50022,119.67028 -123.55979,119.18004 -123.67892,118.97691 C -123.79807,118.77379 -124.01975,118.67223 -124.34396,118.67223 C -124.71116,118.67223 -124.99632,118.81383 -125.19943,119.09703 C -125.40256,119.38024 -125.50413,119.78356 -125.50412,120.30699 L -125.50412,123.38902 L -124.75998,123.38902 L -124.75998,124.09801 L -128.32248,124.09801 L -128.32248,123.38902 L -127.57834,123.38902 L -127.57834,120.44762 C -127.57834,119.67028 -127.63889,119.18004 -127.75998,118.97691 C -127.88108,118.77379 -128.10178,118.67223 -128.42209,118.67223 C -128.79319,118.67223 -129.0803,118.81383 -129.28342,119.09703 C -129.48655,119.38024 -129.58811,119.78356 -129.5881,120.30699 L -129.5881,123.38902 L -128.84396,123.38902 L -128.84396,124.09801 L -132.54709,124.09801 L -132.54709,123.38902 L -131.66232,123.38902 L -131.66232,118.57848 L -132.54709,118.57848 L -132.54709,117.86949 L -129.5881,117.86949 L -129.5881,118.7484 C -129.34592,118.38512 -129.06858,118.1195 -128.75607,117.95152 C -128.44358,117.78356 -128.07248,117.69958 -127.64279,117.69957 C -127.13499,117.69958 -126.72288,117.79626 -126.40646,117.98961 C -126.09006,118.18297 -125.84592,118.48278 -125.67404,118.88902 L -125.67404,118.88902 z M -115.44357,120.58238 C -115.44358,119.76207 -115.51975,119.18688 -115.67209,118.8568 C -115.82444,118.52672 -116.0842,118.36168 -116.45139,118.36168 C -116.80686,118.36168 -117.06174,118.52379 -117.21603,118.84801 C -117.37033,119.17223 -117.44748,119.7152 -117.44748,120.47691 L -117.44748,120.58238 L -115.44357,120.58238 z M -113.16428,121.27965 L -117.44748,121.27965 L -117.44748,121.32652 C -117.44748,122.13121 -117.32639,122.71227 -117.0842,123.06969 C -116.84201,123.42711 -116.45139,123.60582 -115.91232,123.60582 C -115.46311,123.60582 -115.09983,123.48668 -114.82248,123.2484 C -114.54514,123.01012 -114.36741,122.66441 -114.28928,122.21129 L -113.31662,122.21129 C -113.4846,122.91832 -113.81858,123.43785 -114.31857,123.76988 C -114.81858,124.10191 -115.5178,124.26793 -116.41623,124.26793 C -117.49436,124.26793 -118.3215,123.98375 -118.89767,123.41539 C -119.47385,122.84703 -119.76193,122.03551 -119.76193,120.98082 C -119.76193,119.94957 -119.46701,119.14489 -118.87717,118.56676 C -118.28732,117.98864 -117.46701,117.69958 -116.41623,117.69957 C -115.38498,117.69958 -114.59397,118.00329 -114.04318,118.6107 C -113.49241,119.21813 -113.19944,120.10778 -113.16428,121.27965 L -113.16428,121.27965 z M -106.16818,117.79918 L -106.16818,119.6566 L -106.83029,119.6566 C -106.85374,119.32457 -106.94358,119.0775 -107.09982,118.91539 C -107.25608,118.75329 -107.48264,118.67223 -107.77951,118.67223 C -108.23264,118.67223 -108.59006,118.87145 -108.85178,119.26988 C -109.1135,119.66832 -109.24436,120.22106 -109.24435,120.92809 L -109.24435,123.38902 L -108.11349,123.38902 L -108.11349,124.09801 L -112.20334,124.09801 L -112.20334,123.38902 L -111.31857,123.38902 L -111.31857,118.57848 L -112.26779,118.57848 L -112.26779,117.86949 L -109.24435,117.86949 L -109.24435,118.97691 C -109.04123,118.54333 -108.77268,118.22204 -108.43869,118.01305 C -108.10471,117.80407 -107.69553,117.69958 -107.21115,117.69957 C -107.09006,117.69958 -106.9426,117.70837 -106.76877,117.72594 C -106.59495,117.74352 -106.39475,117.76794 -106.16818,117.79918 L -106.16818,117.79918 z M -99.675995,120.27184 L -99.675995,123.38902 L -98.78537,123.38902 L -98.78537,124.09801 L -101.75021,124.09801 L -101.75021,123.30699 C -102.02366,123.63512 -102.32834,123.8773 -102.66428,124.03355 C -103.00022,124.1898 -103.38303,124.26793 -103.81271,124.26793 C -104.44943,124.26793 -104.93869,124.09703 -105.28049,123.75523 C -105.62228,123.41344 -105.79318,122.92418 -105.79318,122.28746 C -105.79318,121.58824 -105.54807,121.06481 -105.05783,120.71715 C -104.5676,120.3695 -103.82834,120.19567 -102.84006,120.19566 L -101.75021,120.19566 L -101.75021,119.82652 C -101.75022,119.32262 -101.86936,118.95055 -102.10764,118.71031 C -102.34592,118.47008 -102.71506,118.34997 -103.21506,118.34996 C -103.62912,118.34997 -103.94846,118.43493 -104.17307,118.60484 C -104.39768,118.77477 -104.55686,119.05309 -104.6506,119.4398 L -105.31271,119.4398 L -105.31271,118.09801 C -104.94162,117.9652 -104.55686,117.86559 -104.15842,117.79918 C -103.75998,117.73278 -103.34006,117.69958 -102.89865,117.69957 C -101.78537,117.69958 -100.96995,117.90661 -100.45236,118.32066 C -99.93479,118.73473 -99.676001,119.38512 -99.675995,120.27184 L -99.675995,120.27184 z M -101.75021,122.14098 L -101.75021,120.89293 L -102.52951,120.89293 C -102.91623,120.89293 -103.21311,120.9984 -103.42014,121.20934 C -103.62717,121.42028 -103.73068,121.72301 -103.73068,122.11754 C -103.73068,122.51207 -103.65549,122.80699 -103.5051,123.0023 C -103.35471,123.19762 -103.12522,123.29527 -102.81662,123.29527 C -102.49631,123.29527 -102.2385,123.1898 -102.04318,122.97887 C -101.84787,122.76793 -101.75022,122.48863 -101.75021,122.14098 L -101.75021,122.14098 z" id="text2391"/>
    <path style="font-style: normal; font-variant: normal; font-weight: bold; font-stretch: normal; text-anchor: start; fill: url(#linearGradient2951) rgb(0, 0, 0); fill-opacity: 1; stroke: rgb(0, 0, 0); stroke-width: 0.625; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 4; stroke-opacity: 0.784314; font-family: Bitstream Vera Serif;" d="M -141.85959,122.10191 C -142.09007,123.00426 -142.50413,123.67418 -143.10178,124.11168 C -143.69944,124.54918 -144.50217,124.76793 -145.50998,124.76793 C -146.98655,124.76793 -148.15354,124.3607 -149.01096,123.54625 C -149.86838,122.7318 -150.29709,121.62731 -150.29709,120.23277 C -150.29709,118.83434 -149.86838,117.7279 -149.01096,116.91344 C -148.15354,116.09899 -146.98655,115.69177 -145.50998,115.69176 C -144.99045,115.69177 -144.44944,115.75427 -143.88693,115.87926 C -143.32444,116.00427 -142.72874,116.19372 -142.09982,116.44762 L -142.09982,118.59801 L -142.84396,118.59801 C -142.99632,117.86364 -143.27366,117.31383 -143.67599,116.94859 C -144.07835,116.58337 -144.60959,116.40075 -145.26974,116.40074 C -146.12131,116.40075 -146.75412,116.71423 -147.16818,117.34117 C -147.58225,117.96813 -147.78928,118.932 -147.78928,120.23277 C -147.78928,121.53356 -147.58225,122.49645 -147.16818,123.12144 C -146.75412,123.74645 -146.11741,124.05895 -145.25803,124.05894 C -144.676,124.05895 -144.20042,123.89684 -143.83127,123.57262 C -143.46214,123.2484 -143.19358,122.75817 -143.0256,122.10191 L -141.85959,122.10191 z M -134.62912,120.77184 L -134.62912,123.88902 L -133.73849,123.88902 L -133.73849,124.59801 L -136.70334,124.59801 L -136.70334,123.80699 C -136.97678,124.13512 -137.28147,124.3773 -137.6174,124.53355 C -137.95334,124.6898 -138.33615,124.76793 -138.76584,124.76793 C -139.40256,124.76793 -139.89182,124.59703 -140.23361,124.25523 C -140.57541,123.91344 -140.74631,123.42418 -140.74631,122.78746 C -140.74631,122.08824 -140.50119,121.56481 -140.01096,121.21715 C -139.52072,120.8695 -138.78147,120.69567 -137.79318,120.69566 L -136.70334,120.69566 L -136.70334,120.32652 C -136.70334,119.82262 -136.82248,119.45055 -137.06076,119.21031 C -137.29905,118.97008 -137.66819,118.84997 -138.16818,118.84996 C -138.58225,118.84997 -138.90158,118.93493 -139.12619,119.10484 C -139.3508,119.27477 -139.50998,119.55309 -139.60373,119.9398 L -140.26584,119.9398 L -140.26584,118.59801 C -139.89475,118.4652 -139.50998,118.36559 -139.11154,118.29918 C -138.71311,118.23278 -138.29319,118.19958 -137.85178,118.19957 C -136.7385,118.19958 -135.92307,118.40661 -135.40549,118.82066 C -134.88792,119.23473 -134.62913,119.88512 -134.62912,120.77184 L -134.62912,120.77184 z M -136.70334,122.64098 L -136.70334,121.39293 L -137.48264,121.39293 C -137.86936,121.39293 -138.16623,121.4984 -138.37326,121.70934 C -138.58029,121.92028 -138.68381,122.22301 -138.68381,122.61754 C -138.68381,123.01207 -138.60861,123.30699 -138.45822,123.5023 C -138.30783,123.69762 -138.07834,123.79527 -137.76974,123.79527 C -137.44944,123.79527 -137.19162,123.6898 -136.99631,123.47887 C -136.801,123.26793 -136.70334,122.98863 -136.70334,122.64098 L -136.70334,122.64098 z M -126.17404,119.38902 C -125.88499,118.97497 -125.57249,118.67321 -125.23654,118.48375 C -124.90061,118.2943 -124.50804,118.19958 -124.05881,118.19957 C -123.34397,118.19958 -122.80979,118.40172 -122.45627,118.80602 C -122.10276,119.21032 -121.92601,119.82067 -121.92599,120.63707 L -121.92599,123.88902 L -121.03537,123.88902 L -121.03537,124.59801 L -124.74435,124.59801 L -124.74435,123.88902 L -124.00021,123.88902 L -124.00021,120.94762 C -124.00022,120.17028 -124.05979,119.68004 -124.17892,119.47691 C -124.29807,119.27379 -124.51975,119.17223 -124.84396,119.17223 C -125.21116,119.17223 -125.49632,119.31383 -125.69943,119.59703 C -125.90256,119.88024 -126.00413,120.28356 -126.00412,120.80699 L -126.00412,123.88902 L -125.25998,123.88902 L -125.25998,124.59801 L -128.82248,124.59801 L -128.82248,123.88902 L -128.07834,123.88902 L -128.07834,120.94762 C -128.07834,120.17028 -128.13889,119.68004 -128.25998,119.47691 C -128.38108,119.27379 -128.60178,119.17223 -128.92209,119.17223 C -129.29319,119.17223 -129.5803,119.31383 -129.78342,119.59703 C -129.98655,119.88024 -130.08811,120.28356 -130.0881,120.80699 L -130.0881,123.88902 L -129.34396,123.88902 L -129.34396,124.59801 L -133.04709,124.59801 L -133.04709,123.88902 L -132.16232,123.88902 L -132.16232,119.07848 L -133.04709,119.07848 L -133.04709,118.36949 L -130.0881,118.36949 L -130.0881,119.2484 C -129.84592,118.88512 -129.56858,118.6195 -129.25607,118.45152 C -128.94358,118.28356 -128.57248,118.19958 -128.14279,118.19957 C -127.63499,118.19958 -127.22288,118.29626 -126.90646,118.48961 C -126.59006,118.68297 -126.34592,118.98278 -126.17404,119.38902 L -126.17404,119.38902 z M -115.94357,121.08238 C -115.94358,120.26207 -116.01975,119.68688 -116.17209,119.3568 C -116.32444,119.02672 -116.5842,118.86168 -116.95139,118.86168 C -117.30686,118.86168 -117.56174,119.02379 -117.71603,119.34801 C -117.87033,119.67223 -117.94748,120.2152 -117.94748,120.97691 L -117.94748,121.08238 L -115.94357,121.08238 z M -113.66428,121.77965 L -117.94748,121.77965 L -117.94748,121.82652 C -117.94748,122.63121 -117.82639,123.21227 -117.5842,123.56969 C -117.34201,123.92711 -116.95139,124.10582 -116.41232,124.10582 C -115.96311,124.10582 -115.59983,123.98668 -115.32248,123.7484 C -115.04514,123.51012 -114.86741,123.16441 -114.78928,122.71129 L -113.81662,122.71129 C -113.9846,123.41832 -114.31858,123.93785 -114.81857,124.26988 C -115.31858,124.60191 -116.0178,124.76793 -116.91623,124.76793 C -117.99436,124.76793 -118.8215,124.48375 -119.39767,123.91539 C -119.97385,123.34703 -120.26193,122.53551 -120.26193,121.48082 C -120.26193,120.44957 -119.96701,119.64489 -119.37717,119.06676 C -118.78732,118.48864 -117.96701,118.19958 -116.91623,118.19957 C -115.88498,118.19958 -115.09397,118.50329 -114.54318,119.1107 C -113.99241,119.71813 -113.69944,120.60778 -113.66428,121.77965 L -113.66428,121.77965 z M -106.66818,118.29918 L -106.66818,120.1566 L -107.33029,120.1566 C -107.35374,119.82457 -107.44358,119.5775 -107.59982,119.41539 C -107.75608,119.25329 -107.98264,119.17223 -108.27951,119.17223 C -108.73264,119.17223 -109.09006,119.37145 -109.35178,119.76988 C -109.6135,120.16832 -109.74436,120.72106 -109.74435,121.42809 L -109.74435,123.88902 L -108.61349,123.88902 L -108.61349,124.59801 L -112.70334,124.59801 L -112.70334,123.88902 L -111.81857,123.88902 L -111.81857,119.07848 L -112.76779,119.07848 L -112.76779,118.36949 L -109.74435,118.36949 L -109.74435,119.47691 C -109.54123,119.04333 -109.27268,118.72204 -108.93869,118.51305 C -108.60471,118.30407 -108.19553,118.19958 -107.71115,118.19957 C -107.59006,118.19958 -107.4426,118.20837 -107.26877,118.22594 C -107.09495,118.24352 -106.89475,118.26794 -106.66818,118.29918 L -106.66818,118.29918 z M -100.17599,120.77184 L -100.17599,123.88902 L -99.28537,123.88902 L -99.28537,124.59801 L -102.25021,124.59801 L -102.25021,123.80699 C -102.52366,124.13512 -102.82834,124.3773 -103.16428,124.53355 C -103.50022,124.6898 -103.88303,124.76793 -104.31271,124.76793 C -104.94943,124.76793 -105.43869,124.59703 -105.78049,124.25523 C -106.12228,123.91344 -106.29318,123.42418 -106.29318,122.78746 C -106.29318,122.08824 -106.04807,121.56481 -105.55783,121.21715 C -105.0676,120.8695 -104.32834,120.69567 -103.34006,120.69566 L -102.25021,120.69566 L -102.25021,120.32652 C -102.25022,119.82262 -102.36936,119.45055 -102.60764,119.21031 C -102.84592,118.97008 -103.21506,118.84997 -103.71506,118.84996 C -104.12912,118.84997 -104.44846,118.93493 -104.67307,119.10484 C -104.89768,119.27477 -105.05686,119.55309 -105.1506,119.9398 L -105.81271,119.9398 L -105.81271,118.59801 C -105.44162,118.4652 -105.05686,118.36559 -104.65842,118.29918 C -104.25998,118.23278 -103.84006,118.19958 -103.39865,118.19957 C -102.28537,118.19958 -101.46995,118.40661 -100.95236,118.82066 C -100.43479,119.23473 -100.176,119.88512 -100.17599,120.77184 L -100.17599,120.77184 z M -102.25021,122.64098 L -102.25021,121.39293 L -103.02951,121.39293 C -103.41623,121.39293 -103.71311,121.4984 -103.92014,121.70934 C -104.12717,121.92028 -104.23068,122.22301 -104.23068,122.61754 C -104.23068,123.01207 -104.15549,123.30699 -104.0051,123.5023 C -103.85471,123.69762 -103.62522,123.79527 -103.31662,123.79527 C -102.99631,123.79527 -102.7385,123.6898 -102.54318,123.47887 C -102.34787,123.26793 -102.25022,122.98863 -102.25021,122.64098 L -102.25021,122.64098 z" id="text2379" transform="matrix(0, -1, 1, 0, 0, 0)"/>
    <path style="font-style: italic; font-variant: normal; font-weight: bold; font-stretch: condensed; text-anchor: middle; fill: rgb(0, 0, 0); fill-opacity: 1; stroke: none; stroke-width: 1px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1; font-family: Arial Narrow;" d="M -128.66444,347.21399 L -128.66444,338.62415 L -125.70545,338.62415 C -125.03749,338.62415 -124.52772,338.66517 -124.17616,338.74719 C -123.68397,338.86048 -123.26405,339.06556 -122.91639,339.36243 C -122.46327,339.74525 -122.1244,340.2345 -121.89979,340.8302 C -121.67519,341.42591 -121.56288,342.10657 -121.56287,342.87219 C -121.56288,343.52454 -121.63905,344.10266 -121.79139,344.60657 C -121.94374,345.11048 -122.13905,345.52747 -122.37733,345.85754 C -122.61562,346.18762 -122.87636,346.44739 -123.15955,346.63684 C -123.44276,346.82629 -123.78456,346.96985 -124.18494,347.0675 C -124.58534,347.16516 -125.0453,347.21399 -125.56483,347.21399 L -128.66444,347.21399 z M -127.52772,346.20032 L -125.69373,346.20032 C -125.12733,346.20032 -124.683,346.14758 -124.36073,346.04211 C -124.03847,345.93665 -123.78163,345.78821 -123.59022,345.5968 C -123.32069,345.32727 -123.11073,344.96497 -122.96033,344.50989 C -122.80995,344.05481 -122.73476,343.50306 -122.73475,342.85461 C -122.73476,341.95618 -122.88222,341.26575 -123.17713,340.78333 C -123.47206,340.30091 -123.83046,339.97767 -124.25233,339.8136 C -124.55702,339.69642 -125.04725,339.63782 -125.72303,339.63782 L -127.52772,339.63782 L -127.52772,346.20032 z M -120.12147,339.83704 L -120.12147,338.62415 L -119.06678,338.62415 L -119.06678,339.83704 L -120.12147,339.83704 z M -120.12147,347.21399 L -120.12147,340.99133 L -119.06678,340.99133 L -119.06678,347.21399 L -120.12147,347.21399 z M -117.64881,347.72961 L -116.62342,347.88196 C -116.58045,348.19836 -116.46131,348.42883 -116.266,348.57336 C -116.00428,348.76868 -115.64686,348.86633 -115.19373,348.86633 C -114.70546,348.86633 -114.3285,348.76868 -114.06287,348.57336 C -113.79725,348.37805 -113.61757,348.10461 -113.52381,347.75305 C -113.46913,347.53821 -113.44374,347.08704 -113.44764,346.39954 C -113.90858,346.94251 -114.4828,347.21399 -115.1703,347.21399 C -116.02577,347.21399 -116.68788,346.9054 -117.15662,346.28821 C -117.62537,345.67102 -117.85975,344.93079 -117.85975,344.0675 C -117.85975,343.47376 -117.75233,342.92591 -117.53748,342.42395 C -117.32264,341.922 -117.01112,341.53431 -116.60291,341.26086 C -116.19471,340.98743 -115.71522,340.85071 -115.16444,340.85071 C -114.43007,340.85071 -113.8246,341.14759 -113.34803,341.74133 L -113.34803,340.99133 L -112.37537,340.99133 L -112.37537,346.37024 C -112.37538,347.33899 -112.47401,348.02551 -112.67127,348.42981 C -112.86854,348.8341 -113.18104,349.15344 -113.60877,349.38782 C -114.03651,349.62219 -114.56288,349.73938 -115.18787,349.73938 C -115.93006,349.73938 -116.52967,349.57239 -116.9867,349.2384 C -117.44373,348.90442 -117.66444,348.40149 -117.64881,347.72961 L -117.64881,347.72961 z M -116.77576,343.99133 C -116.77577,344.80774 -116.61366,345.40344 -116.28944,345.77844 C -115.96522,346.15344 -115.55897,346.34094 -115.07069,346.34094 C -114.58632,346.34094 -114.18007,346.15442 -113.85194,345.78137 C -113.52382,345.40833 -113.35975,344.82337 -113.35975,344.02649 C -113.35975,343.26477 -113.5287,342.69056 -113.86658,342.30383 C -114.20448,341.91712 -114.61171,341.72376 -115.08826,341.72375 C -115.55702,341.72376 -115.95545,341.91419 -116.28358,342.29504 C -116.6117,342.67591 -116.77577,343.24134 -116.77576,343.99133 L -116.77576,343.99133 z M -110.76991,339.83704 L -110.76991,338.62415 L -109.71522,338.62415 L -109.71522,339.83704 L -110.76991,339.83704 z M -110.76991,347.21399 L -110.76991,340.99133 L -109.71522,340.99133 L -109.71522,347.21399 L -110.76991,347.21399 z M -108.35584,344.45422 L -107.28358,344.36047 C -107.2328,344.79016 -107.11463,345.1427 -106.92908,345.41809 C -106.74354,345.69348 -106.45545,345.91614 -106.06483,346.08606 C -105.67421,346.25598 -105.23475,346.34094 -104.74647,346.34094 C -104.31288,346.34094 -103.93007,346.27649 -103.59803,346.14758 C -103.266,346.01868 -103.01893,345.84192 -102.85682,345.61731 C -102.69472,345.3927 -102.61366,345.14759 -102.61366,344.88196 C -102.61366,344.61243 -102.69179,344.37708 -102.84803,344.1759 C -103.00429,343.97473 -103.2621,343.80579 -103.62147,343.66907 C -103.85194,343.57923 -104.36171,343.43958 -105.15076,343.25012 C -105.93983,343.06067 -106.49256,342.88196 -106.80897,342.71399 C -107.21913,342.49915 -107.52479,342.23255 -107.72596,341.91418 C -107.92713,341.59583 -108.02772,341.23939 -108.02772,340.84485 C -108.02772,340.41126 -107.90467,340.00599 -107.65858,339.62903 C -107.41248,339.25208 -107.05311,338.96595 -106.58045,338.77063 C -106.1078,338.57533 -105.58241,338.47767 -105.00428,338.47766 C -104.36757,338.47767 -103.80604,338.58021 -103.31971,338.78528 C -102.83339,338.99036 -102.45936,339.29212 -102.19764,339.69055 C -101.93593,340.089 -101.7953,340.54017 -101.77576,341.04407 L -102.86561,341.1261 C -102.92421,340.58314 -103.12245,340.17298 -103.46033,339.89563 C -103.79823,339.61829 -104.29725,339.47962 -104.95741,339.47961 C -105.64491,339.47962 -106.14588,339.6056 -106.46033,339.85754 C -106.77479,340.1095 -106.93202,340.41321 -106.93201,340.76868 C -106.93202,341.07728 -106.82069,341.33118 -106.59803,341.5304 C -106.37928,341.72962 -105.80799,341.93372 -104.88416,342.1427 C -103.96034,342.35169 -103.32655,342.53431 -102.9828,342.69055 C -102.4828,342.92102 -102.11366,343.21302 -101.87537,343.56653 C -101.6371,343.92005 -101.51796,344.32727 -101.51795,344.78821 C -101.51796,345.24524 -101.64882,345.6759 -101.91053,346.0802 C -102.17226,346.4845 -102.54823,346.79895 -103.03846,347.02356 C -103.5287,347.24817 -104.08046,347.36047 -104.69373,347.36047 C -105.47108,347.36047 -106.12245,347.24719 -106.64783,347.02063 C -107.17323,346.79407 -107.58534,346.45325 -107.88416,345.99817 C -108.18299,345.54309 -108.34022,345.02844 -108.35584,344.45422 L -108.35584,344.45422 z M -100.08826,347.21399 L -100.08826,338.62415 L -99.033577,338.62415 L -99.033577,341.70618 C -98.541392,341.13587 -97.920299,340.85071 -97.170296,340.85071 C -96.709362,340.85071 -96.308972,340.94153 -95.969124,341.12317 C -95.629285,341.30482 -95.386122,341.55579 -95.239632,341.8761 C -95.093153,342.19642 -95.019911,342.66126 -95.019905,343.27063 L -95.019905,347.21399 L -96.074593,347.21399 L -96.074593,343.27063 C -96.074597,342.74329 -96.188855,342.3595 -96.417366,342.11926 C -96.645886,341.87903 -96.969128,341.75892 -97.387093,341.75891 C -97.699596,341.75892 -97.993541,341.83997 -98.268929,342.00208 C -98.544321,342.16419 -98.74061,342.38392 -98.857796,342.66125 C -98.974985,342.9386 -99.033579,343.32142 -99.033577,343.80969 L -99.033577,347.21399 L -100.08826,347.21399 z M -93.801155,344.10266 C -93.801155,342.95032 -93.480843,342.09681 -92.840218,341.54211 C -92.305063,341.08118 -91.65272,340.85071 -90.883186,340.85071 C -90.027722,340.85071 -89.328504,341.13099 -88.78553,341.69153 C -88.242567,342.25208 -87.971083,343.02649 -87.971077,344.01477 C -87.971083,344.81555 -88.0912,345.44544 -88.331429,345.90442 C -88.571669,346.3634 -88.921278,346.71985 -89.380257,346.97375 C -89.839245,347.22766 -90.340221,347.35461 -90.883186,347.35461 C -91.754283,347.35461 -92.458383,347.07532 -92.995491,346.51672 C -93.532601,345.95813 -93.801155,345.15344 -93.801155,344.10266 L -93.801155,344.10266 z M -92.717171,344.10266 C -92.717172,344.89954 -92.543344,345.49622 -92.195686,345.8927 C -91.848032,346.28919 -91.410533,346.48743 -90.883186,346.48743 C -90.359753,346.48743 -89.924206,346.28821 -89.576546,345.88977 C -89.228894,345.49133 -89.055066,344.88391 -89.055061,344.0675 C -89.055066,343.29798 -89.229871,342.71497 -89.579475,342.31848 C -89.929089,341.922 -90.363659,341.72376 -90.883186,341.72375 C -91.410533,341.72376 -91.848032,341.92103 -92.195686,342.31555 C -92.543344,342.71009 -92.717172,343.30579 -92.717171,344.10266 L -92.717171,344.10266 z M -84.426155,346.27063 L -84.273811,347.20227 C -84.570689,347.26477 -84.836314,347.29602 -85.070686,347.29602 C -85.453501,347.29602 -85.750376,347.23547 -85.961311,347.11438 C -86.17225,346.99329 -86.320688,346.83411 -86.406624,346.63684 C -86.492562,346.43958 -86.535531,346.02454 -86.53553,345.39172 L -86.53553,341.81165 L -87.308968,341.81165 L -87.308968,340.99133 L -86.53553,340.99133 L -86.53553,339.45032 L -85.486702,338.8175 L -85.486702,340.99133 L -84.426155,340.99133 L -84.426155,341.81165 L -85.486702,341.81165 L -85.486702,345.45032 C -85.486704,345.7511 -85.468149,345.94446 -85.431038,346.0304 C -85.393931,346.11633 -85.333384,346.18469 -85.249397,346.23547 C -85.165415,346.28626 -85.045298,346.31165 -84.889046,346.31165 C -84.771861,346.31165 -84.617564,346.29797 -84.426155,346.27063 L -84.426155,346.27063 z M -110.85194,356.20227 L -109.71522,356.48938 C -109.95351,357.42298 -110.38222,358.13489 -111.00135,358.62512 C -111.6205,359.11536 -112.37733,359.36047 -113.27186,359.36047 C -114.19764,359.36047 -114.95057,359.172 -115.53065,358.79504 C -116.11073,358.41809 -116.55213,357.87219 -116.85487,357.15735 C -117.1576,356.44251 -117.30897,355.67493 -117.30897,354.85461 C -117.30897,353.96009 -117.13807,353.17982 -116.79627,352.51379 C -116.45448,351.84779 -115.96815,351.34193 -115.33729,350.99622 C -114.70643,350.65052 -114.0121,350.47767 -113.25428,350.47766 C -112.39491,350.47767 -111.67226,350.69642 -111.08631,351.13391 C -110.50038,351.57142 -110.09218,352.18665 -109.8617,352.97961 L -110.98084,353.24329 C -111.18007,352.61829 -111.46913,352.16322 -111.84803,351.87805 C -112.22694,351.5929 -112.7035,351.45033 -113.27772,351.45032 C -113.93788,351.45033 -114.48964,351.60853 -114.93299,351.92493 C -115.37635,352.24134 -115.68788,352.66614 -115.86756,353.19934 C -116.04725,353.73255 -116.13709,354.28235 -116.13709,354.84875 C -116.13709,355.57923 -116.03065,356.21692 -115.81776,356.76184 C -115.60487,357.30676 -115.27381,357.71399 -114.82459,357.98352 C -114.37538,358.25305 -113.88905,358.38782 -113.36561,358.38782 C -112.72889,358.38782 -112.18983,358.20422 -111.74842,357.83704 C -111.30702,357.46985 -111.00819,356.92493 -110.85194,356.20227 L -110.85194,356.20227 z M -103.26405,352.72766 L -104.31287,352.80969 C -104.40663,352.39564 -104.53944,352.09486 -104.71131,351.90735 C -104.99647,351.60657 -105.34803,351.45618 -105.766,351.45618 C -106.10194,351.45618 -106.39686,351.54993 -106.65076,351.73743 C -106.9828,351.97962 -107.24452,352.33314 -107.43592,352.79797 C -107.62733,353.26282 -107.72694,353.92493 -107.73475,354.7843 C -107.48084,354.39759 -107.1703,354.11048 -106.80311,353.92297 C -106.43592,353.73548 -106.05116,353.64173 -105.64881,353.64172 C -104.94569,353.64173 -104.34706,353.90052 -103.85291,354.41809 C -103.35878,354.93567 -103.11171,355.60462 -103.1117,356.42493 C -103.11171,356.96399 -103.22792,357.46497 -103.46033,357.92786 C -103.69276,358.39075 -104.0121,358.74524 -104.41834,358.99133 C -104.8246,359.23743 -105.28553,359.36047 -105.80116,359.36047 C -106.68006,359.36047 -107.39686,359.03723 -107.95155,358.39075 C -108.50623,357.74426 -108.78358,356.67884 -108.78358,355.19446 C -108.78358,353.53431 -108.47694,352.32728 -107.86366,351.57336 C -107.3285,350.91712 -106.6078,350.589 -105.70155,350.58899 C -105.02577,350.589 -104.47206,350.77845 -104.04041,351.15735 C -103.60878,351.53626 -103.34999,352.0597 -103.26405,352.72766 L -103.26405,352.72766 z M -107.57069,356.43079 C -107.57069,356.79407 -107.49354,357.14173 -107.33924,357.47375 C -107.18495,357.80579 -106.96913,358.05872 -106.69178,358.23254 C -106.41444,358.40637 -106.12342,358.49329 -105.81873,358.49329 C -105.37342,358.49329 -104.99061,358.3136 -104.6703,357.95422 C -104.34999,357.59485 -104.18983,357.10657 -104.18983,356.48938 C -104.18983,355.89563 -104.34803,355.42786 -104.66444,355.08606 C -104.98085,354.74427 -105.37928,354.57337 -105.85975,354.57336 C -106.33631,354.57337 -106.74061,354.74427 -107.07264,355.08606 C -107.40467,355.42786 -107.57069,355.8761 -107.57069,356.43079 L -107.57069,356.43079 z M -102.05701,354.97766 C -102.05701,353.96204 -101.95252,353.14466 -101.74354,352.52551 C -101.53455,351.90638 -101.22401,351.42884 -100.8119,351.0929 C -100.39979,350.75697 -99.881236,350.589 -99.256233,350.58899 C -98.795299,350.589 -98.391003,350.68177 -98.043343,350.86731 C -97.695691,351.05286 -97.408582,351.32044 -97.182014,351.67004 C -96.955458,352.01966 -96.777723,352.44544 -96.648811,352.94739 C -96.519911,353.44935 -96.455458,354.1261 -96.455452,354.97766 C -96.455458,355.98548 -96.558974,356.79895 -96.765999,357.41809 C -96.973036,358.03723 -97.282606,358.51575 -97.69471,358.85364 C -98.106824,359.19153 -98.627331,359.36047 -99.256233,359.36047 C -100.08436,359.36047 -100.73475,359.0636 -101.20741,358.46985 C -101.77381,357.75501 -102.05701,356.59095 -102.05701,354.97766 L -102.05701,354.97766 z M -100.97303,354.97766 C -100.97303,356.38782 -100.80799,357.3263 -100.47791,357.79309 C -100.14784,358.25989 -99.740611,358.49329 -99.256233,358.49329 C -98.771862,358.49329 -98.364636,358.25891 -98.034554,357.79016 C -97.70448,357.32141 -97.539441,356.38391 -97.539436,354.97766 C -97.539441,353.5636 -97.70448,352.62415 -98.034554,352.1593 C -98.364636,351.69447 -98.775768,351.46204 -99.267952,351.46204 C -99.75233,351.46204 -100.13905,351.66712 -100.42811,352.07727 C -100.79139,352.60071 -100.97303,353.56751 -100.97303,354.97766 L -100.97303,354.97766 z" id="text2397" transform="matrix(0, -1, 1, 0, 0, 0)"/>
    <rect height="16.52914" id="rect2403" rx="2.1213202" ry="2.1213195" style="fill: url(#linearGradient2942) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: url(#linearGradient2944) rgb(0, 0, 0); stroke-width: 1.25; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 1;" width="73.765671" x="311.98959" y="16.371693"/>
    <rect height="14.380119" id="rect2435" style="opacity: 0.4; fill: url(#linearGradient2939) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 1.25; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 1;" width="69.811966" x="313.96686" y="17.446339"/>
    <rect height="8.7436724" id="rect2441" style="opacity: 0.6; fill: url(#linearGradient2936) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 1.25; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 1;" width="69.111969" x="314.31686" y="18.165882"/>
    <rect height="24.682844" id="rect2469" rx="2" ry="2" style="opacity: 0.9; fill: rgb(25, 25, 25); fill-opacity: 1; fill-rule: evenodd; stroke: url(#linearGradient2933) rgb(0, 0, 0); stroke-width: 0.625; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 1;" width="34.684162" x="200.87665" y="15.127797"/>
    <path d="M 227.92286,27.469571 C 227.92286,32.816546 223.57816,37.151116 218.21871,37.151116 C 212.85926,37.151116 208.51456,32.816546 208.51456,27.469571 C 208.51456,22.122597 212.85926,17.788026 218.21871,17.788026 C 223.57816,17.788026 227.92286,22.122597 227.92286,27.469571 z" id="path2473" style="opacity: 0.28934; fill: url(#radialGradient2930) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 0.636287; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.196078;"/>
    <path d="M 230.78663,27.47026 C 230.78663,34.118681 225.15978,39.50828 218.21869,39.50828 C 211.27761,39.50828 205.65076,34.118681 205.65076,27.47026 C 205.65076,20.821839 211.27761,15.43224 218.21869,15.43224 C 225.15978,15.43224 230.78663,20.821839 230.78663,27.47026 z" id="path2483" style="opacity: 0.233503; fill: url(#linearGradient2927) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 0.636287; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.196078;"/>
    <path d="M 228.31205,31.004633 C 228.31205,34.333571 223.79323,37.032203 218.21899,37.032203 C 212.64474,37.032203 208.12593,34.333571 208.12593,31.004633 C 208.12593,27.675696 212.64474,24.977064 218.21899,24.977064 C 223.79323,24.977064 228.31205,27.675696 228.31205,31.004633 z" id="path2489" style="fill: url(#linearGradient2924) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 0.636287; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.196078;"/>
    <path d="M 218.73917,25.485372 C 218.74082,26.193772 218.34675,26.849028 217.70577,27.20369 C 217.06481,27.558338 216.27465,27.558338 215.63368,27.20369 C 214.99271,26.849028 214.59863,26.193772 214.60029,25.485372 C 214.59863,24.776972 214.99271,24.121716 215.63368,23.767054 C 216.27465,23.412406 217.06481,23.412406 217.70577,23.767054 C 218.34675,24.121716 218.74082,24.776972 218.73917,25.485372 z" id="path2515" style="fill: url(#radialGradient2921) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 0.625; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 1;"/>
    <path d="M 226.43298,31.838416 C 226.43634,33.343766 225.63517,34.736185 224.33203,35.489841 C 223.02892,36.243468 221.42248,36.243468 220.11937,35.489841 C 218.81623,34.736185 218.01506,33.343766 218.01843,31.838416 C 218.01506,30.333066 218.81623,28.940647 220.11937,28.18699 C 221.42248,27.433363 223.02892,27.433363 224.33203,28.18699 C 225.63517,28.940647 226.43634,30.333066 226.43298,31.838416 z" id="path2525" style="opacity: 0.751269; fill: url(#radialGradient2918) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 0.625; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 1;"/>
    <path d="M 246.22987,155.19327 C 224.21407,148.40766 211.83229,125.17402 218.5744,103.2995 C 225.31649,81.424974 248.62936,69.19299 270.64517,75.978603 C 292.66097,82.764217 305.04275,105.99785 298.30065,127.87238 C 291.55856,149.7469 268.24567,161.97888 246.22987,155.19327 L 246.22987,155.19327 z" id="path2545" style="fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: evenodd; stroke: none; stroke-width: 1.70665; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.784314;"/>
    <path d="M 281.39724,81.020893 C 300.60997,93.783541 305.90516,119.60477 293.22437,138.69422 C 280.54359,157.78367 254.6888,162.91256 235.47608,150.14992 C 216.26335,137.38727 210.96816,111.56604 223.64894,92.476585 C 236.32972,73.387135 262.18451,68.258245 281.39724,81.020893 L 281.39724,81.020893 z" id="path2564" style="fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: evenodd; stroke: none; stroke-width: 1.70665; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.784314;"/>
    <path d="M 21.15625,86.07568 C 21.08503,92.12757 20.875,96.46414 20.875,103.13818 C 20.875,128.22327 21.42224,149.23071 22.21875,160.07568 C 23.55502,162.90442 24.92787,164.85709 26.1875,164.73193 C 30.36098,164.31722 31.91654,145.7894 29.6875,123.35693 C 27.98175,106.19073 24.54916,91.7491 21.15625,86.07568 z" id="path1466" style="fill: url(#radialGradient2907) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 1.25; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 1;"/>
    <path d="M 254.28125,14.57568 C 250.42622,17.054 247.84375,21.37417 247.84375,26.29443 C 247.84375,31.21468 250.42622,35.50361 254.28125,37.98193 L 269.28125,37.98193 C 273.13783,35.5039 275.71875,31.21586 275.71875,26.29443 C 275.71875,21.37299 273.13783,17.05371 269.28125,14.57568 L 254.28125,14.57568 z" id="path2247" style="opacity: 0.85; fill: rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: url(#linearGradient2904) rgb(0, 0, 0); stroke-width: 0.85; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 1;"/>
    <path d="M 271.08866,25.570571 C 271.08866,30.917546 266.74396,35.252116 261.38451,35.252116 C 256.02506,35.252116 251.68036,30.917546 251.68036,25.570571 C 251.68036,20.223597 256.02506,15.889026 261.38451,15.889026 C 266.74396,15.889026 271.08866,20.223597 271.08866,25.570571 z" id="path2261" style="opacity: 0.28934; fill: url(#radialGradient2901) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 0.636287; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.196078;"/>
    <path d="M 273.95263,25.57126 C 273.95263,32.219681 268.32578,37.60928 261.3847,37.60928 C 254.44361,37.60928 248.81676,32.219681 248.81676,25.57126 C 248.81676,18.922839 254.44361,13.53324 261.3847,13.53324 C 268.32578,13.53324 273.95263,18.922839 273.95263,25.57126 z" id="path2263" style="opacity: 0.233503; fill: url(#linearGradient2898) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 0.636287; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.196078;"/>
    <path d="M 271.47785,29.105133 C 271.47785,32.434071 266.95903,35.132703 261.38479,35.132703 C 255.81054,35.132703 251.29173,32.434071 251.29173,29.105133 C 251.29173,25.776196 255.81054,23.077564 261.38479,23.077564 C 266.95903,23.077564 271.47785,25.776196 271.47785,29.105133 z" id="path2265" style="fill: url(#linearGradient2895) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 0.636287; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.196078;"/>
    <path d="M 262.62081,22.690372 C 262.62239,23.398772 262.24537,24.054028 261.63213,24.40869 C 261.0189,24.763338 260.26293,24.763338 259.6497,24.40869 C 259.03646,24.054028 258.65944,23.398772 258.66102,22.690372 C 258.65944,21.981972 259.03646,21.326716 259.6497,20.972054 C 260.26293,20.617406 261.0189,20.617406 261.63213,20.972054 C 262.24537,21.326716 262.62239,21.981972 262.62081,22.690372 z" id="path2267" style="fill: url(#radialGradient2892) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 0.625; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 1;"/>
    <path d="M 267.80798,30.386416 C 267.81134,31.891766 267.01017,33.284185 265.70703,34.037841 C 264.40392,34.791468 262.79748,34.791468 261.49437,34.037841 C 260.19123,33.284185 259.39006,31.891766 259.39343,30.386416 C 259.39006,28.881066 260.19123,27.488647 261.49437,26.73499 C 262.79748,25.981363 264.40392,25.981363 265.70703,26.73499 C 267.01017,27.488647 267.81134,28.881066 267.80798,30.386416 z" id="path2269" style="opacity: 0.751269; fill: url(#radialGradient2889) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 0.625; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 1;"/>
    <path d="M 258.51775,16.971651 C 261.77676,17.528301 263.49741,21.607873 262.36092,26.083634 C 261.22443,30.559396 257.66118,33.736462 254.40217,33.179812 C 251.14315,32.623163 249.42251,28.543591 250.55899,24.067829 C 251.69548,19.592068 255.25873,16.415002 258.51775,16.971651 z" id="path2281" style="fill: url(#linearGradient2886) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 0.636287; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.196078;"/>
    <path d="M 215.80574,19.766488 C 219.06432,20.309512 220.78183,24.278051 219.6419,28.630472 C 218.50197,32.982893 214.93628,36.071019 211.6777,35.527995 C 208.41911,34.984971 206.70161,31.016431 207.84153,26.66401 C 208.98146,22.311589 212.54716,19.223464 215.80574,19.766488 z" id="path2287" style="fill: url(#linearGradient2883) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 0.636287; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.196078;"/>
    <rect height="130" id="rect2291" rx="7.5" ry="65" style="fill: url(#linearGradient2878) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: url(#linearGradient2880) rgb(0, 0, 0); stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.196078;" width="15" x="55.875" y="38.125355"/>
    <rect height="130" id="rect2310" rx="7.5" ry="65" style="opacity: 0.65; fill: url(#linearGradient2875) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.196078;" width="15" x="55.875" y="38.125355"/>
    <rect height="100" id="rect2318" rx="3.9183178" ry="65" style="opacity: 0.538071; fill: url(#linearGradient2872) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: rgb(0, 0, 0); stroke-width: 1; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.392157;" width="11.538462" x="57.605759" y="53.125355"/>
    <rect height="41.305851" id="rect2336" rx="4.8584952" ry="65" style="fill: url(#linearGradient2869) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.196078;" width="8.6424856" x="59.053741" y="58.125355"/>
    <rect height="87.583504" id="rect2355" rx="3.918318" ry="65" style="opacity: 0.243655; fill: url(#linearGradient2866) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 1; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.392157;" width="10.105789" x="58.322098" y="59.333607"/>
    <path d="M 39.755008,79.53133 C 37.768803,103.45996 34.222669,122.40982 31.834488,121.85701 C 29.446307,121.30421 29.120448,101.45808 31.106653,77.529449 C 33.092858,53.600817 36.638992,34.650962 39.027173,35.203767 C 41.415354,35.756572 41.741214,55.602698 39.755008,79.53133 z" id="path2359" style="opacity: 0.624366; fill: url(#radialGradient2863) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 1; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.392157;"/>
    <path d="M 41.656886,123.02906 C 42.596116,147.45179 39.435763,166.45567 34.598024,165.47541 C 29.760286,164.49514 25.077141,143.90194 24.137911,119.47921 C 23.198682,95.056473 26.359035,76.052594 31.196773,77.032859 C 36.034511,78.013125 40.717657,98.606324 41.656886,123.02906 z" id="path2369" style="opacity: 0.492386; fill: url(#radialGradient2860) rgb(0, 0, 0); fill-opacity: 1; fill-rule: evenodd; stroke: none; stroke-width: 1; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 4; stroke-dashoffset: 0pt; stroke-opacity: 0.392157;"/>
    <path style="font-size: 12px; font-style: normal; font-variant: normal; font-weight: bold; font-stretch: normal; text-anchor: start; opacity: 0.517766; fill: rgb(0, 0, 0); fill-opacity: 1; stroke: url(#linearGradient2857) rgb(0, 0, 0); stroke-width: 0.999997px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1; font-family: Bitstream Vera Sans;" d="M -190.25237,21.937844 C -189.66253,22.090192 -189.21429,22.35484 -188.90764,22.731789 C -188.60101,23.108745 -188.44769,23.588237 -188.44768,24.170265 C -188.44769,25.037453 -188.77972,25.696632 -189.44377,26.147803 C -190.10784,26.598974 -191.07659,26.82456 -192.35002,26.82456 C -192.79924,26.82456 -193.24944,26.788427 -193.70061,26.716162 C -194.15178,26.643896 -194.59807,26.535498 -195.03947,26.390967 L -195.03947,24.650733 C -194.6176,24.861672 -194.19866,25.020852 -193.78264,25.128272 C -193.36663,25.235695 -192.95745,25.289406 -192.5551,25.289405 C -191.95745,25.289406 -191.49944,25.185891 -191.18108,24.978858 C -190.86272,24.771829 -190.70354,24.474954 -190.70354,24.088233 C -190.70354,23.689799 -190.86663,23.388042 -191.1928,23.182961 C -191.51897,22.977886 -192.00042,22.875347 -192.63713,22.875344 L -193.53948,22.875344 L -193.53948,21.422219 L -192.59026,21.422219 C -192.02386,21.422225 -191.60198,21.333358 -191.32463,21.155618 C -191.04729,20.977889 -190.90862,20.707382 -190.90862,20.344095 C -190.90862,20.008164 -191.04339,19.748399 -191.31291,19.564798 C -191.58245,19.381212 -191.96331,19.289415 -192.45549,19.289408 C -192.81878,19.289415 -193.18596,19.330431 -193.55705,19.412455 C -193.92815,19.494493 -194.29729,19.615587 -194.66448,19.775736 L -194.66448,18.123393 C -194.21916,17.998402 -193.77776,17.904652 -193.34026,17.842143 C -192.90276,17.779652 -192.47307,17.748402 -192.0512,17.748393 C -190.91448,17.748402 -190.0639,17.934925 -189.49944,18.307963 C -188.93499,18.681018 -188.65277,19.24254 -188.65276,19.992533 C -188.65277,20.504257 -188.78753,20.923202 -189.05706,21.249368 C -189.32659,21.575545 -189.72503,21.805036 -190.25237,21.937844 L -190.25237,21.937844 z M -186.27385,24.387061 L -184.16448,24.387061 L -184.16448,26.654638 L -186.27385,26.654638 L -186.27385,24.387061 z M -179.47112,24.996436 L -175.62152,24.996436 L -175.62152,26.654638 L -181.97894,26.654638 L -181.97894,24.996436 L -178.78558,22.178078 C -178.50043,21.920271 -178.28949,21.668318 -178.15277,21.422219 C -178.01605,21.176131 -177.94769,20.920272 -177.94769,20.654642 C -177.94769,20.244492 -178.08539,19.914414 -178.36077,19.664408 C -178.63617,19.414415 -179.00238,19.289415 -179.45941,19.289408 C -179.81097,19.289415 -180.19574,19.364611 -180.6137,19.514994 C -181.03167,19.665391 -181.47894,19.889024 -181.9555,20.185892 L -181.9555,18.264018 C -181.44769,18.096058 -180.94574,17.968128 -180.44964,17.880229 C -179.95355,17.792347 -179.46722,17.748402 -178.99066,17.748393 C -177.94379,17.748402 -177.13031,17.978871 -176.55023,18.439799 C -175.97016,18.900744 -175.68012,19.543321 -175.68011,20.367532 C -175.68012,20.8441 -175.80317,21.288436 -176.04925,21.700539 C -176.29535,22.112653 -176.81293,22.66441 -177.60199,23.355812 L -179.47112,24.996436 z" id="text2319" transform="matrix(0, -0.646182, 1.54755, 0, 0, 0)"/>
    <path style="font-size: 12px; font-style: normal; font-variant: normal; font-weight: bold; font-stretch: normal; text-anchor: middle; opacity: 0.685279; fill: rgb(0, 0, 0); fill-opacity: 1; stroke: url(#linearGradient2853) rgb(0, 0, 0); stroke-width: 0.999998px; stroke-linecap: butt; stroke-linejoin: miter; stroke-opacity: 1; font-family: Bitstream Vera Sans;" d="M -121.8179,19.050561 L -118.94681,19.050561 L -116.95463,23.732194 L -114.95073,19.050561 L -112.0855,19.050561 L -112.0855,27.798594 L -114.2183,27.798594 L -114.2183,21.400167 L -116.23393,26.116956 L -117.66361,26.116956 L -119.67923,21.400167 L -119.67923,27.798594 L -121.8179,27.798594 L -121.8179,19.050561 z M -109.8648,19.050561 L -103.77692,19.050561 L -103.77692,20.755637 L -107.60894,20.755637 L -107.60894,22.38454 L -104.00543,22.38454 L -104.00543,24.089615 L -107.60894,24.089615 L -107.60894,26.093518 L -103.64801,26.093518 L -103.64801,27.798594 L -109.8648,27.798594 L -109.8648,19.050561 z M -93.798417,27.148204 C -94.360925,27.421641 -94.944908,27.626719 -95.550368,27.763437 C -96.155842,27.900156 -96.78084,27.968515 -97.425364,27.968515 C -98.882397,27.968515 -100.03669,27.561289 -100.88825,26.746837 C -101.73981,25.932388 -102.16559,24.827898 -102.16559,23.433366 C -102.16559,22.023218 -101.732,20.913846 -100.86481,20.105247 C -99.997629,19.296663 -98.810132,18.892367 -97.302318,18.892358 C -96.720294,18.892367 -96.162678,18.947055 -95.629469,19.056421 C -95.096274,19.165804 -94.593346,19.327913 -94.120682,19.542748 L -94.120682,21.353292 C -94.608971,21.075955 -95.094321,20.868925 -95.576735,20.732199 C -96.059163,20.595488 -96.54256,20.527129 -97.026928,20.527121 C -97.925368,20.527129 -98.617749,20.778104 -99.104073,21.28005 C -99.590403,21.782008 -99.833567,22.49978 -99.833564,23.433366 C -99.833567,24.35915 -99.599192,25.073991 -99.13044,25.577894 C -98.661695,26.081801 -97.995681,26.333754 -97.132396,26.333752 C -96.898027,26.333754 -96.680255,26.319105 -96.479077,26.289807 C -96.277912,26.260512 -96.097248,26.214613 -95.937086,26.152112 L -95.937086,24.452896 L -97.314037,24.452896 L -97.314037,22.94118 L -93.798417,22.94118 L -93.798417,27.148204 z M -86.509366,26.204846 L -90.036704,26.204846 L -90.593343,27.798594 L -92.860918,27.798594 L -89.620689,19.050561 L -86.93124,19.050561 L -83.691011,27.798594 L -85.958586,27.798594 L -86.509366,26.204846 z M -89.474205,24.581802 L -87.077724,24.581802 L -88.273035,21.101339 L -89.474205,24.581802 z M -125.68508,27.19305 L -121.94095,27.19305 C -120.82767,27.193058 -119.97318,27.440128 -119.37748,27.934259 C -118.78178,28.428407 -118.48393,29.132506 -118.48392,30.046561 C -118.48393,30.964533 -118.78178,31.670586 -119.37748,32.164721 C -119.97318,32.658864 -120.82767,32.905934 -121.94095,32.905931 L -123.42923,32.905931 L -123.42923,35.941082 L -125.68508,35.941082 L -125.68508,27.19305 z M -123.42923,28.827813 L -123.42923,31.271168 L -122.18118,31.271168 C -121.74369,31.271173 -121.4058,31.164728 -121.16751,30.951833 C -120.92924,30.738947 -120.8101,30.43719 -120.81009,30.046561 C -120.8101,29.655943 -120.92924,29.355162 -121.16751,29.144218 C -121.4058,28.933288 -121.74369,28.82782 -122.18118,28.827813 L -123.42923,28.827813 z M -116.89603,27.19305 L -114.64018,27.19305 L -114.64018,35.941082 L -116.89603,35.941082 L -116.89603,27.19305 z M -107.54449,31.476246 L -104.50934,35.941082 L -106.85894,35.941082 L -108.90386,32.952806 L -110.9312,35.941082 L -113.29252,35.941082 L -110.25737,31.476246 L -113.17534,27.19305 L -110.81987,27.19305 L -108.90386,30.011404 L -106.99371,27.19305 L -104.62652,27.19305 L -107.54449,31.476246 z M -103.16168,27.19305 L -97.073802,27.19305 L -97.073802,28.898125 L -100.90583,28.898125 L -100.90583,30.527029 L -97.302318,30.527029 L -97.302318,32.232104 L -100.90583,32.232104 L -100.90583,34.236007 L -96.944896,34.236007 L -96.944896,35.941082 L -103.16168,35.941082 L -103.16168,27.19305 z M -94.958569,27.19305 L -92.702714,27.19305 L -92.702714,34.236007 L -88.741783,34.236007 L -88.741783,35.941082 L -94.958569,35.941082 L -94.958569,27.19305 z M -81.230079,27.46844 L -81.230079,29.319999 C -81.710554,29.105163 -82.179303,28.943054 -82.636327,28.833672 C -83.093363,28.724304 -83.525002,28.669617 -83.931246,28.66961 C -84.470312,28.669617 -84.868748,28.743836 -85.126557,28.892266 C -85.384372,29.04071 -85.513278,29.271178 -85.513275,29.583671 C -85.513278,29.818051 -85.426364,30.000668 -85.252533,30.131521 C -85.078709,30.262386 -84.76328,30.374691 -84.306246,30.468435 L -83.34531,30.661794 C -82.372661,30.857111 -81.681257,31.153985 -81.271095,31.552417 C -80.860947,31.950858 -80.655869,32.517263 -80.655861,33.251633 C -80.655869,34.216477 -80.942001,34.934249 -81.514258,35.40495 C -82.086529,35.875652 -82.96055,36.111003 -84.136324,36.111004 C -84.691015,36.111003 -85.247654,36.058269 -85.806243,35.952801 C -86.364838,35.847332 -86.92343,35.691083 -87.482022,35.484052 L -87.482022,33.579758 C -86.92343,33.876634 -86.383393,34.100267 -85.861907,34.250655 C -85.340427,34.401047 -84.837499,34.476242 -84.353121,34.476241 C -83.860939,34.476242 -83.483987,34.394211 -83.222263,34.230147 C -82.96055,34.066087 -82.829691,33.831713 -82.829686,33.527024 C -82.829691,33.253589 -82.918558,33.042652 -83.096287,32.894212 C -83.274026,32.745778 -83.628517,32.612966 -84.159762,32.495775 L -85.032807,32.302416 C -85.907808,32.11492 -86.547455,31.816093 -86.951749,31.405933 C -87.356047,30.995783 -87.558194,30.44305 -87.558194,29.747733 C -87.558194,28.876648 -87.276945,28.206728 -86.714445,27.737971 C -86.151948,27.26923 -85.343357,27.034856 -84.288668,27.034847 C -83.808204,27.034856 -83.314065,27.070988 -82.806248,27.143245 C -82.298443,27.215519 -81.773054,27.323917 -81.230079,27.46844 L -81.230079,27.46844 z" id="text2331" transform="matrix(0, -0.893215, 1.11955, 0, 0, 0)"/>
  </svg > "
    setViewBox(svg, svgContainer, Points);
    const panZoomInstance = panzoom(svg, {
        zoomEnabled: true,
        panEnabled: true,
        controlIconsEnabled: true,
        fit: true,
        center: true,
        minZoom: 0.015,
        maxZoom: 1000,
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
    let keyPointIndex = 0;

    for (let i = 0; i < Points.length; i++) {
        const point = Points[i];
        let width;

        if (keyPointIndex < keyPoints.length && keyPoints[keyPointIndex].order === i) {
            width = keyPoints[keyPointIndex].width;
            keyPointIndex++;
        } else if (keyPointIndex > 0 && keyPointIndex < keyPoints.length) {
            const prevKeyPoint = keyPoints[keyPointIndex - 1];
            const nextKeyPoint = keyPoints[keyPointIndex];
            const t = (i - prevKeyPoint.order) / (nextKeyPoint.order - prevKeyPoint.order);
            width = interpolate(prevKeyPoint.width, nextKeyPoint.width, t);
        } else {
            width = keyPointIndex > 0 ? keyPoints[keyPointIndex - 1].width : null;
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
function oldupdateSteps() {
    oldTime.steps = parseInt(document.getElementById("steps").value);
    updateKeyPointOrder()
    displayKeyPoints()
    main();
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
        const { p1, cp1, cp2, p2, width } = line;
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
        path.setAttribute("stroke-width", 2);
        //path.setAttribute("stroke-width", width.toString());
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
    const contentWidth = maxX - minX + 2 * margin;
    const contentHeight = maxY - minY + 2 * margin;

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