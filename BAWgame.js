    var count = 0;

    function showMenu() {
        var container = document.getElementById('container');
        var startButton = document.getElementById('start');
        var resetButton = document.getElementById('reset');
        var courtVar = document.getElementById('count');
        var rankButton = document.getElementById('rank');
        var menuButton = document.getElementById('menu');
        container.style.visibility = "hidden";
        startButton.style.visibility = "visible";
        courtVar.style.visibility = "hidden";
        resetButton.style.visibility = "hidden";
        menuButton.style.visibility = "hidden";
        rankButton.style.visibility = "visible";
    }

    function reset() {
        image1.src = "White.jpg";
        image2.src = "Black.jpg";
        image3.src = "Black.jpg";
        image4.src = "Black.jpg";
        image5.src = "Black.jpg";
        image6.src = "Black.jpg";
        image7.src = "Black.jpg";
        image8.src = "Black.jpg";
        image9.src = "Black.jpg";
        count = 0;
        var courtVar = document.getElementById('count');
        courtVar.innerHTML = "Count: " + count;
    }

    function startGame() {
        var container = document.getElementById('container');
        var startButton = document.getElementById('start');
        var resetButton = document.getElementById('reset');
        var courtVar = document.getElementById('count');
        var rankButton = document.getElementById('rank');
        var menuButton = document.getElementById('menu');
        container.style.visibility = "visible";
        startButton.style.visibility = "hidden";
        courtVar.innerHTML = "Count: " + count;
        courtVar.style.visibility = "visible";
        resetButton.style.visibility = "visible";
        menuButton.style.visibility = "visible";
        rankButton.style.visibility = "hidden";
    }

    function changeImage() {
        var i = 0;
        for (i = 0; i < arguments.length; i++){
            var image = document.getElementById(arguments[i]);
            if (image.src.match("White.jpg")) {
                image.src = "Black.jpg";
            } else {
                image.src = "White.jpg";
            }
        }
        checkWin();
    }
    function checkWin() {
    	var image1 = document.getElementById('image1');
    	var image2 = document.getElementById('image2');
    	var image3 = document.getElementById('image3');
    	var image4 = document.getElementById('image4');
    	var image5 = document.getElementById('image5');
    	var image6 = document.getElementById('image6');
    	var image7 = document.getElementById('image7');
    	var image8 = document.getElementById('image8');
    	var image9 = document.getElementById('image9');
    	if (image1.src.match("White.jpg") && image2.src.match("White.jpg") && 
    		image3.src.match("White.jpg") && image4.src.match("White.jpg") && 
    		image5.src.match("White.jpg") && image6.src.match("White.jpg") && 
    		image7.src.match("White.jpg") && image8.src.match("White.jpg") && 
    		image9.src.match("White.jpg")) {
    		alert("Fuck!");
    		reset();
    	} else {
            count = count + 1;
            var courtVar = document.getElementById('count');
            courtVar.innerHTML = "Count: " + count;
        }
    }
