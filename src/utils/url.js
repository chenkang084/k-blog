export const getUrlPath = pathname => {
  if (!pathname) {
    return pathname;
  }

  const firstLevel = pathname.substr(1).indexOf("/");

  if (firstLevel > 0) {
    return pathname.substr(1).substring(0, firstLevel);
  } else {
    return pathname.substr(1);
  }
};
