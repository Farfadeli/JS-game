<?php

require("./phpLib/treatData.php");

$file = './csv/file.csv';

$typeData = new CsvToData($file, 'Type');
$typeData = $typeData->finish();

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="./funJs/strToTab.js"></script>
    <script src="./funJs/high.js"></script>
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script>
        var typeData = parseString('<?= json_encode($typeData) ?>');
        console.log(typeData);
    </script>


    <title>Document</title>
</head>

<body>
    <header>
        <h1>Test HighCharts</h1>
    </header>
    <div id="container">
        <nav>
            <a href="#">Type</a>
            <a href="./year.php">Year</a>
        </nav>
        <div id="affichage">
            <div class="flex-Line">
                <div id="donutChart"></div>
                <div id="pieChart"></div>
            </div>
            <div id="barChart">

            </div>

        </div>
    </div>

    <script src="./app.js"></script>
</body>

</html>