export const writeCookie = (key, value, days = 30) => {
  let date = new Date();

  date.setDate(date.getDate() + days);

  const cookie = (document.cookie =
    key + "=" + value + "; expires" + date.toGMTString() + "; path=/");

  console.log("cookie in writeCookie: ", cookie);

  return cookie;
};

export const getTokenFromCookie = (cookieName) => {
  const expression = new RegExp(`(?<=${cookieName}=)[^;]*`);
  console.log("expression in write cookie, ", expression);
  const cookie = document.cookie.match(expression)[0];
  console.log("cookie in getTokenFromCookie: ", cookie);

  return cookie;
};
