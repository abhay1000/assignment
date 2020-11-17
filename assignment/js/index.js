function checkClick(a)
{
	if(confirm('Do You Want to Cancel Leave?'))
	{
		let res = a.parentElement.id;	
		a.parentElement.style.display = "none";
	}
	else
	{
		console.log("Not Done");
	}
}
function checkx(a)
{
	if(confirm('You want to Regularize?'))
	{
		let res = a.parentElement.setAttribute('class','GO');
		a.parentElement.children[1].children[1].innerHTML = 'Late Muster';
		a.parentElement.children[1].children[2].innerHTML = 'GO';
		a.parentElement.children[2].style.float = "right";
		a.parentElement.children[2].style.visibility = "hidden";
		
	}
	else
	{
		console.log("Not Done");
	}
}
$(document).ready(function(){
	$("div.back-cover").hide();
	$("i.custom-toggle").on("click", function() {
		$("div.back-cover").slideToggle();
	});
});

