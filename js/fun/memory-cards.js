(function(){
	
	var Memory = {

		init: function(cards){
			this.$game = $(".game");
			this.$modal = $(".modal");
			this.$overlay = $(".modal-overlay");
			this.$restartButton = $("button.restart");
			this.cardsArray = $.merge(cards, cards);
			this.shuffleCards(this.cardsArray);
			this.setup();
		},

		shuffleCards: function(cardsArray){
			this.$cards = $(this.shuffle(this.cardsArray));
		},

		setup: function(){
			this.html = this.buildHTML();
			this.$game.html(this.html);
			this.$memoryCards = $(".card");
			this.paused = false;
     	this.guess = null;
			this.binding();
		},

		binding: function(){
			this.$memoryCards.on("click", this.cardClicked);
			this.$restartButton.on("click", $.proxy(this.reset, this));
		},
		// kinda messy but hey
		cardClicked: function(){
			var _ = Memory;
			var $card = $(this);
			if(!_.paused && !$card.find(".inside").hasClass("matched") && !$card.find(".inside").hasClass("picked")){
				$card.find(".inside").addClass("picked");
				if(!_.guess){
					_.guess = $(this).attr("data-id");
				} else if(_.guess == $(this).attr("data-id") && !$(this).hasClass("picked")){
					$(".picked").addClass("matched");
					_.guess = null;
				} else {
					_.guess = null;
					_.paused = true;
					setTimeout(function(){
						$(".picked").removeClass("picked");
						Memory.paused = false;
					}, 600);
				}
				if($(".matched").length == $(".card").length){
					_.win();
				}
			}
		},

		win: function(){
			this.paused = true;
			setTimeout(function(){
				Memory.showModal();
				Memory.$game.fadeOut();
			}, 1000);
		},

		showModal: function(){
			this.$overlay.show();
			this.$modal.fadeIn("slow");
		},

		hideModal: function(){
			this.$overlay.hide();
			this.$modal.hide();
		},

		reset: function(){
			this.hideModal();
			this.shuffleCards(this.cardsArray);
			this.setup();
			this.$game.show("slow");
		},

		// Fisher--Yates Algorithm -- https://bost.ocks.org/mike/shuffle/
		shuffle: function(array){
			var counter = array.length, temp, index;
	   	// While there are elements in the array
	   	while (counter > 0) {
        	// Pick a random index
        	index = Math.floor(Math.random() * counter);
        	// Decrease counter by 1
        	counter--;
        	// And swap the last element with it
        	temp = array[counter];
        	array[counter] = array[index];
        	array[index] = temp;
	    	}
	    	return array;
		},

		buildHTML: function(){
			var frag = '';
			this.$cards.each(function(k, v){
				frag += '<div class="card" data-id="'+ v.id +'"><div class="inside">\
				<div class="front"><img src="'+ v.img +'"\
				alt="'+ v.name +'" /></div>\
				<div class="back"><img src="http://o84fll9yy.bkt.clouddn.com/fun/queen.svg"\
				alt="Codepen" /></div></div>\
				</div>';
			});
			return frag;
		}
	};

	var cards = [
		{
			name: "card1",
			img: "http://o84fll9yy.bkt.clouddn.com/fun/card1.JPG",
			id: 1,
		},
		{
			name: "card2",
			img: "http://o84fll9yy.bkt.clouddn.com/fun/card2.JPG",
			id: 2
		},
		{
			name: "card3",
			img: "http://o84fll9yy.bkt.clouddn.com/fun/card3.JPG",
			id: 3
		},
		{
			name: "card4",
			img: "http://o84fll9yy.bkt.clouddn.com/fun/card4.jpg",
			id: 4
		}, 
		{
			name: "card5",
			img: "http://o84fll9yy.bkt.clouddn.com/fun/card5.JPG",
			id: 5
		},
		{
			name: "card6",
			img: "http://o84fll9yy.bkt.clouddn.com/fun/card6.JPG",
			id: 6
		},
		{
			name: "card7",
			img: "http://o84fll9yy.bkt.clouddn.com/fun/card7.JPG",
			id: 7
		},
		{
			name: "card8",
			img: "http://o84fll9yy.bkt.clouddn.com/fun/card8.JPG",
			id: 8
		},
		{
			name: "card9",
			img: "http://o84fll9yy.bkt.clouddn.com/fun/card9.JPG",
			id: 9
		},
		{
			name: "card10",
			img: "http://o84fll9yy.bkt.clouddn.com/fun/card10.JPG",
			id: 10
		},
		{
			name: "card11",
			img: "http://o84fll9yy.bkt.clouddn.com/fun/card11.JPG",
			id: 11
		},
		{
			name: "card12",
			img: "http://o84fll9yy.bkt.clouddn.com/fun/card12.JPG",
			id: 12
		},
	];
    
	Memory.init(cards);


})();