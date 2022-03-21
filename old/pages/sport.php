<?php
    $sports = array(
        "3x3-basketball" => array(
            "name" => "3x3 Basketball",
        ),
        "acrobatic-gymnastics" => array(
            "name" => "Acrobatic Gymnastics",
        ),
        "alpine-skiing" => array(
            "name" => "Alpine Skiing",
        ),
        "archery" => array(
            "name" => "Archery",
        ),
        "artistic-gymnastics" => array(
            "name" => "Artistic Gymnastics",
        ),
        "artistic-swimming" => array(
            "name" => "Artistic Swimming",
        ),
        "athletics" => array(
            "name" => "Athletics",
        ),
        "badminton" => array(
            "name" => "Badminton",
        ),
        "baseball-softball" => array(
            "name" => "Baseball Softball",
        ),
        "basketball" => array(
            "name" => "Basketball",
        ),
        "beach-handball" => array(
            "name" => "Beach Handball",
        ),
        "beach-volleyball" => array(
            "name" => "Beach Volleyball",
        ),
        "biathlon" => array(
            "name" => "Biathlon",
        ),
        "cycling-bmx-freestyle" => array(
            "name" => "BMX Freestyle",
        ),
        "cycling-bmx-racing" => array(
            "name" => "BMX Racing",
        ),
        "bobsleigh" => array(
            "name" => "Bobsleigh",
        ),
        "boxing" => array(
            "name" => "Boxing",
        ),
        "breaking" => array(
            "name" => "Breaking",
        ),
        "canoe-kayak-flatwater" => array(
            "name" => "Canoe/Kayak Flatwater",
        ),
        "canoe-kayak-slalom" => array(
            "name" => "Canoe/Kayak Slalom",
        ),
        "cross-country-skiing" => array(
            "name" => "Cross-country Skiing",
        ),
        "curling" => array(
            "name" => "Curling",
        ),
        "diving" => array(
            "name" => "Diving",
        ),
        "equestrian" => array(
            "name" => "Equestrian",
        ),
        "fencing" => array(
            "name" => "Fencing",
        ),
        "figure-skating" => array(
            "name" => "Figure Skating",
        ),
        "football" => array(
            "name" => "Football",
        ),
        "freestyle-skiing" => array(
            "name" => "Freestyle Skiing",
        ),
        "futsal" => array(
            "name" => "Futsal",
        ),
        "golf" => array(
            "name" => "Golf",
        ),
        "handball" => array(
            "name" => "Handball",
        ),
        "hockey" => array(
            "name" => "Hockey",
        ),
        "ice-hockey" => array(
            "name" => "Ice Hockey",
        ),
        "judo" => array(
            "name" => "Judo",
        ),
        "karate" => array(
            "name" => "Karate",
        ),
        "luge" => array(
            "name" => "Luge",
        ),
        "marathon-swimming" => array(
            "name" => "Marathon Swimming",
        ),
        "modern-pentathlon" => array(
            "name" => "Modern Pentathlon",
        ),
        "cycling-mountain-bike" => array(
            "name" => "Mountain Bike",
        ),
        "nordic-combined" => array(
            "name" => "Nordic Combined",
        ),
        "rhythmic-gymnastics" => array(
            "name" => "Rhythmic Gymnastics",
        ),
        "cycling-road" => array(
            "name" => "Cycling Road",
        ),
        "roller-speed-skating" => array(
            "name" => "Roller Speed Skating",
        ),
        "rowing" => array(
            "name" => "Rowing",
        ),
        "rugby-sevens" => array(
            "name" => "Rugby",
        ),
        "sailing" => array(
            "name" => "Sailing",
        ),
        "shooting" => array(
            "name" => "Shooting",
        ),
        "short-track-speed-skating" => array(
            "name" => "Short Track Speed Skating",
        ),
        "skateboarding" => array(
            "name" => "Skateboarding",
        ),
        "skeleton" => array(
            "name" => "Skeleton",
        ),
        "ski-jumping" => array(
            "name" => "Ski Jumping",
        ),
        "ski-mountaineering" => array(
            "name" => "Ski Mountaineering",
        ),
        "snowboard" => array(
            "name" => "Snowboard",
        ),
        "speed-skating" => array(
            "name" => "Speed Skating",
        ),
        "sport-climbing" => array(
            "name" => "Sport Climbing",
        ),
        "surfing" => array(
            "name" => "Surfing",
        ),
        "swimming" => array(
            "name" => "Swimming",
        ),
        "table-tennis" => array(
            "name" => "Table Tennis",
        ),
        "taekwondo" => array(
            "name" => "Taekwondo",
        ),
        "tennis" => array(
            "name" => "Tennis",
        ),
        "cycling-track" => array(
            "name" => "Cycling Track",
        ),
        "trampoline-gymnastics" => array(
            "name" => "Trampoline",
        ),
        "triathlon" => array(
            "name" => "Triathlon",
        ),
        "volleyball" => array(
            "name" => "Volleyball",
        ),
        "water-polo" => array(
            "name" => "Water Polo",
        ),
        "weightlifting" => array(
            "name" => "Weightlifting",
        ),
        "wrestling" => array(
            "name" => "Wrestling",
        ),
    );
    // print_r($sports);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style/sport.css">
    <title>Sport</title>
</head>
<body>

    <main>
        <?php
        ?>

        <form class="sportList" method="get">
            <?php
                foreach ($sports as $id => $sport) {
                    print_r($sport);
                    $name = $sport['name'];
                    echo "
                        <button class='sport' name='sport' value='$id'>
                            <h3>$name</h3>
                            <picture>
                                <img src='../media/sport/icons/$id.svg' alt='3$id'>
                            </picture>
                        </button>
                    ";
                };
            ?>
        </form>
    </main>

</body>
</html>