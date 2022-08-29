function riskyValues() {
    async function getValues() {
        let url = "https://fintual.cl/api/real_assets/186/days"
        let data = await fetch(url)
        data = await data.json()
        return data
    }
    
    getValues().then(data => {
        let varSelector = document.querySelector(".riskyvar")
        let riskySelector = document.querySelector(".riskyprice")
        let varId = document.getElementById ("riskyvar")
        let dayValue = data.data[0].attributes.price
        let value2 =data.data[1].attributes.price
        let riskyvar = (dayValue - value2)
        let riskypercent = (((dayValue -value2) / dayValue) * 100)
        dayValue = dayValue.toFixed(2)
        if (riskyvar < 0) {
            varId.classList.toggle("negative")
            riskypercent = " " + riskypercent.toFixed(2)
        }else{
            varId.classList.toggle("positive")
            riskypercent = "+" + riskypercent.toFixed(2)
        }
        riskySelector.innerText ="$" + dayValue
        varSelector.innerText = "$" + riskyvar.toFixed(2) + " " + riskypercent + "%"
    })
}

export default riskyValues