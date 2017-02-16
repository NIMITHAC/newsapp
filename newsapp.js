$(document).ready(function(){
	var url1="https://newsapi.org/v1/sources?language=en";
	
	
	
	$.ajax({

		url:url1,
		success:function(data){
			var id1=[];
			var name1=[];
			console.log(data);
			var id1=data.sources.map(item=>item.id);
			var name1=data.sources.map(item=>item.name);

			console.log(id1);
			console.log(name1);
			
			for(j=0;j<name1.length;j++){
				
				var htmlString= "<div> <a href='#' class='list' data-id="+id1[j]+">"+name1[j]+"</a></div>";
				$("#list1").append(htmlString);


			}
			

			$("#list1 .list").on('click',function(){
       $('section').html("");
				var id2=this.dataset.id;

				for(var i=0;i<id1.length;i++){
					$('h3').html(id2);
					if(id2==id1[i]){
						var urlString='https://newsapi.org/v1/articles?source='+id1[i]+'&sortBy=top&apiKey=d6e05ac71d1b437dbf19642d328d09ba';
					}
				}






				$.ajax({
					url:urlString,

					success:function(news){
						console.log(news);
						$.each(news.articles,function(n){


							var title=news.articles[n].title;
							var description=news.articles[n].description;

							var urltoimage=news.articles[n].urlToImage;
							var published=moment(news.articles[n].publishedAt).format('MMMM Do YYYY, h:mm:ss a');


							console.log(title,description,urltoimage);
							var htmlimg='<img src="'+urltoimage+'"></img>';


							var htmlDes='<h1 id="description">'+description+'</h1>';
							var htmltitle='<h2 id="title">'+title+'</h2>';
							var htmlpublished='<h4 id="at">'+published+'</h4>';


							var inform="<div>"+htmlpublished+htmltitle+htmlDes+htmlimg+"</div>"
							$('section').append(inform);
						})

					}
				})







			})

		},
		error:function(data){
			console.log('Err',data);
		}

	})
});





