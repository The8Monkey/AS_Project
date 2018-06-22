const myChart = Sunburst();

var data={};

function getData(selecedYear) {
    $.ajax({
        url: "../handler.php",
        type: 'POST',
        data: {id: selecedYear.toString()},
        success: function (result) {
            //alert(result);
            //alert(result);
            data = jQuery.parseJSON(result);
            //data = JSON.parse(result);
            //alert(JSON.stringify(data));
            drawChart();
        }
    });
}

function getColor(name) {
    if(name=="all"){
        return "green";
    }else if (name=="weiblich"){
        return "pink";
    }else if(name=="maennlich"){
        return "blue";
    }else{
        return "grey";
    }
}

function getValue(name, value) {
    if(name=="weiblich"){
        return 'Size: <i>'+value+'</i>';
    }else if(name=="maennlich") {
        return 'Size: <i>' + value + '</i>';
    }else if(name=="all"){
        return 'Size: <i>' + value/3 + '</i>';
    }else{
        return "Size: <i>"+value/2+"</i>";
    }
}

function drawChart() {
    document.getElementById('chart').innerHTML="";
    myChart.data(data)(chart)
        .tooltipContent((d, node) => getValue(d.name,node.value))
        (document.getElementById('chart'))
        .color(d => getColor(d.name));
}

$(document).ready( function () {
    getData(1998);
    //drawChart()
});