function momentMean(i, arr) {
    let solution = document.createElement("p")
    solution.innerHTML = "Sample " + sample_names[i] + ":"
    document.getElementById("task4_solution").appendChild(solution)

    let property_name = document.createElement("span")
    property_name.innerText = "Expected value(moment's method): "
    document.getElementById("task4_solution").appendChild(property_name)

    let mean_value = parseFloat((arr.reduce((a, b) => a + b) / arr.length).toFixed(7))

    let mean = document.createElement("div")
    mean.innerText = mean_value
    document.getElementById("task4_solution").appendChild(mean)
}
