/* RETO 1
const svg = d3.select("#canvas").append("svg")
    .attr("width", 400)
    .attr("height", 200)
    .style("border-color", "black")
    .style("border-style", "solid")
    .style("border-width", "1px");

const rectangle = svg.append("rect")
    .attr("x", 50)
    .attr("y", 50)
    .attr("width", 50)
    .attr("height", 50);

d3.select("#start").on("click", function () {
    rectangle
        .transition()
        .attr("x", 250);
});

d3.select("#reset").on("click", function () {
    rectangle
        .transition()
        .attr("x",50);
}); */

/* RETO 2
const svg = d3.select("#canvas").append("svg")
    .attr("width", 400)
    .attr("height", 200)
    .style("border-color", "black")
    .style("border-style", "solid")
    .style("border-width", "1px");

const rectangle = svg.append("rect")
    .attr("x", 50)
    .attr("y", 50)
    .attr("width", 50)
    .attr("height", 50);

d3.select("#start").on("click", function () {
    rectangle
        .transition()
        .attr("x", 250)
        .attr("width", 100) 
	    .attr("height", 100); 
});

d3.select("#reset").on("click", function () {
    rectangle
        .transition()
        .attr("x", 50)
        .attr("width", 50)
        .attr("height", 50);
}); */

/* RETO 3
const svg = d3.select("#canvas").append("svg")
    .attr("width", 400)
    .attr("height", 200)
    .style("border-color", "black")
    .style("border-style", "solid")
    .style("border-width", "1px");

const rectangle = svg.append("circle")
    .attr("cx", 50)
    .attr("cy", 80)
    .attr("r", 25);

d3.select("#start").on("click", function () {
    rectangle
        .transition()
        .attr("cx", 250)
        .attr("r", 50) 
        .attr("opacity",0.5);
});

d3.select("#reset").on("click", function () {
    rectangle
        .transition()
        .attr("cx", 50)
        .attr("r", 25)
        .attr("opacity", 1);
}); */

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const canvas = d3.select("#canvas");

const data = [
    { name: "Medellín", w2005: 3, w2006: 33 },
    { name: "Cali", w2005: 39, w2006: 45 },
    { name: "Bogotá", w2005: 7, w2006: 31 },
    { name: "Pereira", w2005: 35, w2006: 36 },
    { name: "Bucaramanga", w2005: 16, w2006: 23 },
    { name: "Cúcuta", w2005: 45, w2006: 45 },
    { name: "Armenia", w2005: 6, w2006: 16 }
];

const width = 700;
const height = 500;
const margin = { top: 10, left: 50, bottom: 40, right: 10 };
const iwidth = width - margin.left - margin.right;
const iheight = height - margin.top - margin.bottom;

const svg = canvas.append("svg");
svg.attr("width", width);
svg.attr("height", height);

let g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

const y = d3.scaleLinear()
    .domain([0, 45])
    .range([iheight, 0]);

const x = d3.scaleBand()
    .domain(data.map(d => d.name))
    .range([0, iwidth])
    .padding(0.1);

const bars = g.selectAll("rect").data(data);

bars.enter().append("rect")
    .attr("class", "bar")
    .style("fill", d=> getRandomColor())
    .attr("x", d => x(d.name))
    .attr("y", d => y(d.w2005))
    .attr("height", d => iheight - y(d.w2005))
    .attr("width", x.bandwidth())

g.append("g")
    .classed("x--axis", true)
    .call(d3.axisBottom(x))
    .attr("transform", `translate(0, ${iheight})`);

g.append("g")
    .classed("y--axis", true)
    .call(d3.axisLeft(y));


d3.select("#start").on("click", function () {
    g.selectAll("rect").data(data).transition()
        .attr("y", d => y(d.w2006))
        .attr("height", d => iheight - y(d.w2006))
        .style("fill", d => getRandomColor())
        .delay(200)
        .duration(3000)
        .ease(d3.easeElastic);
});

d3.select("#reset").on("click", function () {
    g.selectAll("rect").data(data).transition()
        .attr("y", d => y(d.w2005))
        .attr("height", d => iheight - y(d.w2005))
        .style("fill", d => getRandomColor())
        .delay(200)
        .duration(3000)
        .ease(d3.easeElastic);
});