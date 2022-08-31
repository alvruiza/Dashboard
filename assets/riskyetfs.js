/*function etfPrices() {   


     async function cxseValues() {
        let url = "https://financialmodelingprep.com/api/v3/quote/CXSE?apikey=fd74172c1b79377487aaaeb7c3cdae69"
        let data = await fetch(url)
        data = await data.json()
        return data
    }

    async function esgvValues() {
        let url = "https://financialmodelingprep.com/api/v3/quote/ESGV?apikey=fd74172c1b79377487aaaeb7c3cdae69"
        let data = await fetch(url)
        data = await data.json()
        return data
    }

    async function ftecValues() {
        let url = "https://financialmodelingprep.com/api/v3/quote/FTEC?apikey=fd74172c1b79377487aaaeb7c3cdae69"
        let data = await fetch(url)
        data = await data.json()
        return data
    }

    async function kompValues() {
        let url = "https://financialmodelingprep.com/api/v3/quote/KOMP?apikey=fd74172c1b79377487aaaeb7c3cdae69"
        let data = await fetch(url)
        data = await data.json()
        return data
    }

    async function qqqValues() {
        let url = "https://financialmodelingprep.com/api/v3/quote/QQQ?apikey=fd74172c1b79377487aaaeb7c3cdae69"
        let data = await fetch(url)
        data = await data.json()
        return data
    }

    async function smhValues() {
        let url = "https://financialmodelingprep.com/api/v3/quote/SMH?apikey=fd74172c1b79377487aaaeb7c3cdae69"
        let data = await fetch(url)
        data = await data.json()
        return data
    }

    async function vtValues() {
        let url = "https://financialmodelingprep.com/api/v3/quote/VT?apikey=fd74172c1b79377487aaaeb7c3cdae69"
        let data = await fetch(url)
        data = await data.json()
        return data
    }

    async function vtvValues() {
        let url = "https://financialmodelingprep.com/api/v3/quote/VTV?apikey=fd74172c1b79377487aaaeb7c3cdae69"
        let data = await fetch(url)
        data = await data.json()
        return data
    } 

    cxseValues().then(data => {
        let selector = document.getElementById("cxseprice")
        let actualPrice = data[0].price
        let previousPrice = data[0].previousClose 
        let today = (((actualPrice - previousPrice)/ actualPrice)*100)        
        if (today < 0) {
            selector.innerText = today.toFixed(2) + "%"
            selector.classList.toggle("negative")
        }else{
            selector.innerText = today.toFixed(2) + "%"
            selector.classList.toggle("positive")
        }
        dailyResult[0] = today * 0.0122  
    })

    esgvValues().then(data => {
        let selector = document.getElementById("esgvprice")
        let actualPrice = data[0].price
        let previousPrice = data[0].previousClose 
        let today = (((actualPrice - previousPrice)/ actualPrice)*100)        
        if (today < 0) {
            selector.innerText = today.toFixed(2) + "%"
            selector.classList.toggle("negative")
        }else{
            selector.innerText = today.toFixed(2) + "%"
            selector.classList.toggle("positive")
        }
        dailyResult[1] = today * 0.3246  
    })

    ftecValues().then(data => {
        let selector = document.getElementById("ftecprice")
        let actualPrice = data[0].price
        let previousPrice = data[0].previousClose 
        let today = (((actualPrice - previousPrice)/ actualPrice)*100)        
        if (today < 0) {
            selector.innerText = today.toFixed(2) + "%"
            selector.classList.toggle("negative")
        }else{
            selector.innerText = today.toFixed(2) + "%"
            selector.classList.toggle("positive")
        }
        dailyResult[2] = today * 0.1477  
    })

    kompValues().then(data => {
        let selector = document.getElementById("kompprice")
        let actualPrice = data[0].price
        let previousPrice = data[0].previousClose 
        let today = (((actualPrice - previousPrice)/ actualPrice)*100)        
        if (today < 0) {
            selector.innerText = today.toFixed(2) + "%"
            selector.classList.toggle("negative")
        }else{
            selector.innerText = today.toFixed(2) + "%"
            selector.classList.toggle("positive")
        } 
        dailyResult[3] = today * 0.0503 
    })

    qqqValues().then(data => {
        let selector = document.getElementById("qqqprice")
        let actualPrice = data[0].price
        let previousPrice = data[0].previousClose 
        let today = (((actualPrice - previousPrice)/ actualPrice)*100)        
        if (today < 0) {
            selector.innerText = today.toFixed(2) + "%"
            selector.classList.toggle("negative")
        }else{
            selector.innerText = today.toFixed(2) + "%"
            selector.classList.toggle("positive")
        }  
        dailyResult[4] = today * 0.0250 
    })
    smhValues().then(data => {
        let selector = document.getElementById("smhprice")
        let actualPrice = data[0].price
        let previousPrice = data[0].previousClose 
        let today = (((actualPrice - previousPrice)/ actualPrice)*100)        
        if (today < 0) {
            selector.innerText = today.toFixed(2) + "%"
            selector.classList.toggle("negative")
        }else{
            selector.innerText = today.toFixed(2) + "%"
            selector.classList.toggle("positive")
        }
        dailyResult[5] = today * 0.1651   
    })

    vtValues().then(data => {
        let selector = document.getElementById("vtprice")
        let actualPrice = data[0].price
        let previousPrice = data[0].previousClose 
        let today = (((actualPrice - previousPrice)/ actualPrice)*100)        
        if (today < 0) {
            selector.innerText = today.toFixed(2) + "%"
            selector.classList.toggle("negative")
        }else{
            selector.innerText = today.toFixed(2) + "%"
            selector.classList.toggle("positive")
        } 
        dailyResult[6] = today * 0.1215  
    })

    vtvValues().then(data => {
        let selector = document.getElementById("vtvprice")
        let actualPrice = data[0].price
        let previousPrice = data[0].previousClose 
        let today = (((actualPrice - previousPrice)/ actualPrice)*100)        
        if (today < 0) {
            selector.innerText = today.toFixed(2) + "%"
            selector.classList.toggle("negative")
        }else{
            selector.innerText = today.toFixed(2) + "%"
            selector.classList.toggle("positive")
        } 
        dailyResult[7] = today * 0.0859  
    }) 

    
    
    
}

*/

function cxsePrices(){
    async function cxseValues() {
        let url = "https://financialmodelingprep.com/api/v3/quote/CXSE?apikey=fd74172c1b79377487aaaeb7c3cdae69"
        let data = await fetch(url)
        data = await data.json()
        return data
    }

    cxseValues().then(data => {
        let selector = document.getElementById("cxseprice")
        let actualPrice = data[0].price
        let previousPrice = data[0].previousClose 
        let today = (((actualPrice - previousPrice)/ actualPrice)*100)        
        if (today < 0) {
            selector.innerText = today.toFixed(2) + "%"
            selector.classList.toggle("negative")
        }else{
            selector.innerText = today.toFixed(2) + "%"
            selector.classList.toggle("positive")
        }
        dailyResult[0] = today * 0.0122  
    })


}


function esgvPrices(){
    async function esgvValues() {
        let url = "https://financialmodelingprep.com/api/v3/quote/ESGV?apikey=fd74172c1b79377487aaaeb7c3cdae69"
        let data = await fetch(url)
        data = await data.json()
        return data
    }

    esgvValues().then(data => {
        let selector = document.getElementById("esgvprice")
        let actualPrice = data[0].price
        let previousPrice = data[0].previousClose 
        let today = (((actualPrice - previousPrice)/ actualPrice)*100)        
        if (today < 0) {
            selector.innerText = today.toFixed(2) + "%"
            selector.classList.toggle("negative")
        }else{
            selector.innerText = today.toFixed(2) + "%"
            selector.classList.toggle("positive")
        }
        dailyResult[1] = today * 0.3246  
    })
}

function ftecPrices(){
    async function ftecValues() {
        let url = "https://financialmodelingprep.com/api/v3/quote/FTEC?apikey=fd74172c1b79377487aaaeb7c3cdae69"
        let data = await fetch(url)
        data = await data.json()
        return data
    }

    ftecValues().then(data => {
        let selector = document.getElementById("ftecprice")
        let actualPrice = data[0].price
        let previousPrice = data[0].previousClose 
        let today = (((actualPrice - previousPrice)/ actualPrice)*100)        
        if (today < 0) {
            selector.innerText = today.toFixed(2) + "%"
            selector.classList.toggle("negative")
        }else{
            selector.innerText = today.toFixed(2) + "%"
            selector.classList.toggle("positive")
        }
        dailyResult[2] = today * 0.1477  
    })    
}

function kompPrices(){
    async function kompValues() {
        let url = "https://financialmodelingprep.com/api/v3/quote/KOMP?apikey=fd74172c1b79377487aaaeb7c3cdae69"
        let data = await fetch(url)
        data = await data.json()
        return data
    }

    kompValues().then(data => {
        let selector = document.getElementById("kompprice")
        let actualPrice = data[0].price
        let previousPrice = data[0].previousClose 
        let today = (((actualPrice - previousPrice)/ actualPrice)*100)        
        if (today < 0) {
            selector.innerText = today.toFixed(2) + "%"
            selector.classList.toggle("negative")
        }else{
            selector.innerText = today.toFixed(2) + "%"
            selector.classList.toggle("positive")
        } 
        dailyResult[3] = today * 0.0503 
    })
}

function qqqPrices(){
    async function qqqValues() {
        let url = "https://financialmodelingprep.com/api/v3/quote/QQQ?apikey=fd74172c1b79377487aaaeb7c3cdae69"
        let data = await fetch(url)
        data = await data.json()
        return data
    }

    qqqValues().then(data => {
        let selector = document.getElementById("qqqprice")
        let actualPrice = data[0].price
        let previousPrice = data[0].previousClose 
        let today = (((actualPrice - previousPrice)/ actualPrice)*100)        
        if (today < 0) {
            selector.innerText = today.toFixed(2) + "%"
            selector.classList.toggle("negative")
        }else{
            selector.innerText = today.toFixed(2) + "%"
            selector.classList.toggle("positive")
        }  
        dailyResult[4] = today * 0.0250 
    })
}

function smhprices(){
    async function smhValues() {
        let url = "https://financialmodelingprep.com/api/v3/quote/SMH?apikey=fd74172c1b79377487aaaeb7c3cdae69"
        let data = await fetch(url)
        data = await data.json()
        return data
    }

    smhValues().then(data => {
        let selector = document.getElementById("smhprice")
        let actualPrice = data[0].price
        let previousPrice = data[0].previousClose 
        let today = (((actualPrice - previousPrice)/ actualPrice)*100)        
        if (today < 0) {
            selector.innerText = today.toFixed(2) + "%"
            selector.classList.toggle("negative")
        }else{
            selector.innerText = today.toFixed(2) + "%"
            selector.classList.toggle("positive")
        }
        dailyResult[5] = today * 0.1651   
    })
}

function vtPrices() {
    async function vtValues() {
        let url = "https://financialmodelingprep.com/api/v3/quote/VT?apikey=fd74172c1b79377487aaaeb7c3cdae69"
        let data = await fetch(url)
        data = await data.json()
        return data
    }

    vtValues().then(data => {
        let selector = document.getElementById("vtprice")
        let actualPrice = data[0].price
        let previousPrice = data[0].previousClose 
        let today = (((actualPrice - previousPrice)/ actualPrice)*100)        
        if (today < 0) {
            selector.innerText = today.toFixed(2) + "%"
            selector.classList.toggle("negative")
        }else{
            selector.innerText = today.toFixed(2) + "%"
            selector.classList.toggle("positive")
        } 
        dailyResult[6] = today * 0.1215  
    })
}

function vtvPrices(){
    async function vtvValues() {
        let url = "https://financialmodelingprep.com/api/v3/quote/VTV?apikey=fd74172c1b79377487aaaeb7c3cdae69"
        let data = await fetch(url)
        data = await data.json()
        return data
    } 

    vtvValues().then(data => {
        let selector = document.getElementById("vtvprice")
        let actualPrice = data[0].price
        let previousPrice = data[0].previousClose 
        let today = (((actualPrice - previousPrice)/ actualPrice)*100)        
        if (today < 0) {
            selector.innerText = today.toFixed(2) + "%"
            selector.classList.toggle("negative")
        }else{
            selector.innerText = today.toFixed(2) + "%"
            selector.classList.toggle("positive")
        } 
        dailyResult[7] = today * 0.0859  
    }) 
}

function usdValue() {
    async function getValues(){
        let url = "ttps://mindicador.cl/api/dolar"
        let data = await fetch(url)
        data = await data.json() 
        return data;
    }

    getValues().then(data => {
        let usdPrice1 = data.serie[0].valor
        let usdPrice2 = data.serie[1].valor
        let varUsd = usdPrice1 - usdPrice2
        let varUsdPercent = (((usdPrice1 - usdPrice2) / usdPrice1)*100)
        
    })

    usdDailyPercent[0] = varUsdPercent
}

let fundSelector = document.querySelector(".dailyprice")
let usdDailyPercent = []
let dailyResult = []
let suma = 0 
    
for (let i = 0; i < dailyResult.length; i++){
    suma += dailyResult[i];    
    return suma
}

let fundShare = (usdDailyPercent[0] + suma).toFixed(2)

fundSelector.innerText = fundShare + "%"



function drawChart() {
    const data = {
        labels: ["CXSE","ESGV","FTEC","KOMP","QQQ","SMH","VT","VTV"],
     datasets: [{
         type: "doughnut",
            label: 'Composición Risky Norris',
            data: [1.22,32.46,14.77,5.03,2.50,16.51,12.15,8.59],
            backgroundColor: [                    
                'rgb(147, 229, 13)',
                'rgb(13, 95, 229)',
                'rgb(140, 85, 250)',
                'rgb(255, 99, 132)',
                'rgb(183, 8, 244)',
                'rgb(223, 244, 8)',
                'rgb(54, 162, 235)',
                'rgb(244, 147, 8)'
            ],            
            borderWidth: 1            
        }]
    }
    
    const config = {
        type: "doughnut",
        data: data,                
        }   
   
    
    const myChart = new Chart(document.getElementById("etfchart"), config);
}


export { cxsePrices, esgvPrices, ftecPrices, kompPrices, qqqPrices, smhprices, vtPrices, vtvPrices, usdValue, drawChart } 