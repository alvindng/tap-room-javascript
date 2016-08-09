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
    var KegComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            KegComponent = (function () {
                function KegComponent() {
                }
                KegComponent.prototype.buyPint = function () {
                    if (this.keg.pints === 0) {
                        return this.keg.pints;
                    }
                    else {
                        this.keg.pints -= 1;
                    }
                };
                KegComponent = __decorate([
                    core_1.Component({
                        selector: 'keg-display',
                        inputs: ['keg'],
                        template: "\n  <div>\n    <h4>{{ keg.brand }}, {{ keg.name }}</h4>\n    <h5>{{ keg.price }}, {{ keg.alcohol }}</h5>\n    <h6>Pints Left: {{ keg.pints }}</h6>\n    <button (click)=\"buyPint()\" class=\"btn btn-success\">Buy Pint</button>\n  </div><br>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], KegComponent);
                return KegComponent;
            }());
            exports_1("KegComponent", KegComponent);
        }
    }
});
//# sourceMappingURL=keg.component.js.map