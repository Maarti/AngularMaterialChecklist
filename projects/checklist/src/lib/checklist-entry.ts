import { ThemePalette } from '@angular/material';

/** Represents an entry of the ChecklistComponent */
export class ChecklistEntry {

    /** Identifier of the entry */
    public value: string;
    /** Text that will be displayed in the checklist */
    public label?: string;
    /** Text that will be displayed below the label */
    public description?: string;
    /** The starting value of the entry. The checked value of a parent with children will automatically be calculated from its children. */
    public checked?: boolean = false;
    /** List of nested entries. Only a parent entry can have children. */
    public children?: ChecklistEntry[];
    /** Set to true to disable the entry. */
    public disabled?: boolean = false;
    /** Color of a Theme Palette, see Angular Material documentation for more information. */
    public color?: ThemePalette = 'primary';

    constructor(
        value: string,
        label?: string,
        checked: boolean = false,
        children?: ChecklistEntry[],
        description?: string,
        disabled: boolean = false,
        color: ThemePalette = 'primary'
    ) {
        this.value = value;
        this.label = label;
        this.description = description;
        this.checked = checked;
        this.children = children;
        this.disabled = disabled;
        this.color = color;
    }

    /** Checkentry initializer
     * @returns Returns the ChecklistEntry itself
     */
    public static init(obj: {
        value: string,
        label?: string,
        description?: string,
        checked?: boolean,
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

    /** @returns true if this entry has children */
    public hasChildren(): boolean {
        return (this.children && this.children !== []);
    }

    /**  @returns Return the value of the entry and its children.
     */
    public getValue(): any {
        const valueEntry = new Array();
        if (!this.hasChildren()) {
            valueEntry[this.value] = this.checked;
        } else {
            let valueSubEntry = new Array();
            for (const subEntry of this.children) {
                valueSubEntry = { ...valueSubEntry, ...subEntry.getValue() };
            }
            valueEntry[this.value] = valueSubEntry;
        }
        return valueEntry;
    }

    /**  Set a property on this ChecklistEntry
     * @param property Name of the property to set
     * @param value Value to set to the property
     * @returns Returns the ChecklistEntry itself to allow .set() chaining
    */
    public set(property: keyof ChecklistEntry, value: any): ChecklistEntry {
        this[property] = value;
        return this;
    }

}
