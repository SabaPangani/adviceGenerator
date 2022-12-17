$(document).ready(function () {
    const apiURL = 'https://api.adviceslip.com/advice';

    $(".dice").click(function(){
        $.ajax({
            type: "GET",
            url: apiURL,
            dataType: "json",
            success: function (response) {
                var numberID = Number(response.slip.id)
                var adviceText = response.slip.advice;
                $(".numberText").text(`Advice #${numberID}`);
                $(".adviceText").text('"' + adviceText + '"');
                console.log(numberID,adviceText);
            }
        });
    })
});