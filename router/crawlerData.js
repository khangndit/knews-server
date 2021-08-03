import express from 'express';
import {
  crawlerDataPart1,
  crawlerDataPart1SideBar,
} from '../controller/crawlerDataPart1Controller.js';
import {
  crawlerDataPart2,
  crawlerDataPart2NextStep,
} from '../controller/crawlerDataPart2Controller.js';
import {
  crawlerDataPart3,
  crawlerDataPart3NextStep,
} from '../controller/crawlerDataPart3Controller.js';
import {
  crawlerDataPart4,
  crawlerDataPart4NextStep,
} from '../controller/crawlerDataPart4Controller.js';
import { crawlerDataSlideShow } from '../controller/crawlerDataSlideShowController.js';

const router = express.Router();

router.get('/part1', crawlerDataPart1);
router.get('/part1SideBar', crawlerDataPart1SideBar);

router.get('/part2', crawlerDataPart2);
router.get('/part2NextStep', crawlerDataPart2NextStep);

router.get('/part3', crawlerDataPart3);
router.get('/part3NextStep', crawlerDataPart3NextStep);

router.get('/part4', crawlerDataPart4);
router.get('/part4NextStep', crawlerDataPart4NextStep);

router.get('/slideShow', crawlerDataSlideShow);

export default router;
