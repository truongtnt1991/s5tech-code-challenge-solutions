import { Request, Response } from "express";
import { ResourceService } from "../services/resource.service";
import { ApiResponse } from "../utils/api-response";
import { ApiError } from "../utils/api-error";
import { AsyncHandler } from "../utils/async-handler";

export class ResourceController {
  private service = new ResourceService();

  create = AsyncHandler(async (req: Request, res: Response) => {
    const { name, description } = req.body;

    if (!name) {
      throw ApiError.validation("Name is required");
    }

    const resource = await this.service.create({ name, description });

    return ApiResponse.created(res, "Resource created successfully", resource);
  });

  list = AsyncHandler(async (req: Request, res: Response) => {
    const { name } = req.query;

    const resources = await this.service.list({
      name: name as string
    });

    return ApiResponse.ok(res, "Resources fetched successfully", resources);
  });

  detail = AsyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params as { id: string };

    const resource = await this.service.detail(id);

    return ApiResponse.ok(res, "Resource fetched successfully", resource);
  });

  update = AsyncHandler(async (req: Request, res: Response) => {
    const { name, description } = req.body;
    const { id } = req.params as { id: string };

    const resource = await this.service.update(id, {
      name,
      description
    });

    return ApiResponse.ok(res, "Resource updated successfully", resource);
  });

  remove = AsyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params as { id: string };

    await this.service.delete(id);

    return ApiResponse.ok(res, "Resource deleted successfully");
  });
}
