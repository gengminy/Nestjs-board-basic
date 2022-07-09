import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialDto {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    //영어랑 숫자만 가능하도록 하는 정규식
    @Matches(/^[a-zA-Z0-9]*$/, {
        message: 'password only accepts English and number',
    })
    password: string;
}
