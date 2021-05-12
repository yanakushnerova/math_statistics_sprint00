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

let task1_info = document.createElement("p")
task1_info.setAttribute("id", "task1_info")

let samples_div = document.getElementById("samples_div")
let generate_sample = document.getElementById("generate_sample")
let set_default = document.getElementById("set_default")

function generateInputs(n) {
    let names = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    
    let inputs = document.createElement("div")
    inputs.id = "sample_inputs"
    

    for (let i = 0; i < n; i++) {
        let label = document.createElement("label")
        label.innerHTML = names[i] + ":"
        let input = document.createElement("input")
        input.setAttribute("id", "task1-" + (i + 1))
        input.setAttribute("type", "text")

        let br = document.createElement("br")

        inputs.appendChild(label)
        inputs.appendChild(input)
        inputs.appendChild(br)
    }

    samples_div.appendChild(inputs)
}

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
        task1_info.innerText = ""

        if (document.getElementById("sample_inputs")) {
            document.getElementById("sample_inputs").remove()
        }

        let samples = document.getElementById("sample_n").value

        if (samples > 26 || samples < 2) {
            task1_info.innerText = "Incorrect number of samples"
        } else {
            generateInputs(samples)
        }

        samples_div.appendChild(task1_info)
    }

    set_default.onclick = function() {
        
    }

    task1_calculate.onclick = function() {

    }
});
