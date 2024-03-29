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
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { LawService } from '../../services/law.service';
// Import Models
import { Law } from '../../domain/gdpr_db/law';

// START - USED SERVICES
/**
* LawService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id Law
*
* LawService.list
*	@description CRUD ACTION list
*	@returns ARRAY OF Law
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Law
 * @class LawListComponent
 */
@Component({
    selector: 'app-law-list',
    templateUrl: './law-list.component.html',
    styleUrls: ['./law-list.component.css']
})
export class LawListComponent implements OnInit {
    list: Law[];
    search: any = {};
    idSelected: string;
    constructor(
        private lawService: LawService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.lawService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Law to remove
     *
     * @param {string} id Id of the Law to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Law
     */
    deleteItem() {
        this.lawService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
