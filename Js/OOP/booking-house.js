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
            return this.address.newAddress()+ ", "+ "sum of all bets: " + this.getSumOfBets()+this.getListOfPlayers()
        }
        this.getSumOfBets= function () {
            var sum=0;
            for (var i=0;i<this.players.length;i++){
                 var player=this.players[i]
                sum+=player.betAmount;
            }
            return sum;
        }
        this.getListOfPlayers=function(){
            var playerList="";
            for(var i=0;i<this.players.length; i++){
                var player=this.players[i]
                playerList+='\n\t'+ player.getBetInfo()
            }
            return playerList;

        }
} 
        function BettingHouse (competition){
            this.competition=competition;
            this.listOfBettingPlaces=[]
            this.getTotalNumberOfPlayers=function(){
                var total=0;
                //console.log(this.listOfBettingPlaces)
                 this.listOfBettingPlaces.forEach(function(place){
                     total+=place.players.length;
                 });
                     return total;
                };
            this.addBettingPlace=function(bettingPlace){
                this.listOfBettingPlaces[this.listOfBettingPlaces.length] = bettingPlace
            };
                this.getNumberOfBetsByCountry = function (countryNameToCheck){
                 var total=0;
                 for (var i=0;i<this.listOfBettingPlaces.length;i++){
                    var place=this.listOfBettingPlaces[i];

                    for(var j=0;j<place.players.length;j++){
                        var player=place.players[j]
                        var currentCountryName=player.country.name;
                        if(currentCountryName === countryNameToCheck){
                            total++;
                        }
                    }
                } 
                return total;
             };
             //pitati ivana 
            
       
       
    }
   
    var serbia = new Country('Serbia',5,CONTINENT.EUROPE); 
    var brasil = new Country('Brasil',5,CONTINENT.SOUTH_AMERIKA);

    var address = new Address ('Nemanjina 4', 11000,'Beograd', serbia);
    
    var nikola= new Person("Nikola","Draganic",{day: 25,month: 6,year: 1993});
    
    var player1=new Player(nikola,100,serbia,address);
    var player2=new Player(nikola,400,serbia,address);
    var player3=new Player(nikola,100,serbia,address);

    var bettingPlace=new BettingPlace(address);
    bettingPlace.addPlayer(player1);
    bettingPlace.addPlayer(player2);
    bettingPlace.addPlayer(player3);


    var bettingHouse= new BettingHouse('Football World Cup Winner')
  
    

    bettingHouse.addBettingPlace(bettingPlace)

    bettingHouse.getTotalNumberOfPlayers();
    console.log(bettingHouse.getTotalNumberOfPlayers())
    //console.log(bettingPlace.printFormatedInfo());

    
})();