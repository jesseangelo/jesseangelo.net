"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var section_1 = require("./section");
var AppComponent = (function () {
    function AppComponent() {
        this.sections = [
            new section_1.Section(0, 'Home'),
            new section_1.Section(1, 'Work'),
            new section_1.Section(2, 'Skills'),
            new section_1.Section(3, 'Experience'),
            new section_1.Section(4, 'About')
        ];
        this.mySection = this.sections[0];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <main-menu> </main-menu>\n  <content> </content>\n  Current section {{mySection.name}}\n  ",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map