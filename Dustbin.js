class Dustbin {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.x=x;
      this.y=y;

      //bottom
      width=200;
      height=20;
      //x=1000,y=680
      this.bottombody = Bodies.rectangle(x-150,y,width,height,options);      
      this.width = width;
      this.height = height;
      World.add(world, this.bottombody);

      //leftside 
      this.x2=this.x-150-110;
      this.y2=this.y-80
      this.height2=180;
      this.width2=20;
      this.leftbody = Bodies.rectangle(this.x2, this.y2, this.width2,this.height2,options);
      World.add(world, this.leftbody);

      this.x3=this.x-40
      this.y3= this.y-80
      this.height3=180;
      this.width3=20;
      this.rightbody= Bodies.rectangle(this.x3, this.y3, this.width3, this.height3, options)
      World.add(world, this.rightbody);
    }
    display(){
      
      rectMode(CENTER);
      fill("white");
      rect(this.bottombody.position.x, this.bottombody.position.y, this.width, this.height);
      rect(this.leftbody.position.x, this.leftbody.position.y, this.width2, this.height2);
      rect(this.rightbody.position.x, this.rightbody.position.y, this.width3, this.height3);
    }
  };
  