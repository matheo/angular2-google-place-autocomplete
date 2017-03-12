System.register(["@angular/core", "@angular/forms"], function (exports_1, context_1) {
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
    var __moduleName = context_1 && context_1.id;
    var core_1, forms_1, GoogleplaceDirective, _a, _b, _c;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }
        ],
        execute: function () {
            GoogleplaceDirective = (function () {
                function GoogleplaceDirective(el, model) {
                    var _this = this;
                    this.model = model;
                    this.setAddress = new core_1.EventEmitter();
                    this._el = el.nativeElement;
                    this.modelValue = this.model;
                    var input = this._el;
                    this.autocomplete = new google.maps.places.Autocomplete(input, {
                        types: ['(cities)']
                    });
                    google.maps.event.addListener(this.autocomplete, 'place_changed', function () {
                        var place = _this.autocomplete.getPlace();
                        _this.invokeEvent(place);
                    });
                }
                GoogleplaceDirective.prototype.invokeEvent = function (place) {
                    this.setAddress.emit(place);
                };
                GoogleplaceDirective.prototype.onInputChange = function () {
                };
                return GoogleplaceDirective;
            }());
            __decorate([
                core_1.Output(),
                __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
            ], GoogleplaceDirective.prototype, "setAddress", void 0);
            GoogleplaceDirective = __decorate([
                core_1.Directive({
                    selector: '[googleplace]',
                    providers: [forms_1.NgModel],
                    host: {
                        '(input)': 'onInputChange()'
                    }
                }),
                __metadata("design:paramtypes", [typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object, typeof (_c = typeof forms_1.NgModel !== "undefined" && forms_1.NgModel) === "function" && _c || Object])
            ], GoogleplaceDirective);
            exports_1("GoogleplaceDirective", GoogleplaceDirective);
        }
    };
});
//# sourceMappingURL=googleplace.directive.js.map