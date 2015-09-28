/**
 * Created by Katie on 9/27/2015.
 */

function init() {
    var button = document.getElementById('submit');
    button.onclick = checkQuiz;
}

function checkQuiz() {

    /**
     * Reset points to 0 during the re-run of the script.
     */
    var points = 0;

    /**
     * This function loops through the possible elements in the html code and pulls out the value and accrues points
     * based on the "high" or "low" value.
     */
    for (var i = 0; i < 10; i++) {
        var input = findValue(document.getElementsByName('question' + (i + 1)));
        if (input == 'high') {
            points += 2;
        } else if (input == 'low') {
            points++
        }
    }

    /**
     * Display the results of the quiz
     */
    displayImage(points);
}

/**
 * Take the element and find out what is checked
 *
 * @param inputs
 * @returns {string|Number|*}
 */
function findValue(inputs) {
    var checked;
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            //alert(inputs[i].value);
            checked = inputs[i].value;
            return (checked);
        }
    }
}

/**
 * Takes points and compares and displays the results
 *
 * @param points
 */
function displayImage(points) {
    if (points < 10) {
        alert("You need to complete the whole form!");
        return;
    }
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('answer').style.display = 'inline';

    var image = document.createElement('img');
    var source = document.getElementById('coffeeType');
    var text;

    if (points <= 14) {
        text = 'Sorry! You\'re a social coffee drinker. But you can live without it.';
        image.src = 'img/low_score.jpg';
    } else if (points > 14) {
        text = 'Congratulations! You\'re a true coffee addict! Do they make enough for you?';
        image.src = 'img/High_score.jpg';
    } else {
        image.src = 'img/broken.jpeg';
    }
    source.appendChild(image);
    source.innerHTML += '<br>' + text;
}
window.onload = init;