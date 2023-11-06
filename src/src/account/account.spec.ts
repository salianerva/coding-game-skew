import { Account } from "./account"
import { mockAccountFactory } from './account.mock'

describe('>>> Accounts', () => {
  let account: Account

  beforeEach(() => {
     account = mockAccountFactory()
  })

  it('should load all account data', () => {
    account.loadAccount("1012376")
    //console.log(account.pets)
    account.addDeposit("Arkadius_Vastel", 4)
    expect(account.safe_deposit.get("Arkadius_Vastel")).toEqual(5)
    console.log(account.safe_deposit)
  })
})
