import { Component, ViewChild, ElementRef } from '@angular/core';
import { ChatService } from './chat.service';
import {io} from 'socket.io-client';
import { Message } from './message';

declare function greenToRed_1(id): any;
declare function redToYellow_1(id): any;
declare function colourChange(id, colour);
declare function canvas_arrow(ctx, x, y, z, a);
declare function canvas_line(ctx, x, y, z, a);

const SOCKET_ENDPOINT = 'localhost:3000';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('c', {static: false}) c: ElementRef;
  newMessage: any;
  socket: any;
  messageList: any [] = [];
  user: any;
  ctx: any;

  paths = {
    0 : [
      {fx : 40, fy : 210, tx: 190, ty: 80},
      {fx : 50, fy : 230, tx: 190, ty: 230},
      {fx : 40, fy : 240, tx: 190, ty: 380}
    ],
    1 : [
      {fx : 230, fy : 80, tx: 370, ty: 80},
      {fx : 230, fy : 230, tx: 370, ty: 230},
      {fx : 230, fy : 380, tx: 370, ty: 380}
    ],
    2 : [
      {fx : 420, fy : 80, tx: 560, ty: 80},
      {fx : 420, fy : 230, tx: 560, ty: 230},
      {fx : 420, fy : 380, tx: 560, ty: 380}
    ],
    3 : [
      {fx : 600, fy : 80, tx: 740, ty: 80},
      {fx : 600, fy : 230, tx: 740, ty: 230},
      {fx : 600, fy : 380, tx: 740, ty: 380}
    ],
    4 : [
      {fx : 790, fy : 80, tx: 925, ty: 80},
      {fx : 790, fy : 230, tx: 925, ty: 230},
      {fx : 790, fy : 380, tx: 925, ty: 380}
    ],
    5 : [
      {fx : 970, fy : 80, tx: 1110, ty: 210},
      {fx : 970, fy : 230, tx: 1110, ty: 220},
      {fx : 970, fy : 380, tx: 1110, ty: 230}
    ]
  };

  constructor(private chatService: ChatService) { }

  sendMessage() {
    const data = { "message": this.newMessage, "name": this.user }
    this.chatService.sendMessage(data);
    this.newMessage = '';
  }
  ngOnInit() {
    this.chatService.getMessages('new-message').subscribe((data) => this.updateMessage(data));
  }

  ngAfterViewInit(): void {
    this.ctx = this.c.nativeElement.getContext('2d');
    this.ctx.beginPath();

    //Column Separate Line
    canvas_line(this.ctx, 100, 500, 100, 50);
    canvas_line(this.ctx, 300, 500, 300, 50);
    canvas_line(this.ctx, 500, 500, 500, 50);
    canvas_line(this.ctx, 700, 500, 700, 50);
    canvas_line(this.ctx, 900, 500, 900, 50);
    canvas_line(this.ctx, 1050, 500, 1050, 50);
    this.ctx.stroke();

    /*canvas_arrow(ctx, 40, 210, 190, 80);
    canvas_arrow(ctx, 50, 230, 190, 230);
    canvas_arrow(ctx, 40, 240, 190, 380);
    canvas_arrow(ctx, 230, 80, 370, 80);

    canvas_arrow(ctx, 230, 230, 370, 230);
    canvas_arrow(ctx, 230, 380, 370, 380);
    //Login to Malware
    canvas_arrow(ctx, 420, 80, 560, 80);
    canvas_arrow(ctx, 420, 230, 560, 230);
    canvas_arrow(ctx, 420, 380, 560, 380);

    //Malware to CC
    canvas_arrow(ctx, 600, 80, 740, 80);
    canvas_arrow(ctx, 600, 230, 740, 230);
    canvas_arrow(ctx, 600, 380, 740, 380);

    //CC to DDoS  
    canvas_arrow(ctx, 790, 80, 925, 80);
    canvas_arrow(ctx, 790, 230, 925, 230);
    canvas_arrow(ctx, 790, 380, 925, 380);

    //DDos to Victim-1
    canvas_arrow(ctx, 970, 80, 1110, 210);

    //Bot to CC
    canvas_line(ctx, 30, 250, 30, 550);
    canvas_line(ctx, 30, 550, 760, 550);
    canvas_arrow(ctx, 760, 550, 760, 530);

    //CC to CC
    canvas_line(ctx, 740, 510, 720, 510);
    canvas_line(ctx, 720, 90, 720, 510);
    canvas_arrow(ctx, 720, 90, 740, 80);
    canvas_arrow(ctx, 720, 220, 740, 220);
    canvas_arrow(ctx, 720, 380, 740, 380);

    //Loader to Malware
    canvas_line(ctx, 560, 510, 540, 510);
    canvas_line(ctx, 540, 90, 540, 510);
    canvas_arrow(ctx, 540, 90, 560, 80);
    canvas_arrow(ctx, 540, 220, 560, 220);
    canvas_arrow(ctx, 540, 380, 560, 380);

    //DDos to Victim-2
    canvas_arrow(ctx, 970, 220, 1110, 220);

    //DDos to Victim-3
    canvas_arrow(ctx, 970, 380, 1110, 230);*/

    
  }

  updateMessage(data:Message) {
    const base = '' + data.id + data.attackStage;
    let path: any;

    switch (base) {
      case '00' :
        // console.log('start');
        // colourChange('cb1', 'blue');
        break;

      case '11' :
        path = this.paths[0][0];
        canvas_arrow(this.ctx, path.fx, path.fy, path.tx, path.ty);
        this.convertColors(data.isDetection, 'cg1');
        break;

      case '12' :
        path = this.paths[1][0];
        canvas_arrow(this.ctx, path.fx, path.fy, path.tx, path.ty);
        this.convertColors(data.isDetection, 'cg2');
        break;

      case '13' :
        path = this.paths[2][0];
        canvas_arrow(this.ctx, path.fx, path.fy, path.tx, path.ty);
        this.convertColors(data.isDetection, 'cg3');
        break;

      case '14' :
        path = this.paths[3][0];
        canvas_arrow(this.ctx, path.fx, path.fy, path.tx, path.ty);
        this.convertColors(data.isDetection, 'cg4');
        break;

      case '15' :
        path = this.paths[4][0];
        canvas_arrow(this.ctx, path.fx, path.fy, path.tx, path.ty);
        path = this.paths[5][0];
        canvas_arrow(this.ctx, path.fx, path.fy, path.tx, path.ty);
        this.convertColors(data.isDetection, 'cg5');
        break;

      default :
        console.log('end');
    }

    this.ctx.stroke();
  }

  convertColors(isPredicted: boolean, id: any) {
    if(isPredicted) {
      redToYellow_1(id);
    } else {
      greenToRed_1(id);
    }
  }
}