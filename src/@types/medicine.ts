export type Medicine = {
	id: string;
	name: string;
	description: string;
	doses: string[];
	vias: string[];
	posologies: string[];

	createdAt: Date;
	updatedAt: Date | null;
};
