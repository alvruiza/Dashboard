function riskyetfs() {    
    
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
    
    
   
        async function cxseValues() {
            let url = "https://financialmodelingprep.com/api/v3/quote/CXSE?apikey=9939a36cee2d53e5327b9ae07d8ed797"
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
            
        })
    
    
        async function esgvValues() {
            let url = "https://financialmodelingprep.com/api/v3/quote/ESGV?apikey=9939a36cee2d53e5327b9ae07d8ed797"
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
            
        })
    
    
  
        async function ftecValues() {
            let url = "https://financialmodelingprep.com/api/v3/quote/FTEC?apikey=9939a36cee2d53e5327b9ae07d8ed797"
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
            
            
        })        
    
        async function kompValues() {
            let url = "https://financialmodelingprep.com/api/v3/quote/KOMP?apikey=9939a36cee2d53e5327b9ae07d8ed797"
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
            
        })
    
    
        async function qqqValues() {
            let url = "https://financialmodelingprep.com/api/v3/quote/QQQ?apikey=9939a36cee2d53e5327b9ae07d8ed797"
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
            
        })    
    
        async function smhValues() {
            let url = "https://financialmodelingprep.com/api/v3/quote/SMH?apikey=9939a36cee2d53e5327b9ae07d8ed797"
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
            
        })   
    
        async function vtValues() {
            let url = "https://financialmodelingprep.com/api/v3/quote/VT?apikey=9939a36cee2d53e5327b9ae07d8ed797"
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
            
        })   
    
        
            async function vtvValues() {
                let url = "https://financialmodelingprep.com/api/v3/quote/VTV?apikey=9939a36cee2d53e5327b9ae07d8ed797"
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
                    
            })           
    
    
     
       
       
}





export default riskyetfs 

