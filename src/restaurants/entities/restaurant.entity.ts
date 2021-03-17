import { Field, ObjectType } from '@nestjs/graphql';
import { SpawnSyncOptionsWithStringEncoding } from 'child_process';
import { IsBoolean, isBoolean, IsOptional, IsString, Length } from 'class-validator';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Restaurant {

  @Field(is => Number)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(is => String)
  @Column()
  @IsString()
  @Length(5)
  name: string;

  @Field(is => Boolean, { nullable: true })
  @Column({ default: true })
  @IsOptional()
  @IsBoolean()
  isVegan: boolean;

  @Field(type => String, { defaultValue: '강남' })
  @Column()
  @IsString()
  address: string;

}