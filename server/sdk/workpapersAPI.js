import { v4 as uuidv4 } from "uuid";

class WorkpapersAPI {
    constructor() {
        this.mockUser = {
            id: "user-123",
            firstName: "Jane",
            lastName: "Doe",
            email: "jane.doe@example.com"
        };
    }

    generateMockContent() {
        const now = new Date();
        const types = ["calculation", "checklist", "procedure", "report", "otherSchedules"];

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
        }));
    }

    getMockContent() {
        return this.generateMockContent();
    }
}

const workpapersAPI = new WorkpapersAPI();
export default workpapersAPI;
