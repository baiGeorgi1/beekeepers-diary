import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, tap } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { emailValidator } from 'src/app/shared/utils/email-validator';
import { matchPasswords } from 'src/app/shared/utils/match-passwords';
import { Profile, UserForAuth } from 'src/app/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user!: UserForAuth;

  editMode: boolean = false;

  form = this.fb.group({
    email: ['', [Validators.required, emailValidator()]],
    username: ['', [Validators.required, Validators.minLength(4)]],
    passGroup: this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(4)]],
        repeatPassword: ['', [Validators.required, Validators.minLength(4)]],
      },
      {
        validators: [matchPasswords('password', 'repeatPassword')],
      }
    ),
  });
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  profile: Profile = {
    email: '',
    username: '',
  };

  ngOnInit(): void {
    console.log(this.user);
    const { email, username, password } = this.user;

    this.profile = {
      email,
      username,
    };
    this.form.setValue({
      email,
      username,
      passGroup: {
        password,
        repeatPassword: password,
      },
    });
  }
  onEdit(): void {
    this.editMode = true;
  }
  cancel(): void {
    this.editMode = false;
  }

  onSave(): void {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    // const {
    //   email,
    //   username,
    //   passGroup: { password, repeatPassword } = {},
    // } = this.form.value;

    // this.userService.userSubscribtion = this.userService
    //   .register(email!, username!, password!, repeatPassword!)
    //   .subscribe({
    //     next: (userData) => {
    //       this.userService.setUser(userData);
    //       //this.router.navigate(['/dashboard']);
    //     },
    //     error: () => {
    //       //todo
    //     },
    //   });
  }
}
