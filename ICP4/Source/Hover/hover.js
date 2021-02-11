function upDate(previewPic) {
//changed the url for the background image of the div with the id = "image" to the source file of the preview image
    $('#image').css('background-image', 'url('+previewPic.src+ ')');
//Changed the text  of the div with the id = "image" to the alt text of the preview image
    $('#image').text(previewPic.alt);
}

function unDo() {
//Updated the url for the background image of the div with the id = "image" back to the orginal-image.
    $('#image').css('background-image', 'none');
//Changed the text  of the div with the id = "image" back to the original text.
    $('#image').text("Hover over an image below to display here.");
}
