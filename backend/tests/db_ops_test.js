const db_ops = require('/backend/db_ops');

test('Retrieves all transactions from db', () => {
    expect(db_ops.getAllTransactions().toBe("hahaha"))
});