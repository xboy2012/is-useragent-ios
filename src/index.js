const regex_ios = /\(i[^;]+;( U;)? CPU.+Mac OS X/

export default (userAgent) => {
  return !!userAgent.match(regex_ios)
}
