import { Component } from '@angular/core';
import { ChecklistEntry } from 'checklist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public entries: ChecklistEntry[] = [
    new ChecklistEntry('fruits', 'Fruits', undefined, [
      new ChecklistEntry('banana', 'Banana', false),
      new ChecklistEntry('apple', 'Apple', true),
      new ChecklistEntry('orange', 'Orange', false),
    ]),

    new ChecklistEntry('solocheckbox', 'Solo checkbox', true),
    new ChecklistEntry('parentcheckbox', 'Parent checkbox with description', undefined, [
      new ChecklistEntry('child_1', 'Checkbox with description', true, undefined, 'I\'m a child checkbox'),
      new ChecklistEntry('child_2', 'Another child checkbox', true, undefined, 'I have a description too!'),
    ], 'Choose one or many'),


    new ChecklistEntry('fancyboxes', 'Fancy checkboxes', undefined, [
      // example of init with js object
      ChecklistEntry.init({ 'value': 'checkbox_normal', 'label': 'Normal box' }),
      new ChecklistEntry('checkbox_disabled', 'MC Hammer box', false, undefined, 'U Can\'t Touch This', true),
      // example of init with .set() chaining
      new ChecklistEntry('checkbox_warn').set('label', 'Warn box').set('selected', true).set('color', 'warn'),
      new ChecklistEntry('checkbox_accent', 'Accent box', true, undefined, 'Fancy', false, 'accent'),
    ]),
  ];

  public entries2: ChecklistEntry[] = [
    new ChecklistEntry('fruits', 'Fruits', undefined, [
      new ChecklistEntry('banana', 'Banana'),
      new ChecklistEntry('apple', 'Apple'),
      new ChecklistEntry('orange', 'Orange'),
      new ChecklistEntry('other', 'Other...').set('description', 'You ill choose it later'),
    ], undefined),
  ];

}
