import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { IMessageFull } from '../interfaces/message.interface';

@Injectable()
export class SupportService {
  public messages$ = this.socket.fromEvent<IMessageFull>('receive_message');

  constructor(private socket: Socket) {
    socket.ioSocket['auth'] = { token: localStorage.getItem('token') };
  }

  public sendMessage(message: string, clientId: string | null): void {
    this.socket.emit('message', { data: message, clientId });
  }
}
