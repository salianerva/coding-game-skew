import { AccountManager } from "./accountmanager"
import { mockAccountManagerFactory } from './accountmanager.mock'

describe('>>> Account Manager', () => {

  let manager: AccountManager

  beforeEach(() => {
    manager = mockAccountManagerFactory()
  })

  it('should load, modify, and write account data', () => {
    manager.loadAccount("1012376")
    console.log(manager.getAccount("1012376")?.pets)
    console.log(manager.getAccount("1012376")?.inventory)
    console.log(manager.getAccount("1012376")?.safe_deposit)

    let acc1 = manager.getAccount("1012376")
    
    manager.copyAccount("1012376", "6676")
    let acc2 = manager.getAccount("6676")
    manager.getAccount("1012376")?.pets.add("420")
    acc2?.addDeposit("arkhaon rare collectible: Antioch", 7)
    acc2?.addPet("4676")
    acc2?.addPet("8989")

    manager.getAccount("1012376")?.addDeposit("Arkadius_Vastel", 4)
    expect(manager.getAccount("1012376")?.safe_deposit.get("Arkadius_Vastel")).toEqual(5)
    manager.writeAccount("1012376")
    manager.writeAccount("6676")

  })
})
