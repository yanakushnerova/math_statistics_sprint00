function sampleMean(i, arr) {
    let solution = document.createElement("p")
    solution.innerHTML = "Вибірка " + sample_names[i] + ":"
    document.getElementById("task3_solution").appendChild(solution)

    let property_name = document.createElement("span")
    property_name.innerText = "Вибіркове середнє значення: "
    document.getElementById("task3_solution").appendChild(property_name)

    let mean_value = parseFloat((arr.reduce((a, b) => a + b) / arr.length).toFixed(5))

    let mean = document.createElement("div")
    mean.innerText = mean_value
    document.getElementById("task3_solution").appendChild(mean)
}

function sampleMedian(arr) {
    let property_name = document.createElement("span")
    property_name.innerText = "Медіана: "
    document.getElementById("task3_solution").appendChild(property_name)

    let median_value
    if (arr.length % 2 == 1) {
        median_value = arr[Math.floor(arr.length / 2)]
    } else if (arr.length % 2 == 0) {
        median_value = (arr[Math.floor(arr.length / 2)] + arr[Math.floor(arr.length / 2) - 1]) / 2
    }

    let median = document.createElement("div")
    median.innerText = median_value
    document.getElementById("task3_solution").appendChild(median)
}

function sampleMode(arr) {
    let property_name = document.createElement("span")
    property_name.innerText = "Мода: "
    document.getElementById("task3_solution").appendChild(property_name)

    let mode_arr = []
    
    let new_array = removeDuplicates(arr)
    let frequency_array = countFrequency(arr)
    let max = frequency_array[new_array[0]]


    Object.keys(frequency_array).forEach(element => {
        if (frequency_array[element] > max) {
            
            max = frequency_array[element]
        }
    });

    Object.keys(frequency_array).forEach(element => {
        if (frequency_array[element] == max) {
            mode_arr.push(element)
        }
    });
    
    let mode = document.createElement("div")
    mode.innerText = mode_arr.join(", ")
    document.getElementById("task3_solution").appendChild(mode)
}

function sampleDispersion(arr) {
    let property_name = document.createElement("span")
    property_name.innerText = "Вибіркова дисперсія: "
    document.getElementById("task3_solution").appendChild(property_name)

    let mean_value = parseFloat((arr.reduce((a, b) => a + b) / arr.length).toFixed(5))
    let dispersion_value = 0

    for (let i = 0; i < arr.length; i++) {
        dispersion_value += Math.pow(arr[i] - mean_value, 2)
    }
    
    dispersion_value /= arr.length

    let dispersion = document.createElement("div")
    dispersion.innerText = dispersion_value.toFixed(5)
    document.getElementById("task3_solution").appendChild(dispersion)
}

function sampleDeviation(arr) {
    let property_name = document.createElement("span")
    property_name.innerText = "Вибіркове середньоквадратичне відхилення: "
    document.getElementById("task3_solution").appendChild(property_name)

    let mean_value = parseFloat((arr.reduce((a, b) => a + b) / arr.length).toFixed(5))
    let dispersion_value = 0

    for (let i = 0; i < arr.length; i++) {
        dispersion_value += Math.pow(arr[i] - mean_value, 2)
    }
    
    dispersion_value = (dispersion_value / arr.length).toFixed(5)

    let deviation_value = Math.sqrt(dispersion_value).toFixed(5)

    let deviation = document.createElement("div")
    deviation.innerText = deviation_value
    document.getElementById("task3_solution").appendChild(deviation)
}

function sampleCoefficient(arr) {
    let property_name = document.createElement("span")
    property_name.innerText = "Коефіціент варіації: "
    document.getElementById("task3_solution").appendChild(property_name)

    let mean_value = parseFloat((arr.reduce((a, b) => a + b) / arr.length).toFixed(5))
    let dispersion_value = 0

    for (let i = 0; i < arr.length; i++) {
        dispersion_value += Math.pow(arr[i] - mean_value, 2)
    }
    
    dispersion_value = (dispersion_value / arr.length).toFixed(5)
    let deviation_value = Math.sqrt(dispersion_value).toFixed(5)
    let coefficient_value = (deviation_value / mean_value).toFixed(5)

    let coefficient = document.createElement("div")
    coefficient.innerText = coefficient_value
    document.getElementById("task3_solution").appendChild(coefficient)
}

function centralMoment3(arr) {
    let property_name = document.createElement("span")
    property_name.innerText = "Центральний момент 3: "
    document.getElementById("task3_solution").appendChild(property_name)

    let mean_value = parseFloat((arr.reduce((a, b) => a + b) / arr.length).toFixed(5))
    let moment_value = 0

    for (let i = 0; i < arr.length; i++) {
        moment_value += Math.pow(arr[i] - mean_value, 3)
    }
    
    moment_value /= (arr.length - 1)

    let moment = document.createElement("div")
    moment.innerText = moment_value.toFixed(5)
    document.getElementById("task3_solution").appendChild(moment)
}

function centralMoment4(arr) {
    let property_name = document.createElement("span")
    property_name.innerText = "Центральний момент 4: "
    document.getElementById("task3_solution").appendChild(property_name)

    let mean_value = parseFloat((arr.reduce((a, b) => a + b) / arr.length).toFixed(5))
    let moment_value = 0

    for (let i = 0; i < arr.length; i++) {
        moment_value += Math.pow(arr[i] - mean_value, 4)
    }
    
    moment_value /= (arr.length - 1)

    let moment = document.createElement("div")
    moment.innerText = moment_value.toFixed(5)
    document.getElementById("task3_solution").appendChild(moment)
}

function sampleAssymetry(arr) {
    let property_name = document.createElement("span")
    property_name.innerText = "Асиметрія: "
    document.getElementById("task3_solution").appendChild(property_name)

    let mean_value = parseFloat((arr.reduce((a, b) => a + b) / arr.length).toFixed(5))
    let moment_value = 0
    let dispersion_value = 0

    for (let i = 0; i < arr.length; i++) {
        moment_value += Math.pow(arr[i] - mean_value, 3)
        dispersion_value += Math.pow(arr[i] - mean_value, 2)
    }
    
    moment_value /= (arr.length - 1)
    dispersion_value = (dispersion_value / arr.length).toFixed(5)
    let deviation_value = Math.sqrt(dispersion_value).toFixed(5)

    let asymmetry_value = moment_value / Math.pow(deviation_value, 3)

    let asymmetry = document.createElement("div")
    asymmetry.innerText = asymmetry_value.toFixed(5)
    document.getElementById("task3_solution").appendChild(asymmetry)
}

function sampleExcess(arr) {
    let property_name = document.createElement("span")
    property_name.innerText = "Ексцес: "
    document.getElementById("task3_solution").appendChild(property_name)

    let mean_value = parseFloat((arr.reduce((a, b) => a + b) / arr.length).toFixed(5))
    let moment_value = 0
    let dispersion_value = 0

    for (let i = 0; i < arr.length; i++) {
        moment_value += Math.pow(arr[i] - mean_value, 4)
        dispersion_value += Math.pow(arr[i] - mean_value, 2)
    }
    
    moment_value /= (arr.length - 1)
    dispersion_value = (dispersion_value / arr.length).toFixed(5)
    let deviation_value = Math.sqrt(dispersion_value).toFixed(5)

    let excess_value = (moment_value / Math.pow(deviation_value, 4)) - 3

    let excess = document.createElement("div")
    excess.innerText = excess_value.toFixed(5)
    document.getElementById("task3_solution").appendChild(excess)
}

function sampleCorrectedDispersion(arr) {
    let property_name = document.createElement("span")
    property_name.innerText = "Виправлена дисперсія: "
    document.getElementById("task3_solution").appendChild(property_name)

    let mean_value = parseFloat((arr.reduce((a, b) => a + b) / arr.length).toFixed(5))
    let dispersion_value = 0

    for (let i = 0; i < arr.length; i++) {
        dispersion_value += Math.pow(arr[i] - mean_value, 2)
    }
    
    dispersion_value /= (arr.length - 1)

    let dispersion = document.createElement("div")
    dispersion.innerText = dispersion_value.toFixed(5)
    document.getElementById("task3_solution").appendChild(dispersion)
}

function sampleCorrectedDeviation(arr) {
    let property_name = document.createElement("span")
    property_name.innerText = "Виправлене середнє квадратичне відхилення: "
    document.getElementById("task3_solution").appendChild(property_name)

    let mean_value = parseFloat((arr.reduce((a, b) => a + b) / arr.length).toFixed(5))
    let dispersion_value = 0

    for (let i = 0; i < arr.length; i++) {
        dispersion_value += Math.pow(arr[i] - mean_value, 2)
    }
    
    dispersion_value = (dispersion_value / (arr.length - 1)).toFixed(5)

    let deviation_value = Math.sqrt(dispersion_value).toFixed(5)

    let deviation = document.createElement("div")
    deviation.innerText = deviation_value
    document.getElementById("task3_solution").appendChild(deviation)
}
