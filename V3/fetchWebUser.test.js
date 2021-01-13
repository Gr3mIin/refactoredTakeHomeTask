const { fetchWebUser } = require("../src/fetchWebUser");

const USERNAME = "andreswilley";
const USERNAME_NON_EXISTENT = "ashdlkjfioebjkaewuhrlakwjhlarhaew";

describe("TikTok API fetching as expected", () => {
  beforeEach(() => {
    jest.setTimeout(60000);
  });

  // WEB - SIGNATURE
  test("fetchWebUser", async () => {
    const user = await fetchWebUser(USERNAME);
    expect(typeof user).toBe("object");
    expect(user.user.id).toBe("525985");
    expect(user.user.uniqueId).toBe("andreswilley");
    expect(user.stats.followerCount).toBeGreaterThan(5000000);

    const userNonExistent = await fetchWebUser(USERNAME_NON_EXISTENT);
    expect(userNonExistent).toBeFalsy();
  });
});
