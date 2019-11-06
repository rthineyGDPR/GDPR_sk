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
 *  TO CUSTOMIZE LawModelGenerated.js PLEASE EDIT ../LawModel.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
// Database
import Database from "../../../classes/Database_GDPR_db";
import Sequelize from "sequelize";

// Logger
import Logger from "../../../classes/Logger";

const generatedModel = {

  // Start queries
    

  // CRUD METHODS


  /**
  * LawModel.create
  *   @description CRUD ACTION create
  *   @param Law obj Object to insert
  *
  */
  async create(item) {
    let result = await Database.getConnection().models.Law.create(item);    return result;
  },
  
  /**
  * LawModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id Law
  *
  */
  async delete(id) {
    return await Database.getConnection().models.Law.destroy({ where: { _id: id } });
  },
  
  /**
  * LawModel.findByname
  *   @description CRUD ACTION findByname
  *   @param Objectid key Id of the resource name to search
  *
  */
  async findByname(key) {
    return await Database.getConnection().models.Law.findAll({ where: { "name": key } });
  },
  
  /**
  * LawModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id Law
  *   @returns Law
  *
  */
  async get(id) {
    let result = await Database.getConnection().models.Law.findByPk(id);
    return result;
  },
  
  /**
  * LawModel.list
  *   @description CRUD ACTION list
  *   @returns ARRAY OF Law
  *
  */
  async list() { 
    return await Database.getConnection().models.Law.findAll();
      },
  
  /**
  * LawModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id Law
  *   @returns Law
  *
  */
  async update(item) { 
    let result = await Database.getConnection().models.Law.update(item, {
      where: { _id: item._id }
    });
    return result;
  },
  


};

export default generatedModel;