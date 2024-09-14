"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const country_1 = require("../controllers/country");
const router = (0, express_1.Router)();
router.get('/', country_1.allCountries);
exports.default = router;
