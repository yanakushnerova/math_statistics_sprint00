function createBarChart(frequency) {
    // Chart.defaults.font.size = 15
    let bar_chart = document.getElementById("bar_chart")
    let output_bar_chart = document.createElement("canvas")
    output_bar_chart.setAttribute("id", "output_bar_chart")

    chart = new Chart(output_bar_chart.getContext('2d'), {
        type: 'bar',
        data: {
            labels: Object.keys(frequency).sort((a, b) => a - b),
            datasets: [{
                label: 'Variation Series',
                backgroundColor: 'rgb(254, 202, 107)',
                borderColor: 'rgb(254, 202, 107)',
                data: Object.keys(frequency).sort((a, b) => a - b).map((key) => frequency[key])
            }]
        }
    })


    bar_chart.appendChild(output_bar_chart)
}

function createPolygonChart(frequency) {
    let polygon_chart = document.getElementById("polygon_chart")
    let output_polygon_chart = document.createElement("canvas")
    output_polygon_chart.setAttribute("id", "output_polygon_chart")

    chart = new Chart(output_polygon_chart.getContext('2d'), {
        type: 'line',
        data: {
            labels: Object.keys(frequency).sort((a, b) => a - b),
            datasets: [{
                label: 'Variation Series',
                backgroundColor: 'rgb(254, 202, 107)',
                borderColor: 'rgb(254, 202, 107)',
                data: Object.keys(frequency).sort((a, b) => a - b).map((key) => frequency[key])
            }]
        }
    })


    polygon_chart.appendChild(output_polygon_chart)
}
