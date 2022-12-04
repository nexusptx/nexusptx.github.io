/*setInterval(() => {
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let day = weekday[new Date().getDay()]
  let h = new Date().getHours()
  let m = new Date().getMinutes()
  let s = new Date().getSeconds()
  let timeType = h  >= 12 ? "PM" : "AM"
  
  document.getElementById("time").innerText = `${day} ${new Date().getDate()} ${new Date().getFullYear()} ${h} : ${m}${timeType} `
}, 1000)*/


function goToCounter() {
    window.open('../html/counter.html')
        }

        function goToGradient() {
            window.open('../html/generateGradients.html')
                }

