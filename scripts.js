/**
 * Created by tspillerofmilk on 10/12/2015.
 */
google.load('visualization', '1.0', {
    packages: ['corechart', 'bar']
});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Test', 'Number of Students' ],
        ['Calculus AB', 302532],
        ['Calculus BC', 118707],
        ['Physics I', 171074],
        ['Physics II', 20533],
        ['U.S. History', 469689],
        ['Biology', 223479],
        ['Chemistry', 152745],
        ['World History', 265308],
        ['Computer Science A', 48994]
    ]);

    var options = {
        title: 'Number of Students Taking AP Exams in May 2015',
        chartArea: {
            width: '50%'
        },
        hAxis: {
            title: 'Number of Students',
            minValue: 0
        },
        vAxis: {
            title: 'Test Name'
        },
        legend: {
            position: 'none'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}

/** AP Calculus AB */
google.setOnLoadCallback(drawChart);
function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Score Number', 'Percent of Students'],
        ['1', 32.4],
        ['2', 10.5],
        ['3', 18.7],
        ['4', 17.1],
        ['5', 21.3]
    ]);

    var options = {
        title: 'Calculus AB Scores'
    };

    var chart = new google.visualization.PieChart(document.getElementById('calcABChart'));

    chart.draw(data, options);
}

/** AP Calc BC */
google.setOnLoadCallback(drawChart2);
function drawChart2() {

    var data = google.visualization.arrayToDataTable([
        ['Score Number', 'Percent of Students'],
        ['1', 14.6],
        ['2', 5.4],
        ['3', 18.5],
        ['4', 16.9],
        ['5', 44.6]
    ]);

    var options = {
        title: 'Calculus BC Scores'
    };

    var chart = new google.visualization.PieChart(document.getElementById('calcBCChart'));

    chart.draw(data, options);
}


/** AP World History */
google.setOnLoadCallback(drawChart3);
function drawChart3() {

    var data = google.visualization.arrayToDataTable([
        ['Score Number', 'Percent of Students'],
        ['1', 18.2],
        ['2', 30.1],
        ['3', 31.3],
        ['4', 14],
        ['5', 6.4]
    ]);

    var options = {
        title: 'World History Scores'
    };

    var chart = new google.visualization.PieChart(document.getElementById('worldHistoryChart'));

    chart.draw(data, options);
}

/** AP US History */
google.setOnLoadCallback(drawChart4);
function drawChart4() {

    var data = google.visualization.arrayToDataTable([
        ['Score Number', 'Percent of Students'],
        ['1', 24.3],
        ['2', 25],
        ['3', 23.6],
        ['4', 17.8],
        ['5', 9.3]
    ]);

    var options = {
        title: 'U.S. History Scores'
    };

    var chart = new google.visualization.PieChart(document.getElementById('usHistoryChart'));

    chart.draw(data, options);
}

/** AP Physics 1 */
google.setOnLoadCallback(drawChart5);
function drawChart5() {

    var data = google.visualization.arrayToDataTable([
        ['Score Number', 'Percent of Students'],
        ['1', 32.9],
        ['2', 30.2],
        ['3', 20],
        ['4', 12.8],
        ['5', 4.1]
    ]);

    var options = {
        title: 'Physics I Scores'
    };

    var chart = new google.visualization.PieChart(document.getElementById('physics1Chart'));

    chart.draw(data, options);
}

/** AP Physics 2 */
google.setOnLoadCallback(drawChart6);
function drawChart6() {

    var data = google.visualization.arrayToDataTable([
        ['Score Number', 'Percent of Students'],
        ['1', 9.9],
        ['2', 34.9],
        ['3', 32.8],
        ['4', 14],
        ['5', 8.4]
    ]);

    var options = {
        title: 'Physics II Scores'
    };

    var chart = new google.visualization.PieChart(document.getElementById('physics2Chart'));

    chart.draw(data, options);
}

/** AP Chemistry */
google.setOnLoadCallback(drawChart7);
function drawChart7() {

    var data = google.visualization.arrayToDataTable([
        ['Score Number', 'Percent of Students'],
        ['1', 22.8],
        ['2', 25.5],
        ['3', 28.1],
        ['4', 15.2],
        ['5', 8.4]
    ]);

    var options = {
        title: 'Chemistry Scores'
    };

    var chart = new google.visualization.PieChart(document.getElementById('chemistryChart'));

    chart.draw(data, options);
}

/** AP Biology */
google.setOnLoadCallback(drawChart8);
function drawChart8() {

    var data = google.visualization.arrayToDataTable([
        ['Score Number', 'Percent of Students'],
        ['1', 8.3],
        ['2', 27.6],
        ['3', 35.9],
        ['4', 22],
        ['5', 6.2]
    ]);

    var options = {
        title: 'Biology Scores'
    };

    var chart = new google.visualization.PieChart(document.getElementById('biologyChart'));

    chart.draw(data, options);
}

/** AP Computer Science A */
google.setOnLoadCallback(drawChart9);
function drawChart9() {

    var data = google.visualization.arrayToDataTable([
        ['Score Number', 'Percent of Students'],
        ['1', 28.6],
        ['2', 7.1],
        ['3', 15.3],
        ['4', 24.6],
        ['5', 24.4]
    ]);

    var options = {
        title: 'Computer Science A Scores'
    };

    var chart = new google.visualization.PieChart(document.getElementById('csChart'));

    chart.draw(data, options);
}

/** Function that shows answer to question on participation page */
function showAnswer() {
    document.getElementById("answer").innerHTML = "AP English Language and Composition";
}

/** Function that highlights the border of a tab when the mouse hovers over it */
function tabHover(tab) {
    if(tab == 'green') {
        document.getElementById('tabGreen').style.borderColor = '#328b6c';
    } else if(tab == 'red') {
        document.getElementById('tabRed').style.borderColor = '#8b2323';
    } else if(tab == 'blue') {
        document.getElementById('tabBlue').style.borderColor = '#3a738b';
    }
}

/** Returns color back to normal when mouse moves out*/
function tabOut(tab) {
    if(tab == 'green') {
        document.getElementById('tabGreen').style.borderColor = 'transparent';
    } else if(tab == 'red') {
        document.getElementById('tabRed').style.borderColor = 'transparent';
    } else if(tab == 'blue') {
        document.getElementById('tabBlue').style.borderColor = 'transparent';
    }
}