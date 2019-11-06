/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5dc27393f1ef4518a537e388
*
* You will get 10% discount for each one of your friends
* 
*/
/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  TO CUSTOMIZE LawControllerGenerated.js PLEASE EDIT ../LawController.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
import Properties from "../../../properties";
import LawModel from "../../../models/GDPR_db/LawModel";
import ErrorManager from "../../../classes/ErrorManager";
import { authorize } from "../../../security/SecurityManager";
import LawController from "../LawController";

const generatedControllers = {
  /**
   * Init routes
   */
  init: router => {
    const baseUrl = `${Properties.api}/law`;
    router.post(baseUrl + "", authorize([]), LawController.create);
    router.delete(baseUrl + "/:id", authorize([]), LawController.delete);
    router.get(baseUrl + "/findByname/:key", authorize([]), LawController.findByname);
    router.get(baseUrl + "/:id", authorize([]), LawController.get);
    router.get(baseUrl + "", authorize([]), LawController.list);
    router.post(baseUrl + "/:id", authorize([]), LawController.update);
  },


  // CRUD METHODS


  /**
  * LawModel.create
  *   @description CRUD ACTION create
  *   @param Law obj Object to insert
  *
  */
  create: async (req, res) => {
    try {
      const result = await LawModel.create(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * LawModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id Law
  *
  */
  delete: async (req, res) => {
    try {
      const result = await LawModel.delete(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * LawModel.findByname
  *   @description CRUD ACTION findByname
  *   @param Objectid key Id of the resource name to search
  *
  */
  findByname: async (req, res) => {
    try {
      const result = await LawModel.findByname(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * LawModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id Law
  *   @returns Law
  *
  */
  get: async (req, res) => {
    try {
      const result = await LawModel.get(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * LawModel.list
  *   @description CRUD ACTION list
  *   @returns ARRAY OF Law
  *
  */
  list: async (req, res) => {
    try {
      const result = await LawModel.list();
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  /**
  * LawModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id Law
  *   @returns Law
  *
  */
  update: async (req, res) => {
    try {
      const result = await LawModel.update(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  // Custom APIs

};

export default generatedControllers;
