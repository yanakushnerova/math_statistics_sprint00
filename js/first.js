function frequencyTable(arr, frequency) {
    let table = document.createElement("table") 
    table.innerHTML = "<th>Value</th><th>Frequency</th><th>Cumulative frequency</th><th>Relative frequency</th><th>Cumulative relative frequency</th>"

    let cumulative_frequency = 0
    let cumulative_relative_frequency = 0
    let total_frequency = 0

    for (let i = 0; i < arr.length; i++) {
        total_frequency += frequency[arr[i]]
    }
    
    for (let i = 0; i < arr.length; i++) {
        let row = document.createElement("tr")
        let first = document.createElement("td")
        let second = document.createElement("td")
        let third = document.createElement("td")
        let fourth = document.createElement("td")
        let fifth = document.createElement("td")

        first.innerText = arr[i]
        second.innerText = frequency[arr[i]]
        cumulative_frequency += frequency[arr[i]]
        third.innerText = cumulative_frequency
        fourth.innerText = (frequency[arr[i]] / total_frequency).toFixed(7)
        cumulative_relative_frequency += frequency[arr[i]] / total_frequency
        fifth.innerText = cumulative_relative_frequency.toFixed(7)

        row.appendChild(first)
        row.appendChild(second)
        row.appendChild(third)
        row.appendChild(fourth)
        row.appendChild(fifth)

        table.appendChild(row)
    }

    document.getElementById("task1_solution").appendChild(table)
}
