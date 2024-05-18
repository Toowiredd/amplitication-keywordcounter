/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { KeywordWhereUniqueInput } from "../../keyword/base/KeywordWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class KeywordUpdateManyWithoutDetectionsInput {
  @Field(() => [KeywordWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [KeywordWhereUniqueInput],
  })
  connect?: Array<KeywordWhereUniqueInput>;

  @Field(() => [KeywordWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [KeywordWhereUniqueInput],
  })
  disconnect?: Array<KeywordWhereUniqueInput>;

  @Field(() => [KeywordWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [KeywordWhereUniqueInput],
  })
  set?: Array<KeywordWhereUniqueInput>;
}

export { KeywordUpdateManyWithoutDetectionsInput as KeywordUpdateManyWithoutDetectionsInput };
