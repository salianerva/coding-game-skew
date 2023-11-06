import { Entity } from '../../utils';

export class Monster {
    public _stats: Map<string, any> = new Map()

    public update_table(table: string, entry: string, value: any) {
        this._stats.get(table)[entry] = value
    }

    public update_list(lst: string, entry: string) {
        this._stats.get(lst).push(entry)
    }

}