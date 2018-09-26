import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Theme } from '../class/theme';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })

export class ThemeService {

  private apiUrl = 'api/themes';  // URL to web api

  constructor(private http: HttpClient) {}

    /** GET Themes from the server */
    getThemes (): Observable<Theme[]> {
        return this.http.get<Theme[]>(this.apiUrl)
          .pipe(
            tap(Themes => console.log(`fetched Themes`)),
            catchError(this.handleError(`getThemes`, []))
          );
      }

      /** GET theme by id. Return `undefined` when id not found */
      getThemeNo404<Data>(id: number): Observable<Theme> {
        const url = `${this.apiUrl}/?id=${id}`;
        return this.http.get<Theme[]>(url)
          .pipe(
            map(Themes => Themes[0]), // returns a {0|1} element array
            tap(h => {
              const outcome = h ? `fetched` : `did not find`;
              console.log(`${outcome} theme id=${id}`);
            }),
            catchError(this.handleError<Theme>(`getTheme id=${id}`))
          );
      }

      /** GET theme by id. Will 404 if id not found */
      getTheme(id: number): Observable<Theme> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.get<Theme>(url).pipe(
          tap(_ => console.log(`fetched theme id=${id}`)),
          catchError(this.handleError<Theme>(`getTheme id=${id}`))
        );
      }

      /* GET heroes whose name contains search term */
      searchThemes(term: string): Observable<Theme[]> {
        if (!term.trim()) {
          // if not search term, return empty theme array.
          return of([]);
        }
        return this.http.get<Theme[]>(`${this.apiUrl}/?name=${term}`).pipe(
          tap(_ => console.log(`found heroes matching "${term}"`)),
          catchError(this.handleError<Theme[]>(`searchTheme`, []))
        );
      }

      //////// Save methods //////////

      /** POST: add a new theme to the server */
      addTheme (theme: Theme): Observable<Theme> {
        return this.http.post<Theme>(this.apiUrl, theme, httpOptions).pipe(
          tap(() => console.log(`added theme w/ id=${theme.id}`)),
          catchError(this.handleError<Theme>(`addTheme`))
        );
      }

      /** DELETE: delete the theme from the server */
      deleteTheme (theme: Theme | number): Observable<Theme> {
        const id = typeof theme === `number` ? theme : theme.id;
        const url = `${this.apiUrl}/${id}`;

        return this.http.delete<Theme>(url, httpOptions).pipe(
          tap(_ => console.log(`deleted theme id=${id}`)),
          catchError(this.handleError<Theme>(`deleteTheme`))
        );
      }

      /** PUT: update the theme on the server */
      updateTheme (theme: Theme): Observable<any> {
        return this.http.put(this.apiUrl, theme, httpOptions).pipe(
          tap(_ => console.log(`updated theme id=${theme.id}`)),
          catchError(this.handleError<any>(`updateTheme`))
        );
      }

      /**
       * Handle Http operation that failed.
       * Let the app continue.
       * @param operation - name of the operation that failed
       * @param result - optional value to return as the observable result
       */
      private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead

          // TODO: better job of transforming error for theme consumption
          console.log(`${operation} failed: ${error.message}`);

          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }
}
