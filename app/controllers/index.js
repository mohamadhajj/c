var url1 = 'http://upload.wikimedia.org/wikipedia/commons/5/5a/Flower_11.jpg';

var win=$.index;

function savephoto() {

	var imageFile = Ti.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, 'abc.jpg');

	var xhr = Ti.Network.createHTTPClient({
		onload : function(e) {

			imageFile.write(e.responseData);

			Ti.API.info("path=" + imageFile.nativePath);
			Ti.API.info("height=" + imageFile.size.height);
			Ti.API.info("width=" + imageFile.size.width);

		}
	});

	xhr.open('GET', url1);
	xhr.send();
}

function doClick(e) {
	//chow saved image
	var someFile = Ti.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, 'abc.jpg');
	authorAvatar.image = someFile.read();
}

function doClick1(e) {
//get image and save it
	savephoto();
}

var authorAvatar = Ti.UI.createImageView({

	width : '100',
	height : '100',
	top : '0',
	borderColor : '#ccc',
	borderWidth : 1,

});

win.add(authorAvatar);

$.index.open();
