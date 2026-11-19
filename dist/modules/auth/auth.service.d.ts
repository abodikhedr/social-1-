import { type NextFunction, type Request, type Response } from "express";
export declare class AuthService {
    constructor();
    private readonly _userRepo;
    private readonly _redisService;
    signUp: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    resendOtp: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    signupWithGmail: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    confirmOtp: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    signin: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    refreshToken: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>>>;
    forgetPassword: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>>>;
    confirmPasswordOtp: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: AuthService;
export default _default;
//# sourceMappingURL=auth.service.d.ts.map