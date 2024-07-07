import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserMusicListeningModuleBase } from "./base/userMusicListening.module.base";
import { UserMusicListeningService } from "./userMusicListening.service";
import { UserMusicListeningController } from "./userMusicListening.controller";
import { UserMusicListeningResolver } from "./userMusicListening.resolver";

@Module({
  imports: [UserMusicListeningModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserMusicListeningController],
  providers: [UserMusicListeningService, UserMusicListeningResolver],
  exports: [UserMusicListeningService],
})
export class UserMusicListeningModule {}
