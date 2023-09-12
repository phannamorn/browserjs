"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Checks whether the Safari's Privacy Preserving Ad Measurement setting is on.
 * The setting is on when the value is not undefined.
 * A.k.a. private click measurement, privacy-preserving ad attribution.
 *
 * Unfortunately, it doesn't work in mobile Safari.
 * Probably, it will start working in mobile Safari or stop working in desktop Safari later.
 * We've found no way to detect the setting state in mobile Safari. Help wanted.
 *
 * @see https://webkit.org/blog/11529/introducing-private-click-measurement-pcm/
 * @see https://developer.apple.com/videos/play/wwdc2021/10033
 */
function getPrivateClickMeasurement() {
    var _a;
    const link = document.createElement('a');
    const sourceId = (_a = link.attributionSourceId) !== null && _a !== void 0 ? _a : link.attributionsourceid;
    return sourceId === undefined ? undefined : String(sourceId);
}
exports.default = getPrivateClickMeasurement;
