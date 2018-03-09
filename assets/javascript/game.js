
$(document).ready(function() {
	init();

	$(".btn").on("click", function() {
		var res = parseInt($(this).val())+parseInt($(".scorebox").text());
		$(".scorebox").text(res);
		var rand = parseInt($(".greenbox").text());
		if(res==rand) {
			var a = parseInt($("#w").text());
			$("#w").text(a+1);
			init();
		} else if(res>rand) {
			var a = parseInt($("#l").text());
			$("#l").text(a+1);
			init();

		}
	}); 
});


function init() {

	$(".greenbox").text(Math.floor(Math.random()*102+19));
	$(".scorebox").text(0);
	$(".btn").each(function() {
		$(this).val(Math.floor(Math.random()*12+1));
		console.log($(this).val());

	});
    // another version of the code
	/*$("#red").val(Math.floor(Math.random()*12+1));
	$("#blue").val(Math.floor(Math.random()*12+1));
	$("#yellow").val(Math.floor(Math.random()*12+1));
	$("#green").val(Math.floor(Math.random()*12+1));
	console.log($("#red").val());
	console.log($("#blue").val());
	console.log($("#yellow").val());
	console.log($("#green").val()); */
}