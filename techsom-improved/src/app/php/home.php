<html>
<head>
   <link rel="stylesheet" type="text/css" href="style.css">
   <script>
  var db, isfullscreen = false;
    function toggleFullScreen(){
    db = document.body;
    if(isfullscreen == false){
        if(db.requestFullScreen){
            db.requestFullScreen();
        } else if(db.webkitRequestFullscreen){
            db.webkitRequestFullscreen();
        } else if(db.mozRequestFullScreen){
            db.mozRequestFullScreen();
        } else if(db.msRequestFullscreen){
            db.msRequestFullscreen();
        }
        isfullscreen = true;
        main.style.width = window.screen.width+"px";
        main.style.height = window.screen.height+"px";
    } else {
        if(document.cancelFullScreen){
            document.cancelFullScreen();
        } else if(document.exitFullScreen){
            document.exitFullScreen();
        } else if(document.mozCancelFullScreen){
            document.mozCancelFullScreen();
        } else if(document.webkitCancelFullScreen){
            document.webkitCancelFullScreen();
        } else if(document.msExitFullscreen){
            document.msExitFullscreen();
        }
        isfullscreen = false;
        main.style.width = "100%";
        main.style.height = "auto";
    }
}
    
    </script>
</head>
<body>
    <div id="main">
   	<div id="buttons">
    <button id="button">First</button>
    <button id="button">Second</button>
    <button id="button">Third</button>
    <button id="button">Fourth</button>
    <button id="button">Fifth</button>
    <button id="button">Sixth</button>
    <button id="button">Seventh</button>
    <button id="button">Eighth</button>
    <button id="button">Nineth</button>
    <button id="button">Tenth</button><br/>
    </div>
    <div id="buttons_left">
    <button id="button">First</button><br/>
    <br/>
    <button id="button">Second</button><br/>
    <br/>
    <button id="button">Third</button><br/>
    <br/>
    <button id="button">Fourth</button><br/>
    <br/>
    <button id="button">Fifth</button><br/>
    <br/>
    <button id="button">Sixth</button><br/>
    <br/>
    <button id="button">Seventh</button><br/>
    <br/>
    <button id="button">Eighth</button><br/>
    <br/>
    <button id="button">Nineth</button><br/>
    <br/>
    <button id="button">Tenth</button><br/>
    <button onclick="toggleFullScreen()">Full screen</button>
    </div>
    <div id="page">
        <p>This is the page</p> 
    </div>
    </div>
</body>
</html>