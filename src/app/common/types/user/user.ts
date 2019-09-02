export namespace User {
  export interface Item {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
  }

  export type List = Item[];

  export interface Response {
    usersAll: List;
  }
}
