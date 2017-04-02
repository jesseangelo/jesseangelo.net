"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var MenuComponent = (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.toggleMenu = function () {
        console.log('clicked');
    };
    MenuComponent.prototype.selectSection = function (id) {
        console.log('id clicked: ' + id);
    };
    return MenuComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MenuComponent.prototype, "sections", void 0);
MenuComponent = __decorate([
    core_1.Component({
        selector: 'main-menu',
        template: "\n    <a (click)=\"toggleMenu()\">\n      <img src='Jesse_logo_80x.png'>\n    </a>\n\n    <ul>\n      <li *ngFor=\"let section of sections\">\n        <a (click)=\"selectSection(section.id)\" >{{ section.name }}</a>\n      </li>\n    </ul>\n\n  ",
    })
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map