import { NextFunction, Request, Response } from "express";
export declare class userService {
    constructor();
    private readonly _userRepo;
    getProfile: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updataProfile: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    follow: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    unFollow: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    searchUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
declare const _default: userService;
export default _default;
//# sourceMappingURL=user.service.d.ts.map