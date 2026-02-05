import * as graphql from "@nestjs/graphql";
import { OccurrenceResolverBase } from "./base/occurrence.resolver.base";
import { Occurrence } from "./base/Occurrence";
import { OccurrenceService } from "./occurrence.service";

@graphql.Resolver(() => Occurrence)
export class OccurrenceResolver extends OccurrenceResolverBase {
  constructor(protected readonly service: OccurrenceService) {
    super(service);
  }
}
