'use strict';

(function (){
    var CONTINENTS = {
        ASIA: 'AS',
        EUROPE: 'EU',
        NORTH_AMERICA: 'NA',
        SOUTH_AMERICA: 'SA',
        AUSTRALIA: 'AU',
        AFRICA: 'AF',
    };

    function getFormattedCountryName(){
        var formatted = this.name[0];

        for (var i=1; i<this.name.length;i++){
            var current = this.name[i];

            switch (current) {
                case 'a':
                case 'e':
                case 'i':
                case 'o':
                case 'u':
                case 'A':
                case 'E':
                case 'I':
                case 'O':
                case 'U':
                    continue;
            }
            formatted += current;
            break;
        }

        return formatted;
    }


    function Country(name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
        this.getFormatedName = getFormattedCountryName;
    }


    function Date (day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
        this.getFormatedDate = function() {
            return this.day + '.' + this.month + '.' + this.year + '.';
        };
    }

    function Person (name, surname, dateOfBirth) {
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = dateOfBirth;
        this.getInfo = function () {
            return (
                this.name +
                ' ' +
                this.surname +
                ', ' +
                this.dateOfBirth.getFormatedDate()
            );
        };
        this.getAge = function () {
            return 2021 - this.dateOfBirth.year + ' years';
        };

    }

    function Player (person, betAmount, country) {
            this.person = person;
            this.betAmount = betAmount;
            this.country = country;
            this.getBetInfo = function () {
                return (
                    this.country.getFormatedName() +
                    ',' +
                    this.betAmount * this.country.odds +
                    'eur, ' + 
                    this.person.name + 
                    ' ' + 
                    this.person.surname +
                    ' ' +
                    this.person.getAge()
                );
            };
        }

    function Address(country,city,postalCode,street,number){
        this.country=country;
        this.city=city;
        this.postalCode=postalCode;
        this.street=street;
        this.number=number;
        this.getFormatedAddress=function(){
            return(this.street+" "+this.number+", "+this.postalCode+" "+this.city+", "+this.getFormatedCountry()
            );
        };
        this.getFormatedCountry=getFormattedCountryName;
    }

    


    function BettingPlace(address){
        this.players=[]
        this.address=address;
        this.addPlayer=function(player){
            this.players[this.players.length]=player;
        };
        this.getSumofBets= function(){
            var sum=0;
            for(var i=0;i<this.players.length;i++){
                var player=this.players[i];
                sum +=player.betAmount;
            }
            return sum;
        };
        this.getListOfPlayers=function(){
            var playersList="";
            for (var i=0;i<this.players.length;i++){
                var player=this.players[i];
                playersList+="\n\t"+player.getBetInfo();
            }
            return playersList
        }
        this.printFormatedInfo=function(){
            return(this.address.street+ ", " + this.address.postalCode+ " " +this.address.city+ ", sum of all bets: "+this.getSumofBets()+this.getListOfPlayers()
            );
        };
    }

    function BettingHouse(competition){
        this.competition=competition;
        this.listOfBettingPlaces=[];
        this.getTotalNumberOfPlayers=function(){
            var total=0;
            this.listOfBettingPlaces.forEach(function(place){
                total+=place.ListOfPlayers.length;
            });
            return total;
        };
        this.addBettingPlace=function(bettingPlace){
            this.listOfBettingPlaces[this.listOfBettingPlaces.length]=bettingPlace;
        };
        this.getNumberOfBetsByCountry=function(countryNameToCheck){
            var total=0;
            for(var i=0;i<this.listOfBettingPlaces.length;i++){
                var place= this.listOfBettingPlaces[i];
                for(var j=0; j<place.players.length;j++){
                    var player=place.players[j];
                    var currentCountryName=player.country.name;
                if(currentCountryName===countryNameToCheck){
                    total++;
                    }
                }
            }
            return total;
        }
      this.getInfo= function(){
          var numOfBettingPlaces=this.listOfBettingPlaces.length;
          var bettingPlacesList="";
          var totalNumberOfBets=0;
          for (var i=0;i<this.listOfBettingPlaces.length;i++){
              var place=this.listOfBettingPlaces[i];
              totalNumberOfBets+=place.players.length;
              bettingPlacesList+=" "+place.printFormatedInfo() +"\n";
          }
          return(this.competition+", "+numOfBettingPlaces+" betting places, "+totalNumberOfBets+" bets\n"+bettingPlacesList+"There are  "+this.getNumberOfBetsByCountry("Serbia")+" bets on Serbia");
      };

    };

    function createPlayer(name,surname,day,month,year,betAmount, country){
        var date= new Date(day,month,year);
        var person=new Person(name,surname,date);

        return new Player(person,betAmount,country)
    };
    function createBettingPlace(country,city,postalCode,street,number){
        var address=new Address(country,city,postalCode,street,number)
        return new BettingPlace(address);
    }
    var serbia=new Country("Serbia",2,CONTINENTS.EUROPE);
    var brasil=new Country("Brasil",5,CONTINENTS.SOUTH_AMERICA);

    var player1=createPlayer("Nikola","Draganic",8,2,1991,100,serbia)
    var player2=createPlayer("Diego","Jose",3,3,1963,300,brasil)
    var player3=createPlayer("Milos","Petrovic",3,11,1971,55,serbia)
    var player4=createPlayer("Srboljub","Krstic",9,1,1984,500,serbia)

    var bettingPlace1= createBettingPlace("Serbia","Belgrade",11000,"Nemanjina",4);

    var bettingPlace2= createBettingPlace("Serbia","Belgrade",11000,"Kneza Milosa",25);

    var bettingHouse= new BettingHouse("Football Wolrd Cup Winner");

    bettingPlace1.addPlayer(player1)
    bettingPlace2.addPlayer(player2)
    bettingPlace1.addPlayer(player3)
    bettingPlace2.addPlayer(player4)

    bettingHouse.addBettingPlace(bettingPlace1)
    bettingHouse.addBettingPlace(bettingPlace2)

    console.log(bettingHouse.getInfo())

    
})();