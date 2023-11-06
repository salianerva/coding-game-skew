import { Pet, PetInstanceDB } from '../pet'
import * as accountdb from '../../data/accountdata/accountdb.json'


export class Account {
  private _aid: string
  private _pets: Set<string> = new Set()
  private _inventory: Map<string, number> = new Map()
  private _safe_deposit: Map<string, number> = new Map()



  public loadAccount(aid: string): void {
	let rawaccountDB: { [index: string]: any } = accountdb
	let accountData: { [index: string]: any } = rawaccountDB[aid]
	for (let pet of accountData["pets"]) {
	  this._pets.add(pet)
	}
	for (let key in accountData["inventory"]) {
	  this._inventory.set(key, accountData["inventory"][key])
	}
	for (let key in accountData["safe_deposit"]) {
	  this._safe_deposit.set(key, accountData["safe_deposit"][key])
	}

  }

  public get aid() {
	return this._aid
  }

  public set aid(ai) {
    this._aid = ai
  }

  public get pets() {
	return this._pets
  }

  public get inventory() {
	return this._inventory
  }

  public get safe_deposit() {
	return this._safe_deposit
  }

  public addPet(petid: string): void {
	this._pets.add(petid)
  }

  

  public removePet(petid: string) {
	this._pets.delete(petid)
  }


  public getPet(petid: string): Pet | undefined {
	if (this._pets.has(petid)) {
	  return PetInstanceDB.getPet(petid)
	}
  }

  // get the number of an item in Safe Deposit
  public getSafe(item: string): number {
	let ret = 0
	if (this._safe_deposit.has(item)) {
	  ret = this._safe_deposit.get(item)!
	}
	return ret
  }

  // get the number of an item in Inventory
  public getInv(item: string): number {
	let ret = 0
	if (this._inventory.has(item)) {
	  ret = this._inventory.get(item)!
	}
	return ret
  }

  public addInventory(item: string, quant: number) {
	this._inventory.set(item, this.getInv(item) + quant)
  }

  public addDeposit(item: string, quant: number) {
	this._safe_deposit.set(item, this.getSafe(item) + quant)
  }
}


