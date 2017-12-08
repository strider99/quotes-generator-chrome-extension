

$(document).ready(function () {

	var $loading = $('#loading').hide();
	$(document)
	  .ajaxStart(function () {
	    $loading.show().gSpinner();
	  })
	  .ajaxStop(function () {
	    $loading.hide();
	  });

	var quote = '';
	var author = '';
	var colors = ['#00CC99', '#2B99E2', '#2B76E2', '#CE2BE2', '#E22BAA', '#115D99', '#990099', '#00B1CC', '#00FFCC', '#0079CC'];
	function getQuote () {
		$.ajax({
			headers : {
				'X-Mashape-Key': 'irwLbOHG2fmshDcn5HEVj8j9hJ2vp1M8JOWjsn3RuZ4cjbnI9t',
				Accept: 'application/json'

			},
			url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1',
			success : function(response) {
				response = JSON.parse(response);
				console.log(response);
				// console.log(quote + ' and the author is ' + author);
				quote = response.quote;
				author = response.author;
				$("#quote").text(quote);
				$('#quote-author').text(author);
				var color = Math.floor(Math.random() * colors.length);
			      $("html body").animate({
			        backgroundColor: colors[color]
			      }, 1000);
				$('#quote, #quote-author').fadeIn('fast');
				$('#tweetBtn').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + quote + ' - ' + author);

			},
			error : function(err){
				console.log("There was an error + ", err);
			}
		});		
		
	}

	

	$('#newQuote').on('click',fadeQuoteAway);

	function fadeQuoteAway() {
		$('#quote, #quote-author').text('');
		getQuote();
	}





	getQuote();
console.log(quote);


});