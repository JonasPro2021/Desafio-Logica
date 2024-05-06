let xp = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]
let heroi = "Dio"
nivel = 11000
let contador = xp

do{

    if(nivel <= 1000){
        console.log(xp)
        console.log("XP = " + nivel)
        console.log("O Herói de nome " + heroi + " está no nivel de " + xp[0]);
    }else if(nivel <=2000){
        console.log(xp)
        console.log("XP = " + nivel)
        console.log("O Herói de nome " + heroi + " está no nivel de " + xp[1]);
        
    }else if(nivel <=5000){
        console.log(xp)
        console.log("XP = " + nivel)
        console.log("O Herói de nome " + heroi + " está no nivel de " + xp[2]);
        
    }else if(nivel <=7000){
    console.log(xp)
    console.log("XP = " + nivel)
    console.log("O Herói de nome " + heroi + " está no nivel de " + xp[3]);
    
    }else if(nivel <=8000){
        console.log(xp)
        console.log("XP = " + nivel)
        console.log("O Herói de nome " + heroi + " está no nivel de " + xp[4]);
        
    }else if(nivel <=9000){
        console.log(xp)
        console.log("XP = " + nivel)
        console.log("O Herói de nome " + heroi + " está no nivel de " + xp[5]);
        
    }else if(nivel <=10000){
        console.log(xp)
        console.log("XP = " + nivel)
        console.log("O Herói de nome " + heroi + " está no nivel de " + xp[6]);
        
    }else{
        console.log(xp)
        console.log("XP = " + nivel)
        console.log("O Herói de nome " + heroi + " está no nivel de " + xp[7]);
        
    }
    
    contador++
}while(contador < 11.001)


