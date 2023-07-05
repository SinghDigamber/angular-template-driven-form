import { Component } from '@angular/core';

export class User {
  public name!: string;
  public email!: string;
  public password!: string;
  public hobbies!: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  model = new User();

  Hobbies: string[] = [
    'Acrobatics',
    'Acting',
    'Animation',
    'Astronomy',
    'Baking',
  ];

  constructor() {}

  onSubmit(form: any) {
    console.log(form.value);
  }
}
