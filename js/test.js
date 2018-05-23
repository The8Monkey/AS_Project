window.onload = function () {

    var chart = new CanvasJS.Chart("chart", {
        exportEnabled: true,
        animationEnabled: true,
        title:{
            text: "Todesursachen"
        },
        legend:{
            cursor: "pointer",
        },
        data: [{
            type: "pie",
            showInLegend: true,
            toolTipContent: "{name}: <strong>{y}</strong>",
            indexLabel: "{name} - {y}",
            dataPoints: [
                { y: 82, name: "Bestimmte infektioese und parasitaere Krankheiten - maennlich"},
                { y: 63, name: "Bestimmte infektioese und parasitaere Krankheiten - weiblich"},
                { y: 30, name: "Tuberkulose - maennlich"},
                { y: 12, name: "Tuberkulose - weiblich"},
                { y: 5946, name: "Boesartige Neubildungen - maennlich"},
                { y: 5981, name: "Boesartige Neubildungen - weiblich"},
                { y: 6037, name: "Neubildungen - maennlich"},
                { y: 6122, name: "Neubildungen - weiblich"},
            ]
        }]
    });
    chart.render();
}