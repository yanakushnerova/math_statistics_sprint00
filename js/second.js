function createPolygonChart(i, frequency) {
    let solution = document.createElement("p")
    solution.innerHTML = "Вибірка " + sample_names[i] + ":"
    document.getElementById("task2_solution").appendChild(solution)

    let chart_name = document.createElement("div")
    chart_name.innerText = "Полігон: "
    document.getElementById("task2_solution").appendChild(chart_name)

    let polygon_chart = document.createElement("div")
    polygon_chart.setAttribute("class", "polygonchart")
    let output_polygon_chart = document.createElement("canvas")
    output_polygon_chart.id =  "output_polygonchart_" + i
    polygon_chart.appendChild(output_polygon_chart)
    document.getElementById("task2_solution").appendChild(polygon_chart)

    chart = new Chart(document.getElementById("output_polygonchart_" + i).getContext('2d'), {
        type: 'line',
        data: {
            labels: Object.keys(frequency).sort((a, b) => a - b),
            datasets: [{
                label: 'Варіаційний ряд',
                backgroundColor: 'rgb(76, 153, 0)',
                borderColor: 'rgb(76, 153, 0)',
                data: Object.keys(frequency).sort((a, b) => a - b).map((key) => frequency[key])
            }]
        },
        options: {
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Значення варіанти'
                }
              },
              y: {
                title: {
                  display: true,
                  text: 'Частота'
                }
              }
            }
        }
    })
}

function createBarChart(i, frequency) {
    let chart_name = document.createElement("div")
    chart_name.innerText = "Гістограма: "
    document.getElementById("task2_solution").appendChild(chart_name)

    let bar_chart = document.createElement("div")
    bar_chart.setAttribute("class", "barchart")
    let output_bar_chart = document.createElement("canvas")
    output_bar_chart.id =  "output_barchart_" + i
    bar_chart.appendChild(output_bar_chart)
    document.getElementById("task2_solution").appendChild(bar_chart)
    
    let chart = new Chart(document.getElementById("output_barchart_" + i).getContext('2d'), {
        type: 'bar',
        data: {
            labels: Object.keys(frequency).sort((a, b) => a - b),
            datasets: [{
                label: 'Варіаційний ряд',
                backgroundColor: 'rgb(76, 153, 0)',
                borderColor: 'rgb(76, 153, 0)',
                data: Object.keys(frequency).sort((a, b) => a - b).map((key) => frequency[key])
            }]
        },
        options: {
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Значення варіанти'
                }
              },
              y: {
                title: {
                  display: true,
                  text: 'Частота'
                }
              }
            }
        }
    })
}

function empiricalDistribution(i, arr, frequency) {
    let new_arr = removeDuplicates(arr)
    let total_frequency = 0
    let cumulative_relative_frequency = 0
    let result_arr = []

    for (let i = 0; i < new_arr.length; i++) {
        total_frequency += frequency[new_arr[i]]
    }

    for (let i = 0; i < new_arr.length; i++) {
        cumulative_relative_frequency += frequency[new_arr[i]] / total_frequency
        result_arr.push(cumulative_relative_frequency.toFixed(7))
    }

    let task_name = document.createElement("div")
    task_name.innerText = "Емпірична функція розподілення: "
    document.getElementById("task2_solution").appendChild(task_name)

    let table = document.createElement("table")
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    td1.innerHTML = "F*(x)="
    let td2 = document.createElement("td")

    for (let i = 0; i < new_arr.length; i++) {
        if (i == 0) {
            td2.innerHTML += result_arr[i] + ",&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp x &#8804 " + new_arr[i]
        } else if (i == new_arr.length - 1) {
            td2.innerHTML += result_arr[i] + ",&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp x > " + new_arr[i]
        } else {
            td2.innerHTML += result_arr[i] + ",&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + new_arr[i - 1] + "< x &#8804 " + new_arr[i]
        }
        td2.innerHTML += "<br>"
    }

    tr.appendChild(td1)
    tr.appendChild(td2)
    table.appendChild(tr)
    document.getElementById("task2_solution").appendChild(table)

    let chart_name = document.createElement("div")
    chart_name.innerText = "Графік емпіричної функції розподілення: "
    document.getElementById("task2_solution").appendChild(chart_name)

    let bar_chart = document.createElement("div")
    bar_chart.setAttribute("class", "barchart")
    let output_bar_chart = document.createElement("canvas")
    output_bar_chart.id =  "Empirical_barchart_" + i
    bar_chart.appendChild(output_bar_chart)
    document.getElementById("task2_solution").appendChild(bar_chart)
    
    let chart = new Chart(document.getElementById("Empirical_barchart_" + i).getContext('2d'), {
        type: 'bar',
        data: {
            labels: new_arr,
            datasets: [{
                label: 'Варіаційний ряд',
                backgroundColor: 'rgb(76, 153, 0)',
                borderColor: 'rgb(76, 153, 0)',
                data: result_arr
            }]
        },
        options: {
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Інтервал'
                }
              },
              y: {
                title: {
                  display: true,
                  text: 'Відносна частота'
                }
              }
            }
        }
    })
}
