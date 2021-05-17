function createPolygonChart(i, frequency) {
    let solution = document.createElement("p")
    solution.innerHTML = "Sample " + sample_names[i] + ":"
    document.getElementById("task2_solution").appendChild(solution);

    let chart_name = document.createElement("div")
    chart_name.innerText = "Polygon chart: "
    document.getElementById("task2_solution").appendChild(chart_name);

    let polygon_chart = document.createElement("div")
    polygon_chart.setAttribute("class", "polygonchart")
    let output_polygon_chart = document.createElement("canvas")
    output_polygon_chart.id =  "output_polygonchart_" + i
    polygon_chart.appendChild(output_polygon_chart)
    document.getElementById("task2_solution").appendChild(polygon_chart);

    chart = new Chart(document.getElementById("output_polygonchart_" + i).getContext('2d'), {
        type: 'line',
        data: {
            labels: Object.keys(frequency).sort((a, b) => a - b),
            datasets: [{
                label: 'Variation Series',
                backgroundColor: 'rgb(76, 153, 0)',
                borderColor: 'rgb(76, 153, 0)',
                data: Object.keys(frequency).sort((a, b) => a - b).map((key) => frequency[key])
            }]
        }
    })
}

function createBarChart(i, frequency) {
    let chart_name = document.createElement("div")
    chart_name.innerText = "Histogram chart: "
    document.getElementById("task2_solution").appendChild(chart_name);

    let bar_chart = document.createElement("div")
    bar_chart.setAttribute("class", "barchart")
    let output_bar_chart = document.createElement("canvas")
    output_bar_chart.id =  "output_barchart_" + i
    bar_chart.appendChild(output_bar_chart)
    document.getElementById("task2_solution").appendChild(bar_chart);
    
    let chart = new Chart(document.getElementById("output_barchart_" + i).getContext('2d'), {
        type: 'bar',
        data: {
            labels: Object.keys(frequency).sort((a, b) => a - b),
            datasets: [{
                label: 'Variation Series',
                backgroundColor: 'rgb(76, 153, 0)',
                borderColor: 'rgb(76, 153, 0)',
                data: Object.keys(frequency).sort((a, b) => a - b).map((key) => frequency[key])
            }]
        }
    })
}

function empiricalDistribution() {
    
}
