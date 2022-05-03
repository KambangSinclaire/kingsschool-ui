import { Directive, ElementRef, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { IUser } from '../../interfaces/user.interface';
import { LocalStore } from '../../utils/localstore.utils';

@Directive({
  selector: '[CanPerformAction]',

})
export class CanPerformDirective implements OnChanges {


  //   constructor(private el: ElementRef) {
  //     this.el.nativeElement.style.backgroundColor = 'yellow';
  //  }

  @Input() CanPerformAction: any;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (this.checkUserPermission(this.CanPerformAction)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }



  checkUserPermission(action: string) {
    let user: IUser = LocalStore.getItem("user", {});
    let hasPermission: boolean = false;
    if (user) {
      user.permissions.find(permission => {
        if (permission.toUpperCase() === action.toUpperCase()) {
          hasPermission = true;
          return;
        }
      })
    }
    return hasPermission;
  }
}