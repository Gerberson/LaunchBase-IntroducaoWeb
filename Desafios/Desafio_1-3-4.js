const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
}

const createTransaction = function(type, value) {
    const transaction = { type, value }
    user.transactions.push(transaction)
    user.balance = transaction.type === 'credit' ? user.balance + transaction.value : user.balance - transaction.value
}

const getHigherTransactionByType = function (operation) {
    const higherTransation = { type: '', value: 0 }
    for(let transaction of user.transactions) {
        if (transaction.value > higherTransation.value && transaction.type ===  operation)  {
            higherTransation.value = transaction.value
            higherTransation.type = transaction.type
        }
    }

    console.log(higherTransation)
}

const getAverageTransactionValue = function () {
    let sum = 0
    for (let transaction of user.transactions) {
        sum += transaction.value
    }

    const media = sum / user.transactions.length
    console.log(media)
}

const getTransactionsCount = function () {
    const transactionsCount = { credit: 0, debit: 0 }
    for (let transaction of user.transactions) {

        if (transaction.type === 'credit') {
            transactionsCount.credit++
        }

        if (transaction.type === 'debit') {
            transactionsCount.debit++
        }
    }

    console.log(transactionsCount)
}

createTransaction('credit', 50)
createTransaction('credit', 120)
createTransaction('debit', 80)
createTransaction('debit', 30)

getHigherTransactionByType('credit')
getHigherTransactionByType('debit')

getAverageTransactionValue()

getTransactionsCount()