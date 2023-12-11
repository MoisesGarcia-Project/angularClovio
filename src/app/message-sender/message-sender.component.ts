// message-sender.component.ts
import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-sender',
  template: `
    <h3 class="mt-5">Send messages</h3>
    <input class="form-control" [(ngModel)]="newMessage" />
    <button class="btn btn-primary mt-3" (click)="sendMessage()">Submit message</button>
  `,
})
export class MessageSenderComponent {
  newMessage = '';

  constructor(private messageService: MessageService) {}

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messageService.sendMessage(this.newMessage);
      this.newMessage = ''; // Limpiar el campo después de enviar el mensaje
    }
  }
}
