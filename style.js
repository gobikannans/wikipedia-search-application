let inputEl = document.getElementById("searchInput")
let resultsEl = document.getElementById("searchResults")
let spinnerEl = document.getElementById("spinner")


function displayresults(result) {
    let {
        title,
        link,
        description
    } = result

    let containerEl = document.createElement("div")
    resultsEl.appendChild(containerEl)

    let titleEl = document.createElement("a")
    titleEl.href = link
    titleEl.textContent = title
    titleEl.target = "_blank"
    titleEl.classList.add("result-title")
    containerEl.appendChild(titleEl)

    let brEl = document.createElement("br")
    containerEl.appendChild(brEl)

    let linkEl = document.createElement("a")
    linkEl.href = link
    linkEl.textContent = link
    linkEl.target = "_blank"
    linkEl.classList.add("result-url")
    containerEl.appendChild(linkEl)

    let breakEl = document.createElement("br")
    containerEl.appendChild(breakEl)

    let despEl = document.createElement("p")
    despEl.textContent = description
    despEl.classList.add("link-description")
    containerEl.appendChild(despEl)
}

function showresults(search_results) {
    spinnerEl.classList.toggle("d-none")
    for (let result of search_results) {
        displayresults(result)
    }
}

function searchwiki() {
    if (event.key === "Enter") {
        let text = inputEl.value
        spinnerEl.classList.toggle("d-none")

        let options = {
            method: "GET"

        }

        fetch("https://apis.ccbp.in/wiki-search?search=" + text, options)


            .then(function(response) {
                return response.json()
            })
            .then(function(jsonData) {
                console.log(jsonData)
                let {
                    search_results
                } = jsonData

                showresults(search_results)
            })
    }
}

inputEl.addEventListener("keydown", searchwiki)