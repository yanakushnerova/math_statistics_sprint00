function createBarChart(i, frequency) {
    let bar_chart = document.createElement("div")
    bar_chart.setAttribute("id", "barchart_" + i)
    let output_bar_chart = document.createElement("canvas")
    output_bar_chart.id =  "hi_barchart_" + i
    bar_chart.appendChild(output_bar_chart)
    document.getElementById("task2_solution").appendChild(bar_chart);
    console.log(document.getElementById("hi_barchart_" + i))
    let chart = new Chart(document.getElementById("hi_barchart_" + i).getContext('2d'), {
        type: 'bar',
        data: {
            labels: Object.keys(frequency).sort((a, b) => a - b),
            datasets: [{
                label: 'Variation Series',
                backgroundColor: 'rgb(41, 97, 24)',
                borderColor: 'rgb(41, 97, 24)',
                data: Object.keys(frequency).sort((a, b) => a - b).map((key) => frequency[key])
            }]
        }
    })
}

// function createPolygonChart(frequency) {
//     let polygon_chart = document.getElementById("polygon_chart")
//     let output_polygon_chart = document.createElement("canvas")
//     output_polygon_chart.setAttribute("id", "output_polygon_chart")

//     chart = new Chart(output_polygon_chart.getContext('2d'), {
//         type: 'line',
//         data: {
//             labels: Object.keys(frequency).sort((a, b) => a - b),
//             datasets: [{
//                 label: 'Variation Series',
//                 backgroundColor: 'rgb(41, 97, 24)',
//                 borderColor: 'rgb(41, 97, 24)',
//                 data: Object.keys(frequency).sort((a, b) => a - b).map((key) => frequency[key])
//             }]
//         }
//     })


//     document.getElementById("task2_solution").appendChild(output_polygon_chart)
// }
