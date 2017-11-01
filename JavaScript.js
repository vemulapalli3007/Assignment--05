<script>

    function getWeather(){
      var location = $('#city').val();

        $.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + location + '")&format=json',
        function (data)
        {
        if (data.query.results === null) {
        alert("Location not found: " + location + "!!! City Names only");/*if user entered wrong location*/
    }
        else
        {
        $('.result').html('<h2>' + data.query.results.channel.item.title + '</h2>' +
            data.query.results.channel.item.description)
            $('.container').show();
        }
 });
}
</script>