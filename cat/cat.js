function switchOn() {
    document.getElementById('bulbImage').src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById('catImage').src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById('switchStatus').textContent="Switched On"
    document.getElementById('offColor').style.backgroundColor='grey';
    document.getElementById('onColor').style.backgroundColor='green';
}

function switchOff() {
    document.getElementById('bulbImage').src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById('catImage').src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById('switchStatus').textContent="Switched Off"
    document.getElementById('offColor').style.backgroundColor='red';
    document.getElementById('onColor').style.backgroundColor='gray';
    
}