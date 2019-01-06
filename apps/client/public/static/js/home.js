function getEvents() {
    return fetch('http://localhost:8080/api/events')
        .then(response => response.json())
}

const eventListEl = document.querySelector('#event-list')

/**
 * Membuat card element
 * @param {object} data 
 * @param {string} data.title 
 * @param {string} data.date 
 */
function Card(data) {
    this.title = data.title;
    this.date = data.date;
    this.el = null;

    this.build();
}

/**
 * Membuat html element
 */
Card.prototype.build = function () {
    const card = document.createElement('div');

    const title = this._createTitle(this.title);
    const date = this._createDate(this.date);

    card.append(title);
    card.append(date);

    this.el = card;
}

Card.prototype._createTitle = function createTitle(title) {
    const h3 = document.createElement('h3');

    h3.innerText = title

    return h3;
}

Card.prototype._createDate = function createDate(date) {
    const span = document.createElement('span');

    span.innerText = date

    return span;
}

/**
 * @param {string|HTMLElement} target
 */
Card.prototype.mount = function (target) {
    let parent = null
    if (typeof target === 'string') {
        parent = document.querySelector(target);
    } else if (target instanceof HTMLElement) {
        parent = target
    }

    parent.append(this.el);
}

getEvents()
    .then((data) => {
        const {
            events
        } = data;

        events.forEach((event) => {
            const card = new Card(event);

            card.mount(eventListEl)
        })
    })