System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var EditKegDetailsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            EditKegDetailsComponent = (function () {
                function EditKegDetailsComponent() {
                }
                EditKegDetailsComponent = __decorate([
                    core_1.Component({
                        selector: 'edit-keg-details',
                        inputs: ['keg'],
                        template: "\n    <div>\n      <h3>Edit Keg:</h3>\n      <label>Name:</label>\n      <input [(ngModel)]=\"keg.name\" class=\"col-sm-8 input-lg\" />\n      <label>Brand:</label>\n      <input [(ngModel)]=\"keg.brand\" class=\"col-sm-8 input-lg\" />\n      <label>Price:</label>\n      <input [(ngModel)]=\"keg.price\" class=\"col-sm-8 input-lg\" />\n      <label>Alcohol:</label>\n      <input [(ngModel)]=\"keg.alcohol\" class=\"col-sm-8 input-lg\" />\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], EditKegDetailsComponent);
                return EditKegDetailsComponent;
            }());
            exports_1("EditKegDetailsComponent", EditKegDetailsComponent);
        }
    }
});
//# sourceMappingURL=edit-keg-details.component.js.map