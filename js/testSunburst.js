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

function getColor(name) {
    if(name=="all"){
        return "green";
    }else if (name=="weiblich"){
        return "pink";
    }else if(name=="maenlich"){
        return "blue";
    }else{
        return "grey";
    }

}

window.onload = function () {
    myChart.data(data)(chart)
        .tooltipContent((d, node) => `Size: <i>${node.value}</i>`)
        (document.getElementById('chart'))
        .color(d => getColor(d.name));
}