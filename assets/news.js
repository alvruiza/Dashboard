function getNews() {
    let section = body.querySelector(".home")
    async function neewsFeed(){
        let url = "https://api.thenewsapi.com/v1/news/all?api_token=Cc6kycikScv0tZX2j9OZoXq0Ysk1NFwDu5aZKyEL&search=usd"
        let data = await fetch(url)
        data = await data.json()
        return data;
    }

    section.innerHTML = `<div class="text">Inicio</div>
        <div class="container-fluid">
            <div class="row justify-content-center newsrow">
                <div class="col-lg-4 col-md-6 col-xs-6">
                    <div class="container-fluid newspanel">
                        <h1 class="newstitle">Noticias</h1>
                        <div class="newsimg">
                            <img class="newsimgsrc" id="img1" src="https://i.postimg.cc/rFGFnXgC/Dise-o-sin-t-tulo-98.png">                             
                        </div>
                        <h1 class="newsheadline" id="headline1"></h1>
                        <p class="newslead" id="lead1"></p>
                    </div>                 
                </div>
                <div class="col-lg-4 col-md-6 col-xs-6">
                    <div class="container-fluid newspanel">
                        <h1 class="newstitle">Noticias</h1>
                        <div class="newsimg">
                            <img class="newsimgsrc" id="img2" src="https://i.postimg.cc/rFGFnXgC/Dise-o-sin-t-tulo-98.png">                             
                        </div>
                        <h1 class="newsheadline" id="headline2"></h1>
                        <p class="newslead" id="lead2"></p>
                    </div>                 
                </div>
                <div class="col-lg-4 col-md-6 col-xs-6">
                    <div class="container-fluid newspanel">
                        <h1 class="newstitle">Noticias</h1>
                        <div class="newsimg">
                            <img class="newsimgsrc" id="img3" src="https://i.postimg.cc/rFGFnXgC/Dise-o-sin-t-tulo-98.png">                             
                        </div>
                        <h1 class="newsheadline" id="headline3"></h1>
                        <p class="newslead" id="lead3"></p>
                    </div>                 
                </div>                
            </div>
        </div>`

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

        


        headline1Selector.innerText = data.data[0].title
        headline2Selector.innerText = data.data[1].title
        headline3Selector.innerText = data.data[2].title

        lead1Selector.innerText = data.data[0].description
        lead2Selector.innerText = data.data[1].description
        lead3Selector.innerText = data.data[2].description

        img1Selector.setAttribute("src", `${data.data[0].image_url}`)
        img2Selector.setAttribute("src", `${data.data[1].image_url}`)
        img3Selector.setAttribute("src", `${data.data[2].image_url}`)       

    })

    
} 



export default getNews