var fileHandler = (function () {
    function readFile (file, callback) {
        var reader = new FileReader();
        reader.onload = function () {
            gallery.createImage(reader.result, callback);
        };
        if (file) {
            reader.readAsDataURL(file); //reads the data as a URL
        }
    }

    function typeCheck (files, types, callback) {
        types = types || ['image/png','image/jpeg'];
        Object.keys(files).forEach(function (key) {
            var file = files[key];
            for( var i = 0; i < types.length; i++ ) {
                if ( file.type.indexOf( types[i] ) === 0 ) {
                    readFile(file, callback);
                    return;
                }
            }
            alert('Please upload a valid type');
        });
    }

    return {
        check: typeCheck,
        reader: readFile
    };
}());
