import { Pet } from "../../pet"
import { mockPetFactory } from "../../pet.mock"
import { mockPetPartyFactory, PetParty } from "../../petparty"
import { PetWriterComponent } from "./writer"
import fs from 'graceful-fs'

describe('>>> MonsterWriterComponent', () => {
  let monster: Pet
  let monsterparty: PetParty

  beforeEach(() => {
    monster = mockPetFactory()
    monsterparty = mockPetPartyFactory()
  })

  it('should load and write a monster through monsterparty', () => {
    monster.InitPet()
    monsterparty.setPet("0", monster)
    monsterparty.getPet("0").getPetInstance("0")
    // gives it a unique id used to access it from the file
    monsterparty.getPet("0").stats.setStatFromTable('data', 'mid', '69')
    //monsterparty.getPet("0").GetComponent(PetWriterComponent).writeData()
    //console.log(fs.readFileSync('./data/monsterdata/monsterdb_write.json', 'utf-8'))
    const dataObject = JSON.parse(fs.readFileSync('./data/monsterdata/monsterdb_write.json', 'utf-8'))
    //console.log(dataObject)
    //expect(monsterparty.getPet("0").stats.getStatFromTable('data', 'omni') == dataObject['69']['omni']).toBeTruthy()
   // expect(monsterparty.getPet("0").stats.getStatFromTable('data', 'form') == dataObject['69']['form']).toBeTruthy()
    //console.log(dataObject['69']['form'])

  })
})
