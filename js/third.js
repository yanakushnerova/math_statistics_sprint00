function sampleMean(i, arr) {
    let solution = document.createElement("p")
    solution.innerHTML = "Sample " + sample_names[i] + ":"
    document.getElementById("task3_solution").appendChild(solution)

    let property_name = document.createElement("span")
    property_name.innerText = "Mean: "
    document.getElementById("task3_solution").appendChild(property_name)

    let mean_value = parseFloat((arr.reduce((a, b) => a + b) / arr.length).toFixed(5))

    let mean = document.createElement("div")
    mean.innerText = mean_value
    document.getElementById("task3_solution").appendChild(mean)
}

function sampleMedian(arr) {
    let property_name = document.createElement("span")
    property_name.innerText = "Median: "
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

// function sampleMode(arr) {
//     let property_name = document.createElement("span")
//     property_name.innerText = "Mode: "
//     document.getElementById("task3_solution").appendChild(property_name)

//     let mode_arr = []
    

//     let mode = document.createElement("div")
//     mode.innerText = mode_arr
//     document.getElementById("task3_solution").appendChild(mode)
// }

// мода; 

// вибіркова дисперсія; 

// вибіркове середнє квадратичне відхилення; 

// коефіцієнт варіації; 

// центральні моменти 3, 4; 

// асиметрія; 

// ексцес; 

//  виправлена дисперсія; 

// виправлене середнє квадратичне відхилення. 
