document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('p1').addEventListener("mouseover", cText1);
    document.getElementById('p1').addEventListener("mouseout", cText2_1);

    function cText1() {
        document.getElementById('p1').innerHTML = "He has knowledge in coding, but mostly on HTML and C++ only, good at time management and efficient at his work.";
    }
    function cText2_1() {
        document.getElementById('p1').innerHTML = "He prioritizes necessary tasks and does not waste time on unimportant things until the task is finished.";
    }

    document.getElementById('p2').addEventListener("mouseover", cText2);
    document.getElementById('p2').addEventListener("mouseout", cText2_2);

    function cText2() {
        document.getElementById('p2').innerHTML = "Reymark has some knowledge in coding languages like C++, HTML, and CSS. While he's still honing his skills, he is committed to improving his proficiency and eager to expand his knowledge.";
    }
    function cText2_2() {
        document.getElementById('p2').innerHTML = "Reymark is eager to expand his knowledge and values teamwork, time management, and effective collaboration. He is committed to growth and making a meaningful impact.";
    }

    document.getElementById('p3').addEventListener("mouseover", cText3);
    document.getElementById('p3').addEventListener("mouseout", cText2_3);

    function cText3() {
        document.getElementById('p3').innerHTML = "She can multitask and has time management, with the best cooking skills.";
    }
    function cText2_3() {
        document.getElementById('p3').innerHTML = "A firm believer in the power of positivity and motivation. Loves helping others find their spark and achieve their goals.";
    }

    document.getElementById('p4').addEventListener("mouseover", cText4);
    document.getElementById('p4').addEventListener("mouseout", cText2_4);

    function cText4() {
        document.getElementById('p4').innerHTML = "My skills include good time management, decision making, and teamwork.";
    }
    function cText2_4() {
        document.getElementById('p4').innerHTML = "He is cooperative in group work/tasks and has consistency in performing well.";
    }

    document.getElementById('p5').addEventListener("mouseover", cText5);
    document.getElementById('p5').addEventListener("mouseout", cText2_5);

    function cText5() {
        document.getElementById('p5').innerHTML = "My skills include doing well in terms of decision making and multitasking, with the ability to learn quickly and the determination to succeed.";
    }
    function cText2_5() {
        document.getElementById('p5').innerHTML = "I'm a hardworking, motivated person who doesn't give up on a task. I have a strong academic interest and consider myself to be an open and direct individual who aims for fairness in all I do.";
    }
});
