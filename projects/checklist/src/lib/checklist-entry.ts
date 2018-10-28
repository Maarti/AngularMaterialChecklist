import { ThemePalette } from '@angular/material';

export class ChecklistEntry {

    public value: string;
    public label?: string;
    public description?: string;
    /** The selected value of a parent with children will automatically be calculated from its children */
    public selected?: boolean = false;
    /** Only a parent entry can have children */
    public children?: ChecklistEntry[];
    public disabled?: boolean = false;
    public color?: ThemePalette = 'primary';

    constructor(
        value: string,
        label?: string,
        selected: boolean = false,
        children?: ChecklistEntry[],
        description?: string,
        disabled: boolean = false,
        color: ThemePalette = 'primary'
    ) {
        this.value = value;
        this.label = label;
        this.description = description;
        this.selected = selected;
        this.children = children;
        this.disabled = disabled;
        this.color = color;
    }

    public static init(obj: {
        value: string,
        label?: string,
        description?: string,
        selected?: boolean,
        children?: ChecklistEntry[],
        disabled?: boolean,
        color?: ThemePalette,
    }): ChecklistEntry {
        if (!obj.hasOwnProperty('value')) {
            console.warn('ChecklistEntry.init(obj) : obj must contain "value"');
            return null;
        }
        const entry = new ChecklistEntry(obj.value);
        return Object.assign(entry, obj);
    }

    public hasChildren(): boolean {
        return (this.children && this.children !== []);
    }

    public getValue(): any {
        const valueEntry = new Array();
        if (!this.hasChildren()) {
            valueEntry[this.value] = this.selected;
        } else {
            let valueSubEntry = new Array();
            for (const subEntry of this.children) {
                valueSubEntry = { ...valueSubEntry, ...subEntry.getValue() };
            }
            valueEntry[this.value] = valueSubEntry;
        }
        return valueEntry;
    }

    public set(property: keyof ChecklistEntry, value: any): ChecklistEntry {
        this[property] = value;
        return this;
    }

}
