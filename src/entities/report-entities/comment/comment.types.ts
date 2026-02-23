import { IsNumber, IsString } from "class-validator";

export class CommentDTO {
    @IsNumber()
    unitId: number;

    @IsString()
    materialId: string;
    
    @IsString()
    date: string;

    @IsNumber()
    type: number;

    @IsNumber()
    recipientUnitId: number;

    @IsString()
    text?: string | null;
}