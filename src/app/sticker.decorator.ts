export function Sticker(value) {
    return function decorator(target) {
      target.prototype.sticker = value;
      console.log('Our decorated class:', target);
   }
}