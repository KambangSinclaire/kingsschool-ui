import { TemplateRef, ViewContainerRef } from '@angular/core';
import { CanPerformDirective } from './can-perform.directive';

describe('CanPerformDirective', () => {
  it('should create an instance', () => {
    let data!: TemplateRef<any>;
    let data2!: ViewContainerRef;
    const directive = new CanPerformDirective(data, data2);
    expect(directive).toBeTruthy();
  });
});
