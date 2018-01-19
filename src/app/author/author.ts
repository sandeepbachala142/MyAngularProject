import { Gender } from "../../enumerations/gender";
export class Author{
    constructor(public _id:number,
		private _firstName:string,
        private _lastName:string,
        private _middleName:string,
        private _age:number,
        private _gender:Gender,
	public newAuthor:boolean = true) {
    }

	public get firstName(): string {
		return this._firstName;
	}

	public set firstName(value: string) {
		this._firstName = value;
	}

	public get lastName(): string {
		return this._lastName;
	}

	public set lastName(value: string) {
		this._lastName = value;
	}

	public get middleName(): string {
		return this._middleName;
	}

	public set middleName(value: string) {
		this._middleName = value;
	}

	public get age(): number {
		return this._age;
	}

	public set age(value: number) {
		this._age = value;
	}

	public get gender(): Gender {
		return this._gender;
	}

	public set gender(value: Gender) {
		this._gender = value;
	}
    
}