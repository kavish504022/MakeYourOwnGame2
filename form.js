class Form {

    constructor(){
       this.level1 = createButton('level1');
       this.level2 = createButton('level2');
       this.level3 = createButton('level3');
       this.level4 = createButton('level4');
       this.level5 = createButton('level5');

       this.optionABtn = createButton(A[count])
       this.optionBBtn = createButton(B[count])
       this.optionCBtn = createButton(C[count])
       this.optionDBtn = createButton(D[count])      
    }

    hide(){
        this.level1.hide();
        this.level2.hide();
        this.level3.hide();
        this.level4.hide();
        this.level5.hide();
    }

   display(){
    this.level1.position(200,600);
    this.level2.position(300,500);
    this.level3.position(400,400);
    this.level4.position(500,300);
    this.level5.position(600,200);

    this.level1.mousePressed(()=>{
        console.log("level1 entered!");
        this.hide();
        gameState = 1;
        this.optionABtn.position(200,300);
        this.optionBBtn.position(400,300);
        this.optionCBtn.position(200,400);
        this.optionDBtn.position(400,400);
      });    

      this.optionABtn.mousePressed(()=>{
        console.log("option a pressed");
        textSize(30);
        fill("Red");
        if(Solution[count]=="A")   text("That's right!!",400,500);
      })

        this.level2.mousePressed(()=>{
        console.log("level2 entered!");
      });
      
        this.level3.mousePressed(()=>{
        console.log("level3 entered!");
      });

        this.level4.mousePressed(()=>{
        console.log("level4 entered!");
      });

        this.level5.mousePressed(()=>{
        console.log("level5 entered!");
      });
   }

   
}