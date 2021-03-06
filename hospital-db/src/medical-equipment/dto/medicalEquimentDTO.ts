import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsNumber } from "class-validator";

export class MedicalEquipmentDTO {

    /**
     * Equipment name.
     */
    @ApiProperty({
        example: 'Computador',
        description: 'Equipment name.'
    })
    @IsNotEmpty()
    @IsString()
    Name: string;

    /**
     * Medical equipment provider.
     */
    @ApiProperty({
        example: 'Teltron',
        description: 'Medical equipment provider.'
    })
    @IsNotEmpty()
    @IsString()
    Provider: string;

    /**
     * Quantity of units available.
     */
    @ApiProperty({
        example: 5,
        description: 'Quantity of units available.'
    })
    @IsNotEmpty()
    @IsNumber()
    Qty: number;
}