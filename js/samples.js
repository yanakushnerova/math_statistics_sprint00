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
    let new_array = []

    new_array = arr.filter(function(item, pos) {
        return arr.indexOf(item) == pos;
    })

    return new_array
}

let a = [2, 4, -3, 4, 4, 5, -7, 1]
console.log(countFrequency(a))
console.log(removeDuplicates(a))
