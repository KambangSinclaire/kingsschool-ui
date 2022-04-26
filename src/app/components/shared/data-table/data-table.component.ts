import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { FileHandler } from 'src/app/utils/file-handler.utils';

@Component({
    selector: 'app-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, OnChanges {

    dataDialog!: boolean;

    @Input('tableHeadings') headings: string[] = [];
    formatedHeadings: any = [];
    sortHeaderItems: string[] = [];

    @Input('tableData') tableData: any[] = [];

    @Input('formFields') formFields: any = [];

    @Input('options') options: { name: string, plural: string } = { name: 'course', plural: 'courses' };
    formControls: any = {};

    @Input('selectOptions') selectOptions: any[] = [];

    // OUTPUT EVENTS
    @Output('createOrEdit') createOrEdit: EventEmitter<any> = new EventEmitter();
    @Output('edit') edit: EventEmitter<any> = new EventEmitter();
    @Output('delete') delete: EventEmitter<any> = new EventEmitter();
    @Output('view') view: EventEmitter<any> = new EventEmitter();

    possibleImgElements = ['logo', 'profile_photo', 'image', 'img url'];

    possibleDates = ['createdat', 'updatedat', 'deleteat', 'startdate', 'enddate', 'last_login'];

    Delete = 'Delete';

    selectedItems!: any[];
    selectedFiles: any[] = [];
    submitted!: boolean;
    editable!: boolean;
    hasfileInput!: boolean;
    itemSize = 10



    constructor(
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private fileUpload: FileHandler
    ) { }

    ngOnChanges(changes: SimpleChanges): void {

        if (this.headings && this.headings.length > 1) {
            this.headings = this.headings.filter((header: string) => {
                return header.toLowerCase() !== 'school id' &&
                    header.toLowerCase() !== 'id' &&
                    header.toLowerCase() !== 'academic year' &&
                    header.toLowerCase() !== 'password' &&
                    header.toLowerCase() !== 'role'
            });

            this.sortHeaderItems = this.headings.map(header => header.replace(' ', '_'));

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
        this.selectedFiles = [];
    }

    deleteSelectedItems() {
        this.confirmationService.confirm({
            message: `Are you sure you want to delete the selected ${this.options.plural}?`,
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.tableData = this.tableData.filter(val => !this.selectedItems.includes(val));
                this.tableData = [];
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: `${this.options.plural} deleted`, life: 3000 });
            }
        });
    }

    editItem(formControls: any) {
        this.editable = true;
        formControls.edit = true;
        this.formControls = { ...formControls };
        this.dataDialog = true;
    }

    deleteItem(formControls: any) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete this ' + this.options.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.delete.emit(formControls);
                this.tableData = this.tableData.filter(val => val.id !== formControls.id);
                this.formControls = {};
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: `${this.options.name} deleted`, life: 3000 });
            }
        });
    }

    fileSelect(event: any) {
        this.selectedFiles = event.target.files[0].name;
        this.hasfileInput = true;
    }

    saveItem() {
        this.submitted = true;

        // for file uploads
        if (this.hasfileInput) {
            const formData = new FormData();
            if (this.selectedFiles.length === 1) {
                formData.append('file', this.selectedFiles[0].fileData);
                this.fileUpload.fileUpload(formData).subscribe(file => {
                    this.formControls[this.selectedFiles[0].field] = file.image;
                    this.createOrEdit.emit(this.formControls);
                });
            }
        } else {
            // No files to upload, sooo emit createOrEdit event
            this.createOrEdit.emit(this.formControls);
        }
    }

    fileHandler(event: any, field: any) {
        const files = Array.from(event.currentFiles);
        this.hasfileInput = true;
        this.selectedFiles.push({ file: this.fileUpload.single(files), field,fileData:files[0] });
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
