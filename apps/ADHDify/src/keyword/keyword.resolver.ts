import * as graphql from "@nestjs/graphql";
import { KeywordResolverBase } from "./base/keyword.resolver.base";
import { Keyword } from "./base/Keyword";
import { KeywordService } from "./keyword.service";

@graphql.Resolver(() => Keyword)
export class KeywordResolver extends KeywordResolverBase {
  constructor(protected readonly service: KeywordService) {
    super(service);
  }
}
