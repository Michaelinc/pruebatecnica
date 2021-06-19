import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService, MessageService]
})
export class UserComponent implements OnInit {

  formGroup!: FormGroup;

  users: User[] = [];

  cols: { field: string, header: string }[] = [];

  activateDialog: boolean = false;

  constructor(private userService: UserService,
    private formBuilder: FormBuilder,
    private messageService: MessageService) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.cols = [
      { field: 'name', header: 'Nombre' },
      { field: 'doc', header: 'Documento' },
      { field: 'profile', header: 'Perfil' },
    ];
    this.loadUsers();
  }

  buildForm(): void {
    this.formGroup = this.formBuilder.group({
      id: [null],
      name: ["", Validators.required],
      doc: ["", Validators.required],
      profile: ["", Validators.required]
    });
  }

  loadUsers() {
    this.userService.getUsers().subscribe(
      response => {
        if (response.data != null) {
          this.users = response.data;
        }
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error!', detail: error });
      }
    )
  }


  showDialogToAdd() {
    this.activateDialog = true;
  }

  cancel() {
    this.activateDialog = false;
    this.buildForm();
  }

  onSave() {
    let user = {
      "id": undefined,
      "name": this.formGroup.get('name')?.value,
      "doc": this.formGroup.get('doc')?.value,
      "profile": this.formGroup.get('profile')?.value
    }
    this.userService.saveUser(user).subscribe(
      data => {
        user.id = data.pk;
        this.users.push(user);
        this.cancel();
        this.messageService.add({ severity: 'success', summary: 'Exito!', detail: 'Se guardo correctamente el usuario con el id : ' + user.id });
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error!', detail: error });
      }
    )
  }

}
