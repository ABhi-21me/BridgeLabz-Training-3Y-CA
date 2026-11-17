class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName;
    this.seatNo = seatNo;
    this.price = price;
  }
}

MovieTicket.prototype.printTicket = function() {
  console.log("Movie:", this.movieName);
  console.log("Seat:", this.seatNo);
  console.log("Ticket price: Rs.", this.price);
};

class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, convenienceFee) {
    super(movieName, seatNo, price);
    this.convenienceFee = convenienceFee;
  }

  getTotalAmount() {
    return this.price + this.convenienceFee;
  }
}

let ticket = new OnlineTicket("Avengers", "A12", 250, 30);

ticket.printTicket();
console.log("Convenience fee: Rs.", ticket.convenienceFee);
console.log("Total amount: Rs.", ticket.getTotalAmount());
