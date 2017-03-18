 function SageEngine(Canvas){
   this.FOV = 60;
   this.Polygons = new Array();

   //Converts 3D Vector to 2D one.
   this.C3D2D = function(V3){
     
   };

   this.SortOnDepth=function(PolygonList){

   };

   this.Tick = function(){

   };
}

SE = {}; //SageEngine types
SE.V3D = function(_x,_y,_z){
  this.x = _x;
  this.y = _y;
  this.z = _z;
};
SE.V2D = function(_x,_y){
  this.x = _x;
  this.y = _y;
};
SE.Polygon = function(){
  this.Vertices = new Array();
  this.Faces = new Array();
  this.Location = new SE.V3D(0,0,0);
};
SE.Face = function (){
  this.VertexList = Array.prototype.slice.call(arguments);
};

//Test Cube
var TP = new SE.Polygon();
TP.Vertices.push(new SE.V3D(-1,1,-1));
TP.Vertices.push(new SE.V3D(1,1,-1));
TP.Vertices.push(new SE.V3D(1,-1,-1));
TP.Vertices.push(new SE.V3D(-1,-1,-1));
TP.Vertices.push(new SE.V3D(-1,1,1));
TP.Vertices.push(new SE.V3D(1,1,1));
TP.Vertices.push(new SE.V3D(1,-1,1));
TP.Vertices.push(new SE.V3D(-1,-1,1));
TP.Faces.push(new SE.Face(0,1,2,3));
TP.Faces.push(new SE.Face(1,5,6,2));
TP.Faces.push(new SE.Face(5,4,7,6));
TP.Faces.push(new SE.Face(4,0,3,7));
TP.Faces.push(new SE.Face(0,4,5,1));
TP.Faces.push(new SE.Face(3,2,6,7));
TP.Location.x = 1; //TP.Location = new SE.V3D(1,0,0);
