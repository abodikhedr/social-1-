"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.success_response = void 0;
const success_response = ({ res, statusCode, message = "done", data }) => {
    return res.status(statusCode || 200).json({ message, data });
};
exports.success_response = success_response;
//# sourceMappingURL=success.response.js.map