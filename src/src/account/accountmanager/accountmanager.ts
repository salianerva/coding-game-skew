import { Account } from '../account'
import * as accountdb from '../../../data/accountdata/accountdb.json'
import { AccountConfig } from '../../../data/accountdata'
import * as fs from 'graceful-fs'
//import { writeFileSync, readFileSync } from 'fs';
import { Entity } from '../../../utils'


export class AccountManager extends Entity {

  private _accountDB: Map<string, Account> = new Map()

  //public Awake() {

  //}

  //public Update(deltaTime: number) {

  //}

  public loadAccount(id: string): void {
    let acc = new Account()
    acc.loadAccount(id)
    this._accountDB.set(id, acc)
  }

  public getAccount(id: string): Account | undefined {
    return this._accountDB.get(id)
  }

  public copyAccount(source: string, target: string) {
    this._accountDB.set(target, new Account())
    let sacc = this.getAccount(source)
    let acc = this.getAccount(target)
    if ((sacc != undefined) && (acc != undefined)) {
      for (let pet of sacc.pets) {
        acc?.addPet(pet)
      }
      for (let [key, value] of sacc.inventory) {
        acc?.addInventory(key, value)
      }
      for (let [key, value] of sacc.safe_deposit) {
        acc?.addDeposit(key, value)
      }
      acc.aid = target
    }
  }

  public writeAccount(id: string): void {
    let acc = this._accountDB.get(id)
    let obj: { [index: string]: any } = {}
    // Hella inefficient, have to convert to array and then to Object!
    obj["pets"] = Array.from(acc?.pets!)
    obj["inventory"] = Object.fromEntries(Array.from(acc?.inventory!))
    obj["safe_deposit"] = Object.fromEntries(Array.from(acc?.safe_deposit!))


    // The annoying write-to-file part
    // rawmonsterDB gets a "default" property here that is annoying
    // BTW THIS IS VERY BROKEN: IM USING THE OLD ACCOUNT DATA, SO WRITING A
    // DIFFERENT ACCOUNT LATER WILL OVERWRITE ANY PREVIOUS WRITES - NEED TO MAKE USER I UPDATE THE ORIGINAL ACCOUNTDB INSTEAD OF A TEST WRITE FILE
    // IN PRACTICE I SHOULD JUST FLUSH THE ACCOUNT DATA ONCE
    let rawaccountDB: { [index: string]: any } = accountdb

    rawaccountDB[id] = obj
    //rawaccountDB["1"] = obj

    // need to replace this with a proper write function
    //let str = JSON.stringify(rawmonsterDB)
    // delete the weird default property, may remove later
    delete rawaccountDB.default
    //
    console.log(rawaccountDB)

    fs.writeFileSync(AccountConfig.save_file, JSON.stringify(rawaccountDB), 'utf-8')
  }


}
