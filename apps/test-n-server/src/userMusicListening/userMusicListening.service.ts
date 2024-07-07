import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserMusicListeningServiceBase } from "./base/userMusicListening.service.base";

@Injectable()
export class UserMusicListeningService extends UserMusicListeningServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
