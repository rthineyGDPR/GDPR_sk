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
 *  FOR CUSTOMIZE lawBaseService PLEASE EDIT ../law.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { Law } from '../../domain/gdpr_db/law';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Law.service.ts
 */

/*
 * SCHEMA DB Law
 *
	{
		created_on: {
			type: 'Date'
		},
		modified_on: {
			type: 'Date'
		},
		name: {
			type: 'String',
			required : true
		},
		sub_name: {
			type: 'String',
			required : true
		},
		//RELATIONS
		//EXTERNAL RELATIONS
	}
 *
 */
@Injectable()
export class LawBaseService {

    contextUrl: string = environment.endpoint + '/law';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * LawService.create
    *   @description CRUD ACTION create
    *   @param Law obj Object to insert
    *
    */
    create(item: Law): Observable<Law> {
        return this.http
            .post<Law>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * LawService.delete
    *   @description CRUD ACTION delete
    *   @param ObjectId id Id Law
    *
    */
    remove(id: string): Observable<void> {
        return this.http
            .delete<void>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * LawService.findByname
    *   @description CRUD ACTION findByname
    *   @param Objectid key Id of the resource name to search
    *
    */
    findByName(id: string): Observable<Law[]> {
        return this.http
            .get<Law[]>(this.contextUrl + '/findByname/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * LawService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id Law
    *   @returns Law
    *
    */
    get(id: string): Observable<Law> {
        return this.http
            .get<Law>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * LawService.list
    *   @description CRUD ACTION list
    *   @returns ARRAY OF Law
    *
    */
    list(): Observable<Law[]> {
        return this.http
            .get<Law[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * LawService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id Law
    *   @returns Law
    *
    */
    update(item: Law): Observable<Law> {
        return this.http
            .post<Law>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}