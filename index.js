$(function() {
				///////////////////////顶部搜素框////////////////////
	$(".search").on("click", function(){
//		$(".bagview").hide()
//		$(".saanjiao").hide()
		$(".none").addClass("xiaoshi");
		$(".sousuo-show").addClass("sousuo-none");
		$(".huadong").addClass("huadong-none")
		$(".daohang-row .bag").css("display","none")
		$(".daohang-row .bianxing-box").css("display","block")
		$(".bianxing-box div:first").delay(10).queue(function(){
			$(this).addClass("bianxin-da-zuo").dequeue()
		})
		$(".bianxing-box div:last").delay(10).queue(function(){
			$(this).addClass("bianxin-xiao-you").dequeue()
		})
	});
	$(".daohang-row .bianxing-box").on("click", function(){
		$(".none").removeClass("xiaoshi");
		$(".sousuo-show").removeClass("sousuo-none");
		$(".huadong").removeClass("huadong-none")
		$(".bianxing-box div:first").removeClass("bianxin-da-zuo")
		$(".bianxing-box div:last").removeClass("bianxin-xiao-you")
		$(".daohang-row .bianxing-box")
			.delay(300).queue(function(){
				$(this).css("display","none").dequeue()
			})
		$(".daohang-row .bag")
			.delay(300).queue(function(){
				$(this).css("display","block").dequeue()
			})
	})
//////////////轮播图/////////////
	var slides = $(".content .imgs");
	var dots=$(".btn .btn-son p");
	var flag=false
	$(".btn .btn-son p:first").removeClass("p")
	dots.get(0).offsetWidth
	$(".btn .btn-son p:first").addClass("p")
	var moveTo = function(el, dir) {
		if(flag===false){
			flag=true
			if(dir === "right") {
				slides.filter(".active")
					.removeClass("active")
					.addClass("zuo-chu")
					.delay(800)
					.queue(function() {
						flag=false
						$(this).removeClass("zuo-chu")
							.dequeue();
					})
				$(el).addClass("active you-jin")
					.delay(800)
					.queue(function() {
						$(this).removeClass("you-jin")
							.dequeue();
					})								
			}
			if(dir === "left") {
				slides.filter(".active")
					.removeClass("active")
					.addClass("you-chu")
					.delay(800)
					.queue(function() {
						flag=false
						$(this).removeClass("you-chu")
							.dequeue();
					})
				$(el).addClass("active zuo-jin")
					.delay(800)
					.queue(function() {
						$(this).removeClass("zuo-jin")
							.dequeue();
					})							
			};
			if($(".btn .btn-son .p").length==4){
				dots.removeClass("p")
			}
			dots
			.eq(slides.index(el))
				.delay(800)
					.queue(function() {
						$(this).addClass("p")
							.dequeue();
					})										
		}
	}
	var moveRight = function() {
		var active = slides.filter(".active");
		var el = active.next().length ? active.next() : slides.eq(0);
		moveTo(el, "right")
	}
	var moveLeft = function() {
		var active = slides.filter(".active");
		var el = active.prev().length ? active.prev() : slides.eq(-1);
		moveTo(el,"left")
	}
	var t=setInterval(moveRight, 3000)
	$(".carousel").hover(function(){
		clearInterval(t)
	},function(){
		t=setInterval(moveRight,3000)
	})
	$(".anniu-a .anniu-left").on("click",function(){
		moveLeft()
	})
	$(".anniu-b .anniu-right").on("click",function(){
		moveRight()
	})
	$(".btn .btn-son").on("click",function(){
		var v=$(this).index();
		var n=slides.index(slides.filter(".active"));
		if(v===n){
			return
		}
		if(n<v){
			moveTo(slides.eq($(this).index()),"right")
		}
		if(n>v){
			moveTo(slides.eq($(this).index()),"left")
		}
		dots.removeClass("p")
		$(this).delay(800).queue(function(){
			$(this).addClass("p").dequeue();
		})
	})
				////////////////小屏幕变形//////////////////////////
	$(".bianxing").on("click",function(){
		$(".bianxing .shang").addClass("Top")
		$(".bianxing .xia").addClass("Bottom")
		$(".zhezhao").css("z-index","200")
		$('.small-xiala').addClass("xiala-donghua")
		$(".small-xiala li").addClass("li-yiru")
		$("body").css("overflow-y","hidden")
		$(".small li:last").addClass("bag-you")
		$(".bagview").hide()
		$(".saanjiao").hide()
	})
	$(".zhezhao").on("click",function(){
		$(".bianxing .shang").removeClass("Top")
		$(".bianxing .xia").removeClass("Bottom")
		$(".zhezhao").css("z-index","")
		$('.small-xiala').removeClass("xiala-donghua")
		$(".small-xiala li").removeClass("li-yiru")
		$("body").css("overflow-y","auto")
		$(".small li:last").removeClass("bag-you")
	})
	////////////////////////////点击下拉菜单//////////////////////
	$(".bag").on("click",function(){
		if($(".bagview").css('display')=="none"){
			$(".saanjiao").show()
			$(".bagview").show()
		}else{
			$(".bagview").hide()
			$(".saanjiao").hide()
		}
		
	})
	$(".rows h3").on("click",function(){
		$(this).prev().css("display","block")
		$(this).next().addClass("ul-donghua")
		})
	$(".zhezhao1").on("click",function(){
		$(this).next().next().removeClass("ul-donghua")
		$(".zhezhao1").css("display","none")
	})
})
			