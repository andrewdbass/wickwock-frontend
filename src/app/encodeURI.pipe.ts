
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'encodeTheUrl'
})
export class EncodeTheUrlPipe implements PipeTransform {

  constructor() {}
  transform(url) {
    //This is super hacky but it works
    
    // url = encodeURIComponent(url);
    url = url.replace( ".", "***");
    url = url.replace( ".", "***");
    url = url.replace( ".", "***");
    url = url.replace( ".", "***");
    url = url.replace( ".", "***");
    return url;
  }

}
