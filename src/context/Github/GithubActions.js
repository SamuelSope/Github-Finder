const GITHUB_URL = "https://api.github.com";

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

//   Get initial users (testing purposes)

export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  const { items } = await response.json();

  return items;
};
