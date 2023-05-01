import { UserService } from "../services/user.service";
import { inject } from '@angular/core'
export function authGuard() {
    const user = inject(UserService).getLoggedinUser()
}