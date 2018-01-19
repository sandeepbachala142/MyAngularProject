import { SkillLevel } from '../../enumerations/skillLevel';
export class Course{

    constructor(private _id:number,
        private _name:string,
		private _skillLevel:SkillLevel,
        private _price:number,
        public newCourse:boolean) {
	}

	


	public get name(): string {
		return this._name;
	}

	public set name(value: string) {
		this._name = value;
	}

	public get id(): number {
		return this._id;
	}

	public set id(value: number) {
		this._id = value;
	}

	public get skillLevel(): SkillLevel {
		return this._skillLevel;
	}

	public set skillLevel(value: SkillLevel) {
		this._skillLevel = value;
	}

	public get price(): number {
		return this._price;
	}

	public set price(value: number) {
		this._price = value;
	}
	
}