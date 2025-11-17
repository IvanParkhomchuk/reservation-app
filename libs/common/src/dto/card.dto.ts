import { IsCreditCard, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CardDto {
  @IsString()
  @IsNotEmpty()
  cvc: string;

  @IsNumber()
  @Type(() => Number)
  exp_month: number;

  @IsNumber()
  @Type(() => Number)
  exp_year: number;

  @IsCreditCard()
  number: string;
}
