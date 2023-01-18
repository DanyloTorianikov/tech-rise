import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, Self, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { switchMap, takeUntil, timer } from 'rxjs';
import { IUser } from '@interfaces/user.interface';
import { UnsubscribeService } from '@services/unsubscribe.service';
import { UserService } from '@services/user.service';
import { IMessage, IMessageFull, IMessages } from './interfaces/message.interface';
import { SupportService } from './services/support.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
  providers: [UnsubscribeService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SupportComponent implements OnInit {
  @ViewChildren('messages') private messagesList!: QueryList<ElementRef>;
  public messages: IMessages = {};
  public currentUser!: IUser | null;
  public messagesForm!: FormGroup;

  constructor(
    private supportService: SupportService,
    private cdr: ChangeDetectorRef,
    private userService: UserService,
    private fb: FormBuilder,
    @Self() private destroy$: UnsubscribeService
  ) { }

  public ngOnInit(): void {
    this.initGroup();
    this.getMessages();
  }

  public get userIsSupport(): boolean {
    return this.currentUser?.roles?.includes('SUPER_ADMIN')!;
  }

  public sendMessage(index: number, clientId?: string): void {
    const text: string = this.messagesForm.get(clientId || 'messages')!.value;
    this.addMessage(clientId || 'messages', { text, user: this.currentUser! });
    this.supportService.sendMessage(text, clientId || null);
    this.messagesForm.get(clientId || 'messages')!.reset();
    this.scrollToBottom(index);
  }

  private scrollToBottom(index: number): void {
    timer(0).pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.messagesList.toArray()[index].nativeElement.scrollTop = this.messagesList.toArray()[index].nativeElement.scrollHeight;
    });
  }

  private initGroup(): void {
    this.messagesForm = this.fb.group({});
  }

  private addControl(name: string): void {
    this.messagesForm.addControl(name, new FormControl(''));
  }

  private getMessages(): void {
    this.userService.currentUser$.pipe(
      switchMap((user: IUser | null) => {
        this.currentUser = user;
        !this.userIsSupport && this.addControl('messages');
        return this.supportService.messages$;
      }),
      takeUntil(this.destroy$)
    ).subscribe((messageFull: IMessageFull) => {
      const { clientId, ...message } = messageFull;

      if (this.userIsSupport && message?.user?.email === this.currentUser?.email) return;

      if (this.userIsSupport) {
        this.addControl(clientId);
        this.addMessage(messageFull.clientId, message);
      } else {
        this.addMessage('messages', message);
      }
      this.cdr.markForCheck();
    });
  }

  private addMessage(key: string, message: IMessage): void {
    if (this.messages?.[key]?.length) {
      this.messages[key].push(message);
    } else {
      this.messages[key] = [message];
    }
  }

}
