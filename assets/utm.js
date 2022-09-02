function utmValue() {
    const data = {
        labels: [],
     datasets: [{
            label: 'Variación a 30 meses',
            data: [],
            backgroundColor: [                    
                'rgba(91, 255, 245, 0.6)',
            ],
            borderColor: [               
                'rgba(91, 255, 245)'
             ],
             fillColor: [
                "rgba(91, 255, 245)"
             ],
            borderWidth: 1,
        }]
    }
    
    const config = {
        type: "line",
        data,
        options: {
            scales: {
                y: {
                    beginAtZero: false
                }
            },
            legend: {
                display: true
            },
            tension: 0.4,
            fill: "origin",
        }
    }
    
    const myChart = new Chart(document.getElementById("utmGraph"), config);

    let utmSelector = document.querySelector(".utmvalue")
    let varSelector = document.querySelector(".utmvar")


    async function getValue(){
        try{
            let startYear = moment().subtract(30, 'months').format("YYYY")
            let startMonth = moment().subtract(30, 'months').format("MM")            
            let endYear = moment().format('YYYY')
            let endMonth = moment().format('MM')            
            let url = `https://api.sbif.cl/api-sbifv3/recursos_api/utm/periodo/${startYear}/${startMonth}/${endYear}/${endMonth}?apikey=6b0901a03c3dbb1313fbaa917eedadfc8bc4bf04&formato=json`
            let data = await fetch(url)
            data = await data.json()                     
            return data;
        }catch(error) {
            alert("erron en el servidor al consultar utm")
        }
    } 

    getValue().then(data =>{
        data = data.UTMs.reverse()  
        
        function getUtm() {
            let utm = data[0].Valor
            let utm2 = data[1].Valor
            let varUtm = ((utm - utm2)* 1000).toFixed(0)
            let varpercent = (((utm - utm2) / utm) * 100).toFixed(2)
            utm = "$" + utm
            varUtm = "$" + varUtm  + " +" + varpercent + "%"  
            utmSelector.innerText = utm
            varSelector.innerText = varUtm       
        }

        function utmSeries(){
            let getSeries = data.map(function(index) {
                let valor = index.Valor                          
                return valor
            })

            let getLabels = data.map(function(index){
            let fecha = index.Fecha        
            return fecha

            })

            myChart.config.data.labels = getLabels.sort()
            myChart.config.data.datasets[0].data = getSeries.sort((a, b) => a - b)
            myChart.update()

        }
        getUtm()
        utmSeries()
    })
}

export default utmValue