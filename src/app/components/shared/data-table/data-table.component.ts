import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, OnChanges {

    dataDialog!: boolean;

    @Input('tableHeadings') headings: string[] = [];
    formatedHeadings: any = [];
    sortHeaderItems:string[] = [];

    @Input('tableData') tableData: any[] = [];

    @Input('formFields') formFields: any = [];

    @Input('options') options: { name: string, plural:string } = { name: 'course',plural:'courses' };
    formControls: any = {};

    @Input('selectOptions') selectOptions: any[] = [];

    // OUTPUT EVENTS
    @Output('create') create: EventEmitter<any> = new EventEmitter();
    @Output('edit') edit: EventEmitter<any> = new EventEmitter();
    @Output('delete') delete: EventEmitter<any> = new EventEmitter();
    @Output('view') view: EventEmitter<any> = new EventEmitter();

    possibleImgElements = ['logo', 'profile photo', 'image', 'img url'];

    possibleDates = ['createdat', 'updatedat', 'deleteat', 'startdate', 'enddate'];

    Delete = 'Delete';

    selectedItems!: any[];

    submitted!: boolean;
    editable!: boolean;


    constructor(private messageService: MessageService, private confirmationService: ConfirmationService) { }

    ngOnChanges(changes: SimpleChanges): void {

        this.headings = this.headings.filter((header: string) => header.toLowerCase() !== 'school id' && header.toLowerCase() !== 'id' && header.toLowerCase() !== 'academic year');
        
        this.sortHeaderItems = this.headings.map(header=>header.replace(' ','_'));
        

        this.formatedHeadings = this.headings.map((head) => {
            if (head.includes(' ')) {
                head = head.replace(' ', '_');
            }
            return { field: head, header: head }
        });

        for (let i = 0; i < this.formFields.length; i++) {
            this.formControls[this.formFields[i].field] = '';
        }
    }

    ngOnInit() { }

    openNew() {
        this.formControls = {};
        this.submitted = false;
        this.dataDialog = true;
    }

    hideDialog() {
        this.dataDialog = false;
        this.submitted = false;
    }

    deleteSelectedItems() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected items?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.tableData = this.tableData.filter(val => !this.selectedItems.includes(val));
                this.tableData = [];
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Items Deleted', life: 3000 });
            }
        });
    }

    editItem(formControls: any) {
        this.editable = true;
        // emit edit event
        this.edit.emit(formControls);
        this.formControls = { ...formControls };
        this.dataDialog = true;
    }

    deleteItem(formControls: any) {

        console.log('item to delete ', formControls);
        
        // emit delete event
        this.delete.emit(formControls);

        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + formControls?.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.tableData = this.tableData.filter(val => val.id !== formControls.id);
                this.formControls = {};
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Item Deleted', life: 3000 });
            }
        });
    }

    saveItem() {

        this.submitted = true;

        // emit creation event
        this.create.emit(this.formControls);

        // if (this.formControls.name.trim()) {
        //     if (this.formControls.id) {
        //         this.tableData[this.findIndexById(this.formControls.id)] = this.formControls;
        //         this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Item Updated', life: 3000 });
        //     }
        //     else {
        //         this.formControls.id = this.createId();
        //         this.formControls.image = 'product-placeholder.svg';
        //         this.tableData.push(this.formControls);
        //         this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Item Created', life: 3000 });
        //     }

        //     this.tableData = [...this.tableData];
        //     this.dataDialog = false;
        //     this.formControls = {};
        // }
    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.tableData.length; i++) {
            if (this.tableData[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }
}
