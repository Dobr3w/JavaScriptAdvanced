function tickets(ticketsData, criteria) {
    let result = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    for (let el of ticketsData) {
        let [destination, price, status] = el.split("|");
        let myTicket = new Ticket(destination, price, status);
        result.push(myTicket);
    }

    function sortTickets(ticketArr, criteria) {
        if (criteria === 'price') {

            return ticketArr.sort((a, b) => a[criteria] - b[criteria]);
        } else {

            return ticketArr.sort((a, b) => a[criteria].localeCompare(b[criteria]));
        }
    }

    return sortTickets(result, criteria);
}

let res = tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'], 'destination');

console.log(res);