//$.get('/news.xml')
//	.done(function(data){
//		data = $.parseXML(data);
//		var list = $('#newsList');
//		$(data)
//		.find('article')
//		.each(function(index, element){
//			var field = $(element)
//			var label = field.find('newsTitle').text()
//			var value = field.find('newsContent').text()
//			list
//				.append('<li>'+label+': </li>')
//				.append('<li>'+value+': </li>')
//				;
//			})
//			;
//	})
 // .fail(function(){
//	alert('something went wrong!');
//  })
//;
//Code Starts
$(document).ready(function(){
	$("#news").append("<ul></ul>");
	$.ajax({
		type: "GET",
		url: "news.xml",
		dataType: "xml",
		success: function(xml){
			$(xml).find('article').each(function(){
				var sTitle = $(this).find('newsTitle').text();
				var sPublisher = $(this).find('newsContent').text();	
			$("<li></li>").html(sTitle + ", " + sPublisher).appendTo("#news ul");
			});
		},
	error: function() {
		alert("An error occurred while processing XML file.");
		}
	});
});
//Code Ends
