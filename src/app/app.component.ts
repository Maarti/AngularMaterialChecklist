import { Component } from '@angular/core';
import { ChecklistEntry } from 'checklist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public entries: ChecklistEntry[] = [
    new ChecklistEntry('options', 'Offered options', undefined, [
      new ChecklistEntry('option_0', 'Zero option', false),
      new ChecklistEntry('option_1', 'Option', true, undefined, '15 year certain and life option'),
      new ChecklistEntry('option_2', 'Another option', false),
    ], 'Choose one or many'),

    new ChecklistEntry('solocheckbox', 'Solo checkbox', true),

    new ChecklistEntry('testcheckbox', 'Test checkbox', undefined, [
      // example of init with js object
      ChecklistEntry.init({ 'value': 'testcheckbox_normal', 'label': 'Normal box' }),
      new ChecklistEntry('testcheckbox_disabled', 'MC Hammer box', false, undefined, 'U Can\'t Touch This', true),
      // example of init with .set() chaining
      new ChecklistEntry('testcheckbox_warn').set('label', 'Warn box').set('selected', true).set('color', 'warn'),
      new ChecklistEntry('testcheckbox_accent', 'Accent box', true, undefined, 'Fancy', false, 'accent'),
    ], undefined),
  ];

  public entries2: ChecklistEntry[] = [
    new ChecklistEntry('coverages', 'Coverages', undefined, [
      new ChecklistEntry('coverage_0', 'Accidental coverage', true),
      new ChecklistEntry('coverage_1', 'Death coverage', true),
      new ChecklistEntry('coverage_2', 'Another coverage', false, undefined, 'You ill choose it later'),
    ], undefined),
  ];

}
