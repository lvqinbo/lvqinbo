$(function(){
	$('input').on('click',function(){
		
		/*if($(this).val() == '上移'){
			$(this).parent().insertBefore($(this).parent().prev());
		}else{
			$(this).parent().insertAfter($(this).parent().next());
		}*/

		if( $(this).val() == '上移' ){

			$(this).parent().insertBefore( $(this).parent().prev() );
			
		}else{
			$(this).parent().next().after( $(this).parent() );
		}
	})
})