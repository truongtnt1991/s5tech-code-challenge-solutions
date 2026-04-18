import { prisma } from "../utils/prisma";

export class ResourceService {
  async create(data: { name: string; description?: string }) {
    return prisma.resource.create({
      data: {
        name: data.name,
        description: data.description
      }
    });
  }

  async list(query?: { name?: string }) {
    return prisma.resource.findMany({
      where: query?.name
        ? {
            name: {
              contains: query.name
            }
          }
        : undefined,
      orderBy: {
        createdAt: "desc"
      }
    });
  }

  async detail(id: string) {
    const resource = await prisma.resource.findUnique({
      where: { id }
    });

    if (!resource) {
      throw new Error("Resource not found");
    }

    return resource;
  }

  async update(id: string, data: { name?: string; description?: string }) {
    return prisma.resource.update({
      where: { id },
      data
    });
  }

  async delete(id: string) {
    await prisma.resource.delete({
      where: { id }
    });

    return true;
  }
}
