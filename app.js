/* const canvas = d3.select("#canvas");

const data = [
    { name: "Juan", age: 3 },
    { name: "Fernanda", age: 16 },
    { name: "María", age: 7 },
    { name: "Sandra", age: 35 }
];

// RETO 1

const table = canvas.append("table");

const head = table.append('thead').append('tr');
head.append('th').text('Name');
head.append('th').text('Age');

const body = table.append('tobdy');
data.forEach(d =>{
    const row = body.append('tr');
    row.append('th').text(d.name);
    row.append('th').text(d.age);
});

// RETO 2

const svg = canvas.append("svg");
svg.attr("width", 800);
svg.attr("height", 400);

const li = svg.selectAll("rect").data(data);

li.enter()
    .append("rect")
    .attr("x", (d,i) => 10+(i*110))
    .attr("y", (d,i) => 10+(350-d.age*10))
    .attr("width", 100)
    .attr("height", (d,i) => d.age*10)
    .style("fill", "steelblue");


// RETO 3

d3.json("https://gist.githubusercontent.com/josejbocanegra/d3b9e9775ec3a646603f49bc8d3fb90f/raw/3a39300c2a2ff8644a52e22228e900251ec5880a/population.json").then(data => {
    data.push({ name: "", value: 0 });
    const width = 700;
    const height = 500;
    const margin = { top: 10, left: 50, bottom: 40, right: 10 };
    const iwidth = width - margin.left - margin.right;
    const iheight = height - margin.top - margin.bottom;

    const svg = canvas.append("svg");
    svg.attr("width", width);
    svg.attr("height", height);

    let g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);


    const y = d3.scaleBand()
        .domain(data.map(d => d.name))
        .range([0, height])
        .padding(0.1);

    const x = d3.scaleLinear()
        .domain([1000000, 0])
        .range([iwidth, 0]);

    const bars = g.selectAll("rect").data(data);
    bars.enter().append("rect")
        .attr("class", "bar")
        .style("fill", "steelblue")
        .attr("x", d => 0)
        .attr("y", d => y(d.name))
        .attr("width", d => x(d.value))
        .attr("height", y.bandwidth());

    g.append("g")
        .classed("x--axis", true)
        .call(d3.axisBottom(x))
        .attr("transform", `translate(0, ${iheight + 19})`);

    g.append("g")
        .classed("y--axis", true)
        .call(d3.axisLeft(y));

});

// RETO 4

d3.json("https://gist.githubusercontent.com/josejbocanegra/000e838b77c6ec8e5d5792229c1cdbd0/raw/83cd9161e28e308ef8c5363e217bad2b6166f21a/countries.json").then(data => {
    let suma = 0;
    for (let d of data) {
        suma += parseInt(d.population);
    }
    const width = 1100;
    const height = 700;
    const margin = { top: 10, left: 50, bottom: 40, right: 10 };
    const iwidth = width - margin.left - margin.right;
    const iheight = height - margin.top - margin.bottom;

    const svg = canvas.append("svg");
    svg.attr("width", width);
    svg.attr("height", height);

    let g = svg.ap
    hgepend("g").attr("transform", `translate(${margin.left},${margin.top})`);

    const y = d3.scaleLinear()
        .domain([0, 100])
        .range([iheight, 0]);

    const x = d3.scaleLinear()
        .domain([0, 40000])
        .range([0, iwidth]);

    const bars = g.selectAll("circle").data(data);
    bars.enter().append("circle")
        .style("fill", "steelblue")
        .attr("cx", d => x(d.purchasingpower))
        .attr("cy", d => y(d.lifeexpectancy))
        .attr("r", d => (parseInt(d.population) / suma) * 100);

    const texts = g.selectAll("text").data(data);
    texts.enter().append("text")
        .attr("x", d => x(d.purchasingpower))
        .attr("y", d => y(d.lifeexpectancy))
        .attr("text-anchor", "middle")
        .text(d => d.country);

    g.append("g")
        .classed("x--axis", true)
        .call(d3.axisBottom(x))
        .attr("transform", `translate(0, ${iheight})`);

    g.append("g")
        .classed("y--axis", true)
        .call(d3.axisLeft(y));
}); */

const canvas = d3.select("#canvas");

const data = [
    {name: "Juan", age: 3},
    {name: "Orlando", age: 39},
    {name: "María", age: 7},
    {name: "Sandra", age: 35},
    {name: "Fernanda", age: 16},
    {name: "Maribel", age: 45},
    {name: "Sofía", age: 6}
];

const width = 700;
const height = 500;
const margin = { top:10, left:50, bottom: 40, right: 10};
const iwidth = width - margin.left - margin.right;
const iheight = height - margin.top -margin.bottom;

const svg = canvas.append("svg");
svg.attr("width", width);
svg.attr("height", height);

let g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

const y = d3.scaleLinear() 
    .domain([0, 30])
    .range([iheight, 0]);

const x = d3.scaleBand()
.domain(data.map(d => d.name) ) 
.range([0, iwidth])
.padding(0.1); 

const bars = g.selectAll("rect").data(data);

bars.enter().append("rect")
.attr("class", "bar")
.style("fill", "steelblue")
.attr("x", d => x(d.name))
.attr("y", d => y(d.age))
.attr("height", d => iheight - y(d.age))
.attr("width", x.bandwidth())  

g.append("g")
.classed("x--axis", true)
.call(d3.axisBottom(x))
.attr("transform", `translate(0, ${iheight})`);  

g.append("g")
.classed("y--axis", true)
.call(d3.axisLeft(y));