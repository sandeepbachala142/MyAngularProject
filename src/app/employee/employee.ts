import {Address} from './address'
import {Gender} from '../../enumerations/gender'
export class Employee{
    constructor(private _emplID:number,
		private _firstName:string,
        private _lastName:string,
        private _middleName:string,
        private _age:number,
        private _salary:number,
        private _address:Address,
		private _gender:Gender,
	public newEmp:boolean) {
	}

	public get emplID(): number {
		return this._emplID;
	}

	public set emplID(value: number) {
		this._emplID = value;
	}
    
    public get address(): Address {
		return this._address;
	}

	public set address(value: Address) {
		this._address = value;
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

	public get salary(): number {
		return this._salary;
	}

	public set salary(value: number) {
		this._salary = value;
	}

	public get gender(): Gender {
		return this._gender;
	}

	public set gender(value: Gender) {
		this._gender = value;
	}
	

	
}