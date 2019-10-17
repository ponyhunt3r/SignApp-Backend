export class CreateCourseDto {
    readonly name: string;
    description: string;
    maxMembers: number;
    noOfmembers: number = 5;
    members: Array<String>;
  }