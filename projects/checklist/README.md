# Angular Material Checklist

`mat-checklist` is a [npm package](https://www.npmjs.com/package/@maarti/mat-checklist) that brings together several checkboxes from `@angular/material` to make a checklist. This also allows checkboxes nesting:

![Mat Checklist Demo](https://raw.githubusercontent.com/Maarti/AngularMaterialChecklist/master/docs/mat-checklist-demo.gif)

## Getting started

### Installing

1. **Install Mat-Checklist and its dependencies**

  ```
  npm install --save @angular/material @angular/cdk @angular/animations @maarti/mat-checklist
  ```
2. **Include a theme**

  In your `/src/styles.css` file, include one of Angular Material's prebuilt themes:
  ```css
  @import "~@angular/material/prebuilt-themes/indigo-pink.css";
  ```
  If you are not using the Angular CLI, you can include a prebuilt theme via a `<link>` element in your `index.html`.
  For more information on theming and instructions on how to create a custom theme, see the [theming guide](https://material.angular.io/guide/theming).

3. **Import the component modules:**

  ```typescript
  import { ChecklistModule } from '@maarti/mat-checklist';
   // ...
  @NgModule({
      // ...
  imports: [
      // ...
      ChecklistModule],
  })
  ```

### Example of use

**component.html:**
```html
<mat-checklist [entries]="entries" #checklist></mat-checklist>
{{checklist.getValue() | json}}
```
**component.ts:**
```typescript
import { ChecklistEntry } from '@maarti/mat-checklist';
  // ...
public entries: ChecklistEntry[] = [
  new ChecklistEntry('fruits', 'Fruits', undefined, [
    new ChecklistEntry('banana', 'Banana', false),
    new ChecklistEntry('apple', 'Apple', true),
    new ChecklistEntry('orange', 'Orange', false),
  ])];
```
For more examples, see the [live demo](https://maarti.github.io/AngularMaterialChecklist/checklist).

## [Documentation](http://htmlpreview.github.io/?https://github.com/Maarti/AngularMaterialChecklist/blob/master/docs/index.html)
### [ChecklistEntry](https://htmlpreview.github.io/?https://raw.githubusercontent.com/Maarti/AngularMaterialChecklist/master/docs/classes/_lib_checklist_entry_.checklistentry.html)
The principle entity to pass in parameter to a checklist.
### [ChecklistComponent](https://htmlpreview.github.io/?https://raw.githubusercontent.com/Maarti/AngularMaterialChecklist/master/docs/classes/_lib_checklist_component_.checklistcomponent.html)
The main component. See getValue() method the get all the values of the checklist.


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Built With

* [Angular](https://angular.io/) - The web framework used
* [Angular Material](https://material.angular.io/) - Material Design components for Angular

## Contributing

1. Clone the repo: `git clone https://github.com/Maarti/AngularMaterialChecklist.git`
2. Install packages : `npm install`
3. Add your contribution
4. [Submit a pull request](https://github.com/Maarti/AngularMaterialChecklist/pull/new/master)

## Author

[Bryan MARTINET](https://maarti.net/)

See also the list of [contributors](https://github.com/Maarti/AngularMaterialChecklist/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
