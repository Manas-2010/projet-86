var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg", function (Img){
		background_image_objet= Img;

		background_image_objet.scaleToWidth(1000);
		background_image_objet.scaleToHeight(900);
		background_image_objet.set({
			top:0,
			left:0,
		});
		canvas.add(background_image_objet);
	});
	
}

function playSound(){
	x.play();
}
