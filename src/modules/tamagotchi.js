export class Tamagochi {
  #Hunger;
  #Happines;
  #time = 0;
  #running = false;
  #intervalID;
  #poopmeter= 0;

  happyBtn = document.getElementById("happinesBtn");
  hungerBtn = document.getElementById("hungerBtn");


  constructor(name,type) {
    this.name =name;
    this.type = type;
  }
  start() {
    this.#Hunger = 5;
    this.#Happines = 5;
    document.getElementById("hunger").innerText = this.#Hunger;
    document.getElementById("happines").innerText = this.#Happines;
    this.#time = 0;
    document.querySelector("p").innerText = this.#time;
    this.#intervalID = setInterval(this.#update.bind(this), 2000);
    this.#running = true;
  }
  isRunning() {
    return this.#running;
  }

  stop() {
    clearInterval(this.#intervalID);
    this.#running = false;
  }

  #update() {
    this.#time++;
    document.querySelector("p").innerText = this.#time;

    if (this.#Hunger >= 10) {
      alert("its dead Sorry");
      this.happyBtn.disabled = true;
      this.hungerBtn.disabled = true;
      this.stop();
    } else if (this.#Happines <= 0) {
      this.happyBtn.disabled = true;
      this.hungerBtn.disabled = true;
      alert("its dead sorry");
      this.stop();
    } else {
      this.#Happines--;
      this.#Hunger++;
      document.getElementById("hunger").innerText = this.#Hunger;
      document.getElementById("happines").innerText = this.#Happines;
    }
  }
  feed() {
    if(this.#poopmeter == 4){
      
      const image = document.createElement("img");
      image.style.width = "100px";
      image.style.height = "150px";
      
      const poope = document.getElementById("poop")
      let poop = new URL("../img/poop.png", import.meta.url);
      image.src =poop.href;
      poope.appendChild(image)
      if(this.#Hunger > 0){
        this.#Hunger--;

      }
    

      
      this.#poopmeter = 0;
      document.getElementById("hunger").innerText = this.#Hunger;

    }
    else if(this.#Hunger > 0){
      this.#Hunger--;
      this.#poopmeter++;
      document.getElementById("hunger").innerText = this.#Hunger;

    }
    else{
      console.log("overfeed");
      if(this.#Happines <10){
        this.#Happines--;
      }
       
       this.#poopmeter++;
       document.getElementById("happines").innerText = this.#Happines;
      
    }
    
  }
  giveLove() {
    if(this.#Happines < 10){
      this.#Happines++; 

    }
    else{
      if(this.#Hunger <10){
        this.#Hunger++;

      }
      

    }
    document.getElementById("hunger").innerText = this.#Hunger;
    document.getElementById("happines").innerText = this.#Happines;
  }

  whattype(){
    if(this.type == "air"){
      return this.dragonType();

    }
    else if(this.type == "earth"){
      return this.EarthType();

    }
    else{ 
       return this.WaterType();

    }
  }
  dragonType() {
    var imgUrlDragon = new Array();
    imgUrlDragon[0] = new URL("../img/dragon/dragon.gif", import.meta.url);
    imgUrlDragon[1] = new URL("../img/dragon/pixelDragon.gif", import.meta.url);
    imgUrlDragon[2] = new URL(
      "../img/dragon/chineseDragongif.gif",
      import.meta.url
    );

    var number = Math.floor(Math.random() * imgUrlDragon.length);
    return imgUrlDragon[number].href;
  }
  EarthType() {
    var imgUrl = new Array();
    imgUrl[0] = new URL("../img/dog/scheferDog.gif", import.meta.url);
    imgUrl[1] = new URL("../img/dog/Doge.gif", import.meta.url);
    imgUrl[2] = new URL(
      "../img/dog/Dog3.gif",
      import.meta.url
    );
    imgUrl[3] = new URL("../img/dog/ShitzuDog.gif", import.meta.url);

    var number = Math.floor(Math.random() * imgUrl.length);
    return imgUrl[number].href;
  }
  WaterType() {
    var imgUrl = new Array();
    imgUrl[0] = new URL("../img/water/fish.gif", import.meta.url);
    imgUrl[1] = new URL("../img/water/valros.gif", import.meta.url);
    imgUrl[2] = new URL(
      "../img/water/whale.gif",
      import.meta.url
    );
    

    var number = Math.floor(Math.random() * imgUrl.length);
    return imgUrl[number].href;
  }
}
