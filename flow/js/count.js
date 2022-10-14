function increase() {
    let x = document.getElementById("counter").innerText

    document.getElementById("counter").innerText = Math.floor(parseInt(x) + 1)
}


function autoCount() {
    const interval = setInterval(() => {
        let x = document.getElementById("counter").innerText
        document.getElementById("counter").innerText = Math.floor(parseInt(x) + 1)
    }, 1000)
}


function autoSub() {
    const interval = setInterval(() => {
        let x = document.getElementById("counter").innerText
        let z = document.getElementById("counter").innerText = Math.floor(parseInt(x) - 1)

        if (z < 0) {
            document.getElementById("counter").innerText = 0
            alert("The counter is already zero")
        }

    }, 1000)
}

function decrease() {
    let x = document.getElementById("counter").innerText
    let z = document.getElementById("counter").innerText = Math.floor(parseInt(x) - 1)

    if (z < 0) {
        document.getElementById("counter").innerText = 0
        alert("The counter is already zero")
    }
}

function home() {
	window.open('index.html')
}

function multiply() {
    let x = document.getElementById("counter").innerText

    document.getElementById("counter").innerText = Math.floor(parseInt(x) * 2)
}

function save() {
    let count = document.getElementById("counter").innerText
    let saveIt = document.getElementById("save")

    let x = ` ${count}\n`
    saveIt.innerText += x
    console.log(x)

}
