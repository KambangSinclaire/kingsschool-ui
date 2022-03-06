import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllResourcesComponent } from '../components/views/resources/all-resources/all-resources.component';
import { ResourceDetailsComponent } from '../components/views/resources/resource-details/resource-details.component';
import { AddResourceComponent } from '../components/views/resources/add-resource/add-resource.component';
import { UpdateResourceComponent } from '../components/views/resources/update-resource/update-resource.component';
import { AddDocumentComponent } from '../components/views/resources/documents/add-document/add-document.component';



@NgModule({
  declarations: [
    AllResourcesComponent,
    ResourceDetailsComponent,
    AddResourceComponent,
    UpdateResourceComponent,
    AddDocumentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ResourceModule { }
