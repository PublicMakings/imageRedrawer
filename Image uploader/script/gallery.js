var gallery = (function (){
    var canvas = document.createElement('canvas'),
    background = "#E4E4E4", type = false, quality = 1;

    //callback should return object with parentElemnt, width and height

    function createImage (link, callback) {
        // create a buffer image object
        var originalImage = new Image();
        originalImage.src = link;
        originalImage.onload = function() {
            imageToCanvas( this, callback);
        };
    }

    function imageToCanvas (image, callbackFunction) {
        var callbackObject = callbackFunction();
        var area = callbackObject.area,
        thumbWidth = callbackObject.thumbWidth,
        thumbHeight = callbackObject.thumbHeight;
        canvas.width = thumbWidth;
        canvas.height = thumbHeight;
        var context = canvas.getContext('2d');
        var dimensions = thumbParameters( image.width, image.height, thumbWidth, thumbHeight );
        if ( background !== 'transparent' ) {
            context.fillStyle = background;
            context.fillRect ( 0, 0, thumbWidth, thumbHeight );
        }
        context.drawImage(image, dimensions.positionX, dimensions.positionY, dimensions.width, dimensions.height);
        addCroppedToList(area, image.src);
    }

    function thumbParameters ( imageWidth, imageHeight, thumbWidth, thumbHeight ) {
        var positionX, positionY,
        widthRatio = imageWidth / thumbWidth,
        heightRatio = imageHeight / thumbHeight,
        maxRatio = Math.max( widthRatio, heightRatio ),
        width = imageWidth,
        height = imageHeight;
        if ( maxRatio > 1 ) {
            width = imageWidth / maxRatio;
            height = imageHeight / maxRatio;
        }
        positionX = ( thumbWidth - width ) / 2;
        positionY = ( thumbHeight - height ) / 2;
        return {  positionX:positionX, positionY:positionY, width:width, height:height};
    }

    function addCroppedToList (area, href) {
        var croppedImage = new Image(),
        division = document.createElement('div');
        url = type ? canvas.toDataURL( 'image/' + type , quality ) : canvas.toDataURL();
        croppedImage.src = url;
        croppedImage.title = Math.round( url.length / 1000 * 100 ) / 100 + ' KB';
        croppedImage.className = 'image';
        division.className = 'division';
        croppedImage.addEventListener( 'click', function() { windowOpener(href); } );
        division.appendChild(croppedImage);
        area.appendChild(division);
        document.body.appendChild(area);
    }

    function windowOpener (href) {
        window.open(href, 'newwindow', 'width=' + window.innerWidth, 'height=' + window.innerHeight );
    }

    return {
        createImage: createImage,
        convertToCanvas: imageToCanvas,
        thumbImageParameters: thumbParameters,
        apppendImage: addCroppedToList,
        newWindow: windowOpener
    };
}());
