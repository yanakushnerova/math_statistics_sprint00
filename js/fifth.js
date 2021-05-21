function expectedCentral(i, arr, frequency) {
    let solution = document.createElement("p")
    solution.innerHTML = "Вибірка " + sample_names[i] + ":"
    document.getElementById("task5_solution").appendChild(solution)

    let property_name = document.createElement("span")
    property_name.innerText = "Інтервальна оцінка математичного сподівання (центральний інтервал): "
    document.getElementById("task5_solution").appendChild(property_name)

    let new_arr = removeDuplicates(arr)
    let math_expected = 0
    let result_arr = []
    let total_frequency = 0

    for (let i = 0; i < new_arr.length; i++) {
        total_frequency += frequency[new_arr[i]]
    }

    for (let i = 0; i < new_arr.length; i++) {
        result_arr.push(frequency[new_arr[i]] / total_frequency)
    }

    for (let i = 0; i < new_arr.length; i++) {
        math_expected += new_arr[i] * result_arr[i]
    }

    let expectedCentral = document.createElement("div")
    expectedCentral.innerText = math_expected.toFixed(5)
    document.getElementById("task5_solution").appendChild(expectedCentral)
}

function expectedLower(arr) {
    let property_name = document.createElement("span")
    property_name.innerText = "Інтервальна оцінка математичного сподівання (нижній інтервал): "
    document.getElementById("task5_solution").appendChild(property_name)

    let mean_value = parseFloat((arr.reduce((a, b) => a + b) / arr.length).toFixed(7))
    let dispersion_value = 0

    for (let i = 0; i < arr.length; i++) {
        dispersion_value += Math.pow(arr[i] - mean_value, 2)
    }
    
    dispersion_value = (dispersion_value / arr.length).toFixed(5)
    let deviation_value = Math.sqrt(dispersion_value).toFixed(5)

    let math_expected = mean_value - 1.96 * (deviation_value / Math.sqrt(arr.length))

    let expectedLower = document.createElement("div")
    expectedLower.innerText = math_expected.toFixed(5)
    document.getElementById("task5_solution").appendChild(expectedLower)
}

function expectedUpper(arr) {
    let property_name = document.createElement("span")
    property_name.innerText = "Інтервальна оцінка математичного сподівання (верхній інтервал): "
    document.getElementById("task5_solution").appendChild(property_name)

    let mean_value = parseFloat((arr.reduce((a, b) => a + b) / arr.length).toFixed(7))
    let dispersion_value = 0

    for (let i = 0; i < arr.length; i++) {
        dispersion_value += Math.pow(arr[i] - mean_value, 2)
    }
    
    dispersion_value = (dispersion_value / arr.length).toFixed(5)
    let deviation_value = Math.sqrt(dispersion_value).toFixed(5)

    let math_expected = mean_value + 1.96 * (deviation_value / Math.sqrt(arr.length))

    let expectedUpper = document.createElement("div")
    expectedUpper.innerText = math_expected.toFixed(5)
    document.getElementById("task5_solution").appendChild(expectedUpper)
}

function deviationCentral(arr) {
    let property_name = document.createElement("span")
    property_name.innerText = "Інтервальна оцінка середньоквадратичного відхилення (центральний інтервал): "
    document.getElementById("task5_solution").appendChild(property_name)

    let mean_value = parseFloat((arr.reduce((a, b) => a + b) / arr.length).toFixed(5))
    let dispersion_value = 0

    for (let i = 0; i < arr.length; i++) {
        dispersion_value += Math.pow(arr[i] - mean_value, 2)
    }
    
    dispersion_value = (dispersion_value / arr.length).toFixed(5)


    let deviation_value = Math.sqrt(dispersion_value).toFixed(5)

    let deviation = document.createElement("div")
    deviation.innerText = deviation_value
    document.getElementById("task5_solution").appendChild(deviation)
}

function deviationLower(arr) {
    let property_name = document.createElement("span")
    property_name.innerText = "Інтервальна оцінка середньоквадратичного відхилення (нижній інтервал): "
    document.getElementById("task5_solution").appendChild(property_name)

    let mean_value = parseFloat((arr.reduce((a, b) => a + b) / arr.length).toFixed(5))
    let dispersion_value = 0

    for (let i = 0; i < arr.length; i++) {
        dispersion_value += Math.pow(arr[i] - mean_value, 2)
    }
    
    dispersion_value = (dispersion_value / arr.length).toFixed(5)
    let deviation_value = Math.sqrt(dispersion_value).toFixed(5)

    let math_expected = deviation_value - 1.96 * (deviation_value / Math.sqrt(arr.length))

    let deviationLower = document.createElement("div")
    deviationLower.innerText = math_expected.toFixed(5)
    document.getElementById("task5_solution").appendChild(deviationLower)
}

function deviationUpper(arr) {
    let property_name = document.createElement("span")
    property_name.innerText = "Інтервальна оцінка середньоквадратичного відхилення (верхній інтервал): "
    document.getElementById("task5_solution").appendChild(property_name)

    let mean_value = parseFloat((arr.reduce((a, b) => a + b) / arr.length).toFixed(5))
    let dispersion_value = 0

    for (let i = 0; i < arr.length; i++) {
        dispersion_value += Math.pow(arr[i] - mean_value, 2)
    }
    
    dispersion_value = (dispersion_value / arr.length).toFixed(5)
    let deviation_value = Math.sqrt(dispersion_value)

    let math_expected = deviation_value + (1.96 * (deviation_value / Math.sqrt(arr.length)))
 
    let deviationUpper = document.createElement("div")
    deviationUpper.innerText = (math_expected ).toFixed(5)
    document.getElementById("task5_solution").appendChild(deviationUpper)
}
