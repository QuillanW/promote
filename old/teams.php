<?php
    $teams = array(
        "Qatar" => array(
            "qualification_methode" => "Hosts",
            "previous_preformance" => " - ",
            "rank" => 1,

            "players" => array(
                "name" => array(
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
        <table>
            <tr>
                <td>Rank:</td>
                <td><?=$info["rank"]?></td>
            </tr>
            <tr>
                <td>Qualification methode:</td>
                <td><?=$info["qualification_methode"]?></td>
            </tr>
            <tr>
                <td>Previous Preformance:</td>
                <td><?=$info["previous_preformance"]?></td>
            </tr>
            <tr>
                <td>Players:</td>
                <td><?php print_r($info["players"])?></td>
            </tr>
        </table>
    <?php endforeach;?>
</body>
</html>