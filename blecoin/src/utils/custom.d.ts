/**
 * 뭔지는 정확히 모르지만
 * typescript파일에 svg파일 import시키기 위해 사용
 */

declare module "*.svg" {
  const content: any;
  export default content;
}
