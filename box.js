class Box
  {
    constructor(){
      this.x=100;
      this.y=200;
      this.width=40;
      this.height=40;
    }
    
    show(){
      rect(this.x, this.y,this.width, this.height);
    }

    set_speed(v){
        this.x=this.x + v;
    }

    set_width(w){
        this.width=w;
    }
  }

  
