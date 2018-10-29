(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/checklist/fesm5/maarti-mat-checklist.js":
/*!******************************************************!*\
  !*** ./dist/checklist/fesm5/maarti-mat-checklist.js ***!
  \******************************************************/
/*! exports provided: ChecklistComponent, ChecklistModule, ChecklistEntry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistComponent", function() { return ChecklistComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistModule", function() { return ChecklistModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistEntry", function() { return ChecklistEntry; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ChecklistEntry = /** @class */ (function () {
    function ChecklistEntry(value, label, checked, children, description, disabled, color) {
        if (checked === void 0) { checked = false; }
        if (disabled === void 0) { disabled = false; }
        if (color === void 0) { color = 'primary'; }
        /**
         * The checked value of a parent with children will automatically be calculated from its children
         */
        this.checked = false;
        this.disabled = false;
        this.color = 'primary';
        this.value = value;
        this.label = label;
        this.description = description;
        this.checked = checked;
        this.children = children;
        this.disabled = disabled;
        this.color = color;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    ChecklistEntry.init = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        if (!obj.hasOwnProperty('value')) {
            console.warn('ChecklistEntry.init(obj) : obj must contain "value"');
            return null;
        }
        /** @type {?} */
        var entry = new ChecklistEntry(obj.value);
        return Object.assign(entry, obj);
    };
    /**
     * @return {?}
     */
    ChecklistEntry.prototype.hasChildren = /**
     * @return {?}
     */
    function () {
        return (this.children && this.children !== []);
    };
    /**
     * @return {?}
     */
    ChecklistEntry.prototype.getValue = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var valueEntry = new Array();
        if (!this.hasChildren()) {
            valueEntry[this.value] = this.checked;
        }
        else {
            /** @type {?} */
            var valueSubEntry = new Array();
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var subEntry = _c.value;
                    valueSubEntry = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, valueSubEntry, subEntry.getValue());
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            valueEntry[this.value] = valueSubEntry;
        }
        return valueEntry;
    };
    /**
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    ChecklistEntry.prototype.set = /**
     * @param {?} property
     * @param {?} value
     * @return {?}
     */
    function (property, value) {
        this[property] = value;
        return this;
    };
    return ChecklistEntry;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ChecklistComponent = /** @class */ (function () {
    function ChecklistComponent() {
        this.labelPosition = 'after';
        this._entries = new Array();
    }
    /**
     * @return {?}
     */
    ChecklistComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.cloneEntries();
    };
    /**
     * @return {?}
     */
    ChecklistComponent.prototype.cloneEntries = /**
     * @return {?}
     */
    function () {
        var e_1, _a, e_2, _b;
        try {
            for (var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.initialEntries), _d = _c.next(); !_d.done; _d = _c.next()) {
                var entry = _d.value;
                /** @type {?} */
                var clonedEntry = Object.assign(new ChecklistEntry(''), entry);
                this._entries.push(clonedEntry);
                if (entry.hasChildren()) {
                    clonedEntry.children = new Array();
                    try {
                        for (var _e = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(entry.children), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var subentry = _f.value;
                            clonedEntry.children.push(Object.assign(new ChecklistEntry(''), subentry));
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * A parent is indeterminate if all of its children don't have the same "checked" value
     * @param {?} entry
     * @return {?}
     */
    ChecklistComponent.prototype.isIndeterminate = /**
     * A parent is indeterminate if all of its children don't have the same "checked" value
     * @param {?} entry
     * @return {?}
     */
    function (entry) {
        if (!entry.hasChildren()) {
            return false;
        }
        /** @type {?} */
        var trueCount = this.countChecked(entry.children);
        return (trueCount > 0 && trueCount < entry.children.length);
    };
    /**
     * For a parent, return true of all children are checked
     * @param {?} entry
     * @return {?}
     */
    ChecklistComponent.prototype.isChecked = /**
     * For a parent, return true of all children are checked
     * @param {?} entry
     * @return {?}
     */
    function (entry) {
        if (entry.hasChildren()) {
            /** @type {?} */
            var trueCount = this.countChecked(entry.children);
            return (trueCount >= entry.children.length);
        }
        else {
            return entry.checked;
        }
    };
    /**
     * Count the number of checked entries in a list
     * @param {?} children
     * @return {?}
     */
    ChecklistComponent.prototype.countChecked = /**
     * Count the number of checked entries in a list
     * @param {?} children
     * @return {?}
     */
    function (children) {
        var e_3, _a;
        /** @type {?} */
        var trueCount = 0;
        try {
            for (var children_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(children), children_1_1 = children_1.next(); !children_1_1.done; children_1_1 = children_1.next()) {
                var child = children_1_1.value;
                if (child.checked) {
                    trueCount++;
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (children_1_1 && !children_1_1.done && (_a = children_1.return)) _a.call(children_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return trueCount;
    };
    /**
     * @return {?}
     */
    ChecklistComponent.prototype.getValue = /**
     * @return {?}
     */
    function () {
        var e_4, _a;
        /** @type {?} */
        var valueEntries = new Array();
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this._entries), _c = _b.next(); !_c.done; _c = _b.next()) {
                var entry = _c.value;
                valueEntries = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, valueEntries, entry.getValue());
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return valueEntries;
    };
    /**
     * @param {?} change
     * @param {?} parent
     * @return {?}
     */
    ChecklistComponent.prototype.onChildChange = /**
     * @param {?} change
     * @param {?} parent
     * @return {?}
     */
    function (change, parent) {
        this._entries.find(function (list) { return list.value === parent.value; }).children.
            find(function (entry) { return entry.value === change.source.value; }).checked = change.checked;
        parent.checked = change.checked;
    };
    /**
     * On parent change, we change all children accordingly (except for disabled children)
     * @param {?} change
     * @return {?}
     */
    ChecklistComponent.prototype.onParentChange = /**
     * On parent change, we change all children accordingly (except for disabled children)
     * @param {?} change
     * @return {?}
     */
    function (change) {
        /** @type {?} */
        var parent = this._entries.find(function (list) { return list.value === change.source.value; });
        if (parent.hasChildren()) {
            parent.children.forEach(function (child) { child.checked = (child.disabled) ? child.checked : change.checked; });
        }
        else {
            parent.checked = change.checked;
        }
    };
    ChecklistComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'mat-checklist',
                    template: "<ng-template ngFor let-entry [ngForOf]=\"_entries\">\n  <mat-checkbox #parentCB [value]=\"entry.value\" [checked]=\"isChecked(entry)\" [indeterminate]=\"isIndeterminate(entry)\"\n    (change)=\"onParentChange($event)\" [color]=\"entry.color\" [disabled]=\"entry.disabled\" [labelPosition]=\"labelPosition\">\n    <span class=\"label\">{{entry.label}}</span>\n    <ng-container *ngIf=\"entry.description\">\n      <br /><span class=\"description\">{{entry.description}}</span>\n    </ng-container>\n  </mat-checkbox>\n\n  <div *ngIf=\"entry.hasChildren()\" class=\"children\">\n    <ng-template ngFor let-child [ngForOf]=\"entry.children\">\n      <mat-checkbox [value]=\"child.value\" [checked]=\"child.checked\" (change)=\"onChildChange($event,parentCB)\" [color]=\"child.color\"\n        [disabled]=\"child.disabled\" [labelPosition]=\"labelPosition\" [ngClass]=\"{'label-before': labelPosition=='before'}\">\n        <span class=\"label\">{{child.label}}</span>\n        <ng-container *ngIf=\"child.description\">\n          <br /><span class=\"description\">{{child.description}}</span>\n        </ng-container>\n      </mat-checkbox>\n    </ng-template>\n  </div>\n\n</ng-template>",
                    /** Providing this value to don't set indeterminate to false on check,
                       *  because we take care of determining the indeterminate status. */
                    providers: [{ provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_CHECKBOX_CLICK_ACTION"], useValue: 'check' }],
                    styles: [":host{width:100%}:host ::ng-deep .mat-checkbox-label{line-height:initial}.label{font-size:16px;font-weight:400}.description{font-size:14px;font-weight:400;font-style:italic}mat-checkbox{width:100%;display:flex}mat-checkbox ::ng-deep .mat-checkbox-layout{width:100%;padding-top:.75rem;padding-bottom:.75rem}mat-checkbox.label-before ::ng-deep .mat-checkbox-layout{padding-left:36px}mat-checkbox ::ng-deep .mat-checkbox-inner-container{margin-left:12px}.children mat-checkbox ::ng-deep .mat-checkbox-inner-container{margin-left:36px}mat-checkbox:hover{background-color:rgba(128,128,128,.1)}"]
                }] }
    ];
    ChecklistComponent.propDecorators = {
        initialEntries: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['entries',] }],
        labelPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return ChecklistComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ChecklistModule = /** @class */ (function () {
    function ChecklistModule() {
    }
    ChecklistModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                    ],
                    declarations: [ChecklistComponent],
                    exports: [ChecklistComponent]
                },] }
    ];
    return ChecklistModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFhcnRpLW1hdC1jaGVja2xpc3QuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BtYWFydGkvbWF0LWNoZWNrbGlzdC9saWIvY2hlY2tsaXN0LWVudHJ5LnRzIiwibmc6Ly9AbWFhcnRpL21hdC1jaGVja2xpc3QvbGliL2NoZWNrbGlzdC5jb21wb25lbnQudHMiLCJuZzovL0BtYWFydGkvbWF0LWNoZWNrbGlzdC9saWIvY2hlY2tsaXN0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZVBhbGV0dGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbmV4cG9ydCBjbGFzcyBDaGVja2xpc3RFbnRyeSB7XG5cbiAgICBwdWJsaWMgdmFsdWU6IHN0cmluZztcbiAgICBwdWJsaWMgbGFiZWw/OiBzdHJpbmc7XG4gICAgcHVibGljIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIC8qKiBUaGUgY2hlY2tlZCB2YWx1ZSBvZiBhIHBhcmVudCB3aXRoIGNoaWxkcmVuIHdpbGwgYXV0b21hdGljYWxseSBiZSBjYWxjdWxhdGVkIGZyb20gaXRzIGNoaWxkcmVuICovXG4gICAgcHVibGljIGNoZWNrZWQ/OiBib29sZWFuID0gZmFsc2U7XG4gICAgLyoqIE9ubHkgYSBwYXJlbnQgZW50cnkgY2FuIGhhdmUgY2hpbGRyZW4gKi9cbiAgICBwdWJsaWMgY2hpbGRyZW4/OiBDaGVja2xpc3RFbnRyeVtdO1xuICAgIHB1YmxpYyBkaXNhYmxlZD86IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgY29sb3I/OiBUaGVtZVBhbGV0dGUgPSAncHJpbWFyeSc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgdmFsdWU6IHN0cmluZyxcbiAgICAgICAgbGFiZWw/OiBzdHJpbmcsXG4gICAgICAgIGNoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZSxcbiAgICAgICAgY2hpbGRyZW4/OiBDaGVja2xpc3RFbnRyeVtdLFxuICAgICAgICBkZXNjcmlwdGlvbj86IHN0cmluZyxcbiAgICAgICAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZSxcbiAgICAgICAgY29sb3I6IFRoZW1lUGFsZXR0ZSA9ICdwcmltYXJ5J1xuICAgICkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSBjaGVja2VkO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgaW5pdChvYmo6IHtcbiAgICAgICAgdmFsdWU6IHN0cmluZyxcbiAgICAgICAgbGFiZWw/OiBzdHJpbmcsXG4gICAgICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nLFxuICAgICAgICBjaGVja2VkPzogYm9vbGVhbixcbiAgICAgICAgY2hpbGRyZW4/OiBDaGVja2xpc3RFbnRyeVtdLFxuICAgICAgICBkaXNhYmxlZD86IGJvb2xlYW4sXG4gICAgICAgIGNvbG9yPzogVGhlbWVQYWxldHRlLFxuICAgIH0pOiBDaGVja2xpc3RFbnRyeSB7XG4gICAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0NoZWNrbGlzdEVudHJ5LmluaXQob2JqKSA6IG9iaiBtdXN0IGNvbnRhaW4gXCJ2YWx1ZVwiJyk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlbnRyeSA9IG5ldyBDaGVja2xpc3RFbnRyeShvYmoudmFsdWUpO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihlbnRyeSwgb2JqKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGFzQ2hpbGRyZW4oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiAodGhpcy5jaGlsZHJlbiAmJiB0aGlzLmNoaWxkcmVuICE9PSBbXSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFZhbHVlKCk6IGFueSB7XG4gICAgICAgIGNvbnN0IHZhbHVlRW50cnkgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgaWYgKCF0aGlzLmhhc0NoaWxkcmVuKCkpIHtcbiAgICAgICAgICAgIHZhbHVlRW50cnlbdGhpcy52YWx1ZV0gPSB0aGlzLmNoZWNrZWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgdmFsdWVTdWJFbnRyeSA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBzdWJFbnRyeSBvZiB0aGlzLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVTdWJFbnRyeSA9IHsgLi4udmFsdWVTdWJFbnRyeSwgLi4uc3ViRW50cnkuZ2V0VmFsdWUoKSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWVFbnRyeVt0aGlzLnZhbHVlXSA9IHZhbHVlU3ViRW50cnk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlRW50cnk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldChwcm9wZXJ0eToga2V5b2YgQ2hlY2tsaXN0RW50cnksIHZhbHVlOiBhbnkpOiBDaGVja2xpc3RFbnRyeSB7XG4gICAgICAgIHRoaXNbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1hdENoZWNrYm94Q2hhbmdlLCBNQVRfQ0hFQ0tCT1hfQ0xJQ0tfQUNUSU9OLCBNYXRDaGVja2JveCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IENoZWNrbGlzdEVudHJ5IH0gZnJvbSAnLi9jaGVja2xpc3QtZW50cnknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtY2hlY2tsaXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoZWNrbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NoZWNrbGlzdC5jb21wb25lbnQuY3NzJ10sXG4gIC8qKiBQcm92aWRpbmcgdGhpcyB2YWx1ZSB0byBkb24ndCBzZXQgaW5kZXRlcm1pbmF0ZSB0byBmYWxzZSBvbiBjaGVjayxcbiAgICogIGJlY2F1c2Ugd2UgdGFrZSBjYXJlIG9mIGRldGVybWluaW5nIHRoZSBpbmRldGVybWluYXRlIHN0YXR1cy4gKi9cbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBNQVRfQ0hFQ0tCT1hfQ0xJQ0tfQUNUSU9OLCB1c2VWYWx1ZTogJ2NoZWNrJyB9XVxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgnZW50cmllcycpIHB1YmxpYyBpbml0aWFsRW50cmllczogQ2hlY2tsaXN0RW50cnlbXTtcbiAgQElucHV0KCkgcHVibGljIGxhYmVsUG9zaXRpb246IHN0cmluZyA9ICdhZnRlcic7XG4gIHB1YmxpYyBfZW50cmllczogQ2hlY2tsaXN0RW50cnlbXSA9IG5ldyBBcnJheSgpO1xuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsb25lRW50cmllcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBjbG9uZUVudHJpZXMoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiB0aGlzLmluaXRpYWxFbnRyaWVzKSB7XG4gICAgICBjb25zdCBjbG9uZWRFbnRyeSA9IE9iamVjdC5hc3NpZ24obmV3IENoZWNrbGlzdEVudHJ5KCcnKSwgZW50cnkpO1xuICAgICAgdGhpcy5fZW50cmllcy5wdXNoKGNsb25lZEVudHJ5KTtcbiAgICAgIGlmIChlbnRyeS5oYXNDaGlsZHJlbigpKSB7XG4gICAgICAgIGNsb25lZEVudHJ5LmNoaWxkcmVuID0gbmV3IEFycmF5KCk7XG4gICAgICAgIGZvciAoY29uc3Qgc3ViZW50cnkgb2YgZW50cnkuY2hpbGRyZW4pIHtcbiAgICAgICAgICBjbG9uZWRFbnRyeS5jaGlsZHJlbi5wdXNoKE9iamVjdC5hc3NpZ24obmV3IENoZWNrbGlzdEVudHJ5KCcnKSwgc3ViZW50cnkpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiBBIHBhcmVudCBpcyBpbmRldGVybWluYXRlIGlmIGFsbCBvZiBpdHMgY2hpbGRyZW4gZG9uJ3QgaGF2ZSB0aGUgc2FtZSBcImNoZWNrZWRcIiB2YWx1ZSAqL1xuICBwdWJsaWMgaXNJbmRldGVybWluYXRlKGVudHJ5OiBDaGVja2xpc3RFbnRyeSk6IGJvb2xlYW4ge1xuICAgIGlmICghZW50cnkuaGFzQ2hpbGRyZW4oKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCB0cnVlQ291bnQgPSB0aGlzLmNvdW50Q2hlY2tlZChlbnRyeS5jaGlsZHJlbik7XG4gICAgcmV0dXJuICh0cnVlQ291bnQgPiAwICYmIHRydWVDb3VudCA8IGVudHJ5LmNoaWxkcmVuLmxlbmd0aCk7XG4gIH1cblxuICAvKiogRm9yIGEgcGFyZW50LCByZXR1cm4gdHJ1ZSBvZiBhbGwgY2hpbGRyZW4gYXJlIGNoZWNrZWQgKi9cbiAgcHVibGljIGlzQ2hlY2tlZChlbnRyeTogQ2hlY2tsaXN0RW50cnkpOiBib29sZWFuIHtcbiAgICBpZiAoZW50cnkuaGFzQ2hpbGRyZW4oKSkge1xuICAgICAgY29uc3QgdHJ1ZUNvdW50ID0gdGhpcy5jb3VudENoZWNrZWQoZW50cnkuY2hpbGRyZW4pO1xuICAgICAgcmV0dXJuICh0cnVlQ291bnQgPj0gZW50cnkuY2hpbGRyZW4ubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVudHJ5LmNoZWNrZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqIENvdW50IHRoZSBudW1iZXIgb2YgY2hlY2tlZCBlbnRyaWVzIGluIGEgbGlzdCAqL1xuICBwcml2YXRlIGNvdW50Q2hlY2tlZChjaGlsZHJlbjogQ2hlY2tsaXN0RW50cnlbXSk6IG51bWJlciB7XG4gICAgbGV0IHRydWVDb3VudCA9IDA7XG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgaWYgKGNoaWxkLmNoZWNrZWQpIHtcbiAgICAgICAgdHJ1ZUNvdW50Kys7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlQ291bnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0VmFsdWUoKTogYW55IHtcbiAgICBsZXQgdmFsdWVFbnRyaWVzID0gbmV3IEFycmF5KCk7XG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiB0aGlzLl9lbnRyaWVzKSB7XG4gICAgICB2YWx1ZUVudHJpZXMgPSB7IC4uLnZhbHVlRW50cmllcywgLi4uZW50cnkuZ2V0VmFsdWUoKSB9O1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWVFbnRyaWVzO1xuICB9XG5cbiAgcHVibGljIG9uQ2hpbGRDaGFuZ2UoY2hhbmdlOiBNYXRDaGVja2JveENoYW5nZSwgcGFyZW50OiBNYXRDaGVja2JveCk6IHZvaWQge1xuICAgIHRoaXMuX2VudHJpZXMuZmluZChsaXN0ID0+IGxpc3QudmFsdWUgPT09IHBhcmVudC52YWx1ZSkuY2hpbGRyZW4uXG4gICAgICBmaW5kKGVudHJ5ID0+IGVudHJ5LnZhbHVlID09PSBjaGFuZ2Uuc291cmNlLnZhbHVlKS5jaGVja2VkID0gY2hhbmdlLmNoZWNrZWQ7XG4gICAgcGFyZW50LmNoZWNrZWQgPSBjaGFuZ2UuY2hlY2tlZDtcbiAgfVxuXG4gIC8qKiBPbiBwYXJlbnQgY2hhbmdlLCB3ZSBjaGFuZ2UgYWxsIGNoaWxkcmVuIGFjY29yZGluZ2x5IChleGNlcHQgZm9yIGRpc2FibGVkIGNoaWxkcmVuKSAqL1xuICBwdWJsaWMgb25QYXJlbnRDaGFuZ2UoY2hhbmdlOiBNYXRDaGVja2JveENoYW5nZSk6IHZvaWQge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuX2VudHJpZXMuZmluZChsaXN0ID0+IGxpc3QudmFsdWUgPT09IGNoYW5nZS5zb3VyY2UudmFsdWUpO1xuICAgIGlmIChwYXJlbnQuaGFzQ2hpbGRyZW4oKSkge1xuICAgICAgcGFyZW50LmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4geyBjaGlsZC5jaGVja2VkID0gKGNoaWxkLmRpc2FibGVkKSA/IGNoaWxkLmNoZWNrZWQgOiBjaGFuZ2UuY2hlY2tlZDsgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudC5jaGVja2VkID0gY2hhbmdlLmNoZWNrZWQ7XG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBNYXRDaGVja2JveE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IENoZWNrbGlzdENvbXBvbmVudCB9IGZyb20gJy4vY2hlY2tsaXN0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ2hlY2tsaXN0Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW0NoZWNrbGlzdENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tsaXN0TW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbInRzbGliXzEuX192YWx1ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztJQUVBO0lBWUksd0JBQ0ksS0FBYSxFQUNiLEtBQWMsRUFDZCxPQUF3QixFQUN4QixRQUEyQixFQUMzQixXQUFvQixFQUNwQixRQUF5QixFQUN6QixLQUErQjtRQUovQix3QkFBQSxFQUFBLGVBQXdCO1FBR3hC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

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.main-container {\n  display: flex;\n  justify-content: center;\n}\n\n.container {\n  flex-basis: 70%;\n}\n\n.main-title {\n  text-align: center;\n}\n\ntextarea {\n  width: 100%;\n  background-color: #262626;\n  color: #e6ede8;\n  font-family: \"Operator Mono SSm A\", \"Operator Mono SSm B\", \"Source Code Pro\",\n    Menlo, Consolas, Monaco, monospace;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"container\">\n    <div class=\"main-title\">\n      <h1>Angular Material Checklist</h1>\n    </div>\n    <h2>Checklist example:</h2>\n    <mat-checklist [entries]=\"entries\" #checklist></mat-checklist>\n    <br />\n    Checklist Values: <br />\n    <textarea rows=\"18\">{{checklist.getValue() | json}}</textarea>\n    <br /><br />\n    <hr>\n\n\n    <h1>Checklist with labelPosition=\"before\":</h1>\n    <mat-checklist [entries]=\"entries2\" labelPosition=\"before\" #checklist_before></mat-checklist>\n    <br />\n    Checklist Values: <br />\n    <textarea rows=\"8\">{{checklist_before.getValue() | json}}</textarea>\n    <br /><br />\n    <hr>\n\n\n    <h1>Initializers:</h1>\n    Constructor:<br />\n    <textarea rows=\"1\">new ChecklistEntry('id', 'MyBox', true)</textarea>\n    <br />\n    <br />\n    Init with js object:<br />\n    <textarea rows=\"1\">ChecklistEntry.init({ 'value': 'id', 'label': 'MyBox' })</textarea>\n    <br />\n    <br />\n    Init with .set() chaining:<br />\n    <textarea rows=\"1\">new ChecklistEntry('id').set('label', 'MyBox').set('checked', true).set('color', 'warn')</textarea>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var checklist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! checklist */ "./dist/checklist/fesm5/maarti-mat-checklist.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.entries = [
            new checklist__WEBPACK_IMPORTED_MODULE_1__["ChecklistEntry"]('fruits', 'Fruits', undefined, [
                new checklist__WEBPACK_IMPORTED_MODULE_1__["ChecklistEntry"]('banana', 'Banana', false),
                new checklist__WEBPACK_IMPORTED_MODULE_1__["ChecklistEntry"]('apple', 'Apple', true),
                new checklist__WEBPACK_IMPORTED_MODULE_1__["ChecklistEntry"]('orange', 'Orange', false),
            ]),
            new checklist__WEBPACK_IMPORTED_MODULE_1__["ChecklistEntry"]('solocheckbox', 'Solo checkbox', true),
            new checklist__WEBPACK_IMPORTED_MODULE_1__["ChecklistEntry"]('parentcheckbox', 'Parent checkbox with description', undefined, [
                new checklist__WEBPACK_IMPORTED_MODULE_1__["ChecklistEntry"]('child_1', 'Checkbox with description', true, undefined, 'I\'m a child checkbox'),
                new checklist__WEBPACK_IMPORTED_MODULE_1__["ChecklistEntry"]('child_2', 'Another child checkbox', true, undefined, 'I have a description too!'),
            ], 'Choose one or many'),
            new checklist__WEBPACK_IMPORTED_MODULE_1__["ChecklistEntry"]('fancyboxes', 'Fancy checkboxes', undefined, [
                // example of init with js object
                checklist__WEBPACK_IMPORTED_MODULE_1__["ChecklistEntry"].init({ 'value': 'checkbox_normal', 'label': 'Normal box' }),
                new checklist__WEBPACK_IMPORTED_MODULE_1__["ChecklistEntry"]('checkbox_disabled', 'MC Hammer box', false, undefined, 'U Can\'t Touch This', true),
                // example of init with .set() chaining
                new checklist__WEBPACK_IMPORTED_MODULE_1__["ChecklistEntry"]('checkbox_warn').set('label', 'Warn box').set('checked', true).set('color', 'warn'),
                new checklist__WEBPACK_IMPORTED_MODULE_1__["ChecklistEntry"]('checkbox_accent', 'Accent box', true, undefined, 'Fancy', false, 'accent'),
            ]),
        ];
        this.entries2 = [
            new checklist__WEBPACK_IMPORTED_MODULE_1__["ChecklistEntry"]('fruits', 'Fruits', undefined, [
                new checklist__WEBPACK_IMPORTED_MODULE_1__["ChecklistEntry"]('banana', 'Banana'),
                new checklist__WEBPACK_IMPORTED_MODULE_1__["ChecklistEntry"]('apple', 'Apple'),
                new checklist__WEBPACK_IMPORTED_MODULE_1__["ChecklistEntry"]('orange', 'Orange'),
                new checklist__WEBPACK_IMPORTED_MODULE_1__["ChecklistEntry"]('other', 'Other...').set('description', 'You ill choose it later'),
            ], undefined),
        ];
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var checklist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! checklist */ "./dist/checklist/fesm5/maarti-mat-checklist.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'demo', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] },
    { path: '**', redirectTo: '/demo', }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                checklist__WEBPACK_IMPORTED_MODULE_4__["ChecklistModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/bryan/workspace/checklist-demo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map