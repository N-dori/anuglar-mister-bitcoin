import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError, from, tap, retry, catchError } from 'rxjs';
import { storageService } from './user-storage.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Move, User } from '../models/contact/user.model';

const ENTITY = 'users'



@Injectable({
    providedIn: 'root'
})
export class UserService {

    private _users = new BehaviorSubject<User[]>([])
    public users$ = this._users.asObservable()
    private loggedInUser!: User
    constructor() {
        // Handling Demo Data, fetching from storage || saving to storage 
        const users = JSON.parse(localStorage.getItem(ENTITY) || 'null')
        if (!users || users.length === 0) {
            localStorage.setItem(ENTITY, JSON.stringify(this._createUsers()))
        }
    }
    public  handelFundsTransfer(move:Move){

        this.loggedInUser =  this.getLoggedinUser()
        if(!this.loggedInUser)return  
        this.loggedInUser.coins -=move.coins
        this.loggedInUser.moves.push(move)
        this.saveLoggedinUser('loggedinUser',this.loggedInUser)
console.log('loggedinUser',this.loggedInUser);

       let  id:any= this.loggedInUser?._id
             const currUser=this.getUserById(id) 
        return from(currUser)
            .pipe(
                tap(updatedUser => {
                    console.log('updatedUser',updatedUser);
                    
                    updatedUser.coins -= move.coins
                    updatedUser.moves.push(move)
                    const users = this._users.value
                    this._users.next(users.map(user => user._id === updatedUser._id ? updatedUser : user))
                }),
                retry(1),
                catchError(this._handleError)
            )
     
    
    }
    public loadUsers() {
        return from(storageService.query(ENTITY))
            .pipe(
                tap(users => {
                    console.log('users in service',users);
                    
                }),
                retry(1),
                catchError(this._handleError)
            )
    }

    public getUserById(id: string): Observable<User> {
        const user = from(storageService.get(ENTITY, id))
        .pipe(catchError(this._handleError))
        return user
    }

    public signup(user:User) {
      this.saveUser(user)
      return user
  }

    public saveUser(user: User) {
        console.log('saveUser',user);
        
        return user._id ? this._updateUser(user) : this._addUser(user)
    }

    public getEmptyUser() {
        return {
            name: '',
            coins: 100,
            moves: [],
        }
    }

    public getEmpyMove () {
        return {
        toId: "",
        to: "",
        at: "", 
        coins: 0,
       }
    }
    private _updateUser(user: User) {
        console.log('user ',user);
        
        return from(storageService.put(ENTITY, user))
            .pipe(
                tap(updatedUser => {
                    const users = this._users.value
                    this._users.next(users.map(user => user._id === updatedUser._id ? updatedUser : user))
                }),
                retry(1),
                catchError(this._handleError)
            )
    }
    public saveLoggedinUser(entityType: string='loggedinUser', user:User) {
        localStorage.setItem(entityType, JSON.stringify(user))
    }
    public getLoggedinUser(entityType: string='loggedinUser') {
        let user:User= JSON.parse(localStorage.getItem(entityType)||'null') 
    return user
    }
    private _addUser(user: User) {
        const newUser = new User(user._id,user.name, user.coins=100, user.moves=[]);
        
        if (typeof newUser.setId === 'function') newUser.setId(this._getRandomId());
        return from(storageService.post(ENTITY, user))
        .pipe(
            tap(newUser => {
                    const users = this._users.value
                    console.log('users',users);
                    
                    this._users.next([...users, newUser])
                }),
                retry(1),
                catchError(this._handleError)
            )
    }


  
    private _createUsers() {
        const user = [
            {
              name: "momo",
              coins: 100,
              moves: []
            },
            {
              name: "kiki",
              coins: 100,
              moves: []
            },
        ]

        return user
    }

    private _handleError(err: HttpErrorResponse) {
        console.log('error in pet service:', err)
        return throwError(() => err)
    }

    private _getRandomId(length = 8): string {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
}

