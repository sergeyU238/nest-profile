import { Field, ObjectType } from '@nestjs/graphql';
import { AbstractModel } from '../../shared/models';
import { Experience } from '../../experience/models/experience.model';
import { Project } from '../../experience/models/project.model';

@ObjectType()
export class Skill extends AbstractModel {
  @Field()
  name: string;
}

@ObjectType()
export class Profile extends AbstractModel {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [Skill])
  skills: Array<Skill>;

  @Field(() => [Experience])
  experience: Array<Experience>;

  @Field(() => [Project])
  projects: Array<Project>;
}
