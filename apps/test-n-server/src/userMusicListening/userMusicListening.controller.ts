import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserMusicListeningService } from "./userMusicListening.service";
import { UserMusicListeningControllerBase } from "./base/userMusicListening.controller.base";

@swagger.ApiTags("userMusicListenings")
@common.Controller("userMusicListenings")
export class UserMusicListeningController extends UserMusicListeningControllerBase {
  constructor(
    protected readonly service: UserMusicListeningService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
