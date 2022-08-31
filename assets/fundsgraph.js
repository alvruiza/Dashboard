function mixChart() {
    
    const data = {
        labels: "",
     datasets: [{
         type: "line",
            label: 'Risky NorrisS',
            data: [10,20,40],
            backgroundColor: [                    
                'rgba(4, 247, 225,0.5)',
            ],
            fillColor: [
                "rgba(4, 247, 225)"
             ],
            borderWidth: 0            
        },{
            type: "line",
            label: "Moderate Pitt",
            data: [],
            backgroundColor: [
                "rgba(29, 89, 217,0.5)",
            ],
            fillColor : [
                "rgba(29, 89, 217)"
            ],
            borderWidth: 0
        },{
            type:"line",
            label:"Conservative Clooney",
            data: [],
            backgroundColor: [
                "rgba(163, 4, 247,1)"
            ],
            fillColor: [
                "rgba(163, 4, 247)"
            ],
            borderWidth: 0
        },{
            type: "line",
            label: "Very Conservative Streep",
            data: [],
            backgroundColor: [
                "rgba(147, 229, 13,0.5)"
            ],
            fillColor: [
                "rgba(147, 229, 13)"
            ],
            borderWidth: 0
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
            tension: 0.0,
            fill: "origin",
        }
    }
    
    
    const myChart = new Chart(document.getElementById("fundschart"), config);




 
    async function streepValues () {
        let url = "https://fintual.cl/api/real_assets/15077/days"
        let streepData = await fetch(url)
        streepData = await streepData.json()        
        return streepData;
    }

    async function riskyValues () {
        let url = "https://fintual.cl/api/real_assets/186/days"
        let riskyData = await fetch(url)
        riskyData = await riskyData.json()
        return riskyData;
    }

    async function pittValues () {
        let url = "https://fintual.cl/api/real_assets/187/days"
        let pittData = await fetch(url)
        pittData = await pittData.json()
        return pittData;
    }
    
    async function clooneyValues () {
        let url = "https://fintual.cl/api/real_assets/188/days"
        let clooneyData = await fetch(url)
        clooneyData = await clooneyData.json()
        return clooneyData;
    }

    streepValues().then(streepData => {
        function getValues(){       
            let getValues = streepData.data.map(function(index){
            let values = index.attributes.price
            return values
            })

            data.datasets[0].data = getValues.reverse()
        
        }
        getValues()

    })

    riskyValues().then(riskyData => {
        function getValues(){

            let getLabels = riskyData.data.map(function(index){
            let labels = index.attributes.date
            return labels
            })

            let riskyPrices = riskyData.data.map(function(index){
            let prices = index.attributes.price            
            return prices
            })
            data.labels = getLabels.reverse()
            data.datasets[0].data = riskyPrices.reverse()

        }
        getValues()
    })

    pittValues().then(pittData => {
        function getValues(){
            let pitPrices = pittData.data.map(function(index){
            let prices = index.attributes.price            
            return prices
            })

            data.datasets[1].data = pitPrices.reverse()
        }
        getValues()
    })

    clooneyValues().then(clooneyData => {
        function getValues(){
            let clooneyPrices = clooneyData.data.map(function(index){
            let prices = index.attributes.price
            return prices
            })

            data.datasets[2].data = clooneyPrices.reverse()

        }
        getValues()
    })

    
}




export default mixChart()