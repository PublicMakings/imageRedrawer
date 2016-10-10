var listener = (function () {
    var popup = document.createElement('div');
    popup.innerHTML = "Drop the Image";
    popup.className = 'popup';

    function init (inputBox, dropbox, types, EventOption, callback) {
        inputBox[EventOption('change', function() {
            fileHandler.check(inputBox.files, types, callback);
            inputBox.value = "";
        })];
        dropbox[EventOption('dragover', dragover)];
        dropbox[EventOption('dragleave', dragleave)];
        dropbox[EventOption('drop', function(event) { drop(event, types, callback); })];
    }

    function dragover (event) {
        dragFunction(event, 'dragover');
        event.srcElement.appendChild(popup);
    }

    function dragleave (event) {
        dragFunction(event, 'dragleave');
        event.srcElement.removeChild(popup);
    }

    function drop (event, types, callback) {
        dragFunction(event, 'drop');
        var files = event.dataTransfer.files;
        fileHandler.check(files, types, callback);
        if (event.srcElement.children.length) event.srcElement.removeChild(popup);
    }

    function dragFunction (event, className) {
        event.stopPropagation();
        event.preventDefault();
        event.srcElement.className = className;
    }

    return {
        init: init
    }
}());
