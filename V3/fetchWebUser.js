const TikTokScraper = require("tiktok-scraper");
const { logError, logWarning } = require("./log");

const fetchTktkData = async username => {
  try {
    const data = await TikTokScraper.getUserProfileInfo(username);

    return data;
  } catch (error) {
    await logWarning(
      `handleFetchLeads - fetchWebUserTktkSigRaw, user does not exist for ${username}`
    );
    await logError(`Error handleFetchLeads - fetchTktkData - ${error.stack}`);
    return null;
  }
};

const fetchWebUser = async username => {
  try {
    const webTagInfoRaw = await fetchTktkData(username);

    return webTagInfoRaw;
  } catch (error) {
    await logError(`Error handleFetchLeads - fetchWebUser - ${error.stack}`);
    return {};
  }
};

module.exports = { fetchWebUser };
