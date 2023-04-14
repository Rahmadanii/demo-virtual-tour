var container = document.querySelector('#container');
var panorama = new PANOLENS.ImagePanorama('1.jpg');
var panorama2 = new PANOLENS.ImagePanorama('11.jpg');
var panorama3 = new PANOLENS.ImagePanorama('wqs.jpg');

var viewer = new PANOLENS.Viewer({container: container});
viewer.add(panorama, panorama2);

var infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospot.position.set(0, -2000, -5000);
panorama.add(infospot);

infospot.addEventListener('click', function(){
    viewer.setPanorama(panorama2);
});
panorama.addEventListener('progress', onProgressUpdate);
panorama2.addEventListener('progress', onProgressUpdate);
panorama3.addEventListener('progress', onProgressUpdate);