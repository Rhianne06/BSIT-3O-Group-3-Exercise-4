<?php
$nameError = $messageError = "";
$name = $message = "";


$feedbackFolder = 'feedback';
if (!is_dir($feedbackFolder)) {
    mkdir($feedbackFolder, 0777, true); 
}

$team = [
    [
        "name" => "Darryl Garcia",
        "role" => "Team Leader",
        "img" => "darryl-garcia.jpg",
        "desc" => "He prioritizes necessary tasks and does not waste time on unimportant things until the task is finished.",
        "hover_desc" => "He has knowledge in coding, but mostly on HTML and C++ only, good at time management and efficient at his work.",
        "profile_link" => "darryl-profile.html"
    ],
    [
        "name" => "Reymark Bismar",
        "role" => "Member",
        "img" => "reymark-bismar.jpg",
        "desc" => "Reymark is eager to expand his knowledge and values teamwork, time management, and effective collaboration.",
        "hover_desc" => "Reymark has some knowledge in coding languages like C++, HTML, and CSS.",
        "profile_link" => "reymark-profile.html"
    ],
    [
        "name" => "Eunicca Bolos",
        "role" => "Member",
        "img" => "eunicca-bolos.jpg",
        "desc" => "A firm believer in the power of positivity and motivation.",
        "hover_desc" => "She can multitask and has time management, with the best cooking skills.",
        "profile_link" => "eunicca-profile.html"
    ],
    [
        "name" => "Marlone Patino",
        "role" => "Member",
        "img" => "marlone-patino.jpg",
        "desc" => "He is cooperative in group work/tasks and has consistency in performing well.",
        "hover_desc" => "Good time management, decision making, and teamwork.",
        "profile_link" => "marlone-profile.html"
    ],
    [
        "name" => "Rhianne Rafols",
        "role" => "Member",
        "img" => "rhianne-rafols.jpg",
        "desc" => "I'm a hardworking, motivated person who doesn't give up on a task.",
        "hover_desc" => "Good at decision making and multitasking.",
        "profile_link" => "rhianne-profile.html"
    ]
];


if (isset($_GET['member'])) {
    $memberIndex = intval($_GET['member']);  

    
    if ($memberIndex >= 0 && $memberIndex < count($team)) {
        
        header("Location: {$team[$memberIndex]['profile_link']}");
        exit;
    } else {
        echo "<p class='error'>Invalid member index. Please try again.</p>";
    }
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST["name"])) {
        $nameError = "Name is required";
    } else {
        $name = htmlspecialchars($_POST["name"]);
    }

    if (empty($_POST["message"])) {
        $messageError = "Message is required";
    } else {
        $message = htmlspecialchars($_POST["message"]);
    }

    if (empty($nameError) && empty($messageError)) {
        
        $filePath = $feedbackFolder . '/feedback_' . date('Ymd_His') . '.txt';
        $entry = "Name: $name\nMessage: $message\n\n";

        if (file_put_contents($filePath, $entry)) {
            $feedback = "<p class='success'>Thank you, $name, for your message.</p>";
        } else {
            $feedback = "<p class='error'>Sorry, something went wrong. Please try again later.</p>";
        }
    } else {
        $feedback = "<p class='error'>Please fix the errors above.</p>";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="shortcut icon" type="x-icon" href="logo.jpg">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>TEAM 3 PROFILE</title>
    <script src="scripts.js" defer></script>
</head>
<body>
    <div class="profile-container">
        <img src="logo.jpg" alt="Logo">
        <h1>MEET OUR TEAM</h1>
    </div>

    <div class="team-container">
        <?php
        
        foreach ($team as $index => $member) {
            echo "<div class='team-member'>";
            echo "<img src='{$member['img']}' alt='{$member['name']}'>";
            echo "<h2>{$member['name']}</h2>";
            echo "<p id='role'>{$member['role']}</p>";
            echo "<p id='p" . ($index + 1) . "'>{$member['desc']}</p>";
            echo "<a href='{$member['profile_link']}'>View Profile</a>";
            echo "</div>";
        }
        ?>
    </div>

    
    <form method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" value="<?php echo htmlspecialchars($name); ?>">
        <span class="error"><?php echo $nameError; ?></span><br><br>

        <label for="message">Message:</label>
        <textarea id="message" name="message"><?php echo htmlspecialchars($message); ?></textarea>
        <span class="error"><?php echo $messageError; ?></span><br><br>

        <input type="submit" value="Send">
    </form>

    
    <?php if (isset($feedback)) echo $feedback; ?>

    <footer>
        <h2>Contact Us</h2>
        <p>For more information, visit our <a href="#">website</a> or email us at <a href="team@gmail.com">team@gmail.com</a>.</p>
    </footer>
</body>
</html>