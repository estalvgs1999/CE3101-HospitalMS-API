import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsEnum, IsDate, IsDateString, IsISO8601 } from "class-validator";
import { ISexType } from "./type-sex.enum";
import { Address } from "src/address/address.entity";
import { Pathology } from "src/pathology/pathology.entity";

export class PatientDTO {

    /**
     * Patient first name.
     */
    @ApiProperty({
        example: 'Teltron',
        description: 'Patient first name.'
    })
    @IsNotEmpty()
    @IsString()
    Name: string;

    /**
     * Patient lastName.
     */
    @ApiProperty({
        example: 'Teltron',
        description: 'Patient lastName.'
    })
    @IsNotEmpty()
    @IsString()
    LastName: string;

    /**
     * Day of Birth.
     */
    @ApiProperty({
        example: 'Teltron',
        description: 'Day of Birth.'
    })
    @IsNotEmpty()
    @IsISO8601()
    DoB: Date;

    /**
     * Patient sex.
     */
    @ApiProperty({
        example: ISexType.female,
        description: 'Patient sex.'
    })
    @IsNotEmpty()
    @IsEnum(ISexType)
    Sex: ISexType;

    /**
     * Patient phone number.
     */
    @ApiProperty({
        example: 'Teltron',
        description: ' Patient phone number.'
    })
    @IsNotEmpty()
    @IsString()
    Phone: string;

    /**
     * Postal Code.
     */
    @ApiProperty({
        example: 'Teltron',
        description: 'Postal Code.'
    })
    @IsNotEmpty()
    @IsString()
    address: Address;

    /**
     * Address detail.
     */
    @ApiProperty({
        example: 'Teltron',
        description: 'Address detail.'
    })
    @IsNotEmpty()
    @IsString()
    OtherSigns: string;
     /**
     * password detail.
     */
    @ApiProperty({
        example: 'Teltron',
        description: 'password detail.'
    })
    @IsNotEmpty()
    @IsString()
    Password: string;
    /**
     * Pathologies of the patient
     */
    @ApiProperty({
        example: 'Teltron',
        description: 'Pathologies of the patient'
    })
    pathologies: Pathology[];
}