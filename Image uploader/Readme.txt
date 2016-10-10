Open index.html file within browser of your choice.
Then import images in any format or simply drag and drop them to the browser window running index.html.
Any imported image will be re-drawn in a new thumbnail, clicking on thumbnail open the image on new window.

For developers:
For configuring a new area of your choice to perform the same functionality
simply add in the main.js file the following code with your data:
uploader.init( { inputBox: document.getElementById('!!!  id of new uploader button !!!'), dropbox: document.getElementById('!!! id for new drag-drop area !!!'), uploadArea: document.getElementById('!!! id of new uploading area !!!'), thumbWidth: height of thumbnails(e.g. 150), thumbHeight: width for thumbnails (e.g. 150) } );
