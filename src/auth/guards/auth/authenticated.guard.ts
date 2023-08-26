import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
 async canActivate(context: ExecutionContext) {
   const request=context.switchToHttp().getRequest();
// console.log(request.headers) 
return request.IsAuthenticated()
  }
}
