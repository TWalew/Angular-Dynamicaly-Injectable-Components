// import { Injectable } from '@angular/core';
// import { LoggedUserService } from '../../auth/services/logged-user.service';
// import { Role, UserInterface } from '../../auth/interfaces/user.interface';
// import { ImpersonateService } from '../../auth/services/impersonate.service';

// @Injectable({
//     providedIn: 'root',
// })
// export class RoleCheckerService {
//     private user: UserInterface;

//     constructor(private loggedUserService: LoggedUserService,
//         private impersonateService: ImpersonateService) {
//         this.loggedUserService.getLoggedUserWithoutUnsubscribe().subscribe(user => {
//             if (user) {
//                 this.user = user;
//             }
//         });
//     }

//     public isGranted(roles: Role | Role[]): boolean {
//         if (Array.isArray(roles)) {
//             for (const role of roles) {
//                 if (this.user.roles.includes(role)) {
//                     return true;
//                 }
//             }

//             return false;

//             // TODO find why it fails
//         }

//         if (roles === Role.ROLE_SUPER_ADMIN && this.user.roles.includes(Role.ROLE_ADMIN)) {
//             return true
//         }

//         return this.user.roles.includes(roles);
//     }

//     public isAdmin(): boolean {
//         return this.isGranted([Role.ROLE_ADMIN, Role.ROLE_SUPER_ADMIN]);
//     }

//     public isSuperAdmin(): boolean {
//         return this.isGranted([Role.ROLE_SUPER_ADMIN]);
//     }

//     public isImpersonating(): boolean {
//         return this.impersonateService.getIsImpersonating().value;
//     }
// }
