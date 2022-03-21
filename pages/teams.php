<?php
    $teams = array(
        "Qatar" => array(
            "qualification-methode" => "Hosts",
            "previous-preformance" => " - ",
            "players" => array(
                "Name" => "",
                "Age" => "",
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
    <?php
        foreach ($teams as $team) {
            print_r($team)
        }
    ?>
</body>
</html>