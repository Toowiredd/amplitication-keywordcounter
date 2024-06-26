/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Keyword } from "./Keyword";
import { KeywordCountArgs } from "./KeywordCountArgs";
import { KeywordFindManyArgs } from "./KeywordFindManyArgs";
import { KeywordFindUniqueArgs } from "./KeywordFindUniqueArgs";
import { CreateKeywordArgs } from "./CreateKeywordArgs";
import { UpdateKeywordArgs } from "./UpdateKeywordArgs";
import { DeleteKeywordArgs } from "./DeleteKeywordArgs";
import { KeywordService } from "../keyword.service";
@graphql.Resolver(() => Keyword)
export class KeywordResolverBase {
  constructor(protected readonly service: KeywordService) {}

  async _keywordsMeta(
    @graphql.Args() args: KeywordCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Keyword])
  async keywords(
    @graphql.Args() args: KeywordFindManyArgs
  ): Promise<Keyword[]> {
    return this.service.keywords(args);
  }

  @graphql.Query(() => Keyword, { nullable: true })
  async keyword(
    @graphql.Args() args: KeywordFindUniqueArgs
  ): Promise<Keyword | null> {
    const result = await this.service.keyword(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Keyword)
  async createKeyword(
    @graphql.Args() args: CreateKeywordArgs
  ): Promise<Keyword> {
    return await this.service.createKeyword({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Keyword)
  async updateKeyword(
    @graphql.Args() args: UpdateKeywordArgs
  ): Promise<Keyword | null> {
    try {
      return await this.service.updateKeyword({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Keyword)
  async deleteKeyword(
    @graphql.Args() args: DeleteKeywordArgs
  ): Promise<Keyword | null> {
    try {
      return await this.service.deleteKeyword(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
