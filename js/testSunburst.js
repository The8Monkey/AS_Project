const myChart = Sunburst();
var data={
    name: "all",
    value: 1234545,
    children: [
        {
            name: "Unfaelle",
            value: 1523,
            children: [
                {
                    name: "weiblich",
                    value: 731
                },
                {
                    name: "maenlich",
                    value: 792
                }
            ]
        }
    ]
};
window.onload = function () {
    myChart.data(data)(chart2);
}