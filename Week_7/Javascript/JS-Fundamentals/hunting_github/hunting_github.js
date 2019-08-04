$(document).ready(function () {
    $('#button').click(function () {
        $.get("https://api.github.com/users/yao76", displayName)
        // Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)
        function displayName(data) {
            var myName = data.name;
            console.log(data);
            $('p').html(myName);
        }
    })
})