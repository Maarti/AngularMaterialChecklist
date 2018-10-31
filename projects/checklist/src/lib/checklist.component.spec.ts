import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistComponent } from './checklist.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ChecklistEntry } from './checklist-entry';
import { MatCheckboxModule } from '@angular/material';

describe('ChecklistComponent', () => {
  let component: ChecklistComponent;
  let fixture: ComponentFixture<ChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCheckboxModule],
      declarations: [ChecklistComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistComponent);
    component = fixture.componentInstance;
    component.initialEntries = [
      new ChecklistEntry('fancyboxes', 'Fancy checkboxes', undefined, [
        ChecklistEntry.init({ 'value': 'checkbox_normal', 'label': 'Normal box' }),
        new ChecklistEntry('checkbox_disabled', 'MC Hammer box', false, undefined, 'U Can\'t Touch This', true),
        new ChecklistEntry('checkbox_warn').set('label', 'Warn box').set('checked', true).set('color', 'warn'),
        new ChecklistEntry('checkbox_accent', 'Accent box', true, undefined, 'Fancy', false, 'accent'),
      ])];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return initial true value', () => {
    expect(component.getValue().fancyboxes.checkbox_accent).toBeTruthy();
  });

  it('should return (disabled) initial false value', () => {
    expect(component.getValue().fancyboxes.checkbox_disabled).toBeFalsy();
  });

  it('click on parent should set first entry to true', () => {
    expect(component.getValue().fancyboxes.checkbox_normal).toBeFalsy();
    const checkbox = fixture.debugElement.nativeElement.querySelector('mat-checkbox label');
    checkbox.click();
    expect(component.getValue().fancyboxes.checkbox_normal).toBeTruthy();
  });

it('2 clicks on parent should set every entries to false', () => {
  expect(component.getValue().fancyboxes.checkbox_accent).toBeTruthy();
    const checkbox = fixture.debugElement.nativeElement.querySelector('mat-checkbox label');
    checkbox.click();
    checkbox.click();
    expect(component.getValue().fancyboxes.checkbox_normal).toBeFalsy();
    expect(component.getValue().fancyboxes.checkbox_disabled).toBeFalsy();
    expect(component.getValue().fancyboxes.checkbox_warn).toBeFalsy();
    expect(component.getValue().fancyboxes.checkbox_accent).toBeFalsy();
  });
});
