export enum Fields {
	"Windows",
	"Outlook",
	"Google",
	"CDK",
	"Infostream",
	"Ebiz - DHB",
	"Ebiz - DHK",
	"XTime",
}

export interface FieldType {
	type: Fields;
	username: string;
	password?: string;
}
