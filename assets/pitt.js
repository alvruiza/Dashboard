function pittValues() {
    async function getValues() {
        let url = "https://fintual.cl/api/real_assets/187/days"
        let data = await fetch(url)
        data = await data.json()
        return data
    }

    getValues().then(data => {
        let varSelector = document.querySelector(".pittvar")
        let pittSelector = document.querySelector(".pittprice")
        let varId = document.getElementById ("pittvar")
        let dayValue = data.data[0].attributes.price
        let value2 =data.data[1].attributes.price
        let pittvar = (dayValue - value2)
        let pittpercent = (((dayValue -value2) / dayValue) * 100)
        dayValue = dayValue.toFixed(2)
        if (pittvar < 0) {
            varId.classList.toggle("negative")
            pittpercent = " " + pittpercent.toFixed(2)
        }else{
            varId.classList.toggle("positive")
            pittpercent = "+" + pittpercent.toFixed(2)
        }
        pittSelector.innerText ="$" + dayValue
        varSelector.innerText = "$" + pittvar.toFixed(2) + " " + pittpercent + "%"        
    })
}

export default pittValues
