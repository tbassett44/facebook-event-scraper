import { validateAndFormatUrl, fbidToUrl } from './utils/url';
import { EventData, ScrapeOptions } from './types';
import { scrapeEvent,scrapeEventHTML } from './scraper';

export { EventData, ScrapeOptions };

export const scrapeFbEvent = async (
  url: string,
  options: ScrapeOptions = {}
): Promise<EventData> => {
  const formattedUrl = validateAndFormatUrl(url);
  return await scrapeEvent(formattedUrl, options);
};
export const scrapeFbEventHTML = async (
  html: string,
  options: ScrapeOptions = {}
): Promise<EventData> => {
  return await scrapeEventHTML(html, options);
};

export const scrapeFbEventFromFbid = async (
  fbid: string,
  options: ScrapeOptions = {}
): Promise<EventData> => {
  const formattedUrl = fbidToUrl(fbid);
  return await scrapeEvent(formattedUrl, options);
};
