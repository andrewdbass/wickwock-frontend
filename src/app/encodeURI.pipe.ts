
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'encodeTheUrl'
})
export class EncodeTheUrlPipe implements PipeTransform {

  constructor() {}
  transform(url) {
    url = encodeURIComponent(url)
    url = url.replace() ".", "%2E")
    return url
  }
  // replaceAll(str, search, replacement){
  //   if(str.indexOf(serach) === -1){
  //     return str;
  //   }
  //   str.replace(search,replacement)
  //   return this.replaceAll(str, search, replacement)
  // }

}
