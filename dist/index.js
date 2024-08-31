"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrapeFbEventFromFbid = exports.scrapeFbEventHTML = exports.scrapeFbEvent = void 0;
const url_1 = require("./utils/url");
const scraper_1 = require("./scraper");
const scrapeFbEvent = (url_2, ...args_1) => __awaiter(void 0, [url_2, ...args_1], void 0, function* (url, options = {}) {
    const formattedUrl = (0, url_1.validateAndFormatUrl)(url);
    return yield (0, scraper_1.scrapeEvent)(formattedUrl, options);
});
exports.scrapeFbEvent = scrapeFbEvent;
const scrapeFbEventHTML = (html_1, ...args_1) => __awaiter(void 0, [html_1, ...args_1], void 0, function* (html, options = {}) {
    return yield (0, scraper_1.scrapeEventHTML)(html, options);
});
exports.scrapeFbEventHTML = scrapeFbEventHTML;
const scrapeFbEventFromFbid = (fbid_1, ...args_1) => __awaiter(void 0, [fbid_1, ...args_1], void 0, function* (fbid, options = {}) {
    const formattedUrl = (0, url_1.fbidToUrl)(fbid);
    return yield (0, scraper_1.scrapeEvent)(formattedUrl, options);
});
exports.scrapeFbEventFromFbid = scrapeFbEventFromFbid;
