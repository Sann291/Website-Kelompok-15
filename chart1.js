var ctx = document.getElementById('linechart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['September, Oktober, November, Desember'],
        datasets: [{
            label: 'Pria',
            data: [414],
            backgroundColor: [
                'rgb(255, 128, 0)'
            ],
            borderColor: [
                'rgb(85, 85, 85)'
        
            ],
        },
        {
            label: 'Wanita',
            data: [672],
            backgroundColor: [
                'rgb(255, 0, 0)'
            ],
            borderColor: [
                'rgb(85, 85, 85)'
        
            ],
        },
        {
            label: 'Anak-anak',
            data: [242],
            backgroundColor: [
                'rgb(0, 255, 0)'
            ],
            borderColor: [
                'rgb(85, 85, 85)'
        
            ],
        },
        {
            label: 'Lansia',
            data: [185],
            backgroundColor: [
                'rgb(0, 128, 255)'
            ],
            borderColor: [
                'rgb(85, 85, 85)'
        
            ],
        }
    ]
    },
    options: {
       responsive:true
    }
});