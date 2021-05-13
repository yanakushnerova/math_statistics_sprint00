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

let sample_info = document.createElement("p")
sample_info.setAttribute("id", "sample_info")

let samples_div = document.getElementById("samples_div")
let generate_sample = document.getElementById("generate_sample")
let set_default = document.getElementById("set_default")

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("task_1").onclick = function() {
        content_page.style.display = "none"
        first_page.style.display = "block"
    }

    document.getElementById("task_2").onclick = function() {
        content_page.style.display = "none"
        second_page.style.display = "block"
    }

    document.getElementById("task_3").onclick = function() {
        content_page.style.display = "none"
        third_page.style.display = "block"
    }

    document.getElementById("task_4").onclick = function() {
        content_page.style.display = "none"
        fourth_page.style.display = "block"
    }

    document.getElementById("task_5").onclick = function() {
        content_page.style.display = "none"
        fifth_page.style.display = "block"
    }

    document.getElementById("turn_back_1").onclick = function() {
        content_page.style.display = "block"
        first_page.style.display = "none"
    }

    document.getElementById("turn_back_2").onclick = function() {
        content_page.style.display = "block"
        second_page.style.display = "none"
    }

    document.getElementById("turn_back_3").onclick = function() {
        content_page.style.display = "block"
        third_page.style.display = "none"
    }

    document.getElementById("turn_back_4").onclick = function() {
        content_page.style.display = "block"
        fourth_page.style.display = "none"
    }

    document.getElementById("turn_back_5").onclick = function() {
        content_page.style.display = "block"
        fifth_page.style.display = "none"
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
        let n = document.querySelectorAll("#sample_inputs > input");
        let arr = []

        for (let i = 0; i < n.length; i++) {
            arr = arr.concat(parseSample(n[i].value))
        }
    
        arr.sort((a, b) => a - b)
        let new_array = removeDuplicates(arr)
        let frequency_array = countFrequency(arr)
        frequencyTable(new_array, frequency_array)
    }

    task2_calculate.onclick = function() {
        let n = document.querySelectorAll("#sample_inputs > input");
        let arr = []

        for (let i = 0; i < n.length; i++) {
            arr = arr.concat(parseSample(n[i].value))
        }
    
        arr.sort((a, b) => a - b)
        let new_array = removeDuplicates(arr)

        let frequency_array = countFrequency(arr)

        console.table(new_array)
        console.log(frequency_array)

        createPolygonChart(frequency_array)
        createBarChart(frequency_array)
    }

    // task3_calculate.onclick = function() {

    // }

    // task4_calculate.onclick = function() {

    // }

    // task5_calculate.onclick = function() {

    // }
});

// console.log(parseSample(default_sample_A))
// console.log(parseSample(default_sample_B))
