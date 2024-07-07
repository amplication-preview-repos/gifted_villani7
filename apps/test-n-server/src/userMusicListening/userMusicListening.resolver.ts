import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserMusicListeningResolverBase } from "./base/userMusicListening.resolver.base";
import { UserMusicListening } from "./base/UserMusicListening";
import { UserMusicListeningService } from "./userMusicListening.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserMusicListening)
export class UserMusicListeningResolver extends UserMusicListeningResolverBase {
  constructor(
    protected readonly service: UserMusicListeningService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
