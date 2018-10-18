$.get('http://192.168.0.101/WEBSITE%20TESTING/news.xml')
  .done(function(data){
    var list = $('#newsList');$(data).find('article').each(function(index, element){
			var xmlele = $(element)
			var headline = xmlele.find('newsTitle').text()
			var content = xmlele.find('newsContent').text()
			list
				.append('<li>'+headline+'-'+content+': </li>')
				;
			})
			;
  })
  .fail(function(error){
    alert(error.text());
  })
;