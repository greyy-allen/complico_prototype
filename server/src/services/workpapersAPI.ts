import { Op } from "sequelize";
import { v4 as uuidv4 } from "uuid";
import Workpaper from "../models/Workpaper.js";
import Subscription from "../models/Subscription.js";

type Content = {
  workpaperId: string;
  name: string;
  description: string | null;
  tags: string[] | null;
  region: string[];
};

class WorkpapersAPI {
  async getContent(firmId: string, filters?: unknown): Promise<{ totalItems: number; data: Content[] }> {
    return new Promise(async (resolve) => {
      setTimeout(async () => {
        const subscriptions = await Subscription.findAll({
          where: { firmId },
          include: [{ model: Workpaper }]
        });

        const data: Content[] = subscriptions.map((sub) => {
          const wp = (sub as any).Workpaper as Workpaper;
          return {
            workpaperId: wp.workpaperId,
            name: wp.name,
            description: wp.description,
            tags: wp.tags,
            region: wp.region
          };
        });

        resolve({
          totalItems: data.length,
          data
        });
      }, 500);
    });
  };

  async subscribeToContent(
    firmId: string,
    subscriberId: string,
    contentId: string
  ): Promise<{ result: 'success' | 'error'; error?: string }> {
    return new Promise(async (resolve) => {
      setTimeout(async () => {
        try {
          const exists = await Subscription.findOne({
            where: {
              firmId,
              workpaperId: contentId,
              subscriberId
            }
          });

          if (exists) {
            return resolve({ result: "error", error: "Already subscribed" });
          }

          await Subscription.create({
            firmId,
            subscriberId,
            workpaperId: contentId,
            status: 'active'
          });

          resolve({ result: "success" });
        } catch (err: any) {
          resolve({ result: "error", error: err.message });
        }
      }, 500);
    });
  }
}

export default WorkpapersAPI;
