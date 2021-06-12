const regex_ios = /\(i[^;]+;( U;)? CPU.+Mac OS X/

export default (userAgent) => {
  return regex_ios.test(userAgent);
}
