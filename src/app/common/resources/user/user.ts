export namespace User {

  export interface FormModel {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }

  export interface Model extends FormModel {
    id: string;
  }
}
