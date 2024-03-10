def solution(queries):
    bank_system = BankSystem()
    results = []

    for query in queries:
        operation = query[0]
        timestamp = query[1]
        account_id = query[2]

        if operation == "CREATE_ACCOUNT":
            result = bank_system.create_account(timestamp, account_id)
            results.append(result)
        elif operation == "DEPOSIT":
            amount = int(query[3])
            result = bank_system.deposit(timestamp, account_id, amount)
            results.append(result)
        elif operation == "PAY":
            if len(query) < 4 or query[3] == "":
                results.append("")
                continue
            amount = int(query[3])
            result = bank_system.pay(timestamp, account_id, amount)
            results.append(result)
    return results


class BankSystem:
    def __init__(self):
        self.accounts = {}

    def create_account(self, timestamp, account_id):
        if account_id in self.accounts:
            return "false"
        self.accounts[account_id] = 0
        return "true"

    def deposit(self, timestamp, account_id, amount):
        if account_id not in self.accounts:
            return ""
        self.accounts[account_id] += amount
        return str(self.accounts[account_id])

    def pay(self, timestamp, account_id, amount):
        if account_id not in self.accounts or self.accounts[account_id] < amount:
            return ""
        self.accounts[account_id] -= amount
        return str(self.accounts[account_id])


queries = [
    ["CREATE_ACCOUNT", "1", "account1"],
    ["CREATE_ACCOUNT", "2", "account2"],
    ["DEPOSIT", "3", "account1", "2000"],
    ["DEPOSIT", "4", "account2", "1000"],
    ["PAY", "5", "account1", "500"],
    ["PAY", "6", "account1", "1000"],
    ["PAY", "7", "account2", "1000"],
]

print(solution(queries))  # ["true", "true", "2000", "1000", "1500", "500", "0"]
