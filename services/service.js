import 'chartjs-adapter-moment'

document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('stock-chart').getContext('2d');
    let stockChart;

    // Function to fetch stock data and update chart
    async function updateChart(stockSymbol) {
        const response = await fetch(`https://api.twelvedata.com/time_series?symbol=${stockSymbol}&interval=1min&apikey=92fa9435787044d593e9821cc07177d4`);
        const data = await response.json();

        if (stockChart) {
            stockChart.destroy();
        }

        stockChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.values.map(entry => entry.datetime),
                datasets: [{
                    label: 'Stock Value',
                    data: data.values.map(entry => entry.close),
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            unit: 'minute'
                        }
                    },
                    y: {
                        beginAtZero: false
                    }
                }
            }
        });
    }

    // Event listener for dropdown change
    document.getElementById('stock-select').addEventListener('change', function () {
        const selectedStock = this.value;
        updateChart(selectedStock);
    });

    // Load default chart on page load
    // updateChart('AAPL'); // Defaulting to Apple Inc.
});
