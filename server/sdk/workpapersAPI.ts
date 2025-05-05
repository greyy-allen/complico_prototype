import { v4 as uuidv4 } from "uuid";

type User = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
};

type Region = "australia" | "newZealand" | "unitedKingdom" | "republicOfIreland"
type Tag = string;
type WorkpaperType = "compliance" | "itr" | "bas" | "taxPlanning" | "fbt";
type EntityType = "company" | "individual" | "partnership" | "trust" | string;

type BaseContent = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy: User;
    publishedAt: Date;
    publishedBy: User;
    region: Region[];
    name: string;
    description: string;
    tags :Tag[];
    workpaperType?: WorkpaperType[];
    entityType?: EntityType[];
};

type CalculationContent = BaseContent & { type: "calculation" };
type ChecklistContent = BaseContent & { type: "checklist" };
type ProcedureContent = BaseContent & { type: "procedure" };
type ReportContent = BaseContent & { type: "report" };
type OtherSchedulesContent = BaseContent & { type: "otherSchedules" };

export type Content =
    | CalculationContent
    | ChecklistContent
    | ProcedureContent
    | ReportContent
    | OtherSchedulesContent;

export class WorkpapersAPI {
    private mockUser: User = {
        id: "user-123",
        firstName: "Jane",
        lastName: "Doe",
        email: "jane.doe@example.com"
    };

    private generateMockContent(): Content[] {
        const now = new Date();
        const types = ["calculation", "checklist", "procedure", "report", "otherSchedules"] as const;

        return Array.from({ length: 5 }, (_, i) => ({
            id: uuidv4(),
            createdAt: now,
            updatedAt: now,
            createdBy: this.mockUser,
            publishedAt: now,
            publishedBy: this.mockUser,
            region: ["australia"],
            name: `Template ${i + 1}`,
            description: `This is template ${i + 1} for testing.`,
            tags: ["finance", "tax"],
            workpaperType: ["compliance"],
            entityType: ["company"],
            type: types[i % types.length]
        })) as Content[];
    };

    public getMockContent(): Content[] {
        return this.generateMockContent();
    }
}

const workpapersAPI = new WorkpapersAPI();
export default workpapersAPI;