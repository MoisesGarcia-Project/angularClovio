// message.service.ts
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messageSent = new EventEmitter<string>();

  sendMessage(message: string) {
    // Lógica de envío de mensaje aquí
    this.messageSent.emit(message);
  }
}
