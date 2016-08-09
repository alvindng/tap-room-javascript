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
    var NewKegComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NewKegComponent = (function () {
                function NewKegComponent() {
                    this.onSubmitNewKeg = new core_1.EventEmitter();
                }
                NewKegComponent.prototype.addKeg = function (userName, userBrand, userPrice, userAlcohol) {
                    this.onSubmitNewKeg.emit({
                        name: userName.value,
                        brand: userBrand.value,
                        price: userPrice.value,
                        alcohol: userAlcohol.value
                    });
                    userName.value = "";
                    userBrand.value = "";
                    userPrice.value = "";
                    userAlcohol.value = "";
                };
                NewKegComponent = __decorate([
                    core_1.Component({
                        selector: 'new-keg',
                        outputs: ['onSubmitNewKeg'],
                        template: "\n    <div>\n      <h3>Add a Keg:</h3>\n      <input placeholder=\"Name\" class=\"col-sm-8 input-lg\" #newName>\n      <input placeholder=\"Brand\" class=\"col-sm-8 input-lg\" #newBrand>\n      <input placeholder=\"Price\" class=\"col-sm-8 input-lg\" #newPrice>\n      <input placeholder=\"Alcohol Content\" class=\"col-sm-8 input-lg\" #newAlcohol>\n      <button class=\"btn btn-lg btn-success\" (click)=\"addKeg(newName, newBrand, newPrice, newAlcohol)\">Add</button>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], NewKegComponent);
                return NewKegComponent;
            }());
            exports_1("NewKegComponent", NewKegComponent);
        }
    }
});
//# sourceMappingURL=new-keg.component.js.map