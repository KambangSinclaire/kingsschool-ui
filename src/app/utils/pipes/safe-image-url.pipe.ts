import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeImageUrl'
})
export class SafeImageUrlPipe implements PipeTransform {

  constructor(private readonly sanitizer: DomSanitizer){}
  transform(url: string): unknown {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
