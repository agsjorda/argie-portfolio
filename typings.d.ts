interface SanityBody {
	_createdAt: "string";
	_id: "string";
	_rev: "string";
	_updatedAt: "string";
}

interface Image {
	_type: "image";
	asset: {
		_ref: string;
		_type: "reference";
	};
}

export interface PageInfo extends SanityBody {
	_type: "pageInfo";
	name: string;
	address: string;
	backgroundInformation: string;
	email: string;
	role: string;
	heroImage: Image;
	phoneNumber: string;
	profilePic: Image;
}

export interface Social extends SanityBody {
	_type: "social";
	title: string;
	url: string;
}

export interface Technology extends SanityBody {
	_type: "technology";
	title: string;
	image: Image;
	progress: number;
}

export interface Skill extends SanityBody {
	_type: "skill";
	title: string;
	image: Image;
	progress: number;
}

export interface Experience extends SanityBody {
	_type: "experience";
	jobTitle: string;
	companyImage: Image;
	company: string;
	dateStarted: date;
	dateEnded: date;
	isCurrentlyWorkingHere: boolean;
	points: string[];
	technologies: Technology[];
}

export interface Project extends SanityBody {
	_type: "project";
	title: string;
	image: Image;
	linkToBuild: string;
	summary: string;
	technologies: Technology[];
}
