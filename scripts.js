/**
 * Created by session2 on 10/8/15.
 */
google.setOnLoadCallback(drawChart);
function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Type', 'Percent'],
        ['Race',     51],
        ['Religion',      18],
        ['Sexual Orientation',  17],
        ['Ethnicity/National Origin', 13],
        ['Disability',    1]
    ]);

    var options = {
        title: 'Hate Crimes by Motivation',
        pieHole: 0.5,
        pieStartAngle: 178,
        pieSliceText: 'none',
        slices: { 2: {offset: 0.1} }
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}