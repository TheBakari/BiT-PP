// 1. Create an object that represents your favourite coffee. Please include coffee name,
// strength, flavour, milk, sugar, … everything you like!

var coffee ={
    name: "Domaca",
    strength: 4,
    flavor: 'vanila',
    milk: false,
    sugar: 1,
    getCoffeeStrenght: function(){
        var strength="";
        switch(coffee.strength){
            case 1:
                strength = "extra light";
                break;
            case 2:
                strength = " light";
                break;
            case 3:
                strength = "medium";
                break;
            case 4:
                strength = "strong ";
                break;
            case 5:
                strength = "extra strong";
                break;
            default:
                strength="medium";
        }
        return strength;
    },
    getMilkInfo: function(){
        
        return coffee.milk ? 'Whit Milk' : "Whitout milk";
    }
};

//console.log(coffee);// Pozivanje celog objekta

console.log('I like to drink '+ coffee.getCoffeeStrenght() +",  "+coffee.name+ ' coffee '+ coffee.getMilkInfo()+'.')

// methoda nekog objekta
//