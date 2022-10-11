$(function(){
$(".bottom-nav").on("click", function(){
if($(".menu").hasClass("active")){
	$(".menu").removeClass("active");
	$(this).find("a").html("<ion-icon name='menu-outline'></ion-icon>");
}else{
	$(".menu").addClass("active");
	$(this).find("a").html("<ion-icon name='close-outline'></ion-icon>");
}
});
});
