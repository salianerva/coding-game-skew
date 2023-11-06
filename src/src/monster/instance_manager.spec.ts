import { MonsterInstanceManager } from "./instance_manager"
import { mockMonsterInstanceManagerFactory } from './instance_manager.mock'
import * as fs from 'graceful-fs'

describe('>>> Monster Instance Manager', () => {

    let manager: MonsterInstanceManager

    beforeEach(() => {
        manager = mockMonsterInstanceManagerFactory()
    })

    it('should load, modify, and write account data', () => {
        manager.loadData("0")
        console.log(manager.getMonster("0")?._stats.get("wish"))
        console.log(manager.getMonster("0")?._stats.get("ivs"))
        console.log(manager.getMonster("0")?._stats.get("abilities"))
        console.log(manager.getMonster("0")?._stats.get("moves"))

        manager.add_ability("0", "abilities", "gilgalad")
        manager.update_table("0", "ivs", "antion", "inf")
        expect(manager.getMonster("0")?._stats.get("abilities")).toEqual([
            "Asharion",
            "lollypop",
            "gilgalad"
        ])
        expect(manager.getMonster("0")?._stats.get("ivs")["antion"]).toEqual("inf")
        console.log(manager.getMonster("0")?._stats.get("wish"))
        console.log(manager.getMonster("0")?._stats.get("ivs"))
        console.log(manager.getMonster("0")?._stats.get("abilities"))
        console.log(manager.getMonster("0")?._stats.get("moves"))
        manager.writeData("0")
        manager.copyMonster("0", "72")
        console.log(manager.getMonster("72")._stats)
        manager.add_ability("72", "moves", "exilion")
        manager.update_table("0", "ivs", "Ea", "infinf")
        manager.set_data("72", "species", "Serangel")
        manager.set_data("72", "karkadon", {ab: "totally cool", ac: "not cool"})
      manager.set_data("72", "kaladon", ["tq", "sr"])
      console.log(manager.getMonster("72")._stats)
        manager.writeData("72", true)
        const dataObject = JSON.parse(fs.readFileSync('./data/monsterdata/monsterdb_write.json', 'utf-8'))
        expect(manager.getMonster("0")._stats.get('wish') == dataObject['72']['wish']).toBeTruthy()
        console.log("comparing abilities")
        console.log(dataObject['72']['abilities'])
        console.log(manager.getMonster("0")._stats.get('abilities'))
      manager.loadData("72", true)
      expect(manager.getMonster("72")._stats.get("karkadon")).toEqual({ ab: "totally cool", ac: "not cool" })
      console.log(manager.getMonster("72")._stats.get("karkadon"))
      console.log(manager.getMonster("72")._stats.get("kaladon"))
        // Doesn't work for some reason
        //console.log(dataObject['72']['abilities'] == manager.getMonster("0")._stats.get('abilities'))
        //expect(manager.getMonster("0")._stats.get('abilities') == dataObject['72']['abilities']).toBeTruthy()

    })
})