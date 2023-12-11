// message-receiver.component.ts
import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-receiver',
  template: `
    <h3 class="mt-5">Received messages</h3>
    <ul>
      <li *ngFor="let message of receivedMessages">{{ message }}</li>
    </ul>
  `,
})
export class MessageReceiverComponent {
  receivedMessages: string[] = [];

  constructor(private messageService: MessageService) {
    this.messageService.messageSent.subscribe((message) => {
      this.receivedMessages.push(message);
    });
  }
}
