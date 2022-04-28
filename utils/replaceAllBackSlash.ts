export function replaceAllBackSlash(targetStr: string) {
  var index = targetStr.indexOf("\\");
  while (index >= 0) {
    targetStr = targetStr.replace("\\", "");
    index = targetStr.indexOf("\\");
  }
  return targetStr;
}
