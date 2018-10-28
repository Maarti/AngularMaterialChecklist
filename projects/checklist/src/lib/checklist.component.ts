import { Component, Input, OnInit } from '@angular/core';

import { MatCheckboxChange, MAT_CHECKBOX_CLICK_ACTION } from '@angular/material';
import { ChecklistEntry } from './checklist-entry';

@Component({
  selector: 'mat-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css'],
  /** Providing this value to don't set indeterminate to false on check,
   *  because we take care of determining the indeterminate status. */
  providers: [{ provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check' }]
})
export class ChecklistComponent implements OnInit {

  @Input('entries') public initialEntries: ChecklistEntry[];
  @Input() public labelPosition: string = 'after';
  public _entries: ChecklistEntry[] = new Array();

  public ngOnInit(): void {
    this.cloneEntries();
  }

  private cloneEntries(): void {
    for (const entry of this.initialEntries) {
      const clonedEntry = Object.assign(new ChecklistEntry(''), entry);
      this._entries.push(clonedEntry);
      if (entry.hasChildren()) {
        clonedEntry.children = new Array();
        for (const subentry of entry.children) {
          clonedEntry.children.push(Object.assign(new ChecklistEntry(''), subentry));
        }
      }
    }
  }

  /** A parent is indeterminate if all of its children don't have the same "selected" value */
  public isIndeterminate(entry: ChecklistEntry): boolean {
    if (!entry.hasChildren()) {
      return false;
    }
    const trueCount = this.countSelected(entry.children);
    return (trueCount > 0 && trueCount < entry.children.length);
  }

  /** For a parent, return true of all children are selected */
  public isSelected(entry: ChecklistEntry): boolean {
    if (entry.hasChildren()) {
      const trueCount = this.countSelected(entry.children);
      return (trueCount >= entry.children.length);
    } else {
      return entry.selected;
    }
  }

  /** Count the number of selected entries in a list */
  private countSelected(children: ChecklistEntry[]): number {
    let trueCount = 0;
    for (const child of children) {
      if (child.selected) {
        trueCount++;
      }
    }
    return trueCount;
  }

  public getValue(): any {
    let valueEntries = new Array();
    for (const entry of this._entries) {
      valueEntries = { ...valueEntries, ...entry.getValue() };
    }
    return valueEntries;
  }

  public onChildChange(change: MatCheckboxChange, parent: string): void {
    this._entries.find(list => list.value === parent).children
      .find(entry => entry.value === change.source.value).selected = change.checked;
  }

  /** On parent change, we change all children accordingly (except for disabled children) */
  public onParentChange(change: MatCheckboxChange): void {
    const parent = this._entries.find(list => list.value === change.source.value);
    if (parent.hasChildren()) {
      parent.children.forEach(child => { child.selected = (child.disabled) ? child.selected : change.checked; });
    } else {
      parent.selected = change.checked;
    }
  }

}
