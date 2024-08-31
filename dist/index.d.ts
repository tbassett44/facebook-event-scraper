import { EventData, ScrapeOptions } from './types';
export { EventData, ScrapeOptions };
export declare const scrapeFbEvent: (url: string, options?: ScrapeOptions) => Promise<EventData>;
export declare const scrapeFbEventHTML: (html: string, options?: ScrapeOptions) => Promise<EventData>;
export declare const scrapeFbEventFromFbid: (fbid: string, options?: ScrapeOptions) => Promise<EventData>;
