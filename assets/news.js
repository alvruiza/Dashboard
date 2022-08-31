function getNews() {
    async function neewsFeed(){
        let url = "https://newsdata.io/api/1/news?apikey=pub_10743a2081a1928c1649db8070d52b0b7218e&language=es&category=business"
        let data = await fetch(url)
        data = await data.json()
        return data;
    }

    neewsFeed().then(data => {
        let headline1Selector = document.getElementById("headline1")
        let headline2Selector = document.getElementById("headline2")
        let headline3Selector = document.getElementById("headline3")
        let lead1Selector = document.getElementById("lead1")
        let lead2Selector = document.getElementById("lead2")
        let lead3Selector = document.getElementById("lead3")
        let img1Selector = document.getElementById("img1")
        let img2Selector = document.getElementById("img2")
        let img3Selector = document.getElementById("img3")

        headline1Selector.innerText = data.results[0].title
        headline2Selector.innerText = data.results[1].title
        headline3Selector.innerText = data.results[2].title

        lead1Selector.innerText = data.results[0].description
        lead2Selector.innerText = data.results[1].description
        lead3Selector.innerText = data.results[2].description

        img1Selector.setAttribute("src", `${data.results[0].image_url}`)
        img2Selector.setAttribute("src", `${data.results[1].image_url}`)
        img3Selector.setAttribute("src", `${data.results[2].image_url}`)


    })
} 

export default getNews