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
        elif operation == "TOP_ACTIVITY":
            result = bank_system.top_activity(timestamp, int(account_id))
            results.append(result)
    return results

class BankSystem:
    def __init__(self):
        self.accounts = {}
    
    def create_account(self, timestamp, account_id):
        if account_id in self.accounts:
            return "false"
        self.accounts[account_id] = (0, [])
        return "true"
    
    def deposit(self, timestamp, account_id, amount):
        if account_id not in self.accounts:
            return ""
        balance, activities = self.accounts[account_id]
        self.accounts[account_id] = (balance + amount, activities + [(timestamp, "DEPOSIT", amount)])
        return str(self.accounts[account_id][0])
    
    def pay(self, timestamp, account_id, amount):
        if account_id not in self.accounts or self.accounts[account_id][0] < amount:
            return ""
        balance, activities = self.accounts[account_id]
        self.accounts[account_id] = (balance - amount, activities + [(timestamp, "PAY", amount)])
        return str(self.accounts[account_id][0])
    
    def top_activity(self, timestamp, n):
        sorted_accounts = sorted(self.accounts.items(), key=lambda x: (-sum(activity[2] for activity in x[1][1]), x[0]))
        top_n_accounts = sorted_accounts[:n]
        formatted_accounts = ", ".join(f"{account}({sum(activity[2] for activity in activities)})" for account, (_, activities) in top_n_accounts)
        return formatted_accounts
