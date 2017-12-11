$(window).ready(function() {
	setImages();
	$('#magazine').turn({
		display: 'double',
		acceleration: true,
		gradients: !$.isTouch,
		elevation:50,
		when: {
			turned: function(e, page) {
				/*console.log('Current view: ', $(this).turn('view'));*/
			}
		}
	});
});


$(window).bind('keydown', function(e){

	if (e.keyCode==37)
		$('#magazine').turn('previous');
	else if (e.keyCode==39)
		$('#magazine').turn('next');

});

function setImages() {
	const IMAGE_FOLDER_NAME = 'DESMA10';
	const IMAGE_NAME = '12102017-DESMA-Final-New';
	const IMAGE_TYPE = '.png'
	const NUM_IMAGES = 31;
	content = '<div style="background-image:url(' + IMAGE_FOLDER_NAME + '/' + IMAGE_NAME + IMAGE_TYPE + ');"></div>';
	for(let i = 2; i <= NUM_IMAGES; i++) {
		content += '<div style="background-image:url(' + IMAGE_FOLDER_NAME + '/' + IMAGE_NAME + i + IMAGE_TYPE + ');"></div>';
	}
	$('#magazine').html(content);
}
