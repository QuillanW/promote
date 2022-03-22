<?php
    $teams = array(
        "Qatar" => array(
            "qualification-methode" => "Hosts",
            "previous-preformance" => " - ",
            "rank" => 1,

            "players" => array(
                "Name" => array(
                    "age" => 23,
                    "goals" => 0,
                ),
            ),
        ),
    );
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style/all.css">
    <link rel="stylesheet" href="../style/teams.css">
    <title>Teams</title>
</head>
<body>
    <?php foreach ($teams as $team => $info): ?>
        <h2><?=$team?></h2>
        <p>
            Qualification methode: <?=$info["qualification-methode"]?>
        </p>
    <?php endforeach;?>
</body>
</html>