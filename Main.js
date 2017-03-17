var IsDebug = false;
var Sage;
Util.Start(1,Setup);
Util.Using("Drawing");


function Setup() {
    MyCan = document.getElementById('MyCanvas');
    if(IsDebug)console.log(self);
    if(IsDebug)console.info("Initializing UtilsJs Draw2D");
    Util.Drawing.InitDraw2d(MyCan);
    if(IsDebug)console.info("Done!");
    if(IsDebug)console.info("Setting Up Canvas");
    MyCan.C2D.canvas.height = window.innerHeight;
    MyCan.C2D.canvas.width = window.innerWidth;
    if(IsDebug)console.info("Done!");
    if(IsDebug)console.info("Setting Up UtilsJs Draw2D");
    MyCan.color("#df4b26");
    if(IsDebug)console.info("Done!");
    if(IsDebug)console.info("Starting SAGE");
    Sage = new SageEngine(MyCan);
}
