$(function(){
		var stynone=`<style>:root{--vcolor: #ddd;}</style>`;
  	  	var styblock=`<style>:root{--vcolor: #ffd5c5;}</style>`;
		// 获取当前点赞数量
		axios({
	  		method:'get',
	  		url:'/getCount?id=2',
  		}).then(function (res) {
  			if(res.data[0].number==0){
  				$(stynone).appendTo('head');	
  			}
       		  	$('.count').html(res.data[0].number);
  	  	}).catch(function (error) {
  	  	  	console.log(error);
  	  	});
  	  	  
  	  	System.import('/script/addlikes.js').then(function(m) {
  	  	   	$.extend({m});
  	  	   	// var count = 0;
  	  	   	$(document).on('click','#hand',function(){
  	  	   		$('.hand').removeAttr('id')
  	  	   		 clickthumbs();

  	  	   		// count && clearTimeout(count)
  	  	   		// count = setTimeout(function(){
  	   		   	//      	 clickthumbs();
  	  	   		// }, 1000)
  	  	  	})	
  	  	});

  	  	function clickthumbs(){
  	  		var num=parseInt($('.count').html());
  	  		num=$.m(num);
  	  		if(num<10){
  	  			$(styblock).appendTo('head');
  	  		}else{
  	  			num=0;
  	  			$(stynone).appendTo('head');
  	  		}
  	  		sendNum(num)
  	  	}
		function sendNum(num){
			 axios({
		  		method:'get',
		  		url:`/get?id=2&number=${num}`,
	  		}).then(function (res) {
	       		  	if(res.data.code==0){
	       		  		$('#showanimation').addClass('Special');
	       		  		setTimeout(function(){
	       		  			$('#showanimation').removeClass('Special');
	       		  			$('.hand').attr('id','hand');
	       		  		},1700)
	       		  		$('.count').html(num);	
	       		  	}
	  	  	}).catch(function (error) {
	  	  	  	console.log(error);
	  	  	});
		}
})