import { EventData, ScrapeOptions } from './types';
export declare const scrapeEvent: (urlFromUser: string, options: ScrapeOptions) => Promise<EventData>;
export declare const scrapeEventHTML: (html: string, options: ScrapeOptions) => Promise<EventData>;
