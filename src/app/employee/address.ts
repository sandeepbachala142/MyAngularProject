export class Address{
    constructor(private _city:string,
        private _state:string,
        private _street:string,
        private _zipcode:Number) {
	}
    
	public get city(): string {
		return this._city;
	}

	public set city(value: string) {
		this._city = value;
	}

	public get state(): string {
		return this._state;
	}

	public set state(value: string) {
		this._state = value;
	}

	public get street(): string {
		return this._street;
	}

	public set street(value: string) {
		this._street = value;
	}

	public get zipcode(): Number {
		return this._zipcode;
	}

	public set zipcode(value: Number) {
		this._zipcode = value;
	}

}