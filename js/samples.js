let default_sample_A = "14 12 12 14 25 18 20 18 25 18 20 14 20 14 16 14 14 18 16 18 20 22 16 18 14 18 18 18 20 20 20 22 18 14 20 16 14 20 20 16 24 18 14 20 24 22 18 18 22 25 14 20 16 20 26"
let default_sample_B = "-6,53 3,91 2,98 -7,79 -3,12 -2,75 0,53 -4,98 -3,02 -4,72 -1,67 1,95 0,02 1,52 -5,43 2,9 0,19 -6,73 -3,55 1,21 0,99 -4,11 -3,46 1,65 2,38 1,09 1,03 -6,1 -3,98 -5,14"

function generateInputs(n) {
    let names = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    
    let inputs = document.createElement("div")
    inputs.id = "sample_inputs"
    

    for (let i = 0; i < n; i++) {
        let label = document.createElement("label")
        label.innerHTML = names[i] + ":"
        let input = document.createElement("input")
        input.setAttribute("id", "sample-" + (i + 1))
        input.setAttribute("type", "text")

        let br = document.createElement("br")

        inputs.appendChild(label)
        inputs.appendChild(input)
        inputs.appendChild(br)
    }

    samples_div.appendChild(inputs)
}

function checkSampleInput() {
    
}

function parseSample(sample) {
    let replace = sample.replace(/,/g, '.')
    let parsed_sample = replace.split(" ")

    for (let i = 0; i < parsed_sample.length; i++) {
        parsed_sample[i] = parseFloat(parsed_sample[i])
    }

    return parsed_sample
}

function countFrequency(arr) {
    let duplicates = {}
    arr.forEach(function(x) { duplicates[x] = (duplicates[x] || 0)+1; });
    return duplicates
}

function removeDuplicates(arr) {
    let temp_array = JSON.parse(JSON.stringify(arr))
    let new_array = []

    new_array = temp_array.filter(function(item, pos) {
        return temp_array.indexOf(item) == pos;
    })

    return new_array
}

function outputSample(i, arr) {
    let sample_output = document.createElement("div")
    sample_output.setAttribute("id", "sample_output_" + i)

    sample_output.innerHTML += "<div>Variation series:   </div><div>["

    for (let i = 0; i < arr.length; i++) {
        if (arr.length == 1 || i == arr.length - 1) {
            sample_output.innerText += arr[i]
        } else {
            sample_output.innerText += arr[i] + ", "
        }
    }

    sample_output.innerHTML += "]</div>"
    document.getElementById("task1_solution").appendChild(sample_output)
}

function outputRange(i, arr) {
    let sample_range = document.createElement("div")
    sample_range.setAttribute("id", "sample_range_" + i)

    sample_range.innerHTML += "<div>Range:   </div><div>["

    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            sample_range.innerText += arr[i] + ", "
        }

        if (i == arr.length - 1) {
            sample_range.innerText += arr[i]
        }
    }

    sample_range.innerHTML += "]</div>"
    document.getElementById("task1_solution").appendChild(sample_range)
}
