function getRandomImage(path) {
            path = path || '/images/'; // default path here
            var num = Math.floor( Math.random() * 33 );
            var imgStr = '<img class="img-responsive center-block thumbnail-logo" src="' + path + num + '.jpg' + '" style="width:1135px; height:133px;">';
            document.write(imgStr); document.close();
        };