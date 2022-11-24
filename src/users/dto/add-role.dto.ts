import { IsString, IsNumber } from 'class-validator';

export class AddRoleDto {
  @IsString({ message: 'Must be a string' })
  readonly value: string;
  @IsNumber({}, { message: 'Must be an integer' })
  readonly userId: number;
}
