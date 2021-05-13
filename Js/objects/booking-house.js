'use strict';
(function(){
    var CONTINENT={
        ASIA:"AS",
        EUROPE:"EU",
        NORTH_AMERICA:"NA",
        SOUTH_AMERIKA:"SA",
        AUSTRALIA:"AU",
        AFRIKA:'AF'
    };

    function Country(name,odds,continent){
        this.name= name;
        this.odds= odds;
        this.continent= continent;
        this.getFormatedName= function(){
            var formatter=this.name[0];

            for(var i=1;i<this.name.length;i++){
                var current=this.name[i]

                switch(current){
                    case 'a':
                    case 'e':
                    case 'i':
                    case 'o':
                    case 'u':
                        continue;
                }
                formatter+=current;
                break;
            }
            return formatter;
        }
    }

     function Person(name,surname,dateOfBirth){
         this.name=name;
         this.surname=surname;
         this.dateOfBirth=dateOfBirth
         this.getInfo=function(){
             return this.name + " " + this.surname + ", " +  (2021 - this.dateOfBirth.year)
         }
         
     }
     function Address (street,postalCode,city,country){
         this.street = street;
         this.postalCode = postalCode;
         this.city=city;
         this.country=country;
         this.getAddress = function(){
             return this.street + ", " + this.postalCode + ", " + this.city+ ", "+ this.country.getFormatedName();
         }
         this.newAddress=function () {
             var noNumber=this.street.split(" ")
             return noNumber[0] + ", " +this.postalCode+" "+ this.city
         }
     }
    
     function Player (person,betAmount,country,address){
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;
        this.address = address;
        this.getBetInfo=function(){
            return this.country.getFormatedName()+", " + (this.betAmount* this.country.odds) + " eur, "+ this.person.getInfo()+ " Years" +  " " + this.address.getAddress(); 
        }
        this.amountBet=function () {
         var amount=(this.betAmount* this.country.odds)
            return amount
        }
  }
  //konstrukotr fje
    function BettingPlace(address) {
        this.players=[];
        this.address=address;
        this.addPlayer=function (player) {
            this.players[this.players.length]=player
        }
        this.printFormatedInfo=function () {
            return this.address.newAddress()+ ", "+ "sum of all bets: " + this.getSumOfBets()
        }
        this.getSumOfBets= function () {
            var sum=0;
            for (var i=0;i<this.players.length;i++){
                 var player=this.players[i]
                sum+=player.betAmount;
            }
            return sum;
        }
        
    }
   
    var serbia = new Country('Serbia',5,CONTINENT.EUROPE);

    var address = new Address ('Nemanjina 4', 11000,'Beograd', serbia);
    
    var nikola= new Person("Nikola","Draganic",{day: 25,month: 6,year: 1993});
    
    var player1=new Player(nikola,100,serbia,address);
    var player2=new Player(nikola,100,serbia,address);
    var player3=new Player(nikola,100,serbia,address);

    var bettingPlace=new BettingPlace(address);
    bettingPlace.addPlayer(player1);
    bettingPlace.addPlayer(player2);
    bettingPlace.addPlayer(player3);

    console.log(bettingPlace.printFormatedInfo());

    
})();