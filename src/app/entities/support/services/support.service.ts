import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { select, Store } from '@ngrx/store';
import { take } from 'rxjs';
import { selectToken } from '@entities/auth/store/selectors/auth.selector';
import { IAppStore } from '@root-store/reducers/root.reducers';
import { IMessageFull } from '../interfaces/message.interface';

@Injectable()
export class SupportService {
  public messages$ = this.socket.fromEvent<IMessageFull>('receive_message');

  constructor(
    private socket: Socket,
    private store: Store<IAppStore>
  ) {
    this.setToken()
  }

  public sendMessage(message: string, clientId: string | null): void {
    this.socket.emit('message', { data: message, clientId });
  }

  private setToken(): void {
    this.store.pipe(
      take(1),
      select(selectToken)
    ).subscribe((token: string) => {
      this.socket.ioSocket['auth'] = { token };
    })
  }
}
