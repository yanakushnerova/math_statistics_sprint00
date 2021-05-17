let content_page = document.getElementById("content_page")
let first_page = document.getElementById("first_page")
let second_page = document.getElementById("second_page")
let third_page = document.getElementById("third_page")
let fourth_page = document.getElementById("fourth_page")
let fifth_page = document.getElementById("fifth_page")

let calculate1 = document.getElementById("task1_calculate")
let calculate2 = document.getElementById("task2_calculate")
let calculate3 = document.getElementById("task3_calculate")
let calculate4 = document.getElementById("task4_calculate")
let calculate5 = document.getElementById("task5_calculate")

let solution1 = document.getElementById("task1_solution")
let solution2 = document.getElementById("task2_solution")
let solution3 = document.getElementById("task3_solution")
let solution4 = document.getElementById("task4_solution")
let solution5 = document.getElementById("task5_solution")

const sample_names = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let sample_info = document.createElement("p")
sample_info.setAttribute("id", "sample_info")

let samples_div = document.getElementById("samples_div")
let generate_sample = document.getElementById("generate_sample")
let set_default = document.getElementById("set_default")

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("task_1").onclick = function() {
        first_page.style.display = "block"
    }

    document.getElementById("task_2").onclick = function() {
        second_page.style.display = "block"
    }

    document.getElementById("task_3").onclick = function() {
        third_page.style.display = "block"
    }

    document.getElementById("task_4").onclick = function() {
        fourth_page.style.display = "block"
    }

    document.getElementById("task_5").onclick = function() {
        fifth_page.style.display = "block"
    }

    generate_sample.onclick = function() {
        sample_info.innerText = ""

        if (document.getElementById("sample_inputs")) {
            document.getElementById("sample_inputs").remove()
        }

        let samples = document.getElementById("sample_n").value

        if (samples > 26 || samples < 2) {
            sample_info.innerText = "Incorrect number of samples"
        } else {
            generateInputs(samples)
        }

        samples_div.appendChild(sample_info)
    }

    set_default.onclick = function() {
        sample_info.innerText = ""

        if (document.getElementById("sample_inputs")) {
            document.getElementById("sample_inputs").remove()
        }

        generateInputs(2)

        document.getElementById("sample-1").value = default_sample_A
        document.getElementById("sample-2").value = default_sample_B
    }

    task1_calculate.onclick = function() {
        solution1.innerHTML = ""
        let n = document.querySelectorAll("#sample_inputs > input")

        for (let i = 0; i < n.length; i++) {
            solution1.innerHTML += "<p>Sample " + (sample_names[i]) + ": </p>"
            let arr = parseSample(n[i].value)
            arr.sort((a, b) => a - b)
            outputSample(i, arr)
            solution1.innerHTML += "<br>"
            outputRange(i, arr)
            solution1.innerHTML += "<br><div>Table: <div><br>"

            let new_array = removeDuplicates(arr)
            let frequency_array = countFrequency(arr)
            frequencyTable(new_array, frequency_array)
        }
    }

    task2_calculate.onclick = function() {
        solution2.innerHTML = ""
        let n = document.querySelectorAll("#sample_inputs > input");
        
        for (let i = 0; i < n.length ; i++) {
            solution2.innerHTML += "<p>Sample " + (sample_names[i]) + ": </p>"
            let arr = parseSample(n[i].value)
            arr.sort((a, b) => a - b)
            // let arr_2 = removeDuplicates(arr)
            let frequency_array = countFrequency(arr)
            console.log(frequency_array)
            // createPolygonChart(frequency_array)
   
            createBarChart(i, frequency_array)
        }
    
        // arr.sort((a, b) => a - b)
        

        // console.table(new_array)
        // console.log(frequency_array)

        // createPolygonChart(frequency_array)
        // createBarChart(frequency_array)
    }

    // task3_calculate.onclick = function() {

    // }

    // task4_calculate.onclick = function() {

    // }

    // task5_calculate.onclick = function() {

    // }
});
