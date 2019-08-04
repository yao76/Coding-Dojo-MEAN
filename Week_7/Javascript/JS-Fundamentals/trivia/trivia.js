$(document).ready(function () {
    $.get("https://opentdb.com/api.php?amount=5&category=11&difficulty=easy&type=multiple", film_data)
    function film_data(data1) {
        film_results = data1.results;
        $(".film-title").html(film_results[0]['category'])
    }

    $.get("https://opentdb.com/api.php?amount=5&category=9&type=multiple&type=multiple", gen_knowledge_data)
    function gen_knowledge_data(data2) {
        general = data2.results;
        $(".gen-knowledge-title").html(general[0]['category'])

    }

    $.get("https://opentdb.com/api.php?amount=5&category=21&type=multiple&type=multiple", sports_data)
    function sports_data(data3) {
        sports = data3.results;
        $(".sports-title").html(sports[0]['category']);

    }
    $(".easy-film-question").click(function () {
        $(".easy-film-question").html("<id='answers'><br><p>" + film_results[0].question + "</p><br><p>" + film_results[0].incorrect_answers[0] + "</p><p>" + film_results[0].incorrect_answers[1] + "</p><p id='correct-100'>" + film_results[0].correct_answer + "</p><p>" + film_results[0].incorrect_answers[2] + "</p></div>");
    })
    $(".easy-gen-question").click(function () {
        $(".easy-gen-question").html("<div id='answers'><br><p>" + general[0].question + "</p><br><p>" + general[0].incorrect_answers[0] + "</p><p>" + general[0].incorrect_answers[1] + "</p><p id='correct-100'>" + general[0].correct_answer + "</p><p>" + general[0].incorrect_answers[2] + "</p></div>");
    })
    $(".easy-sports-question").click(function () {
        $(".easy-sports-question").html("<div id='answers'><br><p>" + sports[0].question + "</p><br><p>" + sports[0].incorrect_answers[0] + "</p><p>" + sports[0].incorrect_answers[1] + "</p><p id='correct-100'>" + sports[0].correct_answer + "</p><p>" + sports[0].incorrect_answers[2] + "</p></div>");
    })

    $(document).on("click", "#correct-100", function () {
        $("#score").html(function(i, val) { return val*1+100 });
        alert("Correct!");
    });

})

