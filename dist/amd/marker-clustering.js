var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-dependency-injection", "./configure"], function (require, exports, aurelia_dependency_injection_1, configure_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MarkerClustering = (function () {
        function MarkerClustering(config) {
            this.config = config;
        }
        MarkerClustering.prototype.isEnabled = function () {
            return this.config.get('markerCluster') && this.config.get('markerCluster').enable;
        };
        MarkerClustering.prototype.clearMarkers = function () {
            if (this.markerClusterer) {
                this.markerClusterer.clearMarkers();
            }
        };
        MarkerClustering.prototype.loadScript = function () {
            if (!this.isEnabled()) {
                return;
            }
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = this.config.get('markerCluster').src;
            document.body.appendChild(script);
        };
        MarkerClustering.prototype.renderClusters = function (map, markers) {
            if (!this.isEnabled()) {
                return;
            }
            this.markerClusterer = new window.MarkerClusterer(map, markers, this.config.get('markerCluster'));
        };
        MarkerClustering = __decorate([
            aurelia_dependency_injection_1.inject(configure_1.Configure),
            __metadata("design:paramtypes", [Object])
        ], MarkerClustering);
        return MarkerClustering;
    }());
    exports.MarkerClustering = MarkerClustering;
});
//# sourceMappingURL=marker-clustering.js.map