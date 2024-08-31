import { fetchEvent } from './utils/network';
import * as htmlParser from './utils/htmlParser';
import { EventData, ScrapeOptions } from './types';

export const scrapeEvent = async (
  urlFromUser: string,
  options: ScrapeOptions
): Promise<EventData> => {
  const dataString = await fetchEvent(urlFromUser, options.proxy);

  // NOTE: If we want to pick up mutli-date events (technically this is just multiple events linked together), we can look at the comet_neighboring_siblings key

  const {
    id,
    name,
    photo,
    video,
    isOnline,
    url,
    startTimestamp,
    formattedDate,
    siblingEvents,
    parentEvent
  } = htmlParser.getBasicData(dataString);

  const { endTimestamp, timezone } = htmlParser.getEndTimestampAndTimezone(
    dataString,
    startTimestamp
  );

  let location = null;
  let onlineDetails = null;
  if (isOnline) {
    onlineDetails = htmlParser.getOnlineDetails(dataString);
  } else {
    location = htmlParser.getLocation(dataString);
  }

  const description = htmlParser.getDescription(dataString);
  const ticketUrl = htmlParser.getTicketUrl(dataString);

  const hosts = htmlParser.getHosts(dataString);
  const { usersResponded } = htmlParser.getUserStats(dataString);

  return {
    id,
    name,
    description,
    location,
    photo,
    video,
    isOnline,
    url,
    startTimestamp,
    endTimestamp,
    formattedDate,
    timezone,
    onlineDetails,
    hosts,
    ticketUrl,
    siblingEvents,
    parentEvent,
    usersResponded
  };
};
export const scrapeEventHTML = async (
  html: string,
  options: ScrapeOptions
): Promise<EventData> => {
  const dataString = html;

  // NOTE: If we want to pick up mutli-date events (technically this is just multiple events linked together), we can look at the comet_neighboring_siblings key

  const {
    id,
    name,
    photo,
    video,
    isOnline,
    url,
    startTimestamp,
    formattedDate,
    siblingEvents,
    parentEvent
  } = htmlParser.getBasicData(dataString);

  const { endTimestamp, timezone } = htmlParser.getEndTimestampAndTimezone(
    dataString,
    startTimestamp
  );

  let location = null;
  let onlineDetails = null;
  if (isOnline) {
    onlineDetails = htmlParser.getOnlineDetails(dataString);
  } else {
    location = htmlParser.getLocation(dataString);
  }

  const description = htmlParser.getDescription(dataString);
  const ticketUrl = htmlParser.getTicketUrl(dataString);

  const hosts = htmlParser.getHosts(dataString);
  const { usersResponded } = htmlParser.getUserStats(dataString);

  return {
    id,
    name,
    description,
    location,
    photo,
    video,
    isOnline,
    url,
    startTimestamp,
    endTimestamp,
    formattedDate,
    timezone,
    onlineDetails,
    hosts,
    ticketUrl,
    siblingEvents,
    parentEvent,
    usersResponded
  };
};
