var ctx = document.getElementById('piechard2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Ice Americano','Ice Cappuccino','Iced Espresso','Iced Latte'],
        datasets: [{
            label: 'Pria',
            data: [281, 50, 112, 174],
            backgroundColor: [
                'rgb(255, 128, 0)'
            ],
            borderColor: [
                'rgb(85, 85, 85)'
        
            ],
        },
        {
            label: 'Wanita',
            data: [220, 122, 70, 40],
            backgroundColor: [
                'rgb(255, 0, 0)'
            ],
            borderColor: [
                'rgb(85, 85, 85)'
        
            ],
        },
        {
            label: 'Anak-anak',
            data: [111, 48, 20, 54],
            backgroundColor: [
                'rgb(0, 255, 0)'
            ],
            borderColor: [
                'rgb(85, 85, 85)'
        
            ],
        },
        {
            label: 'Lansia',
            data: [148, 92, 52, 32],
            backgroundColor: [
                'rgb(0, 128, 255)'
            ],
            borderColor: [
                'rgb(85, 85, 85)'
        
            ],
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});