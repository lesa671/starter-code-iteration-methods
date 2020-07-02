// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

const main = document.querySelector('main')


function printKata(kataNumber, object) {
    const detailsElement = document.createElement('details')
    main.append(detailsElement)

    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)

    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

const isActiveNow = users.filter(user => user.isActive === true)
printKata(1, isActiveNow)

const emailAddress = users.map(user => user.email)
printKata(2, emailAddress)

const companyNameOvation = users.some(user => user.company === 'OVATION')
printKata(3, companyNameOvation)

const isOver38 = users.find(user => user.age > 38)
printKata(4, isOver38)

const isOver38AndActive = users
    .filter(user => user.age > 38)
    .find(user => user.isActive === true)
printKata(5, isOver38AndActive)

const accountBalanceZenco = users
    .filter(user => user.company === 'ZENCO')
    .map(user => user.balance)
printKata(6, accountBalanceZenco)

const ageOfUserWithTagFugiat = users
    .filter(user => user.tags.includes('fugiat'))
    .map(user => user.age)
printKata(7, ageOfUserWithTagFugiat)
