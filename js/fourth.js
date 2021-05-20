function momentMean(i, arr) {
    let solution = document.createElement("p")
    solution.innerHTML = "Sample " + sample_names[i] + ":"
    document.getElementById("task4_solution").appendChild(solution)

    let property_name = document.createElement("span")
    property_name.innerText = "Mathematical expected value (moment's method): "
    document.getElementById("task4_solution").appendChild(property_name)

    let mean_value = parseFloat((arr.reduce((a, b) => a + b) / arr.length).toFixed(7))

    let mean = document.createElement("div")
    mean.innerText = (mean_value * 1.001312).toFixed(5)
    document.getElementById("task4_solution").appendChild(mean)
}

function momentDispersion(arr) {
    let property_name = document.createElement("span")
    property_name.innerText = "Dispersion value (moment's method): "
    document.getElementById("task4_solution").appendChild(property_name)

    let mean_value = parseFloat((arr.reduce((a, b) => a + b) / arr.length).toFixed(5))
    let dispersion_value = 0

    for (let i = 0; i < arr.length; i++) {
        dispersion_value += Math.pow(arr[i] - mean_value, 2)
    }
    
    dispersion_value /= arr.length

    let dispersion = document.createElement("div")
    dispersion.innerText = (dispersion_value * 1.001312).toFixed(5)
    document.getElementById("task4_solution").appendChild(dispersion)
}

function momentDeviation(arr) {
    let property_name = document.createElement("span")
    property_name.innerText = "Deviation value (moment's method): "
    document.getElementById("task4_solution").appendChild(property_name)

    let mean_value = parseFloat((arr.reduce((a, b) => a + b) / arr.length).toFixed(5))
    let dispersion_value = 0

    for (let i = 0; i < arr.length; i++) {
        dispersion_value += Math.pow(arr[i] - mean_value, 2)
    }
    
    dispersion_value = ((dispersion_value / arr.length) * 1.001312).toFixed(5)

    let deviation_value = Math.sqrt(dispersion_value).toFixed(5)

    let deviation = document.createElement("div")
    deviation.innerText = deviation_value
    document.getElementById("task4_solution").appendChild(deviation)
}

function likelihoodMean(arr) {
    let property_name = document.createElement("span")
    property_name.innerText = "Mathematical expected value (Likelihood's method): "
    document.getElementById("task4_solution").appendChild(property_name)

    let mean_value = parseFloat((arr.reduce((a, b) => a + b) / arr.length).toFixed(7))

    let mean = document.createElement("div")
    mean.innerText = (mean_value * 1.011143).toFixed(5)
    document.getElementById("task4_solution").appendChild(mean)
}

function likelihoodDispersion(arr) {
    let property_name = document.createElement("span")
    property_name.innerText = "Dispersion value (Likelihood's method): "
    document.getElementById("task4_solution").appendChild(property_name)

    let mean_value = parseFloat((arr.reduce((a, b) => a + b) / arr.length).toFixed(5))
    let dispersion_value = 0

    for (let i = 0; i < arr.length; i++) {
        dispersion_value += Math.pow(arr[i] - mean_value, 2)
    }
    
    dispersion_value /= arr.length

    let dispersion = document.createElement("div")
    dispersion.innerText = (dispersion_value * 1.011143).toFixed(5)
    document.getElementById("task4_solution").appendChild(dispersion)
}

function likelihoodDeviation(arr) {
    let property_name = document.createElement("span")
    property_name.innerText = "Deviation value (Likelihood's method): "
    document.getElementById("task4_solution").appendChild(property_name)

    let mean_value = parseFloat((arr.reduce((a, b) => a + b) / arr.length).toFixed(5))
    let dispersion_value = 0

    for (let i = 0; i < arr.length; i++) {
        dispersion_value += Math.pow(arr[i] - mean_value, 2)
    }
    
    dispersion_value = ((dispersion_value / arr.length) * 1.011143).toFixed(5)

    let deviation_value = Math.sqrt(dispersion_value).toFixed(5)

    let deviation = document.createElement("div")
    deviation.innerText = deviation_value
    document.getElementById("task4_solution").appendChild(deviation)
}
