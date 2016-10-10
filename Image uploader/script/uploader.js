var uploader = (function () {
    function init (elements) {
        elements = elements || { inputBox: document.getElementById('uploadButton'), dropbox: document.getElementById('dropbox'), uploadArea: document.getElementById('uploadArea'), thumbWidth: 150, thumbHeight: 150};
        var area = elements.uploadArea,
        inputBox = elements.inputBox,
        dropbox = elements.dropbox,
        types = elements.types,
        thumbWidth = elements.thumbWidth,
        thumbHeight = elements.thumbHeight;
        listener.init(inputBox, dropbox, types, addEventListener, callback);
        function callback () {
            return { area: area, thumbWidth:thumbWidth, thumbHeight:thumbHeight };
        }
    }
    return {
        init: init
    };
}());
