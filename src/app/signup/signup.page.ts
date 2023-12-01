import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AutheticationService } from '../authetication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  regForm: FormGroup

  constructor(
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public authService: AutheticationService
  ) { }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      fullname: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern("/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-8]).{8,}")
        ],
      ],
    });
  }

  get errorControl() {
    return this.regForm?.controls;
  }

  async signUp() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    if (this.regForm?.valid) {
      // const user = await this.authService.registerUser(email,password)
    }
  }
}
