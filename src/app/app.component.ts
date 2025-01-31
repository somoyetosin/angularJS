import { Component } from '@angular/core';

@Component({
    selector:   'app-root', //represent customized html tag
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    emoji = ['🎉', '😍', '😜', '👍'];
    activeEmoji: string;

    changeEmoji(){
        this.activeEmoji = this.emoji[Math.floor(Math.random() * this.emoji.length)];
    }
}