import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    private websocket: WebSocket;
    private uri = 'ws://localhost:8025/websockets/chat';
    private textRecieved: string;


    onConnect() {
        this.websocket = new WebSocket(this.uri);

        this.websocket.onopen = (toSend) => this.onLog(this.textRecieved = ' Websocket online');
        this.websocket.onmessage = (toSend) => this.onLog(this.textRecieved = toSend.data);
        this.websocket.onclose = (toSend) => this.onLog(this.textRecieved = ' websocket offline sad');
        this.websocket.onerror = (toSend) => this.onLog(this.textRecieved = ' websocket has error ' + toSend.target);
    }


    register() {
        this.websocket.send('{\n' +
            '"header":{\n' +
            '  "groupID":1,\n' +
            '  "token":"null",\n' +
            '  "isPrivate":true\n' +
            '},\n' +
            '"body":\n' +
            '  "[register]MrGewurz|daniel.pfeffer@breathless-pictures.at|Daniel14"\n' +
            '}');
    }

    login() {
        this.websocket.send('{\n' +
            '"header":{\n' +
            '  "groupID":1,\n' +
            '  "token":"null",\n' +
            '  "isPrivate":true\n' +
            '},\n' +
            '"body":\n' +
            '  "[login]daniel.pfeffer@breathless-pictures.at|Daniel14"\n' +
            '}');
    }

    create() {
        this.websocket.send('{\n' +
            '"header":{\n' +
            '  "groupID":1,\n' +
            '  "token":"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJNckdld3VyeiJ9._iuI9xjA0tEyl2htJ4rE8Hud8_X-D8-iqafUGzX2eko",\n' +
            '  "isPrivate":true\n' +
            '},\n' +
            '"body":\n' +
            '  "[create]Bunkersquad"\n' +
            '}');
    }

    disband() {
        this.websocket.send('{\n' +
            '"header":{\n' +
            '  "groupID":2,\n' +
            '  "token":"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJNckdld3VyeiJ9._iuI9xjA0tEyl2htJ4rE8Hud8_X-D8-iqafUGzX2eko",\n' +
            '  "isPrivate":true\n' +
            '},\n' +
            '"body":\n' +
            '  "[disband]Bunkersquad"\n' +
            '}');
    }

    onLog(res: string) {
        console.log(res);
    }
}
