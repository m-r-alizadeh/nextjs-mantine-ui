export const FB_URL_REGEX =
  /(?:https?:\/\/)?(?:www\.|m\.|mobile\.|touch\.|mbasic\.)?(?:facebook\.com|fb(?:\.me|\.com))\/(?!$)(?:(?:\w)*#!\/)?(?:pages\/|pg\/)?(?:photo\.php\?fbid=)?(?:[\w\-]*\/)*?(?:\/)?(?:profile\.php\?id=)?([^\/?&\s]*)(?:\/|&|\?)?.*/;

export function isValidFbUrl(url: any) {
  if (typeof url !== "string") {
    return false;
  }

  return FB_URL_REGEX.test(url);
}
