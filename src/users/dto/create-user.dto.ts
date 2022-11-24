import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, IsEmail } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.ru', description: 'Unique user email' })
  @IsString({ message: 'Must be a string' })
  @IsEmail({}, { message: 'Incorrect email' })
  readonly email: string;
  @ApiProperty({ example: 'password', description: 'Unique user email' })
  @IsString({ message: 'Must be a string' })
  @Length(4, 16, { message: 'Not less than 4 not more than 16' })
  readonly password: string;
}
