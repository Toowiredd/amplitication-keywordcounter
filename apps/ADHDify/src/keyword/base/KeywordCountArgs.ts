/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { KeywordWhereInput } from "./KeywordWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class KeywordCountArgs {
  @ApiProperty({
    required: false,
    type: () => KeywordWhereInput,
  })
  @Field(() => KeywordWhereInput, { nullable: true })
  @Type(() => KeywordWhereInput)
  where?: KeywordWhereInput;
}

export { KeywordCountArgs as KeywordCountArgs };