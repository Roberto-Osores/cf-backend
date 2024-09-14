"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allCountries = void 0;
const allCountries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Aasd");
        const response = yield fetch("https://countryapi.io/api/all?apikey=hC53vFpZrlHzU4jJGxby0sA5X0XGtzEnH9yME00K");
        if (!response.ok) {
            throw new Error("Hubo un error");
        }
        const data = yield response.json();
        console.log(data);
    }
    catch (error) {
        console.error(error);
    }
});
exports.allCountries = allCountries;
