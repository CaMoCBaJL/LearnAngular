import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, OnDestroy } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BaseInterceptor implements HttpInterceptor, OnDestroy {
    private _destroyed$: Subject<boolean> = new Subject<boolean>();

    constructor() { }

    ngOnDestroy(): void {
        this._destroyed$.next(true);
        this._destroyed$.complete();
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(takeUntil(this._destroyed$));
    }
}